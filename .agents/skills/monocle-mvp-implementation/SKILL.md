---
name: monocle-mvp-implementation
description: Use this skill when implementing a Monocle MVP milestone or task from docs/backlog or docs/codex/prompts. Do not use for unrelated projects.
---

# Monocle MVP implementation skill

## Required reading

Before editing files, read:

1. `AGENTS.md`
2. `docs/12-codex-execution-guide.md`
3. the relevant `docs/backlog/` milestone
4. `docs/03-safety-model.md`
5. `docs/13-acceptance-criteria.md`

## Workflow

1. Restate the task in one paragraph.
2. Identify safety-relevant constraints.
3. Produce a concise implementation plan.
4. Implement only the requested scope.
5. Add or update tests where code exists.
6. Run relevant validation commands.
7. Summarize the diff and any failures.

## Do not

- Do not implement permanent delete.
- Do not add telemetry.
- Do not add unrestricted filesystem access from frontend.
- Do not follow symlinks by default.
- Do not change safety rules without an ADR.
- Do not combine multiple milestones unless explicitly requested.

## Done response

End with:

- files changed;
- checks run;
- safety notes;
- remaining limitations.
