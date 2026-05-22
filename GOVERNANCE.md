# Governance

Monocle starts as a maintainer-led open-source project.

## Roles

### Maintainer

Maintainers can:

- merge pull requests;
- publish releases;
- update project direction;
- make safety calls;
- manage GitHub issues and labels.

### Contributor

Contributors can:

- open issues;
- submit pull requests;
- review documentation and code;
- propose ADRs.

## Decision process

Most decisions are made through issues, pull requests, and ADRs.

Safety-sensitive changes require explicit maintainer approval and should include an ADR when they change project behavior.

## ADR required for

- changing deletion behavior;
- adding network features;
- adding telemetry;
- changing the license;
- adding privileged helpers;
- changing default scan roots;
- distributing through the Mac App Store;
- expanding cleanup beyond allowlisted caches.

## Release ownership

Only maintainers should publish signed/notarized builds.

Release secrets must not be committed to the repository.
