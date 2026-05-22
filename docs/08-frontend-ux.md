# Frontend UX

## Design tone

- Calm.
- Transparent.
- Native-feeling.
- No fear-based copy.
- No fake speed/boost claims.

## Screens

### Dashboard

Cards:

- total scanned space;
- potential recoverable duplicate space;
- cache recommendation space;
- largest file;
- last scan date;
- inaccessible paths count.

### Scan setup

Options:

- scan default folders;
- choose folders;
- include cache analysis;
- include duplicate detection.

Default folders should be grouped as common home folders and developer/cache folders.

Full-disk scan is not part of the MVP. Permission copy should explain inaccessible paths without nudging users into an unnecessary broad permission grant.

### Scan progress

Show:

- current phase;
- files seen;
- data seen;
- unreadable paths;
- cancel button.

### Large files

Table columns:

- rank;
- file name;
- estimated size on disk;
- logical size;
- path;
- modified date;
- actions.

### Duplicates

Group card:

```text
3 copies · 2.4 GB each · 4.8 GB recoverable
```

Each file row:

- checkbox;
- keep badge;
- file name;
- path;
- modified date;
- reveal action.

### Cache analyzer

Category card:

- category name;
- estimated size;
- safety level;
- reason;
- action availability.

### Confirmation modal

Required elements:

- “Move to Trash” wording;
- no “delete forever” wording;
- item count;
- estimated space;
- full path list or expandable details;
- required checkbox: "I reviewed the paths";
- confirm button disabled when safety rules fail.

## Language

The MVP UI is English-only. Keep all user-facing copy centralized so later localization can be added without changing feature logic.

## Empty states

Examples:

- “No duplicates found in this scan.”
- “No actionable cache recommendations found.”
- “Some folders could not be read because macOS blocked access.”

## Warning language

Use neutral copy:

```text
This folder is not included in safe cleanup. Monocle will show its size but will not offer cleanup for it.
```

Avoid:

```text
Dangerous junk detected!
Your Mac is at risk!
```
