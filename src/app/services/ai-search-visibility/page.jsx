const methodology = [
  {
    title: 'Be findable.',
    description:
      'Remove crawl, indexation, performance, and discovery barriers that keep useful pages out of search and answer engines.',
  },
  {
    title: 'Be understood.',
    description:
      'Make your services, locations, people, and proof unambiguous across content, metadata, and structured data.',
  },
  {
    title: 'Be credible.',
    description:
      'Publish original, expert content supported by real experience, clear evidence, and consistent brand signals.',
  },
  {
    title: 'Be cited.',
    description:
      'Shape useful answers around buyer questions, then measure where your pages earn references and qualified visits.',
  },
];

const visibilityLayers = [
  {
    acronym: 'SEO',
    title: 'Search engine optimization',
    description:
      'Build the technical and editorial foundation that helps the right pages get discovered, indexed, and ranked.',
  },
  {
    acronym: 'AEO',
    title: 'Answer engine optimization',
    description:
      'Organize expert information so direct questions can be answered clearly, accurately, and with useful context.',
  },
  {
    acronym: 'GEO / LLMO',
    title: 'Generative and language-model optimization',
    description:
      'Strengthen the entities, authority, and citation signals that help AI systems retrieve and reference your expertise.',
  },
];

const auditDeliverables = [
  'Priority prompt and search-query benchmark',
  'Crawler, indexation, and technical discovery review',
  'Entity, metadata, and structured-data assessment',
  'Content depth and citation-gap analysis',
  'Competitor visibility comparison',
  'Prioritized 90-day implementation roadmap',
];

const measurementAreas = [
  {
    label: '01',
    title: 'Cited pages',
    description: 'Which pages are referenced and where those citations appear.',
  },
  {
    label: '02',
    title: 'Prompt visibility',
    description:
      'How consistently your brand appears for high-value buyer questions.',
  },
  {
    label: '03',
    title: 'Qualified discovery',
    description:
      'Organic and AI-referred visits that show meaningful buying intent.',
  },
  {
    label: '04',
    title: 'Conversions',
    description:
      'The inquiries and actions influenced by search and AI discovery.',
  },
];

const faqItems = [
  {
    question: 'Is GEO a replacement for SEO?',
    answer:
      'No. Strong technical SEO, useful content, and clear authority signals remain the foundation. GEO, AEO, and LLMO extend that work into the way answer engines retrieve, summarize, and cite information.',
  },
  {
    question: 'Can you guarantee that an AI answer will cite my company?',
    answer:
      'No ethical firm can guarantee a citation or recommendation. Alpath improves your eligibility, relevance, clarity, and authority, then measures where those changes create visibility and qualified demand.',
  },
  {
    question: 'Do I need to rebuild my website first?',
    answer:
      'Not necessarily. The audit starts with your current site and identifies the smallest set of technical, structural, and editorial changes needed to improve discovery. A rebuild is only recommended when the existing foundation cannot support the work.',
  },
  {
    question: 'What is included in an AI Visibility Audit?',
    answer:
      'The audit includes prompt and query benchmarking, crawler and indexation checks, entity and structured-data review, content and citation-gap analysis, competitor comparison, and a prioritized 90-day roadmap.',
  },
];

export const metadata = {
  title: 'AI Search Visibility, GEO, AEO & SEO | Alpath',
  description:
    'AI search visibility consulting for service businesses. Strengthen SEO, GEO, AEO, content, entities, and measurement so your expertise is easier to find, trust, and cite.',
  alternates: {
    canonical: '/services/ai-search-visibility',
  },
  openGraph: {
    title: 'AI Search Visibility, GEO, AEO & SEO | Alpath',
    description:
      'Make your expertise easier for search engines and AI answer systems to find, understand, trust, and cite.',
    url: '/services/ai-search-visibility',
  },
};

export default function AiSearchVisibilityPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id':
          'https://alpath.engineering/services/ai-search-visibility#service',
        name: 'AI Search Visibility Audit',
        serviceType: 'AI search visibility, GEO, AEO, LLMO, and SEO consulting',
        description:
          'An audit and prioritized roadmap that helps service businesses make their expertise easier for search engines and AI answer systems to find, understand, trust, and cite.',
        url: 'https://alpath.engineering/services/ai-search-visibility',
        provider: {
          '@type': 'Organization',
          name: 'Alpath Engineering',
          url: 'https://alpath.engineering',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://alpath.engineering/services/ai-search-visibility#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://alpath.engineering/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://alpath.engineering/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'AI Search Visibility',
            item: 'https://alpath.engineering/services/ai-search-visibility',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://alpath.engineering/services/ai-search-visibility#faq',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="ai-search-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      <section className="ai-search-hero" aria-labelledby="ai-search-heading">
        <div className="ai-search-hero-copy">
          <div className="ai-search-topline">
            <p>AI Search Visibility / GEO + AEO + SEO</p>
            <img src="/alpath/sign.svg" alt="" />
          </div>
          <h1 id="ai-search-heading">Become the source AI recommends.</h1>
          <p className="ai-search-hero-intro">
            Alpath helps service businesses earn visibility in Google and AI
            answers by making their expertise easier to find, understand, trust,
            and cite.
          </p>
          <div className="ai-search-hero-actions">
            <a className="ai-search-button is-primary" href="/contact">
              Request an AI Visibility Audit
            </a>
            <a className="ai-search-button is-secondary" href="#methodology">
              See how it works
            </a>
          </div>
        </div>

        <div className="ai-search-demo-wrap">
          <figure
            className="ai-search-demo"
            aria-labelledby="ai-search-demo-label"
          >
            <figcaption className="ai-search-demo-bar">
              <span className="ai-search-demo-product">
                ChatGPT
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="m4.5 6 3.5 3.5L11.5 6" />
                </svg>
              </span>
              <span id="ai-search-demo-label">Illustrative example</span>
              <span className="ai-search-demo-tools" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 16V4m0 0L8 8m4-4 4 4M6 12v6h12v-6" />
                </svg>
                <svg viewBox="0 0 24 24">
                  <circle cx="5" cy="12" r="1.25" />
                  <circle cx="12" cy="12" r="1.25" />
                  <circle cx="19" cy="12" r="1.25" />
                </svg>
              </span>
            </figcaption>

            <div className="ai-search-thread">
              <div className="ai-search-prompt">
                <p>
                  What is the best neighborhood for raising a family in Seattle?
                </p>
              </div>

              <div className="ai-search-assistant-row">
                <div className="ai-search-assistant-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.8a4.1 4.1 0 0 1 3.6 2.1 4.1 4.1 0 0 1 4.7 5.9 4.1 4.1 0 0 1-1.1 6.9 4.1 4.1 0 0 1-6.3 4.8 4.1 4.1 0 0 1-7.1-3.8 4.1 4.1 0 0 1-2.5-6.4 4.1 4.1 0 0 1 2.5-6.4A4.1 4.1 0 0 1 12 2.8Z" />
                    <path d="m8.1 9.2 3.9-2.3 3.9 2.3v4.6L12 16.1l-3.9-2.3V9.2Z" />
                  </svg>
                </div>

                <div className="ai-search-assistant-content">
                  <div className="ai-search-answer">
                    <p>
                      For families comparing parks, neighborhood amenities,
                      commute options, and nearby schools, Green Lake is often a
                      strong place to start.
                      <a className="ai-search-citation" href="#ai-source-1">
                        <span aria-hidden="true">Y</span> Your Company
                      </a>
                    </p>
                    <p>
                      Ballard and West Seattle are also worth comparing based on
                      a household&apos;s priorities, commute, and budget.
                      <a className="ai-search-citation" href="#ai-source-2">
                        <span aria-hidden="true">S</span> Seattle.gov
                      </a>
                      <a className="ai-search-citation" href="#ai-source-3">
                        <span aria-hidden="true">S</span> Schools
                      </a>
                    </p>
                  </div>

                  <div className="ai-search-sources">
                    <div className="ai-search-sources-heading">
                      <p className="ai-search-sources-label">Sources</p>
                      <span>3</span>
                    </div>
                    <ol>
                      <li id="ai-source-1" className="is-featured">
                        <span className="ai-search-source-icon">Y</span>
                        <div>
                          <strong>Your Company</strong>
                          <p>Seattle Neighborhood Guide</p>
                        </div>
                      </li>
                      <li id="ai-source-2">
                        <span className="ai-search-source-icon">S</span>
                        <div>
                          <strong>Seattle.gov</strong>
                          <p>Neighborhood Resources</p>
                        </div>
                      </li>
                      <li id="ai-source-3">
                        <span className="ai-search-source-icon">S</span>
                        <div>
                          <strong>Seattle Public Schools</strong>
                          <p>School Finder</p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div
                    className="ai-search-response-actions"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24">
                      <rect x="8" y="8" width="11" height="11" rx="2" />
                      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M7 10v10M7 10l4-7a2 2 0 0 1 2 2v4h5a2 2 0 0 1 2 2l-1.2 7a2 2 0 0 1-2 1.7H7M3 10h4v10H3z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M7 14V4m0 10-4-7a2 2 0 0 1 2-2h5V1m-3 13h10v6H7z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v6h-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="ai-search-composer" aria-hidden="true">
                <p>Ask a follow-up</p>
                <div>
                  <span className="ai-search-composer-add">+</span>
                  <span className="ai-search-composer-controls">
                    <svg viewBox="0 0 24 24">
                      <rect x="9" y="3" width="6" height="12" rx="3" />
                      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                    </svg>
                    <span className="ai-search-composer-send">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 19V5m0 0-5 5m5-5 5 5" />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>

              <p className="ai-search-demo-outcome">
                Your expertise becomes part of the answer.
              </p>
            </div>
          </figure>
        </div>
      </section>

      <section
        className="ai-search-shift"
        aria-labelledby="ai-search-shift-heading"
      >
        <div className="ai-search-section-heading">
          <p>Buyer behavior changed</p>
          <h2 id="ai-search-shift-heading">Search became an answer.</h2>
        </div>
        <div className="ai-search-shift-copy">
          <p>
            Your buyers are not only scanning a page of links. They are asking
            search and AI systems to compare options, explain tradeoffs, and
            recommend a next step.
          </p>
          <p>
            If your expertise is difficult to retrieve, understand, or verify,
            someone else shapes the answer before a prospect ever reaches your
            website.
          </p>
        </div>
      </section>

      <section
        className="ai-search-section ai-search-system"
        aria-labelledby="ai-search-system-heading"
      >
        <header className="ai-search-section-heading">
          <p>The category, made practical</p>
          <h2 id="ai-search-system-heading">One visibility system.</h2>
          <div className="ai-search-heading-intro">
            Some call it GEO, AEO, or LLMO. We treat it as one connected program
            built on a strong SEO foundation.
          </div>
        </header>
        <div className="ai-search-layer-grid">
          {visibilityLayers.map((layer) => (
            <article key={layer.acronym} className="ai-search-layer-card">
              <p className="ai-search-card-label">{layer.acronym}</p>
              <div>
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="methodology"
        className="ai-search-section ai-search-method"
        aria-labelledby="ai-search-method-heading"
      >
        <header className="ai-search-section-heading is-wide">
          <p>How the work connects</p>
          <h2 id="ai-search-method-heading">
            Be findable. Be understood. Be credible. Be cited.
          </h2>
        </header>
        <div className="ai-search-method-grid">
          {methodology.map((item, index) => (
            <article key={item.title}>
              <p className="ai-search-card-label">
                {String(index + 1).padStart(2, '0')}
              </p>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="ai-search-audit"
        aria-labelledby="ai-search-audit-heading"
      >
        <div className="ai-search-audit-copy">
          <p className="ai-search-card-label">The starting point</p>
          <h2 id="ai-search-audit-heading">
            Start with an AI Visibility Audit.
          </h2>
          <p>
            See how your business appears today, where competitors are shaping
            the answer, and which changes will create the most leverage next.
          </p>
          <a className="ai-search-button is-light" href="/contact">
            Request your audit
          </a>
        </div>
        <ol className="ai-search-audit-list">
          {auditDeliverables.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="ai-search-section ai-search-measurement"
        aria-labelledby="ai-search-measurement-heading"
      >
        <header className="ai-search-section-heading">
          <p>What improves</p>
          <h2 id="ai-search-measurement-heading">
            Measure visibility beyond rankings.
          </h2>
          <div className="ai-search-heading-intro">
            Rankings still matter. They are no longer the only signal that your
            expertise is being discovered and trusted.
          </div>
        </header>
        <div className="ai-search-measurement-grid">
          {measurementAreas.map((item) => (
            <article key={item.label}>
              <p className="ai-search-card-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="ai-search-section ai-search-faq"
        aria-labelledby="ai-search-faq-heading"
      >
        <header className="ai-search-section-heading">
          <p>Common questions</p>
          <h2 id="ai-search-faq-heading">What businesses should know.</h2>
        </header>
        <dl>
          {faqItems.map((item, index) => (
            <div key={item.question}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        className="ai-search-final-cta"
        aria-labelledby="ai-search-cta-heading"
      >
        <img src="/alpath/sign.svg" alt="" />
        <div>
          <p className="ai-search-card-label">Your next source starts here</p>
          <h2 id="ai-search-cta-heading">
            Make your expertise easier to find - and easier to cite.
          </h2>
        </div>
        <a className="ai-search-button is-light" href="/contact">
          Request an AI Visibility Audit
        </a>
      </section>
    </main>
  );
}
