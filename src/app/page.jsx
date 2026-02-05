import CursorTrailsLayer from "./components/CursorTrailsLayer";
import CallToAction from "./components/CallToAction";
import HeroVideo from "./components/HeroVideo";
import NavigationBar from "./components/NavigationBar";
import ParticlePanels from "./components/ParticlePanels";
import RippleCircleRow from "./components/RippleCircleRow";
import Footer from "./components/Footer";

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
        <HeroVideo />
        <RippleCircleRow />
        
        <div className="container">
          <h2 className="home-section-title">
            We design and build revenue-driven software for growing businesses
          </h2>
          <div className="home-service-grid">
            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Revenue Automation</h3>
                <p>
                  Eliminate manual handoffs between marketing, sales, and
                  billing. We design systems that capture leads, move deals
                  forward, and convert activity into revenue—without adding
                  headcount.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/placeholders/revenue-automation.svg"
                  alt="Layered product interface tiles"
                />
              </div>
            </article>

            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Decision-Ready Business Intelligence</h3>
                <p>
                  Align every team on the same numbers with dashboards that
                  explain what is happening, why it matters, and what comes
                  next. Your data stays clear, current, and built for action.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/placeholders/revenue-dashboard.svg"
                  alt="Revenue system dashboard cards"
                />
              </div>
            </article>

            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Executive Visibility</h3>
                <p>
                  Give leadership the visibility they need with real-time
                  reporting that stays consistent across the entire customer
                  journey—from first touch to renewal.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/placeholders/revenue-automation.svg"
                  alt="Stacked application screens in perspective"
                />
              </div>
            </article>
          </div>
        </div>

        <section className="welcome-wrapper">
            <ParticlePanels />

        </section>

        <CallToAction />
        <Footer />


      </main>

    </>
  );
}
