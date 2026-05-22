# Open-source GitHub plan

## Goal

Prepare Monocle to be versioned and released as an open-source project on GitHub.

## Recommended repository setup

- Public repository during early development is acceptable while retaining the working-name disclaimer.
- MIT license by default unless strategy changes.
- `main` as protected branch.
- Pull requests required before merge.
- Status checks required once CI exists; initial milestone work uses local checks.
- CODEOWNERS for safety-sensitive files.

## Community files included

- `README.md`
- `README.it.md`
- `LICENSE`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `GOVERNANCE.md`
- `.github/ISSUE_TEMPLATE/*`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/CODEOWNERS`

## Suggested labels

```text
area:frontend
area:rust
area:scanner
area:duplicates
area:caches
area:safety
area:macos
area:docs
kind:bug
kind:feature
kind:security
kind:adr
priority:p0
priority:p1
priority:p2
status:needs-triage
status:blocked
status:ready
```

## Branch strategy

- `main`: consolidated documentation and completed milestone work.
- `develop`: active integration branch.
- `release/v0.x`: release stabilization branches if needed.
- feature branches: short-lived.

Merge `develop` into `main` after documentation decisions are consolidated, then after each completed milestone during implementation.

## Release strategy

1. Tag release: `v0.1.0`.
2. Publish an initial source/dev build release before signed distribution.
3. Build signed/notarized macOS artifact after MVP safety work is complete.
4. Generate checksum for binary artifacts.
5. Publish GitHub Release with:
   - release notes;
   - DMG;
   - checksum;
   - known limitations;
   - safety notes.

## Name and trademark note

“Monocle” is a working name. Before a public launch:

- search app names;
- search GitHub repositories;
- search npm/crates package names if publishing packages;
- search domains;
- check trademark databases with counsel if commercial plans are serious.

## Contributor onboarding

Good first issues should be documentation, UI polish, tests, and non-destructive scanner logic.

Avoid assigning new contributors to Trash actions or safety-sensitive cleanup until the safety model is fully implemented and reviewed.
