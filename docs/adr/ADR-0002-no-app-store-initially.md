# ADR-0002: Do not target the Mac App Store initially

## Status

Accepted for MVP planning.

## Context

A disk analyzer requires broad filesystem visibility. The Mac App Store sandbox would complicate folder access, bookmarks, review, and cleanup behavior.

## Decision

Initial distribution will be outside the Mac App Store as a signed and notarized DMG.

## Consequences

Positive:

- faster MVP;
- simpler filesystem access model;
- Full Disk Access can be explained as optional advanced mode;
- fewer review constraints.

Tradeoffs:

- users must trust a downloaded app;
- signing and notarization are still required for a good macOS experience;
- distribution and updates need separate planning.
