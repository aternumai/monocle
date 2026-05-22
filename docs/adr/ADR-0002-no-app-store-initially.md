# ADR-0002: Do not target the Mac App Store initially

## Status

Accepted for MVP planning.

## Context

A disk analyzer requires broad filesystem visibility. The Mac App Store sandbox would complicate folder access, bookmarks, review, and cleanup behavior.

## Decision

Initial distribution will be outside the Mac App Store.

The first public development release may be source/dev-build only. A signed and notarized DMG is required before distributing a binary alpha to testers or broader public users.

## Consequences

Positive:

- faster MVP;
- simpler filesystem access model;
- Full Disk Access can be explained as optional advanced mode;
- fewer review constraints.

Tradeoffs:

- users must trust a downloaded app;
- signing and notarization are still required before binary distribution;
- distribution and updates need separate planning.
