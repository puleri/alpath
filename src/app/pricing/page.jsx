import { redirect } from 'next/navigation';

import CallToAction from '../components/CallToAction';
import PricingEstimator from './PricingEstimator';

const websitePlans = [
  {
    name: 'Starter',
    price: '$5,500',
    description: 'For simple service businesses that need a clear, credible site.',
    items: [
      'Core messaging and page structure',
      'Custom responsive design',
      'Up to 5 key pages',
      'Launch support and basic SEO setup',
    ],
  },
  {
    name: 'Growth',
    badge: 'Popular',
    price: '$8,500-$12,000',
    description: 'For growing teams that need stronger positioning and conversion paths.',
    items: [
      'Positioning and service-page strategy',
      'Custom design system',
      'Portfolio, case study, or offer pages',
      'Analytics, redirects, and launch QA',
    ],
  },
  {
    name: 'Premium',
    price: '$18,000-$30,000+',
    description: 'For more complex sites, migrations, and multi-service businesses.',
    items: [
      'Deeper strategy and content architecture',
      'Advanced page systems and integrations',
      'WordPress or legacy-site migration',
      'Performance, SEO, and handoff support',
    ],
  },
];

const adsPlans = [
  {
    name: 'Foundation',
    price: '$750/mo',
    description: 'For small accounts that need clean setup and consistent oversight.',
    items: [
      'Campaign cleanup or launch',
      'Monthly optimization',
      'Conversion tracking review',
      'Simple monthly reporting',
    ],
  },
  {
    name: 'Growth',
    badge: 'Popular',
    price: '$1,000/mo',
    description: 'For active local-service campaigns that need steady improvement.',
    items: [
      'Search campaign management',
      'Keyword and negative keyword work',
      'Landing-page recommendations',
      'Monthly strategy call and reporting',
    ],
  },
  {
    name: 'Performance',
    price: '$2,000-$5,000+/mo',
    description: 'For larger accounts, multi-location campaigns, or aggressive growth goals.',
    items: [
      'Multi-campaign management',
      'Testing roadmap and budget planning',
      'Lead-quality analysis',
      'Deeper reporting and stakeholder support',
    ],
  },
];

const bundlePlans = [
  {
    name: 'Foundation',
    price: '$1,500/mo',
    description: 'For teams that want the basics handled after launch.',
    items: ['Website care', 'Light SEO support', 'Monthly reporting', 'Small updates'],
  },
  {
    name: 'Growth',
    badge: 'Popular',
    price: '$2,750/mo',
    description: 'For businesses that want coordinated website, SEO, and ads support.',
    items: [
      'Website iteration',
      'SEO management',
      'Google Ads management',
      'Monthly strategy call',
    ],
  },
  {
    name: 'Performance',
    price: '$4,500+/mo',
    description: 'For companies that need active growth support across channels.',
    items: [
      'Conversion strategy',
      'SEO and content roadmap',
      'Ads management',
      'Executive-ready reporting',
    ],
  },
];

const seoPlans = [
  {
    name: 'Initial SEO Audit and Strategy',
    price: '$2,500-$5,000',
    description: 'A focused starting point for teams that need clarity before committing.',
    items: [
      'Technical SEO review',
      'Keyword and competitor map',
      'Content opportunities',
      'Prioritized 90-day roadmap',
    ],
  },
  {
    name: 'Standard',
    badge: 'Popular',
    price: '$2,500/mo',
    description: 'Monthly SEO management for sites that need steady improvement.',
    items: [
      'Technical improvements',
      'Content direction',
      'Local SEO support',
      'Reporting and strategy calls',
    ],
  },
  {
    name: 'Advanced',
    price: '$4,500+/mo',
    description: 'For competitive markets, multi-location businesses, or larger content programs.',
    items: [
      'Deeper content roadmap',
      'Conversion-focused SEO work',
      'Ongoing technical improvements',
      'More frequent reporting',
    ],
  },
];

const customWork = [
  {
    title: 'Website support',
    price: '$150/hr',
    copy: 'Content changes, small fixes, page updates, and post-launch improvements.',
  },
  {
    title: 'Strategy sprint',
    price: '$1,500',
    copy: 'A short engagement to clarify positioning, offer structure, or a launch plan.',
  },
  {
    title: 'CRM integrations',
    price: 'Custom',
    copy: 'Forms, lead routing, automation, reporting, and systems that connect to your sales process.',
  },
];

const faqs = [
  {
    question: 'Why do you publish pricing?',
    answer:
      'Because nobody enjoys entering a sales process just to learn whether the budget is even realistic. Ranges help both sides start with a better conversation.',
  },
  {
    question: 'Are these fixed packages?',
    answer:
      'No. They are useful starting points. We scope around the business problem, the complexity of the work, and what will actually move the outcome.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer:
      'Project work is scoped up front. Monthly management can be structured around the level of support you need, and we will talk through that before anything starts.',
  },
  {
    question: 'Is ad spend included?',
    answer:
      'No. Google Ads media spend is paid directly to Google. Our management fee covers strategy, setup, optimization, reporting, and guidance.',
  },
  {
    question: 'Can we start with strategy first?',
    answer:
      'Yes. If you are not sure what you need, a strategy sprint or audit is often the cleanest first move.',
  },
  {
    question: 'Will I talk to a salesperson?',
    answer:
      'No. You will talk to someone who can think through the work with you and tell you what makes sense.',
  },
];

export const metadata = {
  title: 'Pricing | Alpath',
  description:
    'Transparent pricing ranges for Alpath websites, SEO, Google Ads, and ongoing digital growth support.',
};

function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="pricing-section-intro">
      <p className="pricing-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function PriceCard({ plan }) {
  return (
    <article className={`pricing-card${plan.badge ? ' pricing-card-featured' : ''}`}>
      <div className="pricing-card-top">
        <h3>{plan.name}</h3>
        {plan.badge ? <span>{plan.badge}</span> : null}
      </div>
      <p className="pricing-card-price">{plan.price}</p>
      <p className="pricing-card-copy">{plan.description}</p>
      <ul>
        {plan.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function PriceGrid({ plans }) {
  return (
    <div className="pricing-card-grid">
      {plans.map((plan) => (
        <PriceCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
}

function NoteCard({ title, children }) {
  return (
    <article className="pricing-note-card">
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default function PricingPage() {
  redirect('/');

  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="container pricing-hero-grid">
          <div className="pricing-hero-copy">
            <p className="pricing-eyebrow">Pricing</p>
            <h1>Transparent pricing for websites, SEO, and Google Ads.</h1>
            <p>
              Clear ranges before the first call, practical recommendations after
              it. We will tell you what makes sense for your business, your
              timeline, and your budget.
            </p>
            <div className="pricing-hero-actions">
              <a className="primary-button" href="/contact">
                Start a conversation
              </a>
              <a className="secondary-button" href="#estimate">
                Estimate your investment
              </a>
            </div>
            <ul className="pricing-proof-list" aria-label="Pricing principles">
              <li>No obligation</li>
              <li>Strategist-led calls</li>
              <li>Real project ranges</li>
            </ul>
          </div>

          <figure className="pricing-hero-media">
            <img
              src="/photos/home/web-design.png"
              alt="Brand guidelines and website work displayed on a desktop monitor"
            />
            <figcaption>
              Pricing is scoped around the outcome, not a generic menu of tasks.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pricing-band pricing-band-dark">
        <div className="container">
          <SectionIntro
            eyebrow="Before we price anything"
            title="Not every business needs the same thing."
          >
            The point of transparent pricing is not to force you into a package.
            It is to help you see the shape of the investment before we talk.
          </SectionIntro>
          <div className="pricing-note-grid">
            <NoteCard title="Website rebuilds">
              Best when the site is unclear, slow, hard to update, or no longer
              matches the quality of the business.
            </NoteCard>
            <NoteCard title="SEO and Google Ads">
              Best when the business needs better qualified traffic, cleaner
              tracking, and a sharper path from click to conversation.
            </NoteCard>
            <NoteCard title="Ongoing support">
              Best when you want a partner watching the site, campaigns, and
              growth priorities after launch.
            </NoteCard>
          </div>
        </div>
      </section>

      <section className="pricing-band">
        <div className="container">
          <div className="pricing-split-heading">
            <SectionIntro
              eyebrow="Websites"
              title="How much does a custom website cost?"
            >
              Most custom website projects land between $5,500 and $30,000+.
              The range depends on strategy, copy, page count, integrations,
              migrations, and how much clarity already exists.
            </SectionIntro>
            <NoteCard title="What impacts price?">
              Content depth, number of templates, migration complexity,
              integrations, SEO requirements, and how quickly the site needs to
              launch.
            </NoteCard>
          </div>
          <PriceGrid plans={websitePlans} />
        </div>
      </section>

      <section className="pricing-band pricing-band-soft">
        <div className="container">
          <div className="pricing-split-heading">
            <SectionIntro
              eyebrow="Google Ads"
              title="How much does Google Ads management cost?"
            >
              Management fees usually range from $750 to $5,000+ per month.
              Google media spend is separate and paid directly to Google.
            </SectionIntro>
            <NoteCard title="How to think about budget">
              A smaller account needs clean structure and discipline. A larger
              account needs testing, landing-page alignment, and lead-quality
              feedback.
            </NoteCard>
          </div>
          <PriceGrid plans={adsPlans} />
          <div className="pricing-addon-row">
            <span>Google Local Services Ads support</span>
            <strong>$650/mo</strong>
            <p>Setup, optimization, dispute review, and reporting support.</p>
          </div>
        </div>
      </section>

      <section className="pricing-band pricing-band-dark">
        <div className="container">
          <div className="pricing-split-heading">
            <SectionIntro
              eyebrow="Done-for-you"
              title="Want everything handled?"
            >
              When the website, search presence, and paid campaigns all need to
              move together, a monthly support plan keeps the work coordinated.
            </SectionIntro>
            <NoteCard title="What is managed?">
              Website updates, campaign management, SEO priorities, reporting,
              and practical recommendations about what to do next.
            </NoteCard>
          </div>
          <PriceGrid plans={bundlePlans} />
        </div>
      </section>

      <section className="pricing-band">
        <div className="container">
          <div className="pricing-split-heading">
            <SectionIntro eyebrow="SEO" title="How much does SEO cost?">
              SEO pricing depends on whether you need an initial roadmap, steady
              monthly execution, or a more competitive content and technical
              program.
            </SectionIntro>
            <NoteCard title="Best first step">
              If the site has never been audited, start with strategy. If the
              roadmap is clear, monthly management can move faster.
            </NoteCard>
          </div>
          <PriceGrid plans={seoPlans} />
        </div>
      </section>

      <section className="pricing-band pricing-band-soft">
        <div className="container">
          <SectionIntro eyebrow="Custom work" title="Need something extra?">
            Some work is better scoped as a focused sprint or hourly support
            instead of a full engagement.
          </SectionIntro>
          <div className="pricing-custom-grid">
            {customWork.map((item) => (
              <article key={item.title} className="pricing-custom-card">
                <h3>{item.title}</h3>
                <p className="pricing-card-price">{item.price}</p>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-band pricing-callout">
        <div className="container pricing-callout-grid">
          <div>
            <p className="pricing-eyebrow">First call</p>
            <h2>That is what the first call is for.</h2>
            <p>
              Tell us about your business and we will tell you what makes sense.
              No obligation, just a real conversation about where you are and
              where you want to go.
            </p>
            <a className="primary-button" href="/contact">
              Book a strategy call
            </a>
          </div>
          <NoteCard title="What the call includes">
            We will ask what you are trying to fix, what you have already tried,
            what matters most, and whether Alpath is the right fit.
          </NoteCard>
        </div>
      </section>

      <section id="estimate" className="pricing-band">
        <div className="container">
          <SectionIntro
            eyebrow="Estimator"
            title="Estimate your investment."
          >
            Pick the pieces that sound closest to what you need. This gives you a
            directional range before we scope the work together.
          </SectionIntro>
          <PricingEstimator />
        </div>
      </section>

      <section className="pricing-band pricing-band-dark">
        <div className="container">
          <SectionIntro
            eyebrow="FAQs"
            title="Frequently asked questions about pricing"
          />
          <div className="pricing-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="pricing-faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CallToAction variant="rebrandReadiness" />
    </main>
  );
}
