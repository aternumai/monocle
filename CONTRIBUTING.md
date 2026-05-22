# Contributing to Monocle

Thanks for helping build Monocle.

Monocle is a safety-sensitive filesystem utility. Contributions are welcome, but the safety model is non-negotiable.

## Before contributing

Read:

- `README.md`
- `AGENTS.md`
- `docs/03-safety-model.md`
- `docs/13-acceptance-criteria.md`

## Contribution principles

- Keep changes small and reviewable.
- Do not add automatic deletion.
- Do not add permanent deletion.
- Do not add network telemetry without an accepted ADR.
- Do not add privileged helpers without an accepted ADR and a separate security review.
- Prefer explicit, testable behavior over clever behavior.

## Branch naming

Use short descriptive branches:

- `docs/mvp-scope-update`
- `feat/scanner-progress-events`
- `fix/duplicate-hash-validation`
- `chore/ci-formatting`

## Pull requests

A PR should include:

1. what changed;
2. why it changed;
3. safety impact;
4. screenshots or videos for UI changes;
5. test commands run;
6. manual validation steps;
7. limitations or follow-up tasks.

## Commit style

Recommended:

```text
feat(scanner): add cancellable traversal skeleton
fix(safety): block trash action for app bundles
docs(adr): record no-app-store initial distribution
```

## Code review focus

Reviewers should focus on:

- filesystem safety;
- correctness under permission errors;
- symlink handling;
- race conditions between scan and cleanup;
- data privacy;
- clear user confirmation UX.
