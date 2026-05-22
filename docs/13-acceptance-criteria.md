# MVP acceptance criteria

## Product-level criteria

The MVP is acceptable when a user can:

1. select folders to scan;
2. run a cancellable scan;
3. see progress and permission errors;
4. view top 100 largest files;
5. view exact duplicate groups;
6. view cache recommendations;
7. reveal files in Finder;
8. move selected safe items to Trash after confirmation;
9. understand that no permanent deletion occurs.

## Safety criteria

- No permanent deletion API exists in application code.
- No frontend unrestricted filesystem access exists.
- Trash actions require confirmation.
- Trash confirmation requires an explicit path-review acknowledgement.
- Trash actions revalidate metadata.
- Duplicate cleanup keeps at least one copy.
- Cache cleanup is allowlist-only.
- Protected paths are not actionable.
- Symlinks are not followed by default.
- Permission errors do not crash scans.
- Full-disk scan is not included in the MVP.

## Performance criteria

Initial targets, subject to refinement:

- scanning a typical home folder should remain responsive;
- UI progress updates should be throttled;
- top 100 ranking should not store all files in memory;
- hashing should be limited to duplicate candidates;
- cancellation should stop long-running hashing work promptly.

## UX criteria

- The app does not use fear-based copy.
- Full paths are visible before cleanup.
- “Move to Trash” wording is used consistently.
- Safety level is visible for cache recommendations.
- Inaccessible paths are explained.
- Full Disk Access is optional and explained.
- UI copy is English-only for the MVP, with centralized strings for later localization.

## Open-source criteria

- Repository includes license.
- Repository includes contribution guide.
- Repository includes security policy.
- Repository includes issue templates.
- Repository includes PR template.
- Release notes document limitations.

## Development workflow criteria

- Active work happens on `develop` or short-lived branches from `develop`.
- `main` receives consolidated documentation and completed milestone work.
- Local checks are run and documented before milestone merges.
