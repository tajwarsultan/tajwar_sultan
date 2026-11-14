---
title: Streaming LLM responses in Next.js
description: Why streaming matters for AI features, with a route handler and a client reader you can adapt, plus the production details that are easy to miss.
date: 2026-11-14
tags: Next.js, LLMs
---

A model can take ten seconds or more to finish a long answer. If the user stares at a spinner for all of it, the feature feels broken. If the first words appear within a second and the rest follows as it is written, the same wait feels fine. Streaming does not make the model faster. It changes what the wait feels like, and that is most of the battle.

## The server side

A Next.js route handler can return a web `ReadableStream`. You pull tokens from your model provider and push them to the browser as they arrive.

```js
// app/api/chat/route.js
export async function POST(request) {
  const { messages } = await request.json()
  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      try {
        // streamCompletion wraps your provider's SDK and yields text as it arrives
        for await (const text of streamCompletion(messages, request.signal)) {
          controller.enqueue(encoder.encode(text))
        }
        controller.close()
      } catch (error) {
        controller.error(error)
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}
```

Every major provider's SDK has a streaming mode that gives you an async iterator, so `streamCompletion` is usually a few lines. Keep the API key on the server. The browser should only ever talk to your own route.

## The client side

In the browser, read the response body piece by piece and update state as you go.

```js
async function ask(messages, onText, signal) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
    signal,
  })
  if (!response.ok || !response.body) throw new Error('Request failed')

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let answer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    answer += decoder.decode(value, { stream: true })
    onText(answer)
  }
  return answer
}
```

The `{ stream: true }` option matters. A multi-byte character can be split across two network chunks, and without it you get broken characters in languages that use them.

## The details that bite in production

- **A stop button.** Pass an `AbortController` signal to `fetch`, and forward `request.signal` to the provider call on the server so you stop paying for tokens nobody will read.
- **Errors mid-stream.** The status code has already been sent as 200 by the time something fails. Decide how the client shows a half-finished answer, and offer a retry.
- **Partial markdown.** A code fence or a table arrives in pieces. Render with a parser that tolerates incomplete input, or the layout will jump around.
- **Scrolling.** Follow the new text only while the user is at the bottom. If they scrolled up to read, leave them there.
- **Accessibility.** Announcing every token to a screen reader is unusable. Announce when the answer is complete.
- **Structured output.** If you need JSON, either wait for the whole response or use a format designed to be parsed as it arrives. Half a JSON object is not valid.
- **Limits.** Check that your host does not buffer responses and that its function timeout is longer than your slowest answer. Add rate limiting. An open endpoint that spends money on every call will be found.

For anything richer than plain text, such as tool calls or several message types, send structured events instead of raw text. Server-sent events are the usual choice. For a first version, the plain stream above is enough to make an AI feature feel alive.
