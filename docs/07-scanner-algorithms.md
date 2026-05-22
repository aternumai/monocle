# Scanner algorithms

## Traversal

Input:

- selected roots;
- scan options;
- cancellation token;
- safety policy.

Rules:

- skip symlinks by default;
- record permission errors;
- skip protected paths for destructive eligibility;
- avoid reading file contents unless needed for hashing;
- batch storage writes;
- throttle UI progress events.

## File size model

Show both:

- `logical_size`: file length in bytes;
- `allocated_size`: estimated disk blocks used, if available.

Sort top files by:

```text
allocated_size if available, else logical_size
```

On Unix-like systems, allocated size can often be estimated from block metadata. APFS clones, compression, and sparse files can make this an estimate, so the UI should say “estimated size on disk” when appropriate.

## Top 100 largest files

Maintain a min-heap with max size 100.

Pseudocode:

```text
heap = empty min heap ordered by effective_size
for file in scanned_files:
  effective_size = allocated_size ?? logical_size
  if heap.size < 100:
    heap.push(file)
  else if effective_size > heap.peek_min.effective_size:
    heap.pop_min()
    heap.push(file)
return heap sorted descending
```

Benefits:

- memory efficient;
- works during traversal;
- does not require storing every file in memory.

## Duplicate finder

Goal: identify exact duplicates while minimizing disk I/O.

Pipeline:

```text
1. collect file metadata
2. group files by logical_size
3. discard groups with fewer than 2 files
4. compute partial hashes for remaining files
5. group by (logical_size, partial_hash)
6. discard groups with fewer than 2 files
7. compute full BLAKE3 hashes for remaining candidates
8. group by (logical_size, full_hash)
9. emit duplicate groups
```

Partial hash strategy:

- read first 256 KiB;
- for larger files, optionally read middle 256 KiB and last 256 KiB;
- include logical size in grouping.

Full hash strategy:

- stream file content;
- support cancellation;
- bound concurrent readers;
- handle file changed errors.

## Duplicate keep recommendation

Score candidates:

```text
+100 path is outside cache
+80  path is outside Downloads
+60  path is in Documents/Desktop/Movies/Pictures/Music
+40  newer modified timestamp
+20  shorter normalized path
-100 path is inside cache
-100 path is inside Trash
-80  path is inside build artifacts
```

The recommendation is only a suggestion. The user remains in control.

## Cache analyzer

The cache analyzer should not infer arbitrary folders as safe to remove. It should use a curated catalog.

Catalog entry shape:

```json
{
  "category": "xcode_derived_data",
  "pathPattern": "~/Library/Developer/Xcode/DerivedData",
  "safetyLevel": "safe",
  "reason": "Xcode build cache that can be regenerated.",
  "requiresAppClosed": true,
  "actionable": true
}
```

MVP categories:

- user caches;
- user logs;
- Xcode DerivedData;
- Xcode Archives;
- Xcode iOS DeviceSupport;
- CoreSimulator caches;
- container caches;
- group container caches.

## Scan phases

Recommended scan phases:

1. `prepare`: normalize roots and validate options.
2. `traversal`: collect metadata and top 100 candidates.
3. `partial_hashing`: hash duplicate candidates.
4. `full_hashing`: hash remaining duplicate candidates.
5. `cache_analysis`: estimate cache categories.
6. `finalizing`: write results and summary.
7. `completed` or `cancelled`.
