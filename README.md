# Monocle

**Monocle** is a planned open-source, local-first macOS disk analyzer built with Tauri, React, TypeScript, and Rust.

The product goal is not to be a magical “cleaner”. The goal is to help people understand what is taking space on their Mac, then make safe, explicit decisions.

## MVP scope

The MVP has three core features:

1. **Exact duplicate finder**: list duplicate files discovered on selected filesystem roots.
2. **Large file explorer**: list the top 100 files from largest to smallest by disk space used.
3. **Cache analyzer**: estimate space used by known cache locations and suggest safe cleanup candidates.

## Product principles

- Local-first and privacy-preserving.
- No cloud dependency.
- No automatic deletion.
- No permanent deletion.
- No `sudo`.
- No Mac App Store distribution at the start.
- Destructive actions must move files to the macOS Trash and require explicit confirmation.
- The user must always see the full path and expected impact before any cleanup action.

## Repository status

This ZIP is a **documentation-only MVP planning repository**. It intentionally contains no application source code yet.

It is designed so a developer or OpenAI Codex can turn the documentation into an implementation step by step.

## Recommended implementation stack

- Tauri v2
- React + TypeScript + Vite
- Rust backend commands
- SQLite for local scan results
- BLAKE3 for duplicate hashing
- pnpm for frontend package management
- Controlled Tauri commands only; no unrestricted filesystem access from the frontend

Initial MVP target: macOS 13+.

## Suggested first Codex command

From the `develop` branch, start with:

```text
Read AGENTS.md, docs/12-codex-execution-guide.md, and docs/backlog/milestone-00-repo-bootstrap.md.
Create the initial Tauri v2 + React + TypeScript + Rust project skeleton for Monocle.
Do not implement scanning yet. Keep this PR limited to repository bootstrap, app shell, formatting, and test/lint commands.
```

## Documentation map

- [`docs/00-product-brief.md`](docs/00-product-brief.md) — product positioning and constraints.
- [`docs/01-mvp-scope.md`](docs/01-mvp-scope.md) — exact MVP and non-goals.
- [`docs/02-architecture.md`](docs/02-architecture.md) — recommended system architecture.
- [`docs/03-safety-model.md`](docs/03-safety-model.md) — deletion, Trash, and validation rules.
- [`docs/04-macos-permissions-distribution.md`](docs/04-macos-permissions-distribution.md) — Full Disk Access, signing, notarization, and distribution.
- [`docs/07-scanner-algorithms.md`](docs/07-scanner-algorithms.md) — traversal, top files, duplicates, and cache analyzer algorithms.
- [`docs/12-codex-execution-guide.md`](docs/12-codex-execution-guide.md) — how to run this project with OpenAI Codex.
- [`docs/backlog/`](docs/backlog/) — milestone-by-milestone implementation tasks.
- [`docs/codex/prompts/`](docs/codex/prompts/) — ready-to-use Codex prompts.
- [`AGENTS.md`](AGENTS.md) — durable repository instructions for Codex.
- [`.agents/skills/`](.agents/skills/) — optional Codex skills for implementation and safety review.

## License

Monocle uses the MIT license unless a future ADR changes the open-source strategy.
