'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styles from './presentation.module.css';

const TOTAL_SLIDES = 15;

const slideTitles = [
  'The ROI of Generative Engine Optimization',
  'The catalyst and the collapse',
  'The invisible competitor',
  'The search ecosystem matrix',
  'The massive economic upside',
  'The compounding advantage',
  'The trust signal inversion',
  'The science of citations',
  'The anatomy of a citable page',
  'The freshness premium',
  'Multi-platform fragmentation',
  'Measuring the unmeasurable',
  'The cost of inaction',
  'The 90-day execution roadmap',
  'The new front door',
];

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Arrow({ direction = 'right' }) {
  return (
    <span
      className={cx(styles.arrow, styles[`arrow${direction}`])}
      aria-hidden="true"
    >
      <span />
    </span>
  );
}

function SlideFrame({
  number,
  title,
  eyebrow = 'The ROI of GEO',
  dark = false,
  className,
  active,
  children,
}) {
  return (
    <section
      aria-label={`Slide ${number} of ${TOTAL_SLIDES}: ${title}`}
      aria-roledescription="slide"
      className={cx(
        styles.slide,
        dark && styles.dark,
        active && styles.active,
        className,
      )}
      data-slide={number}
      id={`geo-slide-${number}`}
    >
      <header className={cx(styles.slideHeader, styles.reveal)}>
        <a
          className={styles.brand}
          href="/"
          aria-label="Alpath Engineering home"
        >
          <img src="/alpath/sign.svg" alt="" />
          <span>Alpath Engineering</span>
        </a>
        <p>{eyebrow}</p>
      </header>

      <div className={styles.slideBody}>{children}</div>

      <footer className={cx(styles.slideFooter, styles.reveal)}>
        <span>{String(number).padStart(2, '0')}</span>
        <span>Alpath / AI Search Visibility</span>
      </footer>
    </section>
  );
}

function TrendChart() {
  return (
    <div
      className={cx(styles.trendChart, styles.reveal)}
      aria-label="Organic click-through rate falls as daily AI prompts rise from 2024 to 2026"
    >
      <div className={styles.chartGrid} aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div
        className={cx(styles.trendPath, styles.organicPath)}
        aria-hidden="true"
      >
        <b />
        <b />
        <b />
        <b />
        <b />
      </div>
      <div
        className={cx(styles.trendPath, styles.promptPath)}
        aria-hidden="true"
      >
        <b />
        <b />
        <b />
        <b />
        <b />
      </div>
      <span className={cx(styles.chartCallout, styles.organicCallout)}>
        <strong>61% drop</strong>
        <small>in organic CTR when an AI Overview appears</small>
      </span>
      <span className={cx(styles.chartCallout, styles.promptCallout)}>
        <strong>2.5B prompts</strong>
        <small>processed daily</small>
      </span>
      <div className={styles.chartYears} aria-hidden="true">
        <span>2024</span>
        <span>2025</span>
        <span>2026</span>
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <span className={styles.sparkline} aria-hidden="true">
      <b />
      <b />
      <b />
      <b />
      <b />
      <b />
    </span>
  );
}

export default function RoiGeoPresentation() {
  const deckRef = useRef(null);
  const activeSlideRef = useRef(0);
  const touchStartRef = useRef(null);
  const wheelDeltaRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const wheelLockStartedRef = useRef(0);
  const wheelResetTimerRef = useRef(null);
  const wheelUnlockTimerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const updateActiveSlide = useCallback((nextIndex) => {
    activeSlideRef.current = nextIndex;
    setActiveSlide((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex,
    );
  }, []);

  const goToSlide = useCallback(
    (targetIndex) => {
      const nextIndex = Math.max(0, Math.min(TOTAL_SLIDES - 1, targetIndex));
      updateActiveSlide(nextIndex);
    },
    [updateActiveSlide],
  );

  useLayoutEffect(() => {
    const deck = deckRef.current;
    if (!deck) return undefined;

    const syncViewportHeight = () => {
      const viewportHeight = Math.round(deck.getBoundingClientRect().height);
      if (!viewportHeight) return;

      const nextHeight = `${viewportHeight}px`;
      if (deck.style.getPropertyValue('--slide-height') !== nextHeight) {
        deck.style.setProperty('--slide-height', nextHeight);
      }
    };

    syncViewportHeight();
    const resizeObserver = new ResizeObserver(syncViewportHeight);
    resizeObserver.observe(deck);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return undefined;

    const scheduleWheelUnlock = () => {
      window.clearTimeout(wheelUnlockTimerRef.current);
      const elapsed = performance.now() - wheelLockStartedRef.current;
      wheelUnlockTimerRef.current = window.setTimeout(
        () => {
          wheelLockedRef.current = false;
          wheelDeltaRef.current = 0;
        },
        Math.max(220, 680 - elapsed),
      );
    };

    const onWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();

      window.clearTimeout(wheelResetTimerRef.current);
      wheelResetTimerRef.current = window.setTimeout(() => {
        wheelDeltaRef.current = 0;
      }, 140);

      if (wheelLockedRef.current) {
        scheduleWheelUnlock();
        return;
      }

      const deltaMultiplier =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? deck.clientHeight
            : 1;
      wheelDeltaRef.current += event.deltaY * deltaMultiplier;
      if (Math.abs(wheelDeltaRef.current) < 18) return;

      wheelLockedRef.current = true;
      wheelLockStartedRef.current = performance.now();
      const direction = wheelDeltaRef.current > 0 ? 1 : -1;
      wheelDeltaRef.current = 0;
      goToSlide(activeSlideRef.current + direction);
      scheduleWheelUnlock();
    };

    const onTouchStart = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: performance.now(),
      };
    };

    const onTouchEnd = (event) => {
      const start = touchStartRef.current;
      const touch = event.changedTouches[0];
      touchStartRef.current = null;
      if (!start || !touch) return;

      const deltaX = start.x - touch.clientX;
      const deltaY = start.y - touch.clientY;
      const duration = performance.now() - start.time;
      if (
        duration <= 900 &&
        Math.abs(deltaY) >= 44 &&
        Math.abs(deltaY) > Math.abs(deltaX) * 1.15
      ) {
        goToSlide(activeSlideRef.current + (deltaY > 0 ? 1 : -1));
      }
    };

    const onKeyDown = (event) => {
      const forward = ['ArrowDown', 'ArrowRight', 'PageDown', ' '];
      const backward = ['ArrowUp', 'ArrowLeft', 'PageUp'];

      if (forward.includes(event.key)) {
        event.preventDefault();
        goToSlide(activeSlideRef.current + 1);
      } else if (backward.includes(event.key)) {
        event.preventDefault();
        goToSlide(activeSlideRef.current - 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        goToSlide(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    deck.addEventListener('touchstart', onTouchStart, { passive: true });
    deck.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('wheel', onWheel);
      deck.removeEventListener('touchstart', onTouchStart);
      deck.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(wheelResetTimerRef.current);
      window.clearTimeout(wheelUnlockTimerRef.current);
    };
  }, [goToSlide]);

  return (
    <main className={styles.presentation}>
      <div
        ref={deckRef}
        className={styles.deck}
        tabIndex={0}
        aria-label="The ROI of Generative Engine Optimization presentation"
      >
        <div
          className={styles.track}
          style={{
            transform: `translate3d(0, -${(activeSlide / TOTAL_SLIDES) * 100}%, 0)`,
          }}
        >
          <SlideFrame
            number={1}
            title={slideTitles[0]}
            active={activeSlide === 0}
            className={styles.titleSlide}
          >
            <div className={cx(styles.titleCopy, styles.reveal)}>
              <p className={styles.kicker}>Executive briefing / 2026</p>
              <h1>
                The ROI of
                <br />
                Generative Engine
                <br />
                Optimization
              </h1>
              <div className={styles.titleSummary}>
                <p>The era of the 10 blue links is ending.</p>
                <p>
                  How enterprise brands become recognized, trusted, and cited by
                  AI.
                </p>
              </div>
            </div>
            <div
              className={cx(styles.networkGraphic, styles.reveal)}
              aria-hidden="true"
            >
              <div className={styles.networkGrid} />
              <div className={styles.networkOrigin} />
              <div className={styles.networkRays}>
                {Array.from({ length: 11 }, (_, index) => (
                  <i key={index} />
                ))}
              </div>
              <div className={styles.networkNode}>GEO</div>
            </div>
          </SlideFrame>

          <SlideFrame
            number={2}
            title={slideTitles[1]}
            active={activeSlide === 1}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                01 / Market shift
              </p>
              <h2 className={styles.reveal}>The catalyst and the collapse.</h2>
            </div>
            <TrendChart />
            <div className={cx(styles.statStrip, styles.reveal)}>
              <article>
                <strong>35%</strong>
                <p>
                  of U.S. consumers use AI during product discovery, versus
                  13.6% using traditional search.
                </p>
              </article>
              <article>
                <strong>25%</strong>
                <p>
                  projected drop in traditional search engine volume by 2026.
                </p>
              </article>
            </div>
          </SlideFrame>

          <SlideFrame
            number={3}
            title={slideTitles[2]}
            active={activeSlide === 2}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                02 / A new competitive set
              </p>
              <h2 className={styles.reveal}>
                The invisible competitor is bypassing your domain authority.
              </h2>
            </div>
            <div className={styles.vennLayout}>
              <aside className={cx(styles.insightBox, styles.reveal)}>
                Ranking #1 on Google no longer guarantees AI visibility. Models
                synthesize consensus; they do not respect legacy rankings.
              </aside>
              <div
                className={cx(styles.venn, styles.reveal)}
                aria-label="Google top 10 organic results overlap AI Overview citations by only 17 to 38 percent"
              >
                <div>
                  <span>
                    Google top 10
                    <br />
                    organic results
                  </span>
                </div>
                <div>
                  <span>
                    AI Overview
                    <br />
                    citations
                  </span>
                </div>
                <strong>
                  17–38%<small>overlap</small>
                </strong>
              </div>
              <aside className={cx(styles.statBox, styles.reveal)}>
                <strong>83%</strong>
                <p>
                  of AI Overview citations come from pages outside the organic
                  top 10.
                </p>
              </aside>
            </div>
            <p className={cx(styles.sourceLine, styles.reveal)}>
              Sources: BrightEdge, Demand Local, ConvertMate (2026)
            </p>
          </SlideFrame>

          <SlideFrame
            number={4}
            title={slideTitles[3]}
            active={activeSlide === 3}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                03 / Search disciplines
              </p>
              <h2 className={styles.reveal}>The search ecosystem matrix.</h2>
            </div>
            <div className={cx(styles.matrixWrap, styles.reveal)}>
              <table className={styles.matrix}>
                <thead>
                  <tr>
                    <th scope="col">Signal</th>
                    <th scope="col">
                      SEO<small>Search engine optimization</small>
                    </th>
                    <th scope="col">
                      AEO<small>Answer engine optimization</small>
                    </th>
                    <th scope="col">
                      GEO<small>Generative engine optimization</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Goal</th>
                    <td>Traffic to site</td>
                    <td>Direct answers</td>
                    <td>Entity representation &amp; citation</td>
                  </tr>
                  <tr>
                    <th scope="row">Output</th>
                    <td>Linear list of links</td>
                    <td>Featured snippets</td>
                    <td>Synthesized LLM answers</td>
                  </tr>
                  <tr>
                    <th scope="row">Trust</th>
                    <td>Backlink volume</td>
                    <td>Question-based headers</td>
                    <td>Brand mentions &amp; consensus</td>
                  </tr>
                  <tr>
                    <th scope="row">Behavior</th>
                    <td>Browse and click</td>
                    <td>Read and leave</td>
                    <td>Prompt, refine, and act</td>
                  </tr>
                  <tr>
                    <th scope="row">Success</th>
                    <td>Organic position &amp; CTR</td>
                    <td>Snippet ownership</td>
                    <td>AI citation frequency &amp; share of voice</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SlideFrame>

          <SlideFrame
            number={5}
            title={slideTitles[4]}
            active={activeSlide === 4}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                04 / Conversion economics
              </p>
              <h2 className={styles.reveal}>
                The massive economic upside of AI-referred traffic.
              </h2>
            </div>
            <div className={styles.conversionGrid}>
              <article className={cx(styles.conversionPanel, styles.reveal)}>
                <p>
                  <strong>Traditional search</strong>
                  <span>Low intent / High volume</span>
                </p>
                <div className={styles.funnelGraphic} aria-hidden="true">
                  <i />
                  <i />
                  <b />
                </div>
                <strong className={styles.conversionRate}>
                  1.76%<small>conversion rate</small>
                </strong>
              </article>
              <div className={cx(styles.premiumBadge, styles.reveal)}>
                <strong>5×+</strong>
                <span>
                  conversion
                  <br />
                  premium
                </span>
              </div>
              <article className={cx(styles.conversionPanel, styles.reveal)}>
                <p>
                  <strong>AI search</strong>
                  <span>High intent / Low volume</span>
                </p>
                <div className={styles.intentArrow} aria-hidden="true">
                  <i />
                </div>
                <strong className={styles.conversionRate}>
                  15.9%<small>conversion rate</small>
                </strong>
              </article>
            </div>
            <div className={cx(styles.benchmarkStrip, styles.reveal)}>
              <p>
                LLM visitors arrive with synthesized research and unusually high
                intent.
              </p>
              <ul>
                <li>
                  <strong>ChatGPT</strong> 14.2–15.9%
                </li>
                <li>
                  <strong>Perplexity</strong> 10.5%
                </li>
                <li>
                  <strong>Claude</strong> up to 16.8%
                </li>
              </ul>
            </div>
          </SlideFrame>

          <SlideFrame
            number={6}
            title={slideTitles[5]}
            active={activeSlide === 5}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                05 / A reinforcing loop
              </p>
              <h2 className={styles.reveal}>
                The compounding advantage of AI visibility.
              </h2>
            </div>
            <div className={styles.compoundLayout}>
              <div
                className={cx(styles.compoundChart, styles.reveal)}
                aria-label="Four rising bars show organic search and AI Overview traffic growing together"
              >
                <div className={styles.compoundArrow}>
                  <Arrow direction="up" />
                </div>
                {[
                  {
                    height: 28,
                    organicShare: 100,
                    organicLabel: 'Organic search',
                    caption: 'Baseline',
                  },
                  {
                    height: 45,
                    organicShare: 72,
                    organicLabel: 'Organic',
                    caption: 'Early visibility',
                  },
                  {
                    height: 66,
                    organicShare: 57,
                    organicLabel: 'Organic',
                    caption: 'Compounding',
                  },
                  {
                    height: 92,
                    organicShare: 47,
                    organicLabel: 'Organic',
                    caption: '+35% adjacent lift',
                  },
                ].map((bar) => (
                  <div
                    className={styles.compoundBar}
                    style={{ '--bar-height': `${bar.height}%` }}
                    key={bar.height}
                  >
                    <span
                      className={styles.organicSegment}
                      style={{ '--segment-height': `${bar.organicShare}%` }}
                    >
                      <em>{bar.organicLabel}</em>
                    </span>
                    {bar.organicShare < 100 ? (
                      <i
                        className={styles.aiSegment}
                        style={{
                          '--segment-height': `${100 - bar.organicShare}%`,
                        }}
                      >
                        <em>AI overview</em>
                      </i>
                    ) : null}
                    <small>{bar.caption}</small>
                  </div>
                ))}
              </div>
              <div className={cx(styles.takeawayStack, styles.reveal)}>
                <article>
                  <strong>+35%</strong>
                  <p>
                    Adjacent organic click-through rate when your link appears
                    beside the AI answer.
                  </p>
                </article>
                <article>
                  <p>
                    A citation establishes brand trust before the user ever
                    clicks.
                  </p>
                </article>
              </div>
            </div>
            <p className={cx(styles.sourceLine, styles.reveal)}>
              Source: BrightEdge
            </p>
          </SlideFrame>

          <SlideFrame
            number={7}
            title={slideTitles[6]}
            active={activeSlide === 6}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                06 / Authority, reweighted
              </p>
              <h2 className={styles.reveal}>The trust signal inversion.</h2>
            </div>
            <div className={cx(styles.balanceGraphic, styles.reveal)}>
              <div className={styles.balanceLabels}>
                <p>
                  Backlink volume<small>Correlation: 0.218</small>
                </p>
                <p>
                  Brand mentions &amp; earned media
                  <small>
                    Correlation: <strong>0.664</strong>
                  </small>
                </p>
              </div>
              <div className={styles.balanceBeam}>
                <span className={styles.linkWeight}>LINKS</span>
                <span className={styles.mentionWeight}>MENTIONS</span>
                <i />
              </div>
            </div>
            <div className={cx(styles.proofStrip, styles.reveal)}>
              <article>
                <span>01</span>
                <p>
                  Brand mentions correlate <strong>3× more strongly</strong>{' '}
                  with AI visibility than traditional backlinks.
                </p>
              </article>
              <article>
                <span>02</span>
                <p>
                  <strong>82%</strong> of AI citations come from earned media;
                  only 6% come from paid or owned content.
                </p>
              </article>
              <article>
                <span>03</span>
                <p>AI models do not crawl link graphs; they read consensus.</p>
              </article>
            </div>
          </SlideFrame>

          <SlideFrame
            number={8}
            title={slideTitles[7]}
            active={activeSlide === 7}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                07 / Princeton KDD 2024 blueprint
              </p>
              <h2 className={styles.reveal}>The science of citations.</h2>
            </div>
            <div className={styles.gaugeGrid}>
              <article className={cx(styles.gaugeCard, styles.reveal)}>
                <div
                  className={styles.gauge}
                  style={{ '--gauge': '20.5%', '--gauge-color': '#0a77c6' }}
                >
                  <strong>+41%</strong>
                </div>
                <h3>Statistics addition</h3>
                <p>
                  Specific numbers, percentages, and data points outperform
                  qualitative claims.
                </p>
              </article>
              <article className={cx(styles.gaugeCard, styles.reveal)}>
                <div
                  className={styles.gauge}
                  style={{ '--gauge': '14%', '--gauge-color': '#0cb800' }}
                >
                  <strong>+28%</strong>
                </div>
                <h3>Quotation addition</h3>
                <p>
                  Direct, attributable quotes from credible third parties
                  provide the attribution models seek.
                </p>
              </article>
              <article className={cx(styles.gaugeCard, styles.reveal)}>
                <div
                  className={styles.gauge}
                  style={{ '--gauge': '50%', '--gauge-color': '#ff6f00' }}
                >
                  <strong>+115%</strong>
                </div>
                <h3>Citing sources</h3>
                <p>
                  Inline references to external claims create a major visibility
                  lift for mid-ranked pages.
                </p>
              </article>
            </div>
            <p className={cx(styles.sourceLine, styles.reveal)}>
              Source: Princeton University, Georgia Tech, and IIT Delhi —
              Generative Engine Optimization, KDD 2024
            </p>
          </SlideFrame>

          <SlideFrame
            number={9}
            title={slideTitles[8]}
            active={activeSlide === 8}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                08 / Content architecture
              </p>
              <h2 className={styles.reveal}>The anatomy of a citable page.</h2>
            </div>
            <div className={styles.anatomyLayout}>
              <div
                className={cx(styles.pageDiagram, styles.reveal)}
                aria-label="Diagram of a long-form page with an executive summary, data table, and comprehensive sections"
              >
                <span className={styles.pageLength}>20,000+ characters</span>
                <div className={styles.bluf}>
                  <i />
                  <i />
                  <i />
                </div>
                <div className={styles.dataTable}>
                  {Array.from({ length: 15 }, (_, index) => (
                    <i key={index} />
                  ))}
                </div>
                <div className={styles.bodyBlock}>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className={styles.bodyBlock}>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <ol className={cx(styles.anatomyList, styles.reveal)}>
                <li>
                  <span>01</span>
                  <div>
                    <h3>Bottom line up front</h3>
                    <p>
                      44.2% of LLM citations are pulled exclusively from the
                      first 30% of a page.
                    </p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Data density</h3>
                    <p>
                      Highlight tables and embed specific statistics directly in
                      the text.
                    </p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Comprehensive depth</h3>
                    <p>
                      Pages above 20,000 characters receive 4.3× more AI
                      citations than short-form content.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <p className={cx(styles.sourceLine, styles.reveal)}>
              Sources: SparkToro, ConvertMate
            </p>
          </SlideFrame>

          <SlideFrame
            number={10}
            title={slideTitles[9]}
            active={activeSlide === 9}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                09 / Parametric memory
              </p>
              <h2 className={styles.reveal}>The freshness premium.</h2>
            </div>
            <div className={cx(styles.freshnessTimeline, styles.reveal)}>
              <span>1 year ago</span>
              <div>
                <i />
              </div>
              <span>Today</span>
              <strong>
                The citation zone <small>30-day window</small>
              </strong>
            </div>
            <div className={styles.freshnessGrid}>
              <article className={cx(styles.metricCard, styles.reveal)}>
                <p>AI-cited content is</p>
                <strong>25.7% fresher</strong>
                <p>than traditional organic results.</p>
              </article>
              <article className={cx(styles.metricCard, styles.reveal)}>
                <strong>76.4%</strong>
                <p>
                  of ChatGPT’s most-cited pages were updated in the last{' '}
                  <b>30 days</b>.
                </p>
              </article>
              <article className={cx(styles.metricCard, styles.reveal)}>
                <p>Updating within 30 days earns</p>
                <strong>3.2× more citations</strong>
              </article>
              <article
                className={cx(
                  styles.metricCard,
                  styles.invertedCard,
                  styles.reveal,
                )}
              >
                <strong>The operational shift</strong>
                <p>
                  Move from quarterly campaigns to a 30-day refresh cycle for
                  high-priority pages.
                </p>
              </article>
            </div>
          </SlideFrame>

          <SlideFrame
            number={11}
            title={slideTitles[10]}
            active={activeSlide === 10}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                10 / Separate source ecosystems
              </p>
              <h2 className={styles.reveal}>Multi-platform fragmentation.</h2>
            </div>
            <div className={cx(styles.overlapCallout, styles.reveal)}>
              Only an <strong>11% domain overlap</strong> exists between ChatGPT
              and Perplexity citations for the same queries.
            </div>
            <div className={styles.platformGrid}>
              <article className={cx(styles.platformCard, styles.reveal)}>
                <div className={styles.hexagon}>C</div>
                <h3>ChatGPT</h3>
                <p>Relies on Bing’s curated index.</p>
              </article>
              <article className={cx(styles.platformCard, styles.reveal)}>
                <div className={styles.square}>P</div>
                <h3>Perplexity</h3>
                <p>Relies on proprietary vector indexing.</p>
              </article>
              <article className={cx(styles.platformCard, styles.reveal)}>
                <div className={styles.circle}>G</div>
                <h3>Google AIO</h3>
                <p>Relies on Google’s traditional index.</p>
              </article>
            </div>
            <p className={cx(styles.platformConclusion, styles.reveal)}>
              Success on one AI platform does not guarantee visibility on
              another. <strong>Optimization must be platform-specific.</strong>
            </p>
          </SlideFrame>

          <SlideFrame
            number={12}
            title={slideTitles[11]}
            active={activeSlide === 11}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                11 / The measurement system
              </p>
              <h2 className={styles.reveal}>
                Measuring the unmeasurable: new KPIs.
              </h2>
            </div>
            <div className={styles.kpiStack}>
              <article className={cx(styles.kpiCard, styles.reveal)}>
                <span>01</span>
                <div>
                  <h3>
                    AI citation frequency <small>AICF</small>
                  </h3>
                  <p>
                    How often your brand or domain is explicitly cited across
                    major LLMs for core prompts.
                  </p>
                </div>
                <Sparkline />
              </article>
              <article className={cx(styles.kpiCard, styles.reveal)}>
                <span>02</span>
                <div>
                  <h3>
                    Share of voice in answers <small>SOV</small>
                  </h3>
                  <p>
                    The percentage of AI answers citing your brand versus named
                    competitors.
                  </p>
                </div>
                <Sparkline />
              </article>
              <article className={cx(styles.kpiCard, styles.reveal)}>
                <span>03</span>
                <div>
                  <h3>AI referral quality</h3>
                  <p>
                    GA4 sessions originating from AI platforms and their
                    uniquely high conversion rates.
                  </p>
                </div>
                <Sparkline />
              </article>
            </div>
          </SlideFrame>

          <SlideFrame
            number={13}
            title={slideTitles[12]}
            active={activeSlide === 12}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                12 / The execution gap
              </p>
              <h2 className={styles.reveal}>
                The cost of inaction &amp; the measurement gap.
              </h2>
            </div>
            <div className={styles.inactionLayout}>
              <div className={cx(styles.donutWrap, styles.reveal)}>
                <div className={styles.donut}>
                  <strong>92%</strong>
                  <small>plan to optimize</small>
                </div>
                <div className={styles.donutLabels}>
                  <p>
                    Only <strong>14%</strong> have an active AI-search
                    optimization program.
                  </p>
                  <p>
                    Only <strong>14%</strong> actively track AI search today.
                  </p>
                </div>
              </div>
              <article className={cx(styles.threatCard, styles.reveal)}>
                <h3>The strategic threat</h3>
                <p>
                  Early movers are encoding their brands into the foundational
                  knowledge graphs of these LLMs.
                </p>
                <p>
                  Catching up becomes exponentially harder once competitive
                  citation patterns consolidate and AI models lock in preferred
                  sources.
                </p>
              </article>
            </div>
            <p className={cx(styles.sourceLine, styles.reveal)}>
              Source: Conductor (2026)
            </p>
          </SlideFrame>

          <SlideFrame
            number={14}
            title={slideTitles[13]}
            active={activeSlide === 13}
          >
            <div className={styles.headingBlock}>
              <p className={cx(styles.kicker, styles.reveal)}>
                13 / From evidence to action
              </p>
              <h2 className={styles.reveal}>The 90-day execution roadmap.</h2>
            </div>
            <div className={styles.roadmap}>
              <article className={cx(styles.roadmapCard, styles.reveal)}>
                <header>
                  <span>Month 01</span>
                  <h3>Audit AI share of voice</h3>
                </header>
                <div>
                  <p>Map real-user prompts across the funnel.</p>
                  <p>
                    Benchmark ChatGPT, Perplexity, and Gemini to identify
                    citation gaps and competitor presence.
                  </p>
                </div>
              </article>
              <Arrow />
              <article className={cx(styles.roadmapCard, styles.reveal)}>
                <header>
                  <span>Month 02</span>
                  <h3>Optimize the top 10 pages</h3>
                </header>
                <div>
                  <p>Apply the Princeton framework.</p>
                  <p>
                    Inject statistics, expert quotations, and third-party
                    citations into the top 30% of priority pages.
                  </p>
                </div>
              </article>
              <Arrow />
              <article
                className={cx(
                  styles.roadmapCard,
                  styles.accentRoadmap,
                  styles.reveal,
                )}
              >
                <header>
                  <span>Month 03</span>
                  <h3>Earned media distribution</h3>
                </header>
                <div>
                  <p>Shift the off-page focus.</p>
                  <p>
                    Scale unlinked mentions, PR distribution, and third-party
                    reviews to build consensus signals.
                  </p>
                </div>
              </article>
            </div>
          </SlideFrame>

          <SlideFrame
            number={15}
            title={slideTitles[14]}
            dark
            active={activeSlide === 14}
            className={styles.closingSlide}
            eyebrow="The new front door"
          >
            <div className={cx(styles.closingCopy, styles.reveal)}>
              <p>SEO helped people find you.</p>
              <h2>
                GEO ensures
                <br />
                AI chooses you.
              </h2>
              <a href="/services/ai-search-visibility">
                Build your AI visibility strategy{' '}
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div
              className={cx(styles.closingMark, styles.reveal)}
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
              <b />
            </div>
          </SlideFrame>
        </div>
      </div>

      <aside className={styles.controls} aria-label="Presentation controls">
        <p>
          <strong>{String(activeSlide + 1).padStart(2, '0')}</strong>
          <span>/ {TOTAL_SLIDES}</span>
        </p>
        <div className={styles.progressTrack} aria-hidden="true">
          <span
            style={{
              '--progress': `${((activeSlide + 1) / TOTAL_SLIDES) * 100}%`,
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => goToSlide(activeSlide + 1)}
          disabled={activeSlide === TOTAL_SLIDES - 1}
          aria-label="Go to next slide"
        >
          <span aria-hidden="true">↓</span>
        </button>
      </aside>

      <nav className={styles.slideNav} aria-label="Choose a slide">
        {slideTitles.map((title, index) => (
          <button
            key={title}
            type="button"
            className={activeSlide === index ? styles.current : undefined}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${title}`}
            aria-current={activeSlide === index ? 'step' : undefined}
          >
            <span />
          </button>
        ))}
      </nav>

      <p className={styles.scrollHint} aria-hidden="true">
        Scroll / use arrow keys
      </p>
    </main>
  );
}
