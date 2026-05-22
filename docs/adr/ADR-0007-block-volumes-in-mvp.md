# ADR-0007: Block /Volumes cleanup in MVP

## Status

Accepted.

## Context

External and mounted volumes can contain user data, network shares, backup disks, or app-managed storage with different safety expectations from the local home folder. Monocle's MVP safety model should avoid surprising behavior on mounted volumes.

## Decision

The MVP blocks destructive actions in or under `/Volumes`.

Selected-folder scanning of external volumes is not part of the MVP. A future ADR may allow scanning explicitly selected user volumes after defining:

- scope boundaries for mounted volumes;
- metadata and symlink revalidation behavior;
- UI warnings for external, removable, network, and backup volumes;
- tests for volume-specific edge cases.

## Consequences

Positive:

- reduces destructive-action risk in MVP;
- keeps the safety model simple;
- avoids accidental cleanup on backup or network volumes.

Tradeoffs:

- users cannot use Monocle as a full external-disk analyzer in the MVP;
- future support requires a dedicated design pass.
