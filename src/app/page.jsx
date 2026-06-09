import CallToAction from './components/CallToAction';
import HeroVideo from './components/HeroVideo';
import HomeHero from './components/HomeHero';
import ParticlePanels from './components/ParticlePanels';
import RippleCircleRow from './components/RippleCircleRow';

export const metadata = {
  title: 'Software Consulting & Development | Alpath',
};

export default function Home() {
  return (
    <>
      <main className="home">
        <HomeHero variant="rebrand" />
        <HeroVideo />
        <RippleCircleRow />

        <div className="container">
          <h2 className="home-h2">
            Designing and building revenue-driven software for growing
            businesses.
          </h2>
          <div className="home-service-grid">
            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Branding Built for Construction &amp; Architecture</h3>
                <p>
                  Rebrands for construction and architecture firms need more
                  than a new look. We support brand transitions with portfolio
                  and project showcase structure, content migration, SEO
                  redirects, and a launch plan that keeps the new site fast,
                  maintainable, and easy to build on.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/placeholders/small-projects.svg"
                  alt="Layered portfolio cards for project showcase planning"
                />
              </div>
            </article>

            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Revenue Automation</h3>
                <p>
                  Eliminate manual handoffs between marketing, sales, and
                  billing. We design systems that capture leads, move deals
                  forward, and convert activity into revenue, without adding
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
                  src="/placeholders/revenue-dashboard.png"
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
                  journey, from first touch to renewal.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/placeholders/revenue-system-heading.png"
                  alt="Stacked application screens in perspective"
                />
              </div>
            </article>

            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Website Support &amp; Iteration</h3>
                <p>
                  Keep critical website systems moving after launch with focused
                  improvements, migration cleanup, maintenance, and landing page
                  support that fit into a larger growth roadmap.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/placeholders/small-projects.svg"
                  alt="Stacked website support and iteration screens"
                />
              </div>
            </article>
          </div>
        </div>

        <CallToAction variant="websiteAudit" />
      </main>
    </>
  );
}
