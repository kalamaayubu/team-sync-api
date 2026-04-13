# 0001 - Architectural Style: Event Driven Architecture

## Status

**Accepted** ✅

## Context

We are designing a system that needs to be responsive, reliable, and capable of working offline.
We asked ourselves: Should we build it the traditional way (Request/Response) or use Events?

Traditional approach means:

- Service A calls Service B directly and waits.
- If Service B is slow or down, everything fails.
- Tight coupling between components.

We needed a style that supports loose coupling, background processing, and reliability.

## Decision

We choose **Event Driven Architecture** as the fundamental style for this system.

- **Publish/Subscribe:** Services emit events when something happens ("User Created", "Data Updated").
- **Listeners:** Other services subscribe and react when they are ready.
- **Decoupling:** Services do not know about each other directly. They only know about the events.
- **Foundation:** This decision is the base upon which BullMQ and our Sync logic are built.

## Consequences

- **Positive:**
  - High responsiveness: User actions return quickly.
  - Resilience: If one service fails, the event is stored and retried later.
  - Flexibility: Easy to add new features just by adding a new subscriber.
  - Perfect fit for Offline capabilities and background sync.
- **Negative:**
  - Flow of control is harder to follow mentally (it's asynchronous).
  - Requires a reliable message broker (which we have).

## Governance

- Whenever possible, prefer emitting events over direct method calls or synchronous HTTP requests.
- The UI layer should never wait for background jobs to finish before responding to the user.

## Notes

- This is the "Big Picture" decision. Most of other decisions such as (BullMQ, MiniSync) flows from here.
