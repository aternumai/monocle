---
name: monocle-gitflow
description: Use when working on Monocle branch, commit, merge, or milestone delivery flow. Applies the repository's develop-first workflow, local-check policy, and milestone merge discipline.
---

# Monocle Gitflow Skill

## Branch Model

- `main` contains consolidated documentation and completed milestone work.
- `develop` is the active integration branch.
- Milestone or task branches should be short-lived and branch from `develop`.
- Use the `codex/` prefix for Codex-created branches unless the user asks for a different name.

## Merge Cadence

- Merge `develop` into `main` after documentation decisions are consolidated.
- During implementation, merge completed milestone work to `main` after local checks and review are complete.
- Keep changes PR-sized and milestone-scoped.

## Commit Policy

- If files are modified in this repository, commit the completed work before finishing.
- Do not include unrelated user changes in commits.
- Use concise commit messages that name the milestone or documentation decision.

## Validation Policy

- CI is not required during initial documentation consolidation.
- Run local checks that exist for the current repository state.
- Before app scaffold exists, documentation-only changes can be validated with `git diff --check` and targeted file review.
- After scaffold exists, prefer the commands in `docs/codex/validation-commands.md`.

## Safety

- Never use destructive Git commands unless explicitly requested.
- Do not rewrite shared history unless the user explicitly approves the exact operation.
