# AGENTS.md — Monocle repository instructions

These instructions are intended for OpenAI Codex and other coding agents working in this repository.

## Project summary

Monocle is a safe, local-first macOS disk analyzer built with Tauri v2, React, TypeScript, and Rust.

The MVP must:

1. list exact duplicate files;
2. list the top 100 largest files by disk usage;
3. analyze allowlisted cache folders and suggest safe cleanup.

## Hard safety rules

- Never implement permanent deletion.
- Never use `sudo` or privileged helpers in the MVP.
- Never implement automatic cleanup.
- Never follow symlinks by default.
- Never expose unrestricted filesystem access to the frontend.
- Never delete inside `/System`, protected macOS paths, app bundles, or non-allowlisted locations.
- All destructive actions must move files to macOS Trash and require explicit confirmation.
- Before moving anything to Trash, revalidate path, size, device/inode when available, and safety category.
- Duplicate cleanup must keep at least one copy in every duplicate group.
- Cache cleanup must operate only on documented allowlisted paths.

## Architecture rules

- Frontend: React + TypeScript + Vite.
- Desktop shell: Tauri v2.
- Backend: Rust commands and modules.
- Storage: local SQLite for scan state and results.
- Duplicate hashing: staged algorithm using size grouping, partial hash, and full BLAKE3 hash.
- Frontend must call only controlled Tauri commands such as `start_scan`, `cancel_scan`, `get_large_files`, `get_duplicate_groups`, `get_cache_recommendations`, `reveal_in_finder`, and `move_items_to_trash`.

## Documentation-first workflow

Before implementing a task, read:

1. `docs/12-codex-execution-guide.md`
2. the relevant milestone file in `docs/backlog/`
3. `docs/03-safety-model.md`
4. `docs/13-acceptance-criteria.md`

If the implementation requires a design decision not covered by docs, create or update an ADR in `docs/adr/`.

## Pull request expectations

Every PR should include:

- Summary of what changed.
- Files/modules touched.
- Safety impact.
- Manual test steps.
- Automated checks run.
- Any known limitations.

## Review guidelines

When reviewing code for this repository, prioritize P0/P1 findings for:

- permanent deletion or unsafe filesystem mutation;
- unbounded filesystem access from frontend;
- symlink traversal mistakes;
- missing metadata revalidation before Trash actions;
- cleanup outside allowlisted cache categories;
- privacy leaks, telemetry, or network access that was not explicitly approved;
- macOS permission assumptions that would fail without Full Disk Access.

## Done means

A task is done only when:

- the relevant acceptance criteria pass;
- safety invariants still hold;
- tests or documented manual checks cover the change;
- user-facing behavior is clear and reversible where possible;
- the diff is small enough to review.
