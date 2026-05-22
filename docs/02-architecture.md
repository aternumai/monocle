# Architecture

## Recommended stack

- Desktop shell: Tauri v2
- Frontend: React + TypeScript + Vite
- UI system: shadcn/ui or custom accessible components
- State/query: TanStack Query + small local state store
- Backend: Rust Tauri commands
- Storage: SQLite
- Hashing: BLAKE3
- Trash action: platform-appropriate Trash integration

## High-level architecture

```text
React UI
  ↓ invoke controlled commands
Tauri command layer
  ↓
Rust domain modules
  ├── scanner
  ├── large_files
  ├── duplicates
  ├── caches
  ├── storage
  ├── safety
  └── macos
  ↓
Filesystem + SQLite
```

## Planned repository structure after implementation

```text
monocle/
  README.md
  AGENTS.md
  docs/
  src/                         # React frontend
    app/
    components/
    features/
      dashboard/
      scan/
      large-files/
      duplicates/
      caches/
      settings/
    lib/
  src-tauri/
    src/
      main.rs
      commands/
      scanner/
      large_files/
      duplicates/
      caches/
      storage/
      safety/
      macos/
    capabilities/
    tauri.conf.json
  .github/
```

## Backend modules

### `scanner`

Responsible for walking selected roots, reading metadata, reporting progress, and passing file entries to feature modules.

### `large_files`

Maintains a bounded top-100 ranking using a min-heap.

### `duplicates`

Groups candidates by size, partial hash, and full hash.

### `caches`

Analyzes allowlisted cache folders and produces recommendations.

### `storage`

Persists scan state, file entries, duplicate groups, cache recommendations, and audit logs.

### `safety`

Centralizes path allowlists, protected path detection, revalidation, Trash checks, and duplicate keep-one rules.

### `macos`

Handles macOS-specific integrations:

- reveal in Finder;
- Full Disk Access detection hints;
- path normalization;
- app bundle detection;
- allocated-size metadata.

## Frontend screens

- Dashboard
- Scan setup
- Scan progress
- Large files
- Duplicates
- Cache analyzer
- Settings
- Confirmation modal
- Error and permission report

## Command boundary

The frontend must not receive unrestricted filesystem access. It should call backend commands that validate inputs.

Example command categories:

- scan lifecycle;
- result queries;
- Finder actions;
- safe Trash actions;
- settings;
- permission status.

## Error handling

The scanner should treat permission errors as scan results, not fatal failures.

Examples:

- inaccessible path count;
- unreadable files;
- skipped symlinks;
- skipped protected paths;
- aborted scan;
- metadata changed before Trash action.

## Concurrency model

The scanner should be cancellable and progress-aware.

Recommended pattern:

- one scan session owns a cancellation token;
- traversal sends file metadata to workers;
- duplicate hashing is bounded to avoid saturating disk I/O;
- progress events are throttled before reaching the frontend;
- SQLite writes are batched.
