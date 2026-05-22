---
name: monocle-gitflow
description: Use when working on Monocle branch, commit, merge, or milestone delivery flow. Applies the repository's develop-first workflow, local-check policy, and milestone merge discipline.
---

# Monocle Gitflow Skill

## Branch Model

- `main` contains released versions only.
- `develop` is the active integration branch.
- Every repository change must be made on a short-lived `feat/*` or `fix/*` branch created from `develop`.
- Use `feat/*` for new behavior, documentation workflow updates, and planned improvements.
- Use `fix/*` for bug fixes, regressions, or corrective follow-up work.

## Merge Cadence

- Push each completed `feat/*` or `fix/*` branch to GitHub and open a pull request targeting `develop`.
- Merge completed milestone and task work through pull requests into `develop` after local checks and review are complete.
- Open a pull request from `develop` to `main` only when preparing a new version release.
- Keep changes PR-sized and milestone-scoped.

## Commit Policy

- If files are modified in this repository, commit the completed work before finishing.
- Do not include unrelated user changes in commits.
- Use Conventional Commit messages in the form `feat(scope): message` or `fix(scope): message`.
- Keep the scope concise and tied to the touched area, for example `feat(gitflow): require pr workflow`.

## Validation Policy

- CI is not required during initial documentation consolidation.
- Run local checks that exist for the current repository state.
- Before app scaffold exists, documentation-only changes can be validated with `git diff --check` and targeted file review.
- After scaffold exists, prefer the commands in `docs/codex/validation-commands.md`.

## Safety

- Never use destructive Git commands unless explicitly requested.
- Do not rewrite shared history unless the user explicitly approves the exact operation.
