---
title: RAG in JavaScript, end to end: from a document to a streamed answer
description: The full pipeline in one stack. Chunk and embed in Node.js, store vectors in Postgres with pgvector, search from a Next.js route and stream the answer to the browser.
date: 2026-11-13
art: jsstack
tags: RAG, JavaScript
---

You do not need Python to build retrieval-augmented generation. Every part of it runs happily in JavaScript: a Node script to load your documents, a Next.js route to answer questions, and a few lines in the browser to show the answer as it arrives.

This article walks through all of it. If RAG itself is new to you, read [what RAG actually is](/blog/what-is-rag) first.

## The parts

- **A vector database.** Here, Postgres with the `pgvector` extension.
- **An embedding model**, which turns text into a list of numbers. Voyage AI, OpenAI and Cohere all offer one over a simple API.
- **A language model** to write the answer.
- **Node.js** for the ingest script and the API route.
- **The browser** for the question box and the streamed reply.

There are two flows. Ingestion runs when documents change. Answering runs on every question.

## Step 1: the table

One table holds every chunk, its source and its embedding. The vector size must match your embedding model's output.

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE chunks (
  id         bigserial PRIMARY KEY,
  tenant_id  text NOT NULL,
  source     text NOT NULL,
  content    text NOT NULL,
  embedding  vector(1024) NOT NULL
);

CREATE INDEX ON chunks USING hnsw (embedding vector_cosine_ops);
```

The `tenant_id` column is there from day one. In any product with more than one customer, every search must be limited to the right one.

## Step 2: split the document

Cut on paragraphs and keep a little overlap, so an answer that straddles two chunks is still found. This version counts characters, which is close enough to start with.

```js
// lib/chunk.js
export function chunk(text, { size = 1200, overlap = 200 } = {}) {
  const chunks = []
  let current = ''

  for (const paragraph of text.split(/\n{2,}/)) {
    if (current && current.length + paragraph.length > size) {
      chunks.push(current.trim())
      current = current.slice(-overlap)
    }
    current += '\n\n' + paragraph
  }
  if (current.trim()) chunks.push(current.trim())
  return chunks
}
```

How you cut matters more than most people expect. There is more on that in [chunking for RAG](/blog/chunking-for-rag).

## Step 3: embed and store

`embed()` is a thin wrapper around your embedding provider. It takes an array of strings and returns an array of vectors. Send chunks in batches, not one request each.

```js
// scripts/ingest.js
import fs from 'node:fs/promises'
import pg from 'pg'
import { chunk } from '../lib/chunk.js'
import { embed } from '../lib/embed.js'

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL })

export async function ingest(path, tenantId) {
  const text = await fs.readFile(path, 'utf8')
  const pieces = chunk(text)

  // Start clean so an updated document does not leave stale chunks behind
  await db.query('DELETE FROM chunks WHERE tenant_id = $1 AND source = $2', [tenantId, path])

  for (let i = 0; i < pieces.length; i += 64) {
    const batch = pieces.slice(i, i + 64)
    const vectors = await embed(batch)

    for (let j = 0; j < batch.length; j++) {
      await db.query(
        'INSERT INTO chunks (tenant_id, source, content, embedding) VALUES ($1, $2, $3, $4::vector)',
        [tenantId, path, batch[j], JSON.stringify(vectors[j])]
      )
    }
  }
}
```

pgvector accepts a vector written as a JSON array, which is why `JSON.stringify` is all the conversion you need.

## Step 4: search

To answer a question, embed it with the same model and ask Postgres for the nearest chunks. The `<=>` operator is cosine distance, so smaller means closer.

```js
// lib/search.js
export async function search(db, question, tenantId, limit = 5) {
  const [vector] = await embed([question])

  const { rows } = await db.query(
    `SELECT id, source, content
       FROM chunks
      WHERE tenant_id = $1
      ORDER BY embedding <=> $2::vector
      LIMIT $3`,
    [tenantId, JSON.stringify(vector), limit]
  )
  return rows
}
```

## Step 5: the API route

The route ties it together: find the passages, put them in the prompt, and stream the model's answer back.

```js
// app/api/ask/route.js
import Anthropic from '@anthropic-ai/sdk'
import { db } from '@/lib/db'
import { search } from '@/lib/search'

const client = new Anthropic()

export async function POST(request) {
  const { question } = await request.json()
  const tenantId = await getTenantId(request) // from your own auth, never from the request body

  const passages = await search(db, question, tenantId)
  const context = passages.map((p, i) => `[${i + 1}] (${p.source})\n${p.content}`).join('\n\n')

  const stream = client.beta.messages.stream({
    model: 'claude-opus-5-5',
    max_tokens: 16000,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system:
      'Answer using only the numbered context. Cite passages like [1]. If the context does not contain the answer, say you do not know.',
    messages: [{ role: 'user', content: `Context:\n${context}\n\nQuestion: ${question}` }],
  })

  const encoder = new TextEncoder()
  const body = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        }
        controller.close()
      } catch (error) {
        controller.error(error)
      }
    },
  })

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      // The sources travel in a header so the page can list them beside the answer
      'X-Sources': encodeURIComponent(JSON.stringify(passages.map((p) => p.source))),
    },
  })
}
```

The `fallbacks` line lets the API retry on another model if a request is declined. Three things in this route are doing real work: the tenant comes from your auth, the prompt tells the model to admit when it does not know, and the passages are numbered so the answer can cite them.

## Step 6: the browser

Read the response as it streams and update the page with each piece.

```js
async function ask(question, onText) {
  const response = await fetch('/api/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  })
  if (!response.ok || !response.body) throw new Error('Request failed')

  const sources = JSON.parse(decodeURIComponent(response.headers.get('X-Sources') ?? '%5B%5D'))
  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let answer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    answer += decoder.decode(value, { stream: true })
    onText(answer)
  }
  return { answer, sources }
}
```

The production details for this half, such as a stop button and errors mid-stream, are in [streaming LLM responses in Next.js](/blog/streaming-llm-responses-nextjs).

## Other vector databases

Postgres with pgvector is my default because the vectors sit beside the rest of your data, and Supabase and Neon both offer it hosted. It is not the only choice:

- **Pinecone**: fully managed, nothing to run, with a JavaScript client.
- **Qdrant** and **Weaviate**: open source, self-hosted or cloud, strong on filtering.
- **Chroma**: light and quick to set up, good for prototypes.
- **MongoDB Atlas Vector Search**: sensible if your data already lives in MongoDB.

The code above changes in two places when you switch: the insert and the search. Everything else stays the same. There is more on choosing in [embeddings and vector databases](/blog/embeddings-and-vector-databases).

## What to add next

This is a complete first version. In rough order of payoff:

- **A test set.** Thirty real questions with the passage that answers each. Without it you are guessing. See [how to test an LLM feature](/blog/evaluating-llm-features).
- **Keyword search beside vector search**, then a reranker. Both are covered in [hybrid search and reranking](/blog/hybrid-search-and-reranking).
- **Re-indexing.** Run ingest whenever a document changes, on a webhook or a schedule.
- **Rate limiting** on the route, because every call costs money.

Get the plain version working end to end first. It is easier to improve a pipeline you can see running than to design a perfect one on paper.
