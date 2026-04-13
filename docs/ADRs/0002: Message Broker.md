# 0002 - Message Broker: BullMQ Selection

## Status

**Accepted** ✅

## Context

We are building an event-driven system where multiple services need to communicate asynchronously.
We need a reliable way to handle background jobs, event publishing, and subscription mechanisms.
Internal Node.js events are insufficient as they are in-memory only and not distributed.

## Decision

We select **BullMQ** as our standard message broker and queue system.

## Consequences

- **Positive:**
  - Reliable persistence: Jobs are stored in Redis and survive restarts.
  - Simplicity: Leverages Redis infrastructure which is lightweight and fast.
  - Pattern Fit: Perfectly supports "Service A emits, Service B listens" logic.
- **Negative:**
  - Redis becomes a critical dependency; if it fails, messaging stops.

## Governance

- All inter-service async communication must go through BullMQ queues.
- Direct fire-and-forget HTTP calls are discouraged for non-critical flows.

## Notes

- We are not using BullMQ just for queues, but as the central nervous system for our events.
