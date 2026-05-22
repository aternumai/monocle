# Codex prompt — 06 duplicate finder

```text
Goal:
Implement exact duplicate detection with staged hashing.

Context:
- AGENTS.md
- docs/07-scanner-algorithms.md
- docs/03-safety-model.md
- docs/backlog/milestone-05-duplicate-finder.md

Constraints:
- Group by size before hashing.
- Use partial hashes only as a filter.
- Require full BLAKE3 hash before declaring duplicates.
- Hashing must be cancellable.
- Do not implement Trash action yet.

Done when:
- Exact duplicate groups are stored and queried.
- Wasted bytes are computed.
- Recommended keep candidate is displayed.
- UI prevents selecting every item in a group.
- Tests cover same-size non-duplicates.
```
