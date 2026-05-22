# Validation commands

These commands are the baseline checks for the app scaffold.

## Commands

```text
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm format
pnpm tauri dev
cargo test --manifest-path src-tauri/Cargo.toml
cargo fmt --manifest-path src-tauri/Cargo.toml --check
cargo clippy --manifest-path src-tauri/Cargo.toml -- -D warnings
```

## Validation principle

Codex should run the narrowest relevant checks during development and the full suite before a PR is considered ready.

Initial development uses local checks. Do not add placeholder CI only to satisfy workflow expectations before the scaffold is stable.

## If checks fail

Codex must summarize:

- command run;
- failure type;
- likely cause;
- whether it is caused by this change;
- recommended next step.
