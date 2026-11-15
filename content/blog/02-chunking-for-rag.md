---
title: Chunking for RAG: the unglamorous step that decides your answers
description: How to split documents so retrieval finds the right passage. Sizes, overlap, structure and the mistakes that quietly ruin answers.
date: 2026-09-02
art: chunking
tags: RAG, Retrieval
---

Most teams spend their time choosing a model and a vector database, then split their documents with whatever default the tutorial used. That is backwards. How you cut the text decides what can be found, and what cannot be found cannot be answered.

## Why chunks exist at all

An embedding squeezes a piece of text into one vector. Embed a whole fifty-page manual and that vector is an average of everything in it, which matches nothing in particular. Embed a single sentence and it loses the context that made it mean something. Chunks are the compromise: small enough to be about one thing, large enough to stand alone.

## Three ways to split

**Fixed size with overlap.** Cut every N tokens and repeat a little of the previous chunk at the start of the next. It is crude and it works surprisingly often. A few hundred tokens with ten to twenty percent overlap is a reasonable place to begin.

**By structure.** Split on headings, paragraphs, list items or code blocks, and only fall back to a size limit when a section runs long. For documentation, policies and anything written with headings, this is usually better, because the author already told you where one topic ends.

**By meaning.** Compare neighbouring sentences and cut where the topic shifts. It costs more to run and is harder to debug. I would only reach for it after the simpler options have been measured and found lacking.

## Details that matter more than the method

- **Keep the heading with the text.** A chunk that says "It must be renewed every two years" is useless without knowing what "it" is. Prefix each chunk with its document title and section heading.
- **Store metadata.** Source, page, date, product, language. You will want to filter by these later, and you cannot add them cheaply after the fact.
- **Never cut a table or a code block in half.** Treat them as single units.
- **Retrieve small, read big.** Search over small chunks for precision, then pass the model the surrounding section for context. This parent and child pattern fixes a lot of "the answer was half there" problems.

## How to know if it is working

Write down twenty or thirty questions real users would ask, and for each one note which passage holds the answer. Run retrieval and count how often that passage shows up in the top five results. Change one thing, such as chunk size, and count again.

It takes an afternoon, and it replaces opinions with a number. That number usually moves far more when you change the chunking than when you swap the model.
