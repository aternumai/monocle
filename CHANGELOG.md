# Changelog

This project uses semantic versioning after the first public source release.

Keep this file focused on changes that matter to users, contributors, and
maintainers. Internal refactors only need an entry when they change behavior,
safety guarantees, supported workflows, or public documentation.

## [Unreleased]

Use these sections for every pull request when applicable:

- `Added` for new user-facing functionality, commands, screens, docs, or project
  capabilities.
- `Changed` for behavior, workflow, architecture, or public process changes.
- `Fixed` for corrections to bugs, broken docs, or regressions.
- `Safety` for filesystem, Trash, privacy, permission, or data-loss risk changes.
- `Security` for vulnerability fixes or security hardening.

### Added

- Documentation-only MVP planning repository.
- Product brief, architecture, safety model, backlog, Codex prompts, and GitHub templates.

### Changed

- Documented the public release hygiene process for changelog and release notes updates.
- Reviewed the M0 repository bootstrap documentation and confirmed the starting
  scope, safety constraints, and validation expectations.

## Versioning plan

- `0.1.0`: repository bootstrap and initial app shell.
- `0.2.0`: command contracts and local SQLite storage.
- `0.3.0`: scanner traversal and large files results.
- `0.4.0`: exact duplicate finder.
- `0.5.0`: cache analyzer recommendations.
- `0.6.0`: safe Trash actions behind confirmation.
- `0.7.0`: release engineering and signed/notarized alpha DMG.
- `1.0.0`: stable MVP release.

## Release process

Before tagging a public version:

1. Move relevant entries from `[Unreleased]` into a dated version section.
2. Keep a fresh empty `[Unreleased]` section at the top.
3. Use `RELEASE_NOTES_TEMPLATE.md` for the GitHub Release summary.
4. Include safety notes and known limitations in every public release.
