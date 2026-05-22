# Product brief

## Working name

Monocle

The name is a working name. Before public launch, run a dedicated trademark, domain, package-name, and app-name clearance check.

## One-liner

A safe, local-first macOS disk analyzer that shows what is taking space and helps users clean only what they choose.

## Problem

Users often run out of disk space without knowing why. Existing “cleaner” tools can feel aggressive, opaque, or unsafe. Developers also accumulate large build artifacts, caches, archives, simulator files, and duplicate downloads.

## Product promise

Monocle gives visibility first and cleanup second.

It should answer:

- Which files are biggest?
- Which files are exact duplicates?
- Which cache folders are likely safe to clear?
- How much space could I recover?
- What exactly will happen if I confirm cleanup?

## Product anti-promise

Monocle should not promise to “speed up” the Mac, “boost memory”, “repair the system”, or “clean everything”.

## Target users

### Primary

- macOS developers who accumulate Xcode, simulator, Node, browser, and build caches.
- Creators with many large media files.
- Power users who want visibility and control.

### Secondary

- General users comfortable reviewing file paths and selecting items.

## Product principles

1. **Explain before action**: every recommendation includes why it exists.
2. **Trash, not delete**: destructive actions move files to Trash.
3. **Local only**: scan results stay on the device.
4. **No magic**: no one-click cleanup in the MVP.
5. **Respect macOS security**: Full Disk Access is optional and explained.
6. **Reversible where possible**: Trash provides a recovery path.
7. **Reviewability**: open-source code and clear docs.

## Success criteria for MVP

- A user can scan selected folders.
- The app shows top 100 largest files.
- The app finds exact duplicate groups using hashes.
- The app estimates known cache folders.
- The app can reveal paths in Finder.
- Optional cleanup moves selected safe items to Trash after confirmation.
- No network access is required.
- Permission errors are reported clearly.
