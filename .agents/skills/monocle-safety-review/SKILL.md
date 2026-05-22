---
name: monocle-safety-review
description: Use this skill to review Monocle changes for filesystem safety, privacy, and MVP guardrails.
---

# Monocle safety review skill

## Required reading

- `AGENTS.md`
- `docs/03-safety-model.md`
- `docs/13-acceptance-criteria.md`
- `docs/codex/review-rubric.md`

## Review priorities

Report P0/P1 issues first.

Look for:

- hard delete;
- automatic cleanup;
- missing confirmation;
- missing metadata revalidation;
- symlink traversal;
- protected path mutation;
- non-allowlisted cache action;
- unbounded frontend filesystem access;
- telemetry or network transfer of scan data;
- duplicate cleanup that removes every copy.

## Output format

```text
Summary:
P0 blockers:
P1 issues:
P2 improvements:
Recommended fixes:
Checks to run:
```
