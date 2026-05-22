# MVP scope

## In scope

### 1. Selected-folder scan

The user chooses one or more folders, or uses default home-based scan presets.

Default presets:

- `~/Downloads`
- `~/Desktop`
- `~/Documents`
- `~/Movies`
- `~/Pictures`
- `~/Music`
- `~/Library/Caches`
- `~/Library/Logs`
- `~/Library/Developer/Xcode/DerivedData`
- `~/Library/Developer/Xcode/Archives`
- `~/Library/Developer/CoreSimulator`

### 2. Top 100 largest files

Show the top 100 files by allocated disk size when available, with fallback to logical size.

Each item should display:

- rank;
- file name;
- full path;
- size on disk estimate;
- logical size;
- last modified date;
- file kind/extension;
- actions: reveal in Finder, copy path, select for Trash when safe.

### 3. Exact duplicate finder

Find exact duplicates using staged matching:

1. group by logical size;
2. partial hash candidate groups;
3. full BLAKE3 hash only for remaining candidates;
4. group by full hash.

Each duplicate group should show:

- number of copies;
- single-file size;
- recoverable space estimate;
- full paths;
- recommended “keep” candidate;
- selected candidates for Trash.

### 4. Cache analyzer

Analyze known allowlisted cache folders and generate recommendations.

Recommendation fields:

- category;
- path;
- estimated size;
- safety level: `safe`, `review`, `danger`;
- reason;
- recommended action;
- whether related apps should be closed first.

### 5. Safety-first actions

Actions included in MVP:

- reveal in Finder;
- copy path;
- move selected items to Trash after confirmation and metadata revalidation.

## Out of scope for MVP

- Mac App Store distribution.
- Antivirus or malware scanning.
- Memory optimization.
- Login item manager.
- App uninstaller.
- Similar image detection.
- Cloud drive cleanup.
- Time Machine snapshot cleanup.
- `/System`, `/private`, `/var`, or privileged system cleanup.
- Permanent deletion.
- `sudo` or helper tools.
- Fully automatic “clean all”.
- Telemetry or analytics.
- Multi-user admin mode.

## Future options

These require ADRs before implementation:

- Mac App Store build.
- Optional telemetry.
- Package manager cleanup.
- Node/Rust/Python dependency cache cleanup.
- App uninstaller.
- Similar photo detection.
- Time Machine local snapshot reporting.
