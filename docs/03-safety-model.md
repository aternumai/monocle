# Safety model

Monocle is a filesystem utility. Safety is a product feature, not an implementation detail.

## Non-negotiable invariants

1. No permanent delete.
2. No automatic cleanup.
3. No `sudo`.
4. No privileged helper in MVP.
5. No following symlinks by default.
6. No frontend unrestricted filesystem access.
7. No cleanup outside allowlisted categories.
8. No cleanup inside protected macOS paths.
9. No duplicate cleanup that removes every copy.
10. No Trash action without confirmation and metadata revalidation.

## Protected paths

The MVP must block destructive actions in or under:

```text
/System
/Library
/private
/var
/Applications
/Network
/Volumes       # except explicitly selected user volumes in a future ADR
*.app          # app bundles and their internals
```

Also block or require special review for:

```text
~/Library/Application Support
~/Library/Mail
~/Library/Messages
~/Pictures/Photos Library.photoslibrary
~/Library/Mobile Documents
~/Library/CloudStorage
```

## Cache allowlist

Initial safe/review allowlist:

```text
~/Library/Caches
~/Library/Logs
~/Library/Developer/Xcode/DerivedData
~/Library/Developer/Xcode/Archives
~/Library/Developer/Xcode/iOS DeviceSupport
~/Library/Developer/CoreSimulator/Caches
~/Library/Containers/*/Data/Library/Caches
~/Library/Group Containers/*/Library/Caches
```

Categories outside this list should be reported as informational only until an ADR expands the allowlist.

## Trash action lifecycle

Before moving any item to Trash:

1. Confirm the item is selected by the user.
2. Confirm the full path is shown in the UI.
3. Confirm the action is not permanent.
4. Re-read metadata from disk.
5. Compare against scan record:
   - path;
   - file type;
   - size;
   - device id, if available;
   - inode, if available;
   - modification time, if useful.
6. Block if metadata changed materially.
7. Block if the path is now protected.
8. For duplicate groups, confirm at least one copy remains.
9. Move to Trash.
10. Record an audit event locally.

## Duplicate cleanup rule

For every duplicate group:

```text
selected_for_trash_count <= file_count - 1
```

If the user selects all files in a duplicate group, the UI must disable confirmation or auto-unselect the recommended keep candidate.

## Cache cleanup levels

### `safe`

Regenerable cache with low risk when related apps are closed.

### `review`

Usually safe, but may remove useful local state, downloaded cache, browser cache, or developer artifacts.

### `danger`

Informational only in MVP. The app must not provide a cleanup action.

## Symlink policy

Default:

- record symlinks as skipped;
- do not follow symlinks;
- do not Trash symlink targets through a symlink path;
- if a symlink itself is selected, treat it as a distinct file and require explicit confirmation.

## Race-condition handling

A scan result is a snapshot, not proof that the file is unchanged. Any destructive action must revalidate immediately before acting.

## User messaging

Confirmation copy should be plain:

```text
Monocle will move these items to the Trash. It will not permanently delete them.
Review the full paths before continuing.
```

Never use fear-based language or imply that deletion is required.
