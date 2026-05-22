# Milestone 05 — Duplicate finder

## Goal

Find exact duplicate files using staged hashing.

## Scope

- group by logical size;
- partial hash candidates;
- full BLAKE3 hash remaining candidates;
- create duplicate groups;
- compute wasted bytes;
- recommend keep candidate;
- frontend duplicate group UI.

## Acceptance criteria

- Non-identical same-size files are not grouped as duplicates.
- Full hash is required before duplicate group emission.
- Hashing is cancellable.
- UI prevents selecting all files in a group for cleanup.
- No Trash action required yet.
