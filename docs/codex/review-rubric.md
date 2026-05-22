# Codex review rubric

Use this rubric after every PR-sized change.

## P0 blockers

- Permanent deletion exists.
- Cleanup can run without explicit user confirmation.
- Frontend can access arbitrary filesystem paths directly.
- Duplicate cleanup can remove every copy.
- Trash action skips metadata revalidation.
- Protected paths can be cleaned.
- Non-allowlisted cache paths are actionable.
- Network telemetry sends paths, names, hashes, or scan results.

## P1 serious issues

- Symlinks are followed by default.
- Permission errors crash scans.
- Full Disk Access is assumed instead of explained.
- Large-file ranking uses unbounded memory unnecessarily.
- Duplicate detection relies on filename or partial hash only.
- Cache recommendation lacks reason/safety level.
- UI copy implies automatic or required cleanup.

## P2 improvements

- Missing empty states.
- Missing loading states.
- Weak error messages.
- Missing tests for edge cases.
- Inefficient but bounded implementation.

## Review prompt

```text
Review this diff against AGENTS.md, docs/03-safety-model.md, and docs/13-acceptance-criteria.md.
Report only P0/P1 issues first. Include exact files and suggested fixes.
```
