# Milestone 03 — Scanner engine

## Goal

Implement cancellable selected-folder traversal.

## Scope

- normalize roots;
- skip symlinks by default;
- collect metadata;
- estimate allocated size when available;
- report progress events;
- record permission errors;
- persist file entries.

## Out of scope

- duplicate full hashing;
- Trash actions;
- cache cleanup actions.

## Acceptance criteria

- Scan selected folder.
- Progress events emitted.
- Cancellation works.
- Permission errors are recorded.
- Symlinks are skipped by default.
- Protected paths are marked non-actionable.
