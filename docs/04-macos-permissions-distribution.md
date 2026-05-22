# macOS permissions and distribution

## Distribution decision

The initial release is outside the Mac App Store.

Recommended binary distribution:

```text
signed and notarized .dmg
```

Do not target the Mac App Store in the MVP. Sandboxing and review constraints would add complexity before the product is validated.

## Full Disk Access

Monocle should work without Full Disk Access by scanning selected folders and common user folders.

Full Disk Access is optional and should be requested only for advanced full-disk scanning.

The MVP does not include advanced full-disk scanning. Full Disk Access copy is retained to explain permission errors and future behavior, but the MVP should not prompt users to grant Full Disk Access as part of the default scan flow.

### UX requirement

Explain:

- why Full Disk Access may be needed;
- what works without it;
- how to enable it;
- how to revoke it;
- that Monocle does not upload scan results.

Suggested future full-disk scan copy:

```text
Monocle can scan selected folders without Full Disk Access.
For a full-disk scan, macOS may block access to protected locations unless you grant Full Disk Access in System Settings → Privacy & Security.
```

MVP permission copy should focus on inaccessible selected or preset folders rather than advertising a full-disk scan mode.

## Default scan mode

Default scan should not require Full Disk Access:

- selected folders;
- common home folders;
- known developer/cache paths when accessible.

Full-disk scan mode is deferred until a future ADR.

## Permission errors

Permission denied is not a fatal error. It should be shown as:

- count of inaccessible files/folders;
- example paths;
- suggestion to grant Full Disk Access only when needed.

## Signing and notarization plan

For binary distribution outside the Mac App Store:

1. Enroll in Apple Developer Program.
2. Create Developer ID certificate.
3. Configure Tauri signing.
4. Configure notarization with App Store Connect API or Apple ID credentials.
5. Build `.dmg` artifact.
6. Verify Gatekeeper behavior on a clean macOS machine.
7. Publish GitHub Release with checksums.

## Release channels

- `dev`: local builds only.
- `alpha`: source/dev build first; signed internal/tester DMG after the MVP safety work is complete.
- `beta`: public GitHub Releases, still pre-1.0.
- `stable`: 1.0+ releases.

## Mac App Store future

Mac App Store distribution requires a separate ADR because it changes:

- sandboxing;
- filesystem access model;
- user-selected folders;
- security-scoped bookmarks;
- cleanup scope;
- review risk.
