# Codex execution guide

This repository is intentionally optimized for OpenAI Codex.

## Codex assets in this repo

- `AGENTS.md`: always-on repository instructions.
- `.agents/skills/monocle-mvp-implementation/SKILL.md`: implementation workflow skill.
- `.agents/skills/monocle-safety-review/SKILL.md`: safety review workflow skill.
- `docs/codex/prompts/`: ready-to-run task prompts.
- `docs/backlog/`: milestone definitions.
- `docs/13-acceptance-criteria.md`: done criteria.

## Recommended Codex workflow

### 1. Plan before implementation

For each milestone, ask Codex to produce a short plan before editing files.

Use this prompt shape:

```text
Goal: implement milestone X.
Context: read these docs: ...
Constraints: obey AGENTS.md and safety model.
Done when: acceptance criteria from the milestone pass.
First produce a short plan. Then implement only the first task.
```

### 2. Keep PRs small

Do not ask Codex to build the entire MVP in one task.

Recommended PR boundaries:

- app scaffold;
- command type definitions;
- scanner traversal;
- top 100 ranking;
- duplicate partial hash;
- duplicate full hash;
- cache analyzer catalog;
- safety validation;
- Trash action;
- release engineering.

### 3. Run checks after every code task

Once code exists, each task should end with:

```text
Run formatting, linting, typecheck, Rust tests, and frontend tests where available.
Summarize failures instead of hiding them.
```

### 4. Use review loops

After a PR-sized change:

```text
Review the diff against AGENTS.md, docs/03-safety-model.md, and docs/13-acceptance-criteria.md.
List P0/P1 issues only. Do not bikeshed style unless it affects correctness or safety.
```

### 5. Do not weaken safety rules to pass tests

If a test conflicts with safety rules, update the test or architecture. Do not weaken the safety model without an ADR.

## First implementation sequence

1. `docs/codex/prompts/00-repo-bootstrap.md`
2. `docs/codex/prompts/01-tauri-react-shell.md`
3. `docs/codex/prompts/02-command-contracts.md`
4. `docs/codex/prompts/03-storage-schema.md`
5. `docs/codex/prompts/04-scanner-traversal.md`
6. `docs/codex/prompts/05-large-files.md`
7. `docs/codex/prompts/06-duplicate-finder.md`
8. `docs/codex/prompts/07-cache-analyzer.md`
9. `docs/codex/prompts/08-safe-trash-actions.md`
10. `docs/codex/prompts/09-release-readiness.md`

## Repository workflow

Use `develop` as the active integration branch. Merge to `main` when documentation decisions are consolidated and after each completed implementation milestone.

Use pnpm for frontend package management.

Initial development uses local checks instead of required CI. Once code exists, run the narrowest relevant local checks during each task and the full local suite before a milestone merge.

## Prompt template

```text
Goal:
[one specific task]

Context:
- AGENTS.md
- docs/03-safety-model.md
- docs/backlog/[milestone].md
- docs/[relevant design doc].md

Constraints:
- Do not implement out-of-scope features.
- Do not weaken safety rules.
- Keep the diff small.
- Add or update tests when code exists.

Done when:
- [acceptance criteria]
- checks pass or failures are clearly documented.

Now produce a concise plan, implement the task, run checks, and summarize the diff.
```
