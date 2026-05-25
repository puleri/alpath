const filters = ["All", "Product", "Data", "Web", "Automation", "Brand"];

const portfolioItems = [
  { name: "Distinctive Glass", type: "Product", logo: "/ClientLogos/distinctiveGlass.png", accent: "#2633ff" },
  { name: "PRO3", type: "Automation", logo: "/ClientLogos/pro3.png", accent: "#4f46e5" },
  { name: "Liquid Sound", type: "Web", logo: "/ClientLogos/liquidSound.gif", accent: "#0ea5e9" },
  { name: "Lennon Wealth", type: "Data", logo: "/ClientLogos/lennonwc.png", accent: "#7c3aed" },
  { name: "Lockhart Suver", type: "Brand", logo: "/ClientLogos/lockhartsuver.webp", accent: "#0369a1" },
  { name: "Roots", type: "Product", logo: "/ClientLogos/roots.svg", accent: "#4338ca" },
];

export const metadata = {
  title: "Portfolio | Alpath",
  description:
    "Explore a curated portfolio of our favorite projects across strategy, systems, and digital experiences.",
};

export default function OurWorkPage() {
  return (
    <main className="our-work-page">
      <section className="our-work-hero container">
        <h1>Our work</h1>
        <p>
          We partner with ambitious teams at every phase of growth, collaborating as an extension of their organization while they accelerate and hit meaningful goals. Explore a few of our favorite projects.
        </p>
      </section>

      <section className="our-work-subnav-wrap">
        <div className="our-work-subnav container" aria-label="Portfolio filters">
          {filters.map((filter) => (
            <button key={filter} className="our-work-filter" type="button">
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="our-work-grid container" aria-label="Portfolio projects">
        {portfolioItems.map((item, index) => (
          <article
            key={item.name}
            className="portfolio-card"
            style={{ "--portfolio-accent": item.accent }}
          >
            <span className="portfolio-grid-mark" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="portfolio-shape" aria-hidden="true" />
            <p className="portfolio-type">{item.type}</p>
            <h2>{item.name}</h2>
            <div className="portfolio-logo-wrap" aria-hidden="true">
              <img src={item.logo} alt="" className="portfolio-logo" />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
