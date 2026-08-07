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
                Local marketing for service businesses that are ready to scale.
              </h2>
              <p>
                A senior in-house team in Seattle and Columbus running AI search
                visibility, web design, and brand work. We work mostly with
                construction, real estate, architecture, interior design firms,
                and local service businesses.
              </p>
              <div className="who-we-are-actions">
                <Link href="/about" className="who-we-are-link">
                  About Alpath
                </Link>
                <Link
                  href="/services/ai-search-visibility"
                  className="who-we-are-link who-we-are-link-ai"
                >
                  More about AI search visibility
                  <span className="who-we-are-ai-badge" aria-hidden="true">
                    <svg viewBox="0 0 40 40" focusable="false">
                      <path
                        className="who-we-are-ai-star-main"
                        d="M18 5c0 7.18 5.82 13 13 13-7.18 0-13 5.82-13 13 0-7.18-5.82-13-13-13 7.18 0 13-5.82 13-13Z"
                      />
                      <path
                        className="who-we-are-ai-star-small is-one"
                        d="M32 2c0 2.76 2.24 5 5 5-2.76 0-5 2.24-5 5 0-2.76-2.24-5-5-5 2.76 0 5-2.24 5-5Z"
                      />
                      <path
                        className="who-we-are-ai-star-small is-two"
                        d="M7 27c0 1.66 1.34 3 3 3-1.66 0-3 1.34-3 3 0-1.66-1.34-3-3-3 1.66 0 3-1.34 3-3Z"
                      />
                    </svg>
                  </span>
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
