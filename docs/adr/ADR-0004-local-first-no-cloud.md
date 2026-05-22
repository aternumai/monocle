# ADR-0004: Local-first with no cloud dependency

## Status

Accepted for MVP.

## Context

Scan results contain sensitive file paths, filenames, metadata, and potentially hashes.

## Decision

Monocle will not upload scan data. The MVP has no telemetry, sync, or cloud account.

## Consequences

Positive:

- stronger privacy posture;
- simpler compliance story;
- better open-source trust.

Tradeoffs:

- no remote crash analytics;
- no aggregated product metrics;
- support debugging relies on user-provided logs/screenshots.
