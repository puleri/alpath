import CallToAction from './components/CallToAction';
import ClientLogoStrip from './components/ClientLogoStrip';
import HeroVideo from './components/HeroVideo';
import HomeHero from './components/HomeHero';
import RippleCircleRow from './components/RippleCircleRow';
import WhoWeAre from './components/WhoWeAre';
import { caseStudies } from '@/lib/caseStudies';

export const metadata = {
  title: 'Brand & Web Design | Alpath',
};

export default function Home() {
  const featuredRebrandStudy = caseStudies.find(
    (study) => study.slug === 'architecture-firm-rebrand-web-system',
  );

  return (
    <>
      <main className="home">
        <HomeHero variant="rebrand" />
        {/* <HeroVideo /> */}
        <RippleCircleRow />
        <ClientLogoStrip />
        <WhoWeAre />

        <section
          className="home-proof-section container"
          aria-labelledby="home-proof-heading"
        >
        </section>

        <div className="container">
          <h2 className="home-h2">
            Building clear brands and websites that help growing businesses earn
            trust.
          </h2>
          <div className="home-service-grid">
            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Seattle Architecture Firm Marketing</h3>
                <p>
                  We help Seattle architecture firms present their
                  work with the clarity their projects deserve. From portfolio
                  structure and project storytelling to brand polish and SEO
                  migration, we build sites that make technical credibility easy
                  for clients and partners to understand.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/photos/home/architecture.png"
                  alt="Architecture firm portfolio project"
                />
              </div>
            </article>

            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Construction Company Websites</h3>
                <p>
                  Construction companies need websites that build trust before a
                  first call. We organize services, project experience, safety
                  signals, and inquiry paths into a professional web presence
                  that supports bids, referrals, and long-term growth.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/photos/home/climate-pledge.png"
                  alt="Climate Pledge Arena website project"
                />
              </div>
            </article>

            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Interior Design Business Growth</h3>
                <p>
                  Interior design businesses sell taste, process, and trust at
                  once. We shape portfolios, service pages, and lead paths so
                  prospective clients can see your style, understand how you
                  work, and feel ready to start a conversation.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/photos/home/interior-design.png"
                  alt="Interior design website project"
                />
              </div>
            </article>

            <article className="home-service-row">
              <div className="home-service-copy">
                <h3>Local Service Business Leads</h3>
                <p>
                  Small businesses like window cleaners, bookkeepers, and local
                  service teams need practical marketing that turns searches
                  into calls. We build clear websites, local SEO foundations,
                  and conversion paths that help the right customers find you.
                </p>
              </div>
              <div className="home-service-visual">
                <img
                  src="/photos/home/window-wash.png"
                  alt="Window washing service website project"
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
                  src="/photos/home/web-design.png"
                  alt="Web design project interface"
                />
              </div>
            </article>
          </div>
        </div>

        <CallToAction variant="rebrandReadiness" />
      </main>
    </>
  );
}
