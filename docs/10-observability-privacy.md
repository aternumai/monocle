# Observability and privacy

## Default privacy posture

Monocle is local-first.

MVP must not send:

- file paths;
- file names;
- file hashes;
- scan results;
- cache categories;
- usage events;
- machine identifiers.

## Local logs

Local logs may be useful for debugging, but must avoid excessive path leakage.

Recommended log levels:

- debug: only in development builds;
- info: scan lifecycle summaries;
- warning: permission errors and skipped paths;
- error: command failures.

## Audit log

The audit log records local destructive actions:

- action type;
- timestamp;
- item count;
- paths or path hashes depending on UX decision;
- result.

Because paths may be sensitive, the Settings screen should eventually allow clearing local audit logs.

## Telemetry

Telemetry is out of scope for MVP.

Adding telemetry requires:

- ADR;
- opt-in UX;
- privacy policy;
- exact event schema;
- no file path or filename collection;
- clear disable path.

## Crash reports

Crash reports are out of scope for the first MVP.

If added later, they must be opt-in or clearly disclosed and must scrub paths.
