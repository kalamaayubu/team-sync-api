# 0004 - Logging & Monitoring Stack

## Status

**Accepted** ✅

## Context

We need visibility into system health. Logs must be structured for machine reading, and we require a dashboard view and alerting capability.

## Decision

- **Logger:** Use **Pino** for all logging.
- **Transport:** Send logs directly to **Loki**.
- **Visualization:** Use **Grafana** as the single pane of glass.
- **Alerting:** Configure Grafana to send notifications via **Email**.

## Consequences

- **Positive:**
  - High performance logging with minimal overhead.
  - Centralized logs that are easy to search and debug.
  - Proactive alerts via email when things go wrong.
- **Negative:**
  - Requires running Loki and Grafana instances.

## Governance

- `console.log` is forbidden. All logging must use the Pino instance.
- Every log entry must be tagged with the service name.

## Notes

- Flow: `Service` → `Pino` → `Loki` → `Grafana` → `Email`.
