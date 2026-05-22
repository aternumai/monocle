# Codex prompt — 08 safe Trash actions

```text
Goal:
Implement safe movement of selected items to macOS Trash.

Context:
- AGENTS.md
- docs/03-safety-model.md
- docs/06-tauri-commands.md
- docs/backlog/milestone-07-safe-actions.md

Constraints:
- No permanent delete.
- Confirmation required.
- Revalidate metadata immediately before action.
- Block protected paths.
- Block non-allowlisted cache cleanup.
- Keep at least one file in each duplicate group.
- Record audit log.

Done when:
- Trash command exists and is safe.
- Confirmation modal is required.
- Metadata mismatch blocks action.
- Tests cover duplicate keep-one and protected path blocks.
```
