import { STRINGS } from "./app/strings";

const readinessItems = [
  STRINGS.readiness.noScanning,
  STRINGS.readiness.noCleanup,
  STRINGS.readiness.localFirst,
];

export function App() {
  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="app-title">
        <p className="eyebrow">{STRINGS.app.status}</p>
        <h1 id="app-title">{STRINGS.app.title}</h1>
        <p className="lede">{STRINGS.app.summary}</p>
      </section>

      <section className="panel" aria-labelledby="mvp-title">
        <div>
          <p className="section-label">{STRINGS.mvp.label}</p>
          <h2 id="mvp-title">{STRINGS.mvp.title}</h2>
        </div>
        <ul className="feature-list">
          {STRINGS.mvp.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="panel safety-panel" aria-labelledby="safety-title">
        <div>
          <p className="section-label">{STRINGS.safety.label}</p>
          <h2 id="safety-title">{STRINGS.safety.title}</h2>
        </div>
        <ul className="status-list">
          {readinessItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
