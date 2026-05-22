# ADR-0005: Use SQLite for scan result storage

## Status

Accepted for MVP planning.

## Context

Scans may produce many file entries and duplicate groups. Results should survive app restarts and support pagination.

## Decision

Use local SQLite for scan state, file entries, duplicate groups, cache recommendations, and audit logs.

## Consequences

Positive:

- reliable local persistence;
- simple querying and pagination;
- easy audit log storage.

Tradeoffs:

- schema migrations must be managed;
- scan retention policy needed;
- database location and cleanup must be documented.
