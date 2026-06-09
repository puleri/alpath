const clientLogos = [
  {
    name: 'Lockhart Suver',
    src: '/client-logos/lockhartsuver.webp',
    alt: 'Lockhart Suver logo',
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
];

export default function ClientLogoStrip() {
  return (
    <section
      className="client-logo-strip container"
      aria-labelledby="client-logo-strip-heading"
    >
      <p id="client-logo-strip-heading" className="client-logo-strip-heading">
        Trusted by teams building stronger digital foundations
      </p>
      <ul className="client-logo-list" aria-label="Approved client logos">
        {clientLogos.map((logo) => (
          <li className="client-logo-card" key={logo.name}>
            <img
              className="client-logo-image"
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
