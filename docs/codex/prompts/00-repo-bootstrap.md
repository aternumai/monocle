# Codex prompt — 00 repository bootstrap

```text
Goal:
Create the initial Monocle application scaffold from this documentation-only repository.

Context:
- Read AGENTS.md.
- Read docs/12-codex-execution-guide.md.
- Read docs/backlog/milestone-00-repo-bootstrap.md.
- Read docs/02-architecture.md.

Constraints:
- Use Tauri v2 + React + TypeScript + Rust.
- Use pnpm for frontend package management.
- Target macOS 13+ initially.
- Centralize user-facing strings for future localization, while shipping English-only UI in the MVP.
- Do not implement filesystem scanning yet.
- Do not implement cleanup or Trash actions.
- Preserve all documentation.
- Keep the diff PR-sized.
- Do not add telemetry.

Done when:
- The app can launch locally.
- The project has clear install/dev commands.
- Basic formatting/lint/typecheck commands exist or are documented.
- README remains accurate.
- No destructive filesystem action exists.

First produce a concise plan. Then implement the scaffold. Run available checks and summarize results.
```
