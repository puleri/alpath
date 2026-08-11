function VisibilityMark() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <rect x="12" y="20" width="44" height="80" />
      <path d="M12 46h44M12 73h44" />
      <rect x="20" y="29" width="8" height="8" />
      <rect x="20" y="56" width="8" height="8" />
      <rect className="is-accent" x="20" y="83" width="8" height="8" />
      <path d="M35 33h13M35 60h13M35 87h8" />

      <rect x="70" y="18" width="38" height="52" />
      <path d="M78 29h22M78 40h17M78 51h20" />
      <path d="M28 87c18 0 27-13 34-27l7-14" />
      <path d="m61 49 8-3 2 8" />
      <path d="M68 91c10-13 29-13 40 0-11 13-30 13-40 0Z" />
      <rect x="84" y="87" width="8" height="8" />
    </svg>
  );
}

function CitationMark() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M16 30h37c9 0 16 7 16 16v52H32c-9 0-16-7-16-16V30Z" />
      <path d="M104 30H67c-9 0-16 7-16 16v52h37c9 0 16-7 16-16V30Z" />
      <path d="M76 48h19M76 61h19M25 48h17M25 61h17" />
      <rect className="is-accent" x="84" y="78" width="20" height="20" />
      <path d="m89 93 10-10m0 0h-8m8 0v8" />
    </svg>
  );
}

function AuthorityMark() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M60 24 26 46v38l34 20 34-20V46L60 24Z" />
      <path d="M60 24v80M26 46l68 38M94 46 26 84" />
      <rect x="20" y="40" width="12" height="12" />
      <rect x="88" y="40" width="12" height="12" />
      <rect x="54" y="18" width="12" height="12" />
      <rect x="54" y="98" width="12" height="12" />
      <rect className="is-accent" x="51" y="51" width="18" height="18" />
      <path d="m55 60 4 4 7-9" />
    </svg>
  );
}

function SourceBadges({ sources }) {
  const sourceLabel = sources.length === 1 ? 'Source' : 'Sources';

  return (
    <span
      className="ai-roi-citations"
      aria-label={`${sourceLabel} ${sources.join(', ')}`}
    >
      {sources.map((source) => (
        <a
          href={`#ai-research-source-${source}`}
          key={source}
          title={`View source ${source}`}
        >
          {String(source).padStart(2, '0')}
        </a>
      ))}
    </span>
  );
}

export default function AiVisibilityRoiGraphic() {
  return (
    <figure className="ai-roi-graphic" aria-labelledby="ai-roi-graphic-heading">
      <figcaption className="ai-roi-graphic-header">
        <div className="ai-roi-monogram" aria-hidden="true">
          <span>AEO</span>
          <span>&amp; GEO</span>
        </div>
        <div className="ai-roi-title">
          <p>AI visibility / Research synthesis</p>
          <h3 id="ai-roi-graphic-heading">Visibility becomes performance.</h3>
        </div>
      </figcaption>

      <div className="ai-roi-columns">
        <section
          className="ai-roi-panel ai-roi-performance"
          aria-labelledby="ai-roi-performance-heading"
        >
          <h4 id="ai-roi-performance-heading">
            The Performance Powerhouse: ROI &amp; Conversions
          </h4>

          <div className="ai-roi-conversion-block">
            <div className="ai-roi-source-node">
              <span>AI Search</span>
              <small>(AEO/GEO)</small>
            </div>
            <p className="ai-roi-chart-label">
              Avg. Conversion Rate <SourceBadges sources={[5, 11]} />
            </p>
            <div className="ai-roi-bars">
              <article className="ai-roi-bar is-chat">
                <p>14.2% - 16.8%</p>
                <div aria-hidden="true" />
                <h5>ChatGPT / Claude</h5>
              </article>
              <article className="ai-roi-bar is-perplexity">
                <p>10.5%</p>
                <div aria-hidden="true" />
                <h5>Perplexity AI</h5>
              </article>
              <article className="ai-roi-bar is-google">
                <p>1.76%</p>
                <div aria-hidden="true" />
                <h5>Google Organic</h5>
              </article>
            </div>
          </div>

          <article className="ai-roi-performance-point is-lead-quality">
            <p className="ai-roi-large-stat">3x</p>
            <div>
              <h5>
                Better Lead Quality <SourceBadges sources={[5, 15]} />
              </h5>
              <p>
                <strong>HubSpot internal data:</strong> Leads from AI-driven
                “Answer Engines” convert significantly better than standard
                traffic.
              </p>
            </div>
            <div className="ai-roi-check-grid" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </article>

          <article className="ai-roi-performance-point is-prefiltered">
            <div className="ai-roi-filter-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <h5>
                The “Pre-Filtered” Inbound Advantage{' '}
                <SourceBadges sources={[7, 13]} />
              </h5>
              <p>
                AI search visitors arrive with more context, having already
                researched and compared alternatives via the AI.
              </p>
            </div>
          </article>
        </section>

        <section
          className="ai-roi-panel ai-roi-strategic"
          aria-labelledby="ai-roi-strategic-heading"
        >
          <h4 id="ai-roi-strategic-heading">
            The Strategic Edge: Leveling the Playing Field
          </h4>

          <div className="ai-roi-outcome-list">
            <article className="ai-roi-outcome">
              <div className="ai-roi-outcome-mark">
                <VisibilityMark />
              </div>
              <div>
                <h5>
                  <span>115%</span> Visibility Boost for Smaller Brands{' '}
                  <SourceBadges sources={[8, 17]} />
                </h5>
                <p>
                  Lower-ranked sites (pos. 5+) see massive visibility gains in
                  AI answers by using structured “Cite Sources” tactics.
                </p>
              </div>
            </article>

            <article className="ai-roi-outcome">
              <div className="ai-roi-outcome-mark">
                <CitationMark />
              </div>
              <div>
                <h5>
                  <span>35%</span> More Clicks for Cited Brands{' '}
                  <SourceBadges sources={[7, 11]} />
                </h5>
                <p>
                  Brands cited inside AI responses earn significantly more
                  organic and paid clicks than those that are invisible.
                </p>
              </div>
            </article>

            <article className="ai-roi-outcome">
              <div className="ai-roi-outcome-mark">
                <AuthorityMark />
              </div>
              <div>
                <h5>
                  Zero-Click Authority <SourceBadges sources={[4, 15, 18]} />
                </h5>
                <p>
                  AEO builds brand consensus across the web, ensuring your brand
                  is trusted by the machine and the user.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>

      <aside className="ai-roi-research" aria-label="Research consulted">
        <div>
          <p>Research consulted</p>
          <strong>19 sources</strong>
        </div>
        <p>
          Academic research, platform guidance, and industry analysis informed
          this illustration. Numbered badges connect each claim to the full
          reference list.
        </p>
        <a href="#ai-search-references">
          View references <span aria-hidden="true">↓</span>
        </a>
      </aside>
    </figure>
  );
}
