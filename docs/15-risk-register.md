# Risk register

## R1: Unsafe deletion

- Severity: critical
- Risk: user loses files permanently.
- Mitigation: no permanent delete; Trash only; metadata revalidation; confirmation modal.

## R2: Wrong duplicate classification

- Severity: high
- Risk: non-identical files are grouped as duplicates.
- Mitigation: full BLAKE3 hash before duplicate group emission; group by size and hash.

## R3: Race condition after scan

- Severity: high
- Risk: file changes between scan and cleanup.
- Mitigation: revalidate path, size, inode/device, and modified time before Trash action.

## R4: Symlink traversal

- Severity: high
- Risk: scanner or cleanup affects unexpected targets.
- Mitigation: do not follow symlinks by default; treat symlinks explicitly.

## R5: macOS permission confusion

- Severity: medium
- Risk: user thinks scan is complete when macOS blocked paths.
- Mitigation: count and show inaccessible paths; explain Full Disk Access.

## R6: Over-aggressive cache cleanup

- Severity: high
- Risk: user loses useful app state.
- Mitigation: allowlist; safety levels; review-only/danger categories; no automatic cleanup.

## R7: Open-source trust risk

- Severity: medium
- Risk: project appears like adware or fake cleaner.
- Mitigation: transparent docs; no telemetry; no fear copy; clean GitHub governance.

## R8: Name conflict

- Severity: medium
- Risk: trademark/domain conflict.
- Mitigation: working-name disclaimer; clearance before public launch.
