import AiSearchDemo from './AiSearchDemo';
import AiVisibilityRoiGraphic from './AiVisibilityRoiGraphic';
import ServiceBreadcrumbs from '../../components/ServiceBreadcrumbs';

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

const researchSources = [
  {
    id: 1,
    publisher: 'Profound',
    title: '10-step framework for generative engine optimization [2025 guide]',
    url: 'https://www.tryprofound.com/articles/generative-engine-optimization-geo-guide-2025',
  },
  {
    id: 2,
    publisher: 'First Line Software',
    title: 'AEO vs GEO vs SEO: Key Differences Explained',
    url: 'https://firstlinesoftware.com/blog/aeo-vs-geo-vs-seo/',
  },
  {
    id: 3,
    publisher: 'SEO.com',
    title: 'AEO vs. SEO: Key Differences and Importance in Digital Marketing',
    url: 'https://www.seo.com/ai/aeo-vs-seo/',
  },
  {
    id: 4,
    publisher: 'Morningstar',
    title:
      'AI Search Engineers Identify Answer Engine Optimization as the Fastest-Growing Discipline in Professional Service Digital Marketing and Release the Complete AEO Definition Framework',
    url: 'https://www.morningstar.com/news/accesswire/1180186msn/ai-search-engineers-identify-answer-engine-optimization-as-the-fastest-growing-discipline-in-professional-service-digital-marketing-and-release-the-complete-aeo-definition-framework',
  },
  {
    id: 5,
    publisher: 'HubSpot Blog',
    title:
      'Answer engine optimization vs. traditional SEO: What marketers need to know',
    url: 'https://blog.hubspot.com/marketing/aeo-vs-seo',
  },
  {
    id: 6,
    publisher: 'Discovered Labs',
    title: 'GEO content strategy: How to write for AI search and citations',
    url: 'https://discoveredlabs.com/blog/geo-content-strategy-how-to-write-for-ai-search-and-citations',
  },
  {
    id: 7,
    publisher: 'Mention Network',
    title:
      'GEO for AI visibility: how generative engines cite and recommend your brand',
    url: 'https://mention.network/learn/generative-engine-optimization-geo-ai-visibility/',
  },
  {
    id: 8,
    publisher: 'Princeton University',
    title: 'GEO: Generative Engine Optimization',
    url: 'https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/',
  },
  {
    id: 9,
    publisher: 'Exposure Ninja',
    title: 'Generative Engine Optimisation: How To Rank in AI Search',
    url: 'https://exposureninja.com/blog/generative-engine-optimisation/',
  },
  {
    id: 10,
    publisher: 'AIThinkerLab',
    title:
      'Generative Engine Optimization (GEO) 2026: Princeton-Backed Playbook for AI Search',
    url: 'https://aithinkerlab.com/generative-engine-optimization-2026/',
  },
  {
    id: 11,
    publisher: 'Omnibound',
    title: 'Generative Engine Optimization Statistics (2026): 60+ Data Points',
    url: 'https://www.omnibound.ai/blog/generative-engine-optimization-statistics',
  },
  {
    id: 12,
    publisher: 'KIME',
    title: 'LLM-Powered Search vs. Traditional Search: 2025–2030 Forecast',
    url: 'https://kime.ai/blog/llm-search-vs-traditional-search-forecast',
  },
  {
    id: 13,
    publisher: 'HawkSEM',
    title: "LLMs vs. Traditional Search: What's Changing in SEO + How to Adapt",
    url: 'https://hawksem.com/blog/llms-vs-traditional-search-results/',
  },
  {
    id: 14,
    publisher: 'Optimizely',
    title: "SEO vs AEO: What's the difference and why it matters",
    url: 'https://www.optimizely.com/field-notes/articles/seo-vs-aeo',
  },
  {
    id: 15,
    publisher: 'HubSpot Guide',
    title: 'Show Up in AI Search with Answer Engine Optimization (AEO)',
    url: 'https://www.hubspot.com/products/marketing/aeo-guide',
  },
  {
    id: 16,
    publisher: 'Internal synthesis',
    title: 'The Paradigmatic Convergence of Search: An Analytical Blueprint',
    note: 'Internal markdown document curated from the supplied industry analyses.',
  },
  {
    id: 17,
    publisher: 'DerivateX',
    title:
      'The Princeton GEO Paper in Plain English: 5 Tactics That Boost AI Citation by 40%',
    url: 'https://derivatex.agency/blog/princeton-geo-paper-plain-english/',
  },
  {
    id: 18,
    publisher: 'Siteimprove',
    title:
      'What is Answer Engine Optimization, and Why Should Enterprise Marketers Care?',
    url: 'https://www.siteimprove.com/blog/what-is-answer-engine-optimization/',
  },
  {
    id: 19,
    publisher: 'Jasper.ai',
    title:
      'What is Generative Engine Optimization? GEO vs AEO vs SEO Guide 2026',
    url: 'https://www.jasper.ai/blog/geo-aeo',
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

      <ServiceBreadcrumbs
        currentLabel="AI Search Visibility"
        currentPath="/services/ai-search-visibility"
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
          <AiSearchDemo />
        </div>
      </section>
      <AiVisibilityRoiGraphic />

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
          <p>GEO, AEO, and LLMO</p>
          <h2 id="ai-search-system-heading">What do the acronyms stand for?</h2>
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

      <section
        id="ai-search-references"
        className="ai-search-references"
        aria-labelledby="ai-search-references-heading"
      >
        <header>
          <div>
            <p className="ai-search-card-label">Research consulted</p>
            <h2 id="ai-search-references-heading">Sources &amp; references.</h2>
          </div>
          <p>
            Nineteen sources informed the research behind this page and its AI
            visibility illustration. External references open in a new tab.
          </p>
        </header>

        <ol className="ai-search-reference-list">
          {researchSources.map((source) => (
            <li id={`ai-research-source-${source.id}`} key={source.id}>
              <span aria-hidden="true">
                {String(source.id).padStart(2, '0')}
              </span>
              <div>
                <p>{source.publisher}</p>
                {source.url ? (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.title} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <strong>{source.title}</strong>
                )}
                {source.note ? <small>{source.note}</small> : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
