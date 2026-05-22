# Tauri command contract

The frontend should interact with the filesystem only through validated Tauri commands.

## Scan lifecycle

### `start_scan(payload) -> ScanStarted`

Payload:

```json
{
  "roots": ["/Users/example/Downloads"],
  "includeCaches": true,
  "includeDuplicates": true,
  "includeLargeFiles": true,
  "followSymlinks": false
}
```

Result:

```json
{
  "scanId": "uuid",
  "status": "running"
}
```

### `cancel_scan(scan_id) -> CancelResult`

Cancels a running scan.

### `get_scan_status(scan_id) -> ScanStatus`

Returns progress, current phase, counts, and errors.

## Results

### `get_large_files(scan_id) -> LargeFile[]`

Returns top 100 files.

### `get_duplicate_groups(scan_id, pagination) -> DuplicateGroupPage`

Returns duplicate groups with pagination.

### `get_cache_recommendations(scan_id) -> CacheRecommendation[]`

Returns cache recommendations.

## Actions

### `reveal_in_finder(path) -> ActionResult`

Reveals a file or folder in Finder.

### `copy_path(path) -> ActionResult`

May be handled in frontend, but backend validation is acceptable.

### `move_items_to_trash(payload) -> TrashResult`

Payload:

```json
{
  "items": [
    {
      "path": "/Users/example/Downloads/file.mov",
      "scanId": "uuid",
      "fileEntryId": "uuid",
      "reason": "duplicate"
    }
  ],
  "confirmationToken": "token-from-confirmation-modal"
}
```

Backend must revalidate before action.

## Settings and permissions

### `check_full_disk_access() -> PermissionStatus`

Best-effort only. The UI should not rely exclusively on this result because macOS permission behavior can vary.

### `open_full_disk_access_settings() -> ActionResult`

Opens System Settings to Privacy & Security when possible.

### `save_user_preferences(payload) -> Preferences`

Stores local app preferences.

## Events

### `scan://progress`

```json
{
  "scanId": "uuid",
  "phase": "traversal|hashing|cache_analysis|finalizing",
  "filesSeen": 1000,
  "bytesSeen": 123456789,
  "unreadableCount": 3,
  "message": "Scanning Downloads"
}
```

### `scan://completed`

```json
{
  "scanId": "uuid",
  "totalFiles": 12345,
  "totalBytes": 987654321,
  "duplicateGroups": 12,
  "cacheBytes": 123456789
}
```

### `scan://error`

```json
{
  "scanId": "uuid",
  "severity": "info|warning|error",
  "message": "Permission denied",
  "path": "/Users/example/Library/Mail"
}
```
