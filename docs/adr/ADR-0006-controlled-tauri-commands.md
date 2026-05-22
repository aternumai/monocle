# ADR-0006: Use controlled Tauri commands instead of unrestricted frontend filesystem access

## Status

Accepted.

## Context

The frontend should not be able to freely read or mutate arbitrary filesystem paths. Monocle’s safety model depends on backend validation.

## Decision

Expose only explicit Tauri commands for scanning, querying, revealing, and safe Trash actions.

## Consequences

Positive:

- clearer security boundary;
- centralized path validation;
- easier testing of safety rules.

Tradeoffs:

- more backend command boilerplate;
- frontend flexibility is intentionally reduced.
