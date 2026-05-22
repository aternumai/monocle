export const STRINGS = {
  app: {
    title: "Monocle",
    status: "M0 app scaffold",
    summary:
      "A local-first macOS disk analyzer focused on understanding storage before taking explicit, reversible action.",
  },
  mvp: {
    label: "Planned MVP",
    title: "Storage insight without unsafe cleanup shortcuts",
    features: [
      "Exact duplicate groups",
      "Top 100 largest files",
      "Allowlisted cache recommendations",
    ],
  },
  safety: {
    label: "Current build",
    title: "Bootstrap shell only",
  },
  readiness: {
    noScanning: "No filesystem scanning is implemented yet.",
    noCleanup: "No cleanup or Trash action is implemented yet.",
    localFirst:
      "No telemetry, cloud dependency, or network feature is included.",
  },
} as const;
