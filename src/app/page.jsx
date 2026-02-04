import LeadershipRevenueDashboard from "./components/LeadershipRevenueDashboard";
import CursorTrailsLayer from "./components/CursorTrailsLayer";
import NavigationBar from "./components/NavigationBar";
import ParticlePanels from "./components/ParticlePanels";
import RippleCircleRow from "./components/RippleCircleRow";

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

        </section>
        <section className="hero-video-section">
          <video
            className="hero-video"
            poster="/videos/hero-poster.jpg"
            muted
            playsInline
            loop
            autoPlay
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </section>
          <RippleCircleRow />
          <h2>
            We design and build revenue-driven software for growing businesses
          </h2>

        <section className="welcome-wrapper">
            <ParticlePanels />

        </section>


      </main>

    </>
  );
}
