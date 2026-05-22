# Codex workspace

This folder contains execution assets for using OpenAI Codex on Monocle.

## Use order

1. Read `AGENTS.md`.
2. Read `docs/12-codex-execution-guide.md`.
3. Choose a milestone from `docs/backlog/`.
4. Use the matching prompt in `docs/codex/prompts/`.
5. After implementation, use `docs/codex/review-rubric.md`.

## Recommended cadence

One Codex task should produce one PR-sized change.

Avoid prompts like:

```text
Build the whole app.
```

Prefer prompts like:

```text
Implement the top-100 ranking backend and tests only. Do not change duplicate finder or Trash actions.
```
