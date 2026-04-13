# 0005 - Offline First Architecture

## Status

**Accepted** ✅

## Context

The application must remain fully functional even without network connectivity.
Users need to read, create, and modify data offline, with changes syncing later.

## Decision

We adopt an **Offline First** architectural style.

- **Storage:** Dual database approach.
  - Local: SQLite / IndexedDB.
  - Cloud: PostgreSQL.
- **Schema:** Table structures are mirrored exactly between local and cloud.
- **Data Scope:** Local database stores only data relevant to the current user.

## Consequences

- **Positive:**
  - Application feels instant and reliable regardless of network quality.
  - Reduced load on the server as data is read locally.
- **Negative:**
  - Requires complex synchronization logic to keep both databases consistent.

## Governance

- UI must clearly indicate when data is "Pending Sync" or "Synced".
- All features must be designed to work offline first.

## Notes

- This is a core selling point of the application.
