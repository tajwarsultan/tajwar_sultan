---
title: MCP explained for web developers
description: What the Model Context Protocol is, how servers and clients fit together, and when it is worth exposing your product through one.
date: 2026-11-14
art: mcp
tags: MCP, Agents
---

If you have connected a language model to an API, you have written the same glue more than once: describe the tool, parse the model's request, call the API, format the result. Then you did it again for the next application, slightly differently. The Model Context Protocol, MCP, exists to stop that repetition.

## What it is

MCP is an open standard, introduced by Anthropic in late 2024, for connecting AI applications to outside tools and data. The comparison people reach for is a USB port: build the connector once and anything that speaks the protocol can plug in.

There are two sides:

- **Servers** expose capabilities. A server might wrap your database, your issue tracker or your own product's API.
- **Clients** live inside AI applications such as chat apps, coding assistants and agent frameworks. They connect to servers and make those capabilities available to the model.

## What a server can offer

- **Tools.** Functions the model can call, each with a name, a description and an input schema. This is the part most people use.
- **Resources.** Data the application can read, such as files or records.
- **Prompts.** Reusable prompt templates the user can pick.

Messages are JSON-RPC. A server can run locally and talk over standard input and output, or run remotely and talk over HTTP. If you have built a REST API, none of this will feel foreign.

## Why it is worth knowing

Without a shared protocol, every pairing of AI application and service needs its own integration. With one, a single server for your product works in every client that supports MCP, and a single client can use every server. The work goes from one integration per pair to one per side.

For a web developer there are two practical uses:

- **Using servers.** Give the assistant or agent you are building access to existing systems without writing each integration by hand.
- **Building one.** Let your customers' AI tools work with your product. For a SaaS company this is becoming what a public API was ten years ago.

## Designing a good server

- **Design for the model, not the endpoint list.** Do not mirror forty REST routes. Offer a handful of tools that match real tasks, such as "find a customer" or "create an invoice".
- **Write descriptions carefully.** They are how the model chooses a tool.
- **Keep results small.** Return the fields that matter, not the whole record.
- **Treat it as a public API.** Authenticate every request, scope access to the user's own data, and validate inputs. The caller is a model acting for a user, and it can be tricked.

## When to skip it

If one application of yours calls one API of yours, plain tool calling in your own code is less to build and maintain. MCP pays off when the same capability needs to work across several AI applications, or when other people will be the ones connecting.
