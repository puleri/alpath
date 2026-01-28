import LeadershipRevenueDashboard from "./components/LeadershipRevenueDashboard";
import CursorTrailsLayer from "./components/CursorTrailsLayer";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="home">
        <CursorTrailsLayer />

        <section className="hero">
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
          <p>
            We blend strategy, design, and engineering to build the infrastructure ambitious
            teams need to lead with clarity.
          </p>
          <div className="hero-actions">
            <button className="primary-button" type="button">
              Book a strategy call
            </button>
            <button className="secondary-button" type="button">
              Explore the playbook
            </button>
          </div>
        </section>

      </main>

    </>
  );
}
