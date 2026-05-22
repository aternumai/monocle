# Monocle

**Monocle** è un progetto open source per una app macOS locale, sicura e focalizzata sull’analisi dello spazio disco. Lo stack previsto è Tauri, React, TypeScript e Rust.

Il posizionamento non è “cleaner aggressivo” o “optimizer”. Il prodotto deve aiutare l’utente a capire cosa occupa spazio e a decidere con sicurezza cosa spostare nel Cestino.

## MVP

L’MVP fa tre cose:

1. elenca duplicati reali sul file system;
2. elenca i primi 100 file dal più grande al più piccolo;
3. analizza cache note e suggerisce pulizie sicure.

## Principi

- locale-first;
- nessun cloud;
- nessuna cancellazione automatica;
- nessuna cancellazione permanente;
- niente `sudo`;
- niente Mac App Store all’inizio;
- ogni azione distruttiva deve usare il Cestino;
- l’utente deve vedere path completo e impatto prima di confermare.

## Come usare questo pacchetto

Questo ZIP contiene solo documentazione e template GitHub. È pensato per essere caricato in un repository GitHub e usato con OpenAI Codex.

Prompt iniziale consigliato:

```text
Leggi AGENTS.md, docs/12-codex-execution-guide.md e docs/backlog/milestone-00-repo-bootstrap.md.
Crea lo scheletro iniziale Tauri v2 + React + TypeScript + Rust per Monocle.
Non implementare ancora lo scanner. Limita la PR a bootstrap repo, app shell, formatting e comandi test/lint.
```
