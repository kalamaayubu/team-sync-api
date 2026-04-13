# 0003 - Web Server: NGINX Usage

## Status

**Accepted** ✅

## Context

Even for a small-scale application, we require security, clean URLs, SSL/TLS termination, and static file serving.
We evaluated if running without a reverse proxy was feasible, but decided security and professionalism cannot be sacrificed for size.

## Decision

We will use **NGINX** as our front-end web server and reverse proxy.

## Consequences

- **Positive:**
  - Handles HTTPS/SSL certificates easily.
  - Provides a clean separation between internet and application logic.
  - High performance serving static content directly.
  - Acts as an additional security layer.
- **Negative:**
  - Adds one more component to configure and maintain.

## Governance

- NGINX configuration must be kept minimal.
- Load balancing features are disabled for now and will be re-evaluated only if scaling is required.

## Notes

- "Small app" does not mean "unsecure app". NGINX provides essentials that are worth the setup cost.
