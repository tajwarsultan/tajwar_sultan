---
title: AI agents and tool calling: what they are and when not to build one
description: How tool calling works, what turns it into an agent, and the guardrails an agent needs before it touches anything real.
date: 2026-10-08
art: agents
tags: Agents, LLMs
---

"Agent" has become a word for almost anything with a language model in it. The useful definition is narrower: a model that runs in a loop, decides which tools to call, looks at the results, and keeps going until the job is done.

## Tool calling first

A model cannot check an order status or send an email. It can only produce text. Tool calling is the convention that bridges the gap.

You describe each tool to the model with a name, a description and a schema for its arguments:

```json
{
  "name": "get_order_status",
  "description": "Look up the current status of a customer order by its ID.",
  "input_schema": {
    "type": "object",
    "properties": { "order_id": { "type": "string" } },
    "required": ["order_id"]
  }
}
```

When the model decides it needs the tool, it replies with a structured request instead of prose. Your code runs the real function and sends the result back. The model then continues with that result in hand. The model never executes anything. Your application does, which means your application decides what is allowed.

The description matters more than people expect. It is the only thing the model has to judge when to use a tool, so write it the way you would brief a new colleague.

## From tool calling to an agent

Put that exchange in a loop and you have an agent: call the model, run whatever tools it asked for, feed back the results, repeat until it says it has finished. This lets it handle tasks where the steps are not known in advance, such as investigating a bug or researching a question across several sources.

## When not to build one

If you already know the steps, write the steps. "Extract the fields, validate them, save the record, send a confirmation" is a workflow. Fixed code with a model call inside one or two of the steps will be cheaper, faster, easier to test and far more predictable than an agent working it out from scratch each time.

Reach for an agent when the path really does vary from one request to the next and no fixed sequence covers it.

## Guardrails before it touches anything real

- **Limit the loop.** Cap the number of steps and the total spend per task.
- **Give the least access that works.** Read-only tools by default. A tool that can delete things should be rare.
- **Ask before irreversible actions.** Sending, paying, deleting and publishing should wait for a person to confirm.
- **Make tools safe to retry.** Agents repeat calls. A second identical request should not create a second order.
- **Return useful errors.** "Order not found, IDs look like ORD-12345" lets the model correct itself. A bare 500 does not.
- **Log every step.** When something odd happens, you need to see what it decided and why.

An agent is as trustworthy as the tools you give it and the limits you put around them.
