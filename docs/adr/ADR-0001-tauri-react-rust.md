# ADR-0001: Use Tauri v2, React, TypeScript, and Rust

## Status

Accepted for MVP planning.

## Context

Monocle needs a macOS desktop UI and high-performance filesystem scanning. The UI should be modern and maintainable, while scanning and safety logic should run natively.

## Decision

Use:

- Tauri v2 for desktop shell;
- React + TypeScript for frontend;
- Rust for scanner, safety, hashing, storage, and macOS integrations.

## Consequences

Positive:

- native filesystem performance;
- smaller desktop bundle than Electron-style alternatives;
- strong command boundary between UI and backend;
- Rust safety and concurrency benefits.

Tradeoffs:

- team needs Rust and frontend expertise;
- macOS-specific behavior must be tested carefully;
- Tauri permissions/capabilities require explicit setup.
