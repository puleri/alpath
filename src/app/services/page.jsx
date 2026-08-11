import ServiceBreadcrumbs from '../components/ServiceBreadcrumbs';

export const metadata = {
  title: 'Consulting & Development Services | Alpath',
};

const services = [
  {
    id: 'ai-search-visibility',
    title: 'AI Search Visibility',
    description:
      'We connect SEO, AEO, GEO, and LLMO so your expertise is easier to discover, understand, and cite.',
    cta: 'Explore AI Search Visibility',
    href: '/services/ai-search-visibility',
    featured: true,
  },
  {
    id: 'web-consulting',
    title: 'Web Consulting',
    description:
      'Your website should be more than a brochure. It should be a high-performing system.',
    cta: 'Explore Web Consulting',
    href: '/services/web-services',
  },
  {
    id: 'revenue-automation',
    title: 'Revenue Automation',
    description:
      'Once your foundation is strong, we build the system that actually drives revenue.',
    cta: 'Design My Revenue System',
    href: '/services/revenue-automation',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description:
      'Connect scattered data into clear reporting systems that show what is working and where to act.',
    cta: 'Explore Business Intelligence',
    href: '/docs/business-intelligence',
  },
  {
    id: 'custom',
    title: 'Custom',
    description:
      'Need something beyond a standard website or funnel? We design and engineer custom products from concept to launch.',
    cta: 'Explore Custom Services',
    href: '/services/custom',
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="services-page">
        <ServiceBreadcrumbs />

        <header className="services-catalog-header container">
          <div className="services-eyebrow-wrap">
            <p className="services-eyebrow">Services Hub</p>
            <img src="/alpath/sign.svg" alt="" />
          </div>
          <h1>Services</h1>
        </header>

        <section
          className="services-cards container"
          aria-label="Core services"
        >
          {services.map((service) => (
            <article
              key={service.title}
              id={service.id}
              className={`service-card${service.featured ? ' is-featured' : ''}`}
            >
              <h2>{service.title}</h2>
              <p>{service.description}</p>

              <a className="services-cta-link" href={service.href}>
                {service.cta} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </section>

        <section className="services-final-cta container">
          <img src="/alpath/sign.svg" alt="" />
          <h2>Understand your system. Then improve it.</h2>
          <div className="services-final-links">
            <a className="primary-button" href="/contact">
              → Start with an Audit
            </a>
            <a className="secondary-button" href="/docs">
              → Explore Our Approach in Docs
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
