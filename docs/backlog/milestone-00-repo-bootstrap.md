# Milestone 00 — Repository bootstrap

## Goal

Turn this documentation repository into an initial application repository without implementing scanning yet.

## Scope

- Initialize Tauri v2 + React + TypeScript + Rust.
- Preserve existing docs.
- Add formatting and linting setup.
- Add basic test commands.
- Add minimal app shell.

## Out of scope

- filesystem scanning;
- duplicate hashing;
- cache cleanup;
- Trash actions;
- signing/notarization.

## Codex prompt

Use `docs/codex/prompts/00-repo-bootstrap.md`.

## Acceptance criteria

- `README.md` still describes the project accurately.
- App can launch locally.
- Basic CI commands are documented.
- No destructive filesystem actions exist.
- No telemetry exists.
