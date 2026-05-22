# Codex prompt — 05 large files

```text
Goal:
Implement top 100 largest files.

Context:
- AGENTS.md
- docs/07-scanner-algorithms.md
- docs/backlog/milestone-04-large-files.md
- docs/08-frontend-ux.md

Constraints:
- Use allocated size when available, fallback to logical size.
- Do not store all files in memory just for ranking.
- No cleanup action yet.

Done when:
- Backend returns top 100 sorted descending.
- Frontend table displays results.
- Reveal in Finder action works or returns clear error.
- Tests cover heap/ranking logic.
```
