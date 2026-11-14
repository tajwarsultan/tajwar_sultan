---
title: What RAG actually is, and when you need it
description: Retrieval-augmented generation in plain terms. How the pipeline works, where it breaks, and how to tell if your product needs one.
date: 2026-11-14
art: rag
tags: RAG, LLMs
---

A language model only knows what was in its training data and what you put in the prompt. It has never seen your company handbook, your support tickets or the contract a customer uploaded this morning. Retrieval-augmented generation, or RAG, is the fix for that: before the model answers, you look up the relevant text and hand it over along with the question.

That is the whole idea. Everything else is detail about doing the lookup well.

## The pipeline, step by step

There are two phases. The first happens once per document, the second on every question.

**Indexing**

- Split each document into chunks, usually a few paragraphs each.
- Turn every chunk into an embedding, a list of numbers that captures its meaning.
- Store the chunks and their embeddings in a database that can search by similarity.

**Answering**

- Embed the user's question the same way.
- Find the chunks whose embeddings sit closest to it.
- Put those chunks in the prompt with an instruction such as "answer using only the context below".
- Send it to the model and return the answer, ideally with links to the sources.

## Where it goes wrong

When a RAG system gives a bad answer, the model is rarely the problem. Retrieval is. If the right paragraph never reaches the prompt, no model can use it. The usual causes:

- Chunks cut in the wrong place, so the answer is split across two of them.
- The question uses different words from the document. "How do I cancel?" against a page titled "Subscription termination".
- Too many chunks retrieved, so the useful one is buried.
- Stale data, because nobody re-indexed after the document changed.

So when I debug one of these, I read the retrieved chunks before I read the answer. If the chunks are wrong, I fix retrieval. Only if they are right and the answer is still wrong do I touch the prompt.

## Do you need it?

You need RAG when the answers live in documents the model has not seen, those documents change, and there are too many to paste into every prompt. Support bots, internal knowledge search and "chat with your files" features all fit.

You probably do not need it when the knowledge fits comfortably in the prompt. A twenty-page policy can simply be included every time. That is simpler, and simple systems fail less.

## A sensible first version

Start small: one document type, a plain chunker, one embedding model, Postgres with `pgvector`, the top five chunks, and sources shown under every answer. Collect thirty real questions and check the answers by hand. That list of questions will teach you more about what to improve than any architecture diagram.
