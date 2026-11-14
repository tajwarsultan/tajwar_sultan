---
title: How to test an LLM feature before your users do
description: A practical approach to evals: a small golden set, cheap automatic checks, model-graded scoring, and running it all on every change.
date: 2026-11-14
art: evals
tags: Evals, LLMs
---

With ordinary code, a change either passes the tests or it does not. With a language model, you edit one sentence of a prompt, try three questions, they look better, and you ship. A week later someone notices that a different kind of question now gets worse answers. Nothing told you, because nothing was checking.

Evals are how you stop working that way. They sound academic. In practice they are just tests for output that is not exactly the same every time.

## Start with a golden set

Collect thirty to fifty real inputs. Pull them from logs, support tickets or the people who will use the feature. Include the awkward ones: vague questions, questions with no answer in your data, and things users should not be asking at all.

For each, write down what a good response looks like. Not necessarily the exact words, but the facts it must contain and anything it must not say.

This list is the most valuable thing you will build. It is also the part people skip.

## Check the cheap things with code

Plenty can be verified without any model at all:

- Is the output valid JSON that matches the schema?
- Does it cite a source that exists in the retrieved context?
- Is it within the length limit, in the right language?
- Does it avoid the things on your banned list?
- Did it refuse when the question was out of scope?

These checks are fast, free and never disagree with themselves. Write as many as you can.

## Grade the rest with a model

For qualities such as "is this answer correct given the reference?" you can ask a second model to act as a judge. It works well enough to be useful, if you are careful:

- Ask one narrow question per grader, with a pass or fail answer, not a score out of ten.
- Give it the reference answer and the criteria in plain language.
- Read a sample of its verdicts yourself and compare. If you disagree with the judge often, fix the judge before trusting it.

## For RAG, test retrieval separately

Score the two halves on their own. For retrieval: did the passage that holds the answer appear in the top results? For generation: given the right passages, was the answer faithful to them? When you only measure the final answer, you cannot tell which half to fix.

## Make it routine

- Run the set on every prompt, model or retrieval change, and keep the scores.
- When a user reports a bad answer, add that case to the set. It should never come back unnoticed.
- Track cost and latency beside quality. A change that improves answers and doubles the bill is a decision, not a win.

None of this needs a platform to begin with. A script, a JSON file of cases and a spreadsheet of results will carry a team a long way.
