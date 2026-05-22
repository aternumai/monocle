export type ScreenId =
  | "dashboard"
  | "scan"
  | "largeFiles"
  | "duplicates"
  | "cacheAnalyzer"
  | "settings";

export type ScreenCopy = {
  id: ScreenId;
  navLabel: string;
  kicker: string;
  title: string;
  summary: string;
  status: string;
  emptyState: {
    label: string;
    title: string;
    copy: string;
  };
  primaryAction?: {
    label: string;
    disabled: boolean;
  };
  details: Array<{
    label: string;
    copy: string;
  }>;
};

export const STRINGS = {
  app: {
    title: "Monocle",
    status: "M1 UI shell",
    summary:
      "Local-first storage insight for macOS, built around explicit review before any reversible action.",
  },
  nav: {
    label: "Monocle screens",
  },
  safety: {
    title: "No automatic cleanup",
    copy: "This build does not scan files or move anything to the Trash. Future cleanup actions will require explicit review and confirmation.",
  },
  dashboard: {
    metricsLabel: "Dashboard empty metrics",
    metrics: [
      { label: "Total scanned space", value: "No scan yet" },
      { label: "Duplicate space", value: "No scan yet" },
      { label: "Cache recommendations", value: "No scan yet" },
      { label: "Largest file", value: "No scan yet" },
      { label: "Last scan", value: "Not started" },
      { label: "Inaccessible paths", value: "No scan yet" },
    ],
  },
  screens: [
    {
      id: "dashboard",
      navLabel: "Dashboard",
      kicker: "Overview",
      title: "Storage summary",
      summary:
        "A scan summary will appear here after Monocle has command contracts and scanner results.",
      status: "Empty",
      emptyState: {
        label: "No scan data",
        title: "Run a scan later to populate the dashboard.",
        copy: "The shell is ready for scanned space, duplicate space, cache recommendations, largest file, last scan date, and inaccessible path counts.",
      },
      details: [],
    },
    {
      id: "scan",
      navLabel: "Scan",
      kicker: "Setup",
      title: "Choose what Monocle will inspect",
      summary:
        "The MVP will scan selected folders only. Full-disk scanning is outside the current scope.",
      status: "Placeholder",
      emptyState: {
        label: "Scan setup",
        title: "Scan controls are not connected yet.",
        copy: "Folder selection and cancellable progress will be added after the Tauri command contracts exist.",
      },
      primaryAction: {
        label: "Scan unavailable",
        disabled: true,
      },
      details: [
        {
          label: "Default folders",
          copy: "Home and developer cache groups will be offered without requiring broad filesystem access.",
        },
        {
          label: "Permission errors",
          copy: "Folders blocked by macOS will be reported without crashing the scan.",
        },
      ],
    },
    {
      id: "largeFiles",
      navLabel: "Large Files",
      kicker: "Top 100",
      title: "Largest files by disk usage",
      summary:
        "This view will list the top 100 largest files after scanner storage is available.",
      status: "Empty",
      emptyState: {
        label: "No large file results",
        title: "No files have been ranked yet.",
        copy: "Future results will show rank, file name, estimated size on disk, logical size, path, modified date, and Finder actions.",
      },
      details: [
        {
          label: "Action model",
          copy: "Large file rows can reveal items in Finder, but no cleanup action is available from this placeholder.",
        },
      ],
    },
    {
      id: "duplicates",
      navLabel: "Duplicates",
      kicker: "Exact matches",
      title: "Duplicate groups",
      summary:
        "Duplicate groups will appear only after staged hashing confirms exact matches.",
      status: "Empty",
      emptyState: {
        label: "No duplicate results",
        title: "No duplicates found in this scan.",
        copy: "When duplicate cleanup exists, Monocle must keep at least one copy in every group and require explicit path review.",
      },
      details: [
        {
          label: "Selection rule",
          copy: "The UI will prevent selecting every item in a duplicate group for Trash.",
        },
      ],
    },
    {
      id: "cacheAnalyzer",
      navLabel: "Cache Analyzer",
      kicker: "Allowlisted paths",
      title: "Cache recommendations",
      summary:
        "Cache analysis will be limited to documented allowlisted folders.",
      status: "Empty",
      emptyState: {
        label: "No cache recommendations",
        title: "No actionable cache recommendations found.",
        copy: "Future recommendations will show category, estimated size, safety level, reason, and whether an action is available.",
      },
      details: [
        {
          label: "Safety levels",
          copy: "Danger-level categories are informational only and will not offer cleanup in the MVP.",
        },
      ],
    },
    {
      id: "settings",
      navLabel: "Settings",
      kicker: "Preferences",
      title: "Local app settings",
      summary:
        "Settings will expose local preferences and plain permission explanations as the app grows.",
      status: "Empty",
      emptyState: {
        label: "No settings yet",
        title: "Configuration controls are not implemented.",
        copy: "The MVP should explain optional macOS permissions without nudging users into unnecessary broad access.",
      },
      details: [
        {
          label: "Privacy posture",
          copy: "Monocle remains local-first and does not include telemetry, cloud sync, or network features.",
        },
      ],
    },
  ] satisfies ScreenCopy[],
} as const;
