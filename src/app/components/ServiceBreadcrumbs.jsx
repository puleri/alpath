const SITE_URL = 'https://alpath.engineering';

export default function ServiceBreadcrumbs({ currentLabel, currentPath }) {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: currentLabel ? '/services' : null },
  ];

  if (currentLabel) {
    items.push({ label: currentLabel, href: null });
  }

  const structuredItems = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: `${SITE_URL}${item.href ?? currentPath ?? '/services'}`,
  }));

  return (
    <>
      <nav className="service-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span aria-current={isCurrent ? 'page' : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: structuredItems,
          }).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
