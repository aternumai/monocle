# Security Policy

Monocle is a local filesystem utility. Security and user trust are core requirements.

## Supported versions

Until the first public release, only the `main` branch is considered active.

After public releases, security support will be documented by version.

## Reporting vulnerabilities

Please do not disclose security issues publicly before maintainers have a chance to investigate.

For now, report privately to the project maintainer using the contact method listed in the GitHub repository profile. Once the repository is public, add a dedicated security contact here.

## High-priority security issues

Report any behavior that could cause:

- permanent file deletion;
- deletion outside confirmed user selections;
- cleanup outside allowlisted paths;
- symlink traversal into unexpected locations;
- bypass of confirmation modals;
- inaccurate file identity validation before Trash actions;
- leakage of file paths, filenames, metadata, or scan results to a network service;
- privilege escalation or use of `sudo`.

## Security posture

- No cloud sync.
- No telemetry by default.
- No privileged helper in MVP.
- No permanent delete.
- No automatic cleanup.
- Trash-only destructive actions.
