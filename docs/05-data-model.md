# Data model

SQLite is recommended for local scan persistence.

## Goals

- Persist scan results across app restarts.
- Support pagination for large result sets.
- Store enough metadata to revalidate before Trash actions.
- Keep audit logs local.

## Tables

### `scans`

```sql
CREATE TABLE scans (
  id TEXT PRIMARY KEY,
  status TEXT NOT NULL,
  roots_json TEXT NOT NULL,
  started_at TEXT NOT NULL,
  completed_at TEXT,
  total_files INTEGER NOT NULL DEFAULT 0,
  total_logical_bytes INTEGER NOT NULL DEFAULT 0,
  total_allocated_bytes INTEGER NOT NULL DEFAULT 0,
  unreadable_count INTEGER NOT NULL DEFAULT 0,
  skipped_symlink_count INTEGER NOT NULL DEFAULT 0,
  error_message TEXT
);
```

### `file_entries`

```sql
CREATE TABLE file_entries (
  id TEXT PRIMARY KEY,
  scan_id TEXT NOT NULL,
  path TEXT NOT NULL,
  file_name TEXT NOT NULL,
  extension TEXT,
  logical_size INTEGER NOT NULL,
  allocated_size INTEGER,
  modified_at TEXT,
  accessed_at TEXT,
  device_id INTEGER,
  inode INTEGER,
  file_kind TEXT,
  is_symlink INTEGER NOT NULL DEFAULT 0,
  is_hidden INTEGER NOT NULL DEFAULT 0,
  is_in_protected_path INTEGER NOT NULL DEFAULT 0,
  unreadable_reason TEXT,
  FOREIGN KEY (scan_id) REFERENCES scans(id)
);
```

### `file_hashes`

```sql
CREATE TABLE file_hashes (
  file_entry_id TEXT PRIMARY KEY,
  partial_hash TEXT,
  full_hash TEXT,
  hash_algorithm TEXT NOT NULL DEFAULT 'blake3',
  FOREIGN KEY (file_entry_id) REFERENCES file_entries(id)
);
```

### `duplicate_groups`

```sql
CREATE TABLE duplicate_groups (
  id TEXT PRIMARY KEY,
  scan_id TEXT NOT NULL,
  full_hash TEXT NOT NULL,
  logical_size INTEGER NOT NULL,
  file_count INTEGER NOT NULL,
  wasted_bytes INTEGER NOT NULL,
  recommended_keep_file_id TEXT,
  FOREIGN KEY (scan_id) REFERENCES scans(id)
);
```

### `duplicate_group_files`

```sql
CREATE TABLE duplicate_group_files (
  group_id TEXT NOT NULL,
  file_entry_id TEXT NOT NULL,
  keep_score INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (group_id, file_entry_id),
  FOREIGN KEY (group_id) REFERENCES duplicate_groups(id),
  FOREIGN KEY (file_entry_id) REFERENCES file_entries(id)
);
```

### `cache_recommendations`

```sql
CREATE TABLE cache_recommendations (
  id TEXT PRIMARY KEY,
  scan_id TEXT NOT NULL,
  category TEXT NOT NULL,
  path TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  safety_level TEXT NOT NULL,
  reason TEXT NOT NULL,
  recommended_action TEXT NOT NULL,
  requires_app_closed INTEGER NOT NULL DEFAULT 0,
  is_actionable INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (scan_id) REFERENCES scans(id)
);
```

### `audit_log`

```sql
CREATE TABLE audit_log (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  action TEXT NOT NULL,
  paths_json TEXT NOT NULL,
  result TEXT NOT NULL,
  error_message TEXT
);
```

## Indexes

```sql
CREATE INDEX idx_file_entries_scan_id ON file_entries(scan_id);
CREATE INDEX idx_file_entries_size ON file_entries(scan_id, logical_size);
CREATE INDEX idx_file_entries_path ON file_entries(path);
CREATE INDEX idx_file_hashes_full_hash ON file_hashes(full_hash);
CREATE INDEX idx_duplicate_groups_scan_id ON duplicate_groups(scan_id);
CREATE INDEX idx_cache_recommendations_scan_id ON cache_recommendations(scan_id);
```

## Retention policy

Initial version:

- keep last 5 completed scans;
- always keep audit log unless user clears app data;
- allow user to clear scan history from Settings.
