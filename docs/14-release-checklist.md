# Release checklist

## Pre-alpha checklist

- [ ] Name/legal review completed or working-name disclaimer retained.
- [ ] License confirmed.
- [ ] Public repository disclaimer remains accurate while name is uncleared.
- [ ] README updated.
- [ ] `CHANGELOG.md` has an up-to-date `[Unreleased]` section.
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

Initial source/dev build releases may skip signing/notarization while clearly documenting that no signed DMG is provided yet.

## Signing/notarization checklist

- [ ] Developer ID certificate available.
- [ ] Notarization credentials configured in CI or local release environment.
- [ ] DMG signed.
- [ ] DMG notarized.
- [ ] Notarization ticket stapled if applicable.
- [ ] Gatekeeper behavior verified.

## GitHub Release checklist

- [ ] Tag created.
- [ ] `[Unreleased]` changelog entries moved into the released version section.
- [ ] Release notes written.
- [ ] Release notes link back to the matching `CHANGELOG.md` section.
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
