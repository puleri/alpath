'use client';

import { useMemo, useState } from 'react';

const filterGroups = [
  {
    id: 'challenge',
    label: 'By Challenge',
    options: [
      'All',
      'Clarify positioning',
      'Modernize visual identity',
      'Rebuild the website',
      'Improve conversion',
      'Strengthen local visibility',
    ],
  },
  {
    id: 'businessType',
    label: 'By Business Type',
    options: [
      'All',
      'Professional services',
      'Local service businesses',
      'SaaS / tech-enabled',
      'Growth-stage companies',
    ],
  },
  {
    id: 'focus',
    label: 'By Focus',
    options: [
      'All',
      'Brand Strategy',
      'Visual Identity',
      'Web Design',
      'SEO & Conversion',
    ],
  },
];

const useCases = [
  {
    title: 'Repositioning an Established Service Business',
    context: 'For firms whose reputation has outgrown the way they describe it',
    problem:
      'The business is credible, but its positioning sounds generic or dated.',
    workApplied: 'Brand Strategy + Visual Identity',
    outcome:
      'A clearer market position and a brand people can understand quickly.',
    challenge: 'Clarify positioning',
    businessType: 'Professional services',
    focusAreas: ['Brand Strategy', 'Visual Identity'],
  },
  {
    title: 'Modernizing a Brand Without Losing Recognition',
    context:
      'For growing companies ready to look as capable as they have become',
    problem:
      'The existing identity no longer reflects the quality, maturity, or direction of the business.',
    workApplied: 'Brand Strategy + Visual Identity',
    outcome:
      'A more distinctive, consistent identity built on what customers already trust.',
    challenge: 'Modernize visual identity',
    businessType: 'Growth-stage companies',
    focusAreas: ['Brand Strategy', 'Visual Identity'],
  },
  {
    title: 'Rebuilding a Website Around Buyer Decisions',
    context:
      'For firms with an outdated site and a strong real-world reputation',
    problem:
      'Visitors struggle to understand the offer, see proof, or know what to do next.',
    workApplied: 'Web Design + Brand Strategy',
    outcome:
      'A focused website that communicates value and guides the right visitors toward action.',
    challenge: 'Rebuild the website',
    businessType: 'Professional services',
    focusAreas: ['Web Design', 'Brand Strategy'],
  },
  {
    title: 'Turning Local Search Demand Into Better Inquiries',
    context: 'For local operators competing in crowded service markets',
    problem:
      'The business is discoverable, but the site does not turn enough searches into qualified conversations.',
    workApplied: 'Web Design + SEO & Conversion',
    outcome:
      'Clearer service pages, stronger local relevance, and a shorter path to inquiry.',
    challenge: 'Strengthen local visibility',
    businessType: 'Local service businesses',
    focusAreas: ['Web Design', 'SEO & Conversion'],
  },
  {
    title: 'Fixing Conversion Friction Across Key Pages',
    context:
      'For teams with traffic, credibility, and too few meaningful actions',
    problem: 'Important pages bury the value proposition, proof, or next step.',
    workApplied: 'Web Design + SEO & Conversion',
    outcome:
      'A clearer content hierarchy and stronger conversion path without adding more traffic.',
    challenge: 'Improve conversion',
    businessType: 'SaaS / tech-enabled',
    focusAreas: ['Web Design', 'SEO & Conversion'],
  },
  {
    title: 'Launching a New Offer With One Cohesive Story',
    context: 'For growing companies introducing a new service or direction',
    problem:
      'The offer is strong, but the message, identity, and website experience do not yet feel connected.',
    workApplied: 'Brand Strategy + Visual Identity + Web Design',
    outcome:
      'A unified launch that makes the new offer easier to recognize, trust, and choose.',
    challenge: 'Rebuild the website',
    businessType: 'Growth-stage companies',
    focusAreas: ['Brand Strategy', 'Visual Identity', 'Web Design'],
  },
];

const featuredCases = [
  {
    title: 'Strong Work, Unclear Brand',
    problem: 'The business is respected, but its value is hard to explain.',
    solution: 'Positioning, messaging, and identity direction.',
    outcome: 'A brand that is easier to understand and trust.',
  },
  {
    title: 'Credible Business, Outdated Website',
    problem: 'The digital presence undersells the quality of the real work.',
    solution: 'Website strategy, content structure, and design.',
    outcome: 'A site that matches the reputation behind it.',
  },
  {
    title: 'Traffic, but Too Few Inquiries',
    problem: 'Visitors arrive without finding a compelling next step.',
    solution: 'Conversion-focused content, proof, and page architecture.',
    outcome: 'More qualified action from existing attention.',
  },
];

const recognitionChecklist = [
  'Our business has evolved, but our brand has not',
  'People struggle to understand what makes us different',
  'Our website no longer reflects the quality of our work',
  'We get traffic, but not enough qualified inquiries',
  'Our brand feels inconsistent across important touchpoints',
];

export default function UseCasesPage() {
  const [filters, setFilters] = useState({
    challenge: 'All',
    businessType: 'All',
    focus: 'All',
  });

  const filteredUseCases = useMemo(() => {
    return useCases.filter((useCase) => {
      const matchesChallenge =
        filters.challenge === 'All' || useCase.challenge === filters.challenge;
      const matchesBusinessType =
        filters.businessType === 'All' ||
        useCase.businessType === filters.businessType;
      const matchesFocus =
        filters.focus === 'All' || useCase.focusAreas.includes(filters.focus);

      return matchesChallenge && matchesBusinessType && matchesFocus;
    });
  }, [filters]);

  return (
    <main className="use-cases-page">
      <section className="use-cases-hero container">
        <div className="use-cases-hero-content">
          <div className="use-cases-hero-topline">
            <p className="use-cases-eyebrow">Use Cases</p>
            <img src="/alpath/sign.svg" alt="" />
          </div>
          <h1>Brand and web work for real moments of change.</h1>
          <p>
            Explore how positioning, identity, and web design help established
            businesses communicate their value, earn trust, and turn attention
            into qualified action.
          </p>
          <a className="primary-button" href="/contact">
            <span>Talk through your project</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="use-cases-hero-visual" aria-hidden="true">
          <img className="use-cases-hero-mark" src="/alpath/sign.svg" alt="" />
          <div className="hero-visual-node hero-visual-node-foundation">
            Positioning
          </div>
          <div className="hero-visual-node hero-visual-node-flow">Identity</div>
          <div className="hero-visual-node hero-visual-node-visibility">
            Website
          </div>
        </div>
      </section>

      <section className="use-cases-filters" aria-label="Filter use cases">
        <div className="container use-cases-filters-row">
          {filterGroups.map((group) => (
            <label key={group.id} className="use-cases-filter-group">
              <span>{group.label}</span>
              <select
                value={filters[group.id]}
                onChange={(event) =>
                  setFilters((previous) => ({
                    ...previous,
                    [group.id]: event.target.value,
                  }))
                }
              >
                {group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </section>

      <section className="use-cases-grid-section container">
        <div className="use-cases-grid-heading">
          <div>
            <p className="use-cases-eyebrow">Find your starting point</p>
            <h2>Use cases by challenge, business type, and focus</h2>
          </div>
          <p>{filteredUseCases.length} scenarios matched your filters.</p>
        </div>

        <div className="use-cases-grid">
          {filteredUseCases.map((useCase, index) => (
            <article key={useCase.title} className="use-case-card">
              <p className="use-case-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3>{useCase.title}</h3>
              <p className="use-case-context">{useCase.context}</p>
              <dl className="use-case-details">
                <div>
                  <dt>Problem</dt>
                  <dd>{useCase.problem}</dd>
                </div>
                <div>
                  <dt>Work applied</dt>
                  <dd>{useCase.workApplied}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{useCase.outcome}</dd>
                </div>
              </dl>
              <a href="/contact">
                <span>Discuss this use case</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="featured-use-cases"
        aria-labelledby="featured-use-cases-heading"
      >
        <div className="container">
          <header className="use-cases-section-heading is-inverted">
            <div>
              <p className="use-cases-eyebrow">Common inflection points</p>
              <h2 id="featured-use-cases-heading">Where the work begins.</h2>
            </div>
            <img src="/alpath/sign.svg" alt="" />
          </header>
          <div className="featured-use-cases-grid">
            {featuredCases.map((item, index) => (
              <article key={item.title} className="featured-use-case-card">
                <p className="use-case-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3>{item.title}</h3>
                <dl className="use-case-details">
                  <div>
                    <dt>Problem</dt>
                    <dd>{item.problem}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{item.solution}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>{item.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="system-mapping container">
        <header className="use-cases-section-heading">
          <div>
            <p className="use-cases-eyebrow">A connected practice</p>
            <h2>Brand and web work should move as one.</h2>
          </div>
        </header>
        <div className="system-mapping-rail">
          <div>
            <span aria-hidden="true">01</span>
            <p>Positioning</p>
            <small>Say the right thing</small>
          </div>
          <div>
            <span aria-hidden="true">02</span>
            <p>Identity</p>
            <small>Look like the right choice</small>
          </div>
          <div>
            <span aria-hidden="true">03</span>
            <p>Website</p>
            <small>Make the next step clear</small>
          </div>
        </div>
        <p className="system-mapping-copy">
          Positioning gives the story direction. Identity makes it recognizable.
          The website turns both into an experience people can understand,
          trust, and act on.
        </p>
      </section>

      <section className="recognition-section container">
        <header className="use-cases-section-heading">
          <div>
            <p className="use-cases-eyebrow">Recognize the moment</p>
            <h2>Does this sound like your business?</h2>
          </div>
        </header>
        <ul>
          {recognitionChecklist.map((item, index) => (
            <li key={item}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <p className="recognition-summary">
          If one of these feels familiar, the next step is usually greater
          clarity - not more disconnected marketing.
        </p>
      </section>

      <section className="use-cases-conversion container">
        <img src="/alpath/sign.svg" alt="" />
        <div>
          <p className="use-cases-eyebrow">Ready to move forward?</p>
          <h2>Let&apos;s clarify the brand and build the right website.</h2>
          <p>
            We&apos;ll identify what is unclear, what the experience needs to
            communicate, and where design can create the most meaningful change.
          </p>
        </div>
        <div className="use-cases-conversion-links">
          <a className="primary-button" href="/contact">
            <span>Start a conversation</span>
            <span aria-hidden="true">→</span>
          </a>
          <a className="secondary-button" href="/our-work">
            <span>View selected work</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
