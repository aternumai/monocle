# Milestone 02 — Command contracts and storage schema

## Goal

Define shared types, command contracts, and SQLite schema/migrations.

## Scope

- TypeScript types for frontend command results.
- Rust types for scan models.
- SQLite schema from `docs/05-data-model.md`.
- Stub commands for scan lifecycle and result queries.

## Acceptance criteria

- Types serialize/deserialize cleanly.
- Storage initializes locally.
- Stub commands return realistic empty results.
- Tests cover safety classification basics.
