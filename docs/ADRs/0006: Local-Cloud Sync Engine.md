# 0006 - Sync Engine: MiniSync Implementation

## Status

**Accepted** ✅

## Context

We need synchronization between Local and Cloud databases.
We evaluated existing libraries like PouchDB and WatermelonDB.
Observation: These tools are often heavy, complex, act as "Black Boxes", and struggle with real-world scenarios.

We must decide: Use a library, or build our own?

## Decision

We will **NOT** use third-party sync libraries.
Instead, we will implement our own lightweight synchronization engine named **"MiniSync"**.

- **Logic:** Based on timestamps (`last_modified`) and flags (`is_deleted`).
- **Conflict Rule:** Last Write Wins.
- **Scope:** Minimalist design, only implementing features strictly required by our domain.

## Consequences

- **Positive:**
  - Full control and transparency: No hidden logic.
  - Performance: Lighter bundle size, faster execution.
  - Maintainability: Easy to debug and modify.
- **Negative:**
  - Initial development time estimated at **~1 to 2 weeks**.

## Governance

- All data access must go through the MiniSync wrapper to ensure metadata consistency.
- Direct SQL queries bypassing MiniSync are forbidden.

## Notes

- Time investment is justified by performance, long-term reliability and ownership.
