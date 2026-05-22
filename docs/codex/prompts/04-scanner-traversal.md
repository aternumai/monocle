# Codex prompt — 04 scanner traversal

```text
Goal:
Implement cancellable selected-folder traversal.

Context:
- AGENTS.md
- docs/07-scanner-algorithms.md
- docs/03-safety-model.md
- docs/backlog/milestone-03-scanner-engine.md

Constraints:
- Skip symlinks by default.
- Record permission errors instead of crashing.
- Do not hash file contents yet except where required by tests.
- Do not implement cleanup.
- Emit throttled progress events.

Done when:
- A selected folder scan records file metadata.
- Progress events work.
- Cancellation works.
- Symlinks are skipped by default.
- Tests cover protected path and symlink behavior.
```
