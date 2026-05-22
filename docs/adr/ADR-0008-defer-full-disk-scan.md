# ADR-0008: Defer full-disk scan from MVP

## Status

Accepted.

## Context

Full-disk scanning increases permission complexity, user trust burden, and safety review scope. macOS may block protected locations without Full Disk Access, and broad scans can make users think the app is complete even when important paths were inaccessible.

## Decision

The MVP does not include a full-disk scan mode.

Monocle will support:

- user-selected folders;
- documented home-folder presets;
- documented developer and cache presets when accessible.

Full Disk Access copy remains useful for explaining permission errors, but the MVP should not ask users to grant it for a broad full-disk scan. A future ADR is required before implementing full-disk scanning.

## Consequences

Positive:

- simpler MVP permission story;
- lower risk of overbroad filesystem access;
- easier manual testing and safety review.

Tradeoffs:

- users looking for whole-disk inventory must scan selected folders or presets;
- product copy must avoid implying complete disk coverage.
