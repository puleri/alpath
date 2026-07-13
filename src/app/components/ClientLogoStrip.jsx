const clientLogos = [
  {
    name: 'Kaiser Siding & Roofing',
    src: '/client-logos/kaiser.webp',
    alt: 'Kaiser Siding and Roofing logo',
  },
  {
    name: 'Liquid Sound',
    src: '/client-logos/liquidsound.png',
    alt: 'Liquid Sound logo',
  },
  {
    name: 'Lockhart Suver',
    src: '/client-logos/lockhartsuver-white.webp',
    alt: 'Lockhart Suver logo',
  },
  {
    name: 'Roots',
    src: '/client-logos/roots-white.svg',
    alt: 'Roots logo',
  },
  {
    name: 'Vector Ventures',
    src: '/client-logos/vector-ventures.png',
    alt: 'Vector Ventures logo',
  },
  {
    name: 'Lennon Window Cleaning',
    src: '/client-logos/lennonwc.png',
    alt: 'Lennon Window Cleaning logo',
  },
  {
    name: 'Pro3 Accounting',
    src: '/client-logos/pro3.png',
    alt: 'Pro3 Accounting logo',
  },
  {
    name: 'Distinctive Glass',
    src: '/client-logos/distinctive-glass.png',
    alt: 'Distinctive Glass logo',
  },
  {
    name: 'VHS',
    src: '/client-logos/vhs.png',
    alt: 'VHS logo',
  },
];

export default function ClientLogoStrip() {
  return (
    <section
      className="client-logo-strip container"
      aria-labelledby="client-logo-strip-heading"
    >
      <span className="client-logo-notification" aria-hidden="true" />
      <p id="client-logo-strip-heading" className="client-logo-strip-heading">
        Trusted by teams building stronger digital foundations
      </p>
      <div className="client-logo-carousel" aria-label="Approved client logos">
        <div className="client-logo-track">
          {[0, 1].map((setIndex) => (
            <ul
              className="client-logo-list"
              key={setIndex}
              aria-hidden={setIndex === 1 ? 'true' : undefined}
            >
              {clientLogos.map((logo) => (
                <li
                  className="client-logo-card"
                  key={`${setIndex}-${logo.name}`}
                >
                  <img
                    className="client-logo-image"
                    src={logo.src}
                    alt={setIndex === 0 ? logo.alt : ''}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
