'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import shared from '../the-roi-of-geo/presentation.module.css';
import styles from './small-business.module.css';

const TOTAL_SLIDES = 15;

const slideTitles = [
  'How can your business be recognized, trusted, and cited by AI?',
  'Your customers are already asking AI who to hire',
  'The real opportunity is better-fit conversations',
  'Why AI-referred leads can be more qualified',
  'What being cited actually means',
  'How AI decides which businesses to mention',
  'You do not have to be the biggest business',
  'The pages AI can confidently recommend',
  'Fresh, accurate information wins',
  'Your reputation travels beyond your website',
  'Every AI tool sees a different version of the web',
  'Measure business outcomes, not search jargon',
  'What the acronyms mean',
  'Case study: 300+ leads in year one',
  'Be the business AI recommends next',
];

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function SlideFrame({
  number,
  title,
  active,
  dark = false,
  className,
  bodyClassName,
  children,
}) {
  return (
    <section
      aria-label={`Slide ${number} of ${TOTAL_SLIDES}: ${title}`}
      aria-roledescription="slide"
      className={cx(
        shared.slide,
        dark && shared.dark,
        active && shared.active,
        className,
      )}
      data-slide={number}
      id={`small-business-ai-slide-${number}`}
    >
      <header className={cx(shared.slideHeader, shared.reveal)}>
        <a
          className={shared.brand}
          href="/"
          aria-label="Alpath Engineering home"
        >
          <img src="/alpath/sign.svg" alt="" />
          <span>Alpath Engineering</span>
        </a>
        <p>AI Search Visibility / Small Business Guide</p>
      </header>

      <div className={cx(shared.slideBody, bodyClassName)}>{children}</div>

      <footer className={cx(shared.slideFooter, shared.reveal)}>
        <span>{String(number).padStart(2, '0')}</span>
        <span>Plain English. Practical outcomes.</span>
      </footer>
    </section>
  );
}

function SectionHeading({ label, children }) {
  return (
    <div className={shared.headingBlock}>
      <p className={cx(shared.kicker, shared.reveal)}>{label}</p>
      <h2 className={shared.reveal}>{children}</h2>
    </div>
  );
}

function Arrow() {
  return (
    <span className={styles.flowArrow} aria-hidden="true">
      →
    </span>
  );
}

export default function SmallBusinessAiSearchPresentation() {
  const deckRef = useRef(null);
  const activeSlideRef = useRef(0);
  const touchStartRef = useRef(null);
  const wheelDeltaRef = useRef(0);
  const wheelLockedRef = useRef(false);
  const lastWheelAtRef = useRef(0);
  const wheelResetTimerRef = useRef(null);
  const wheelUnlockTimerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = useCallback((targetIndex) => {
    const nextIndex = Math.max(0, Math.min(TOTAL_SLIDES - 1, targetIndex));
    activeSlideRef.current = nextIndex;
    setActiveSlide(nextIndex);
  }, []);

  useLayoutEffect(() => {
    const deck = deckRef.current;
    if (!deck) return undefined;

    const syncHeight = () => {
      const height = Math.round(deck.getBoundingClientRect().height);
      if (height) deck.style.setProperty('--slide-height', `${height}px`);
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(deck);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return undefined;

    const scheduleUnlock = () => {
      window.clearTimeout(wheelUnlockTimerRef.current);
      wheelUnlockTimerRef.current = window.setTimeout(() => {
        const quietFor = performance.now() - lastWheelAtRef.current;
        if (quietFor < 160) {
          scheduleUnlock();
          return;
        }
        wheelLockedRef.current = false;
        wheelDeltaRef.current = 0;
      }, 170);
    };

    const onWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      lastWheelAtRef.current = performance.now();

      window.clearTimeout(wheelResetTimerRef.current);
      wheelResetTimerRef.current = window.setTimeout(() => {
        wheelDeltaRef.current = 0;
      }, 150);

      if (wheelLockedRef.current) {
        scheduleUnlock();
        return;
      }

      const multiplier =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? deck.clientHeight
            : 1;
      wheelDeltaRef.current += event.deltaY * multiplier;
      if (Math.abs(wheelDeltaRef.current) < 20) return;

      const direction = wheelDeltaRef.current > 0 ? 1 : -1;
      wheelDeltaRef.current = 0;
      wheelLockedRef.current = true;
      goToSlide(activeSlideRef.current + direction);
      scheduleUnlock();
    };

    const onTouchStart = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const onTouchEnd = (event) => {
      const start = touchStartRef.current;
      const touch = event.changedTouches[0];
      touchStartRef.current = null;
      if (!start || !touch) return;

      const deltaX = start.x - touch.clientX;
      const deltaY = start.y - touch.clientY;
      if (
        Math.abs(deltaY) >= 44 &&
        Math.abs(deltaY) > Math.abs(deltaX) * 1.15
      ) {
        goToSlide(activeSlideRef.current + (deltaY > 0 ? 1 : -1));
      }
    };

    const onKeyDown = (event) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        goToSlide(activeSlideRef.current + 1);
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)) {
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
    <main className={shared.presentation}>
      <div
        ref={deckRef}
        className={shared.deck}
        tabIndex={0}
        aria-label="AI Search Visibility for Small Business presentation"
      >
        <div
          className={shared.track}
          style={{
            transform: `translate3d(0, -${(activeSlide / TOTAL_SLIDES) * 100}%, 0)`,
          }}
        >
          <SlideFrame
            number={1}
            title={slideTitles[0]}
            active={activeSlide === 0}
            className={cx(shared.titleSlide, styles.ownerTitleSlide)}
            bodyClassName={styles.ownerTitleBody}
          >
            <div className={cx(styles.ownerTitleCopy, shared.reveal)}>
              <p className={shared.kicker}>
                A plain-English guide for small business owners
              </p>
              <h1>
                How can your business be recognized, trusted, and cited by AI?
              </h1>
              <div className={styles.titleFooter}>
                <strong>AI Search Visibility</strong>
                <span>
                  The practical business benefit behind “Generative Engine
                  Optimization.”
                </span>
              </div>
            </div>
            <div className={cx(styles.answerCard, shared.reveal)}>
              <span>Customer asks</span>
              <p>“Who is the best local company for this exact problem?”</p>
              <div>
                <i />
                AI recommends <strong>your business.</strong>
              </div>
            </div>
          </SlideFrame>

          <SlideFrame
            number={2}
            title={slideTitles[1]}
            active={activeSlide === 1}
          >
            <SectionHeading label="01 / The new word of mouth">
              Your customers are already asking AI who to hire.
            </SectionHeading>
            <div className={styles.questionGrid}>
              {[
                '“Who fixes leaking skylights near me?”',
                '“What bookkeeper understands construction companies?”',
                '“Which window cleaner handles three-story homes?”',
              ].map((question, index) => (
                <article
                  className={cx(styles.questionCard, shared.reveal)}
                  key={question}
                >
                  <span>0{index + 1}</span>
                  <p>{question}</p>
                </article>
              ))}
            </div>
            <p className={cx(styles.bottomLine, shared.reveal)}>
              If AI can clearly understand your services, proof, and location,
              your business can become part of the answer.
            </p>
          </SlideFrame>

          <SlideFrame
            number={3}
            title={slideTitles[2]}
            active={activeSlide === 2}
          >
            <SectionHeading label="02 / Better-fit demand">
              The real opportunity is not more traffic. It is better-fit
              conversations.
            </SectionHeading>
            <div className={styles.leadValueLayout}>
              <div className={cx(styles.bigValue, shared.reveal)}>
                <strong>5×+</strong>
                <span>
                  conversion premium in published AI-referral benchmarks
                </span>
              </div>
              <div className={cx(styles.leadComparison, shared.reveal)}>
                <article>
                  <span>Traditional search</span>
                  <strong>“window cleaner”</strong>
                  <p>
                    Broad interest. Lots of options. The visitor is still
                    sorting.
                  </p>
                </article>
                <Arrow />
                <article className={styles.highlightCard}>
                  <span>AI search</span>
                  <strong>
                    “insured window cleaner for a three-story home in Bellevue”
                  </strong>
                  <p>
                    The need, location, and buying criteria are already clear.
                  </p>
                </article>
              </div>
            </div>
            <p className={cx(shared.sourceLine, shared.reveal)}>
              Benchmarks summarized from the source presentation. Results vary
              by business and market.
            </p>
          </SlideFrame>

          <SlideFrame
            number={4}
            title={slideTitles[3]}
            active={activeSlide === 3}
          >
            <SectionHeading label="03 / Why the lead is warmer">
              A specific question creates a more qualified opportunity.
            </SectionHeading>
            <div className={styles.flowGrid}>
              {[
                [
                  '1',
                  'They describe the problem',
                  'The question includes what they need, where they are, and what matters.',
                ],
                [
                  '2',
                  'AI narrows the choices',
                  'It compares businesses against those exact details.',
                ],
                [
                  '3',
                  'Your business is cited',
                  'You appear because your information matches the request.',
                ],
                [
                  '4',
                  'The customer reaches out',
                  'They arrive knowing why you may be the right fit.',
                ],
              ].map(([step, title, copy], index) => (
                <div className={styles.flowUnit} key={step}>
                  <article className={cx(styles.flowCard, shared.reveal)}>
                    <span>{step}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                  {index < 3 ? <Arrow /> : null}
                </div>
              ))}
            </div>
          </SlideFrame>

          <SlideFrame
            number={5}
            title={slideTitles[4]}
            active={activeSlide === 4}
          >
            <SectionHeading label="04 / A citation in plain English">
              Being cited means AI used your business as part of the answer.
            </SectionHeading>
            <div className={styles.citationLayout}>
              <div className={cx(styles.chatExample, shared.reveal)}>
                <p className={styles.customerBubble}>
                  Who cleans large commercial windows in the Seattle area?
                </p>
                <div className={styles.aiReply}>
                  <span>AI</span>
                  <p>
                    <strong>Greater Seattle Window Cleaning</strong> is one
                    option to consider. The company serves residential and
                    commercial properties and offers a direct estimate request.
                  </p>
                  <small>Source: your service page →</small>
                </div>
              </div>
              <aside className={cx(styles.meaningList, shared.reveal)}>
                <h3>That citation does three jobs:</h3>
                <p>
                  <span>01</span>Introduces your business at the moment of need.
                </p>
                <p>
                  <span>02</span>Explains why you fit the request.
                </p>
                <p>
                  <span>03</span>Transfers some of the answer’s trust to your
                  brand.
                </p>
              </aside>
            </div>
          </SlideFrame>

          <SlideFrame
            number={6}
            title={slideTitles[5]}
            active={activeSlide === 5}
          >
            <SectionHeading label="05 / What AI needs to see">
              AI recommends businesses it can understand and verify.
            </SectionHeading>
            <div className={styles.fourSignals}>
              {[
                [
                  'Clear',
                  'Exactly what you do, who you help, and where you work.',
                ],
                [
                  'Specific',
                  'Real services, prices or ranges, timelines, FAQs, and constraints.',
                ],
                [
                  'Proven',
                  'Reviews, project examples, credentials, and measurable results.',
                ],
                [
                  'Consistent',
                  'The same facts across your website, profiles, directories, and press.',
                ],
              ].map(([title, copy], index) => (
                <article
                  className={cx(styles.signalCard, shared.reveal)}
                  key={title}
                >
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <p className={cx(styles.bottomLine, shared.reveal)}>
              You are making it easy for a machine - and a person - to answer: “Is
              this business a credible fit?”
            </p>
          </SlideFrame>

          <SlideFrame
            number={7}
            title={slideTitles[6]}
            active={activeSlide === 6}
          >
            <SectionHeading label="06 / A real opening for smaller brands">
              You do not have to be the biggest business to become the best
              answer.
            </SectionHeading>
            <div className={styles.openingLayout}>
              <div className={cx(styles.overlapVisual, shared.reveal)}>
                <div>
                  Google’s
                  <br />
                  top results
                </div>
                <div>
                  AI’s cited
                  <br />
                  sources
                </div>
                <strong>
                  17–38%<small>overlap</small>
                </strong>
              </div>
              <div className={cx(styles.openingCopy, shared.reveal)}>
                <strong>83%</strong>
                <p>
                  of AI Overview citations in one 2026 analysis came from pages
                  outside Google’s organic top 10.
                </p>
                <div>
                  That creates room for a smaller business with a clearer, more
                  useful answer to be visible alongside larger competitors.
                </div>
              </div>
            </div>
            <p className={cx(shared.sourceLine, shared.reveal)}>
              Sources in the original briefing: BrightEdge, Demand Local,
              ConvertMate.
            </p>
          </SlideFrame>

          <SlideFrame
            number={8}
            title={slideTitles[7]}
            active={activeSlide === 7}
          >
            <SectionHeading label="07 / Build pages that answer the buying question">
              The best page feels like a helpful expert answered first.
            </SectionHeading>
            <div className={styles.pageRecipe}>
              <div className={cx(styles.pageMock, shared.reveal)}>
                <div className={styles.pageHero}>
                  Can you solve this problem?
                  <small>Yes - here is who we help, where, and how.</small>
                </div>
                <div className={styles.pageFacts}>
                  Specific services · service area · pricing guidance
                </div>
                <div>Proof: a project, review, or result</div>
                <div>Simple next step: request an estimate</div>
              </div>
              <ol className={cx(styles.recipeList, shared.reveal)}>
                <li>
                  <span>01</span>
                  <div>
                    <h3>Lead with the answer</h3>
                    <p>Do not make a customer - or AI - hunt for what you do.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Add useful specifics</h3>
                    <p>Make your experience concrete enough to compare.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Show the proof</h3>
                    <p>Back the promise with evidence from real work.</p>
                  </div>
                </li>
                <li>
                  <span>04</span>
                  <div>
                    <h3>Make action easy</h3>
                    <p>Give a qualified visitor one obvious next step.</p>
                  </div>
                </li>
              </ol>
            </div>
          </SlideFrame>

          <SlideFrame
            number={9}
            title={slideTitles[8]}
            active={activeSlide === 8}
          >
            <SectionHeading label="08 / Accuracy is a trust signal">
              Fresh, accurate information gives AI more confidence in the
              answer.
            </SectionHeading>
            <div className={styles.freshLayout}>
              <div className={cx(styles.refreshDial, shared.reveal)}>
                <strong>30</strong>
                <span>day check-in</span>
                <i />
              </div>
              <div className={styles.refreshGrid}>
                {[
                  'Hours & availability',
                  'Service areas',
                  'Pricing guidance',
                  'Licenses & insurance',
                  'Recent projects',
                  'New reviews & FAQs',
                ].map((item) => (
                  <article
                    className={cx(styles.refreshCard, shared.reveal)}
                    key={item}
                  >
                    <span>✓</span>
                    {item}
                  </article>
                ))}
              </div>
            </div>
            <p className={cx(styles.bottomLine, shared.reveal)}>
              For a small business, “fresh content” can be as practical as
              keeping the facts customers use to make a decision current.
            </p>
          </SlideFrame>

          <SlideFrame
            number={10}
            title={slideTitles[9]}
            active={activeSlide === 9}
          >
            <SectionHeading label="09 / Trust is bigger than your website">
              Your reputation travels farther when other people confirm it.
            </SectionHeading>
            <div className={styles.reputationMap}>
              <div className={cx(styles.centerBusiness, shared.reveal)}>
                Your
                <br />
                business
              </div>
              {[
                ['Reviews', 'Customers describe the result'],
                ['Local press', 'A third party validates the story'],
                ['Directories', 'Core business facts stay consistent'],
                ['Partners', 'Relevant organizations mention you'],
              ].map(([title, copy], index) => (
                <article
                  className={cx(
                    styles.reputationNode,
                    styles[`node${index + 1}`],
                    shared.reveal,
                  )}
                  key={title}
                >
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <p className={cx(styles.bottomLine, shared.reveal)}>
              AI looks for agreement across the web. Every credible mention
              helps make your business easier to trust.
            </p>
          </SlideFrame>

          <SlideFrame
            number={11}
            title={slideTitles[10]}
            active={activeSlide === 10}
          >
            <SectionHeading label="10 / One reputation, several answer engines">
              Every AI tool sees a different version of the web.
            </SectionHeading>
            <div className={styles.platformLayout}>
              <div className={cx(styles.platformStat, shared.reveal)}>
                <strong>11%</strong>
                <p>
                  domain overlap between ChatGPT and Perplexity citations for
                  the same queries in one analysis.
                </p>
              </div>
              <div className={styles.platforms}>
                <article className={cx(styles.platform, shared.reveal)}>
                  <span>C</span>
                  <h3>ChatGPT</h3>
                  <p>Its own mix of search and sources</p>
                </article>
                <article className={cx(styles.platform, shared.reveal)}>
                  <span>P</span>
                  <h3>Perplexity</h3>
                  <p>Its own index and citation choices</p>
                </article>
                <article className={cx(styles.platform, shared.reveal)}>
                  <span>G</span>
                  <h3>Google AI</h3>
                  <p>Google’s search ecosystem</p>
                </article>
              </div>
            </div>
            <p className={cx(styles.bottomLine, shared.reveal)}>
              The practical response is not three separate brands. It is one
              clear, credible business presence distributed consistently.
            </p>
          </SlideFrame>

          <SlideFrame
            number={12}
            title={slideTitles[11]}
            active={activeSlide === 11}
          >
            <SectionHeading label="11 / Keep the scorecard close to revenue">
              Measure business outcomes, not search jargon.
            </SectionHeading>
            <div className={styles.scorecard}>
              {[
                [
                  'Qualified inquiries',
                  'Did the right prospects contact you?',
                  '01',
                ],
                [
                  'Citation visibility',
                  'For which customer questions did AI mention you?',
                  '02',
                ],
                [
                  'Estimate requests',
                  'Did AI-referred visitors take the next step?',
                  '03',
                ],
                [
                  'Competitive share',
                  'How often did you appear versus nearby alternatives?',
                  '04',
                ],
              ].map(([title, copy, number]) => (
                <article
                  className={cx(styles.scoreCard, shared.reveal)}
                  key={title}
                >
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <i />
                </article>
              ))}
            </div>
          </SlideFrame>

          <SlideFrame
            number={13}
            title={slideTitles[12]}
            active={activeSlide === 12}
          >
            <SectionHeading label="12 / The acronyms, translated">
              The industry has three labels. The business goal is simpler.
            </SectionHeading>
            <div className={styles.acronymGrid}>
              <article className={cx(styles.acronymCard, shared.reveal)}>
                <strong>SEO</strong>
                <h3>Search Engine Optimization</h3>
                <p>
                  Help people find your pages in traditional search results.
                </p>
              </article>
              <article className={cx(styles.acronymCard, shared.reveal)}>
                <strong>AEO</strong>
                <h3>Answer Engine Optimization</h3>
                <p>
                  Help search tools pull a clear answer from your information.
                </p>
              </article>
              <article className={cx(styles.acronymCard, shared.reveal)}>
                <strong>GEO</strong>
                <h3>Generative Engine Optimization</h3>
                <p>
                  Help AI systems understand, trust, and cite your business.
                </p>
              </article>
            </div>
            <div className={cx(styles.umbrella, shared.reveal)}>
              <span>What we call the whole opportunity</span>
              <strong>AI Search Visibility</strong>
              <p>
                Being present wherever a customer asks a search engine or AI
                tool who can help.
              </p>
            </div>
          </SlideFrame>

          <SlideFrame
            number={14}
            title={slideTitles[13]}
            active={activeSlide === 13}
          >
            <SectionHeading label="13 / Case study: local demand into real conversations">
              A clearer path from a specific need to 300+ leads in year one.
            </SectionHeading>
            <div className={styles.caseStudyLayout}>
              <div className={cx(styles.caseImage, shared.reveal)}>
                <img
                  src="/photos/portfolio/lennon-wc/seattle-window-cleaning.png"
                  alt="A window cleaner working on exterior glass in Seattle"
                />
                <span>Local service business / Greater Seattle</span>
              </div>
              <div className={cx(styles.caseCopy, shared.reveal)}>
                <p className={styles.caseEyebrow}>
                  Greater Seattle Window Cleaning Company
                </p>
                <strong>300+</strong>
                <h3>leads generated in the first year</h3>
                <p>
                  The work organized service pages around what local customers
                  were already searching for, added trust-building detail, and
                  simplified the path to an estimate.
                </p>
                <div>
                  <b>The channel keeps changing.</b> The principle does not:
                  match a specific need with a clear answer and an easy next
                  step.
                </div>
                <a href="/case-studies/greater-seattle-window-cleaning-lead-generation">
                  Read the case study →
                </a>
              </div>
            </div>
          </SlideFrame>

          <SlideFrame
            number={15}
            title={slideTitles[14]}
            active={activeSlide === 14}
            dark
            className={styles.finalSlide}
            bodyClassName={styles.finalBody}
          >
            <div className={cx(styles.finalCopy, shared.reveal)}>
              <p>AI Search Visibility</p>
              <h2>
                Be the business
                <br />
                AI recommends next.
              </h2>
              <div>
                <span>
                  Start with the questions your best customers already ask.
                </span>
                <a href="/contact">
                  Build your visibility plan <b>→</b>
                </a>
              </div>
            </div>
            <div className={cx(styles.finalProof, shared.reveal)}>
              <span>Clear</span>
              <span>Specific</span>
              <span>Proven</span>
              <span>Consistent</span>
              <strong>Recommended</strong>
            </div>
          </SlideFrame>
        </div>
      </div>

      <aside className={shared.controls} aria-label="Presentation controls">
        <p>
          <strong>{String(activeSlide + 1).padStart(2, '0')}</strong>
          <span>/ {TOTAL_SLIDES}</span>
        </p>
        <div className={shared.progressTrack} aria-hidden="true">
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

      <nav className={shared.slideNav} aria-label="Choose a slide">
        {slideTitles.map((title, index) => (
          <button
            key={title}
            type="button"
            className={activeSlide === index ? shared.current : undefined}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${title}`}
            aria-current={activeSlide === index ? 'step' : undefined}
          >
            <span />
          </button>
        ))}
      </nav>

      <p className={shared.scrollHint} aria-hidden="true">
        Scroll / swipe / use arrow keys
      </p>
    </main>
  );
}
