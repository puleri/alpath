import LeadPulseBadge from './LeadPulseBadge';

const highlightedStudies = [
  {
    title: 'Lockhart | Suver',
    category: 'WordPress migration, Next.js, performance',
    logo: '/client-logos/lockhartsuver-white.webp',
    logoBadgeTone: 'dark',
    image: '/photos/portfolio/lockhart-suver.png',
    imageAlt: 'Architecture plans being reviewed on a conference table',
    summary:
      'An exact 1:1 migration from WordPress to Next.js, powered by a custom scraper that recovered every media asset and lifted Lighthouse from 74/100 to 99/100.',
    details: [
      'Custom scraper crawled the full WordPress site and downloaded each media asset',
      '1:1 Next.js rebuild preserved the existing client experience',
      'Lighthouse score increased from 74/100 to 99/100 with client-owned code and media',
    ],
    href: '/case-studies/architecture-firm-rebrand-web-system',
  },
  {
    title: 'Lennon Window Cleaning',
    category: 'Web design, local SEO, conversion',
    logo: '/client-logos/lennonwc.png',
    image: '/photos/portfolio/lennonwc.png',
    imageAlt: 'Window cleaner washing exterior glass on a brick building',
    summary:
      'A clearer service-business website designed to turn local search demand into calls, quote requests, and booked work.',
    details: [
      'Service pages shaped around what customers search for before they book',
      'A simpler path from landing page to estimate request',
      'More than 300 leads generated in the first year',
    ],
    href: '/case-studies/lennon-window-cleaning-lead-generation',
  },
  {
    title: 'Distinctive Glass',
    category: 'Website, SEO, Google Ads',
    logo: '/client-logos/distinctive-glass.png',
    logoBadgeTone: 'dark',
    image: '/photos/portfolio/distinctive-glass.png',
    imageAlt: 'Gloved hand guiding glass during shop fabrication',
    summary:
      'A stronger digital foundation for a glass company that needed its web presence and paid campaigns to support real customer inquiries.',
    details: [
      'Clearer positioning for residential and commercial glass services',
      'Lead-focused page structure for quote-driven traffic',
      'Campaign-ready content paths for search and Google Ads',
    ],
  },
];

const remainingStudies = [
  {
    title: 'Kaiser Siding & Roofing',
    focus:
      'Contractor website structure, trust signals, and local service-page clarity.',
  },
  {
    title: 'Liquid Sound',
    focus:
      'Service storytelling, web refresh support, and a more polished digital presence.',
  },
  {
    title: 'Pro3 Accounting',
    focus:
      'Professional-services messaging, clearer offer structure, and inquiry quality.',
  },
  {
    title: 'Roots',
    focus:
      'Brand-adjacent product experience work with a cleaner user journey.',
  },
  {
    title: 'VHS',
    focus:
      'Web-services positioning, content hierarchy, and stronger conversion paths.',
    href: '/client-stories',
  },
];

export const metadata = {
  title: 'Selected Work | Alpath',
  description:
    'Selected web design, SEO, Google Ads, and brand work for service businesses in the Pacific Northwest.',
};

function HighlightedStudyCard({ study, index }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className="work-feature-card">
      <figure className="work-feature-visual">
        <img
          className="work-feature-image"
          src={study.image}
          alt={study.imageAlt}
        />
        <span
          className={`work-feature-logo-badge${
            study.logoBadgeTone === 'dark'
              ? ' work-feature-logo-badge-dark'
              : ''
          }`}
        >
          <img src={study.logo} alt={`${study.title} logo`} />
        </span>
      </figure>

      <div className="work-feature-body">
        <div className="work-feature-topline">
          <span>{number}</span>
          <p>{study.category}</p>
        </div>

        <div className="work-feature-copy">
          <h3>{study.title}</h3>
          <p>{study.summary}</p>
        </div>

        <ul className="work-feature-list">
          {study.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>

        {study.href ? (
          <a href={study.href} className="work-card-link">
            View case study
          </a>
        ) : null}
      </div>
    </article>
  );
}

function RemainingStudyItem({ study }) {
  const content = (
    <>
      <span>{study.title}</span>
      <p>{study.focus}</p>
    </>
  );

  if (study.href) {
    return (
      <li>
        <a className="work-study-row" href={study.href}>
          {content}
        </a>
      </li>
    );
  }

  return (
    <li>
      <div className="work-study-row">{content}</div>
    </li>
  );
}

function BrandWorkCta() {
  return (
    <section className="work-brand-cta" aria-labelledby="work-brand-cta-title">
      <div className="work-brand-cta-inner container">
        <div>
          <p className="our-work-eyebrow">Brand work</p>
          <h2 id="work-brand-cta-title">
            Make the next version of your business easier to trust.
          </h2>
        </div>
        <div className="work-brand-cta-copy">
          <p>
            If your website, search presence, or campaigns no longer match the
            quality of your work, we can help tighten the brand, rebuild the
            path to inquiry, and launch with a plan.
          </p>
          <a className="primary-button" href="/contact">
            Start a brand conversation
          </a>
        </div>
      </div>
    </section>
  );
}

export default function OurWorkPage() {
  return (
    <main className="our-work-page">
      <section className="our-work-hero container">
        <div className="our-work-hero-copy">
          <p className="our-work-eyebrow">Selected work</p>
          <h1>Selected work</h1>
          <p>
            A curated view of projects we are glad to stand behind, spanning web
            design, search strategy, and Google Ads support for service
            businesses around the Pacific Northwest. If one of these feels close
            to where you want your business to go, that is usually the best
            place to begin.
          </p>
        </div>
        <LeadPulseBadge />
      </section>

      <section
        className="work-featured-section container"
        aria-labelledby="featured-work-heading"
      >
        <div className="work-section-heading">
          <p className="our-work-eyebrow">Highlighted case studies</p>
          <h2 id="featured-work-heading">Three projects worth a closer look</h2>
        </div>

        <div className="work-feature-grid">
          {highlightedStudies.map((study, index) => (
            <HighlightedStudyCard
              key={study.title}
              study={study}
              index={index}
            />
          ))}
        </div>
      </section>

      <section
        className="work-remaining-section container"
        aria-labelledby="remaining-work-heading"
      >
        <div className="work-section-heading">
          <p className="our-work-eyebrow">More case studies</p>
          <h2 id="remaining-work-heading">Other work in the archive</h2>
        </div>

        <ul className="work-study-list">
          {remainingStudies.map((study) => (
            <RemainingStudyItem key={study.title} study={study} />
          ))}
        </ul>
      </section>

      <BrandWorkCta />
    </main>
  );
}
