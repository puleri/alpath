import Link from 'next/link';
import ReviewRating from './ReviewRating';

export default function WhoWeAre() {
  return (
    <section
      className="who-we-are-section"
      aria-labelledby="who-we-are-heading"
    >
      <div className="container">
        <div className="who-we-are-card">
          <div className="who-we-are-eyebrow">Who we are</div>
          <div className="who-we-are-layout">
            <div className="who-we-are-copy">
              <h2 id="who-we-are-heading">
                Local marketing for service businesses that need leads.
              </h2>
              <p>
                A senior in-house team in Seattle and Columbus running SEO, web
                design, and brand work for construction, architecture, interior
                design firms, and local service businesses. No layers, no
                outsourcing, no account manager shuffle. You own everything we
                build. Your strategist picks up the phone. Short contracts,
                month to month.
              </p>
              <div className="who-we-are-actions">
                <Link href="/about" className="who-we-are-link">
                  About Alpath
                </Link>
                <Link href="/about" className="who-we-are-link">
                  Meet the Team
                </Link>
              </div>
            </div>
            <aside
              className="who-we-are-proof"
              aria-label="Alpath review summary"
            >
              <img
                className="who-we-are-photo"
                src="/photos/home/construction.png"
                alt="Construction website project"
              />
              <ReviewRating />
              <div className="who-we-are-since">Since 2020</div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
