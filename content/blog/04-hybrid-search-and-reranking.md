---
title: Hybrid search and reranking: two upgrades that fix most RAG retrieval
description: Why vector search alone misses exact terms, how to combine it with keyword search, and what a reranker adds.
date: 2026-11-14
art: hybrid
tags: RAG, Search
---

Vector search is good at meaning and bad at exact strings. Ask it about error code `E-4012`, a part number or a person's surname and it will happily return passages that are about roughly the same topic and do not contain the thing you asked for. Keyword search has the opposite problem: it finds the exact string and misses a paraphrase.

Use both.

## Hybrid search

Run two searches for every query:

- A keyword search, typically BM25 or your database's full-text search, which scores documents by matching terms.
- A vector search over embeddings, which scores by meaning.

Then merge the two result lists. The scores are on different scales, so you cannot simply add them. The common answer is reciprocal rank fusion, which ignores the scores and uses positions instead. Each result gets `1 / (k + rank)` from every list it appears in, with `k` usually set to 60, and the totals are sorted.

```js
function fuse(lists, k = 60) {
  const scores = new Map()
  for (const list of lists) {
    list.forEach((id, index) => {
      scores.set(id, (scores.get(id) ?? 0) + 1 / (k + index + 1))
    })
  }
  return [...scores.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id)
}
```

A passage that ranks well in both lists rises to the top. One that ranks well in only one still gets through. It is a dozen lines of code and it reliably helps.

## Reranking

Embedding search is fast because the query and each document are embedded separately and compared afterwards. That same separation makes it rough. A reranker is a slower, more careful model that reads the query and one candidate passage together and scores how well the passage answers the query.

The pattern has two stages:

- Retrieve widely. Take the top 30 to 50 candidates from hybrid search.
- Rerank narrowly. Score those candidates with the reranker and keep the best five.

You pay some latency for the second stage, so measure it. In return, the passages that reach the prompt are much more likely to be the right ones, and you can send fewer of them, which cuts prompt size and cost.

## The order I add things in

- Plain vector search, with a set of test questions to measure against.
- Keyword search and rank fusion.
- A reranker over the fused results.
- Query rewriting, only if questions are vague or depend on earlier turns in a conversation.

Measure after each step. If a step does not move your numbers, take it out again. Every extra stage is something else to run, pay for and debug.
