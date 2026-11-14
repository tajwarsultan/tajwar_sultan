---
title: Embeddings and vector databases, without the hype
description: What an embedding is, how similarity search works, and whether you need a dedicated vector database or just Postgres.
date: 2026-11-14
tags: Embeddings, Vector databases
---

Two questions come up on almost every AI project. What is an embedding, really? And do we need a special database for it? Here are the short answers and the reasoning behind them.

## What an embedding is

An embedding model reads a piece of text and returns a long list of numbers, often several hundred to a few thousand of them. Texts with similar meaning get lists that point in a similar direction. "How do I reset my password" and "I forgot my login" land close together, even though they share almost no words.

Closeness is usually measured with cosine similarity, which compares the direction of two vectors and ignores their length. That is all "semantic search" is: embed the query, then find the stored vectors that point the same way.

Two practical rules follow:

- Use the same model for documents and queries. Vectors from different models are not comparable.
- If you change the model, you re-embed everything. Plan for that from the start by keeping the original text.

## How the search stays fast

Comparing a query against every stored vector is fine for a few thousand rows and too slow for millions. Vector indexes solve this with approximate nearest-neighbour search. The most common index type, HNSW, builds a graph you can walk to find close neighbours quickly. You give up a little accuracy for a large gain in speed, and you can tune that trade.

## Do you need a dedicated vector database?

Often, no. If your application already runs on Postgres, the `pgvector` extension adds a vector column type, similarity operators and HNSW indexes. A query looks like ordinary SQL:

```sql
SELECT id, content
FROM chunks
WHERE tenant_id = $1
ORDER BY embedding <=> $2
LIMIT 5;
```

The benefit is everything around the vectors. Your chunks sit beside your users, permissions and tenants, so filtering by customer is a normal `WHERE` clause, backups cover everything, and there is one fewer service to run.

A dedicated vector database earns its place when you have very large collections, heavy query load, or need features your main database lacks. That is a real situation, but it is a later one for most products.

## What to check before you choose

- **Filtering.** Can you restrict a search to one tenant or one document type without it getting slow?
- **Updates and deletes.** Documents change. Removing stale vectors has to be easy.
- **Hybrid search.** Can it combine keyword and vector results? You will want that sooner than you expect.
- **Cost at your size.** Estimate the number of chunks, not documents.

My default is boring on purpose: start in Postgres, measure, and move only when the numbers tell you to.
