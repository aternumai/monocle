# Validation commands

These commands will become concrete after the app scaffold exists.

## Expected future commands

```text
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm tauri dev
cargo test --manifest-path src-tauri/Cargo.toml
cargo fmt --manifest-path src-tauri/Cargo.toml --check
cargo clippy --manifest-path src-tauri/Cargo.toml -- -D warnings
```

## Validation principle

Codex should run the narrowest relevant checks during development and the full suite before a PR is considered ready.

## If checks fail

Codex must summarize:

- command run;
- failure type;
- likely cause;
- whether it is caused by this change;
- recommended next step.
