# Codex prompt — 02 command contracts

```text
Goal:
Define Tauri command contracts and shared data types for Monocle.

Context:
- AGENTS.md
- docs/06-tauri-commands.md
- docs/05-data-model.md
- docs/backlog/milestone-02-command-contracts-storage.md

Constraints:
- Expose only controlled commands.
- Do not expose unrestricted filesystem access from the frontend.
- Commands may return stub data for now.
- Use serializable Rust and TypeScript models.

Done when:
- Stub commands exist for scan lifecycle and result queries.
- Frontend can call stubs.
- Types are shared or mirrored cleanly.
- Safety-sensitive commands are stubbed but non-destructive.
```
