---
title: How to build a small AI agent that automates real work
description: A working agent in about sixty lines of JavaScript, with tools, a loop, a schedule and the guardrails that make it safe to leave running.
date: 2026-11-06
art: automation
tags: Agents, Automation
---

Most writing about agents is either theory or a framework tour. This is neither. It is one small agent, written in plain JavaScript, that does a job people actually pay for: it reads a support inbox, labels each message and drafts a reply for a human to approve.

It is small on purpose. Once you have seen the whole thing on one screen, every larger agent is the same shape with more tools.

## Pick a job that suits an agent

An agent earns its place when the steps change from one case to the next. Inbox triage fits: one email needs a label and nothing else, another needs a reply, a third needs both and a follow-up question. If your job is the same five steps every time, write five steps instead. I covered that trade-off in [AI agents and tool calling](/blog/ai-agents-and-tool-calling).

## Step 1: describe the tools

A tool is a name, a description and a schema for its input. The description is what the model reads to decide when to use it, so write it for a new colleague.

```js
const tools = [
  {
    name: 'list_unread',
    description: 'List unread support emails. Returns id, sender, subject and the first 500 characters of each.',
    input_schema: {
      type: 'object',
      properties: { limit: { type: 'integer', description: 'How many to return, at most 20.' } },
      required: ['limit'],
    },
  },
  {
    name: 'label_message',
    description: 'Add one label to a message. Use "billing", "bug", "sales" or "other".',
    input_schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        label: { type: 'string', enum: ['billing', 'bug', 'sales', 'other'] },
      },
      required: ['id', 'label'],
    },
  },
  {
    name: 'draft_reply',
    description: 'Save a draft reply for a person to review. This never sends anything.',
    input_schema: {
      type: 'object',
      properties: { id: { type: 'string' }, body: { type: 'string' } },
      required: ['id', 'body'],
    },
  },
]
```

Notice what is missing: there is no `send_email` tool. The agent can only draft. That one decision removes the worst thing it could do.

## Step 2: write the real functions

The model never runs anything. It asks, and your code decides. Each tool maps to an ordinary function that talks to your mail provider or database.

```js
const handlers = {
  list_unread: ({ limit }) => inbox.listUnread(Math.min(limit, 20)),
  label_message: ({ id, label }) => inbox.addLabel(id, label),
  draft_reply: ({ id, body }) => inbox.saveDraft(id, body),
}
```

## Step 3: the loop

This is the whole agent. Call the model, run the tools it asked for, send the results back, and repeat until it stops asking.

```js
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic() // reads ANTHROPIC_API_KEY from the environment

export async function runAgent(task, { maxSteps = 15 } = {}) {
  const messages = [{ role: 'user', content: task }]

  for (let step = 0; step < maxSteps; step++) {
    const response = await client.beta.messages.create({
      model: 'claude-opus-5-5',
      max_tokens: 16000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      system: 'You triage a support inbox. Label every unread message, and draft a reply only when you can answer from the message itself. Never invent order details or prices.',
      tools,
      messages,
    })

    messages.push({ role: 'assistant', content: response.content })

    // Anything other than a tool request means the run is over:
    // finished, cut off, or declined.
    if (response.stop_reason !== 'tool_use') return response

    const results = []
    for (const block of response.content) {
      if (block.type !== 'tool_use') continue
      try {
        const handler = handlers[block.name]
        if (!handler) throw new Error(`Unknown tool: ${block.name}`)
        const output = await handler(block.input)
        results.push({ type: 'tool_result', tool_use_id: block.id, content: JSON.stringify(output) })
      } catch (error) {
        results.push({ type: 'tool_result', tool_use_id: block.id, content: error.message, is_error: true })
      }
    }
    messages.push({ role: 'user', content: results })
  }

  throw new Error(`Stopped after ${maxSteps} steps without finishing`)
}
```

A few details matter more than they look:

- **All tool results go back in one message.** The model may ask for several tools at once. Answer them together.
- **Errors go back to the model too.** With `is_error: true` it can read what went wrong and try something else, instead of your script crashing.
- **The step limit is not optional.** Without it, a confused agent loops until your budget runs out.
- **The `fallbacks` line** lets the API retry on another model if a request is declined, so one refusal does not stop the whole run.

The same loop works with any provider that supports tool calling. Only the request and response field names change.

## Step 4: run it on a schedule

Automation means nobody presses the button. Put the call in a script and let a scheduler run it.

```js
// triage.js
import { runAgent } from './agent.js'

const result = await runAgent('Triage the unread support emails.')
console.log(result.stop_reason)
```

```bash
# crontab: every 30 minutes on weekdays
*/30 * * * 1-5 cd /srv/triage && node triage.js >> triage.log 2>&1
```

A scheduled job in your CI or your host's cron feature does the same thing. The agent does not care how it was started.

## Step 5: the guardrails

Before this touches a real inbox:

- **Keep the dangerous actions out of reach.** Drafts, not sends. Labels, not deletes.
- **Make every tool safe to repeat.** Labelling a message twice should change nothing.
- **Cap the spend.** A step limit per run and a small `limit` on what it reads.
- **Log every call.** Tool name, input, result. When it does something odd, you need to see why.
- **Assume the emails are hostile.** A message can say "ignore your instructions". That is [prompt injection](/blog/prompt-injection-for-web-developers), and the defence is the first point on this list.

## Where to go from here

Add a tool, and the agent can do one more thing. Swap the inbox for a spreadsheet, a ticket queue or a deploy log, and you have a different agent with the same sixty lines in the middle. Start with one job, watch the logs for a week, and widen its reach only when the drafts stop needing corrections.
