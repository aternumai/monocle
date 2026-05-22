# Release checklist

## Pre-alpha checklist

- [ ] Name/legal review completed or working-name disclaimer retained.
- [ ] License confirmed.
- [ ] README updated.
- [ ] Safety model implemented and reviewed.
- [ ] No permanent delete code path exists.
- [ ] No telemetry code path exists.
- [ ] Full Disk Access copy reviewed.
- [ ] Permission denied behavior tested.
- [ ] Symlink behavior tested.
- [ ] Duplicate keep-one rule tested.

## Build checklist

- [ ] Frontend build passes.
- [ ] Rust tests pass.
- [ ] TypeScript checks pass.
- [ ] Lint/format passes.
- [ ] Tauri build succeeds.
- [ ] App launches on a clean macOS account.

## Signing/notarization checklist

- [ ] Developer ID certificate available.
- [ ] Notarization credentials configured in CI or local release environment.
- [ ] DMG signed.
- [ ] DMG notarized.
- [ ] Notarization ticket stapled if applicable.
- [ ] Gatekeeper behavior verified.

## GitHub Release checklist

- [ ] Tag created.
- [ ] Release notes written.
- [ ] DMG uploaded.
- [ ] Checksum uploaded.
- [ ] Known issues listed.
- [ ] Safety notes listed.
- [ ] Upgrade/uninstall notes listed.

## Post-release checklist

- [ ] Monitor issues.
- [ ] Triage safety reports first.
- [ ] Update roadmap.
- [ ] Add lessons learned to AGENTS.md or docs.
