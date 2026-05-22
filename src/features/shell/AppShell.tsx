import { STRINGS, type ScreenCopy, type ScreenId } from "../../app/strings";

type AppShellProps = {
  activeScreen: ScreenId;
  activeScreenContent: ScreenCopy;
  onScreenChange: (screen: ScreenId) => void;
};

export function AppShell({
  activeScreen,
  activeScreenContent,
  onScreenChange,
}: AppShellProps) {
  return (
    <div className="app-layout">
      <aside className="sidebar" aria-label={STRINGS.nav.label}>
        <div className="brand-block">
          <p className="eyebrow">{STRINGS.app.status}</p>
          <h1>{STRINGS.app.title}</h1>
          <p>{STRINGS.app.summary}</p>
        </div>

        <nav className="screen-nav">
          {STRINGS.screens.map((screen) => (
            <button
              aria-current={screen.id === activeScreen ? "page" : undefined}
              className="nav-button"
              key={screen.id}
              onClick={() => onScreenChange(screen.id)}
              type="button"
            >
              {screen.navLabel}
            </button>
          ))}
        </nav>

        <div className="safety-note" role="note">
          <strong>{STRINGS.safety.title}</strong>
          <span>{STRINGS.safety.copy}</span>
        </div>
      </aside>

      <main className="workspace" aria-labelledby="screen-title">
        <header className="workspace-header">
          <div>
            <p className="eyebrow">{activeScreenContent.kicker}</p>
            <h2 id="screen-title">{activeScreenContent.title}</h2>
            <p className="screen-summary">{activeScreenContent.summary}</p>
          </div>
          <span className="status-pill">{activeScreenContent.status}</span>
        </header>

        {activeScreenContent.id === "dashboard" ? (
          <DashboardScreen screen={activeScreenContent} />
        ) : (
          <EmptyFeatureScreen screen={activeScreenContent} />
        )}
      </main>
    </div>
  );
}

function DashboardScreen({ screen }: { screen: ScreenCopy }) {
  return (
    <div className="screen-stack">
      <section
        className="metric-grid"
        aria-label={STRINGS.dashboard.metricsLabel}
      >
        {STRINGS.dashboard.metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </article>
        ))}
      </section>

      <section
        className="empty-state"
        aria-labelledby={`${screen.id}-empty-title`}
      >
        <div>
          <p className="section-label">{screen.emptyState.label}</p>
          <h3 id={`${screen.id}-empty-title`}>{screen.emptyState.title}</h3>
          <p>{screen.emptyState.copy}</p>
        </div>
      </section>
    </div>
  );
}

function EmptyFeatureScreen({ screen }: { screen: ScreenCopy }) {
  return (
    <section
      className="feature-panel"
      aria-labelledby={`${screen.id}-empty-title`}
    >
      <div className="empty-state">
        <div>
          <p className="section-label">{screen.emptyState.label}</p>
          <h3 id={`${screen.id}-empty-title`}>{screen.emptyState.title}</h3>
          <p>{screen.emptyState.copy}</p>
        </div>
        {screen.primaryAction ? (
          <button
            className="primary-action"
            disabled={screen.primaryAction.disabled}
            type="button"
          >
            {screen.primaryAction.label}
          </button>
        ) : null}
      </div>

      <dl className="detail-list">
        {screen.details.map((detail) => (
          <div key={detail.label}>
            <dt>{detail.label}</dt>
            <dd>{detail.copy}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
