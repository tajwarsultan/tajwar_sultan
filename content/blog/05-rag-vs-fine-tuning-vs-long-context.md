---
title: RAG, fine-tuning or a long prompt? How I choose
description: Three ways to make a language model useful for your product, what each is good at, and a simple order to try them in.
date: 2026-09-24
art: paths
tags: LLMs, Architecture
---

"Should we fine-tune a model on our data?" is one of the first questions teams ask when they start an AI feature. Usually the answer is no, or at least not yet. There are three main ways to adapt a model to your product, and they solve different problems.

## Put it in the prompt

Modern models accept very long prompts. If the knowledge you need is a few documents, include them, write clear instructions, add a couple of examples, and you are done.

- **Good for:** small or medium, fairly stable knowledge. Prototypes. Anything where you want to ship this week.
- **Costs:** you pay for those tokens on every request, and answers get slower as prompts grow. Prompt caching, where your provider offers it, reduces both for the parts that repeat.
- **Watch for:** very long prompts where one important line gets overlooked among thousands.

## Retrieve it

RAG looks up the relevant passages per question and includes only those.

- **Good for:** large or frequently changing knowledge, per-customer data, and anywhere users need to see sources.
- **Costs:** a pipeline to build and maintain: chunking, embeddings, an index, re-indexing when documents change.
- **Watch for:** retrieval quality. If the right passage is not found, the answer will be wrong with full confidence.

## Fine-tune it

Fine-tuning continues training a model on your own examples.

- **Good for:** behaviour, not facts. A consistent tone, a strict output format, a narrow classification task, or matching a larger model's quality on one job with a smaller, cheaper one.
- **Costs:** you need hundreds to thousands of good examples, a way to evaluate the result, and you repeat the work when the base model is replaced.
- **Watch for:** using it to teach facts. Fine-tuned knowledge is hard to update and impossible to cite. When the price list changes, you want to edit a document, not retrain a model.

## The order to try them

- Start with a good prompt and the documents included directly. Build a small test set of real questions.
- If the knowledge is too large or changes too often, add retrieval.
- If the model knows the right things but will not behave consistently, and better prompting has not fixed it, consider fine-tuning.

They also combine. A common mature setup is retrieval for the facts and a fine-tuned or carefully prompted model for the style.

The most common mistake is skipping step one. Teams build a retrieval pipeline or a training run for a problem that a clearer prompt and three examples would have solved.
