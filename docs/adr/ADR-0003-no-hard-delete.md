# ADR-0003: Never hard-delete files in MVP

## Status

Accepted.

## Context

Filesystem cleanup tools can cause irreversible harm if they delete the wrong files.

## Decision

Monocle will not expose permanent deletion in the MVP. Destructive actions must move selected items to macOS Trash.

## Consequences

Positive:

- safer user experience;
- easier trust story;
- recovery possible through Trash.

Tradeoffs:

- space may not be recovered until the user empties Trash;
- some items may fail to move to Trash;
- UI must explain the distinction clearly.
