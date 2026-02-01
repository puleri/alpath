import LeadershipRevenueDashboard from "./components/LeadershipRevenueDashboard";
import CursorTrailsLayer from "./components/CursorTrailsLayer";
import NavigationBar from "./components/NavigationBar";
import ParticlePanels from "./components/ParticlePanels";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="home">
        <CursorTrailsLayer />

        <section className="welcome-wrapper">
          <div className="welcome-section">
            <div className="hero-brand">
              <img
                className="brand-icon-hero"
                src="/alpath/sign.svg"
                alt="Alpath Engineering brand mark"
              />
              <span className="hero-brand-text"><span className="alpath-weight">Alpath</span> Engineering</span>
            </div>
            <h1 className="hero-title">
              Digital systems that keep revenue visible, trusted, and ready to scale.
            </h1>

            <div className="hero-actions">
              <button className="primary-button" type="button">
                Book a strategy call
              </button>
              <button className="secondary-button" type="button">
                Explore the playbook
              </button>
            </div>
          </div>

          <ParticlePanels />

        </section>

      </main>

    </>
  );
}
