# Testing strategy

## Test levels

### Rust unit tests

Cover:

- path safety classification;
- protected path detection;
- duplicate grouping logic;
- top 100 heap logic;
- cache allowlist matching;
- metadata revalidation decisions.

### Rust integration tests

Use temporary directories to test:

- duplicate detection;
- large file ranking;
- symlink skipping;
- permission-like errors where feasible;
- scan cancellation.

### Frontend unit tests

Cover:

- table rendering;
- duplicate group selection rules;
- confirmation modal disabled states;
- cache recommendation badges.

### End-to-end smoke tests

After app implementation:

- start app;
- choose test folder;
- run scan;
- confirm large files display;
- confirm duplicate groups display;
- reveal in Finder action does not crash;
- Trash action is blocked without explicit confirmation.

## Fixture plan

Create a test fixture generator later with:

```text
fixtures/
  large-files/
  duplicates/
  caches/
  symlinks/
  protected-path-simulation/
```

## Safety test cases

Mandatory cases:

- selecting all files in duplicate group is blocked;
- changed file metadata blocks Trash action;
- symlink target is not followed;
- protected path is not actionable;
- non-allowlisted cache path is informational only;
- cancelled scan stops hashing work;
- permission denied is recorded, not fatal.

## Manual release checks

Before any public DMG:

- run on clean macOS user account;
- scan Downloads and Documents;
- scan folder with duplicates;
- scan folder with symlinks;
- scan without Full Disk Access;
- verify permission error copy;
- verify Gatekeeper behavior;
- verify app can be removed cleanly.
