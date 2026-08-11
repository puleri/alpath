'use client';

import { useEffect, useState } from 'react';

const examples = [
  {
    id: 'real-estate',
    question: 'What is the best neighborhood for raising a family in Seattle?',
    answer:
      'For families comparing parks, neighborhood amenities, commute options, and nearby schools, Green Lake is often a strong place to start.',
    followUp:
      "Ballard and West Seattle are also worth comparing based on a household's priorities, commute, and budget.",
    sources: [
      {
        initial: 'Y',
        name: 'Your Real Estate Firm',
        title: 'Seattle Neighborhood Guide',
      },
      {
        initial: 'S',
        name: 'Seattle.gov',
        title: 'Neighborhood Resources',
      },
      {
        initial: 'S',
        name: 'Seattle Public Schools',
        citation: 'Schools',
        title: 'School Finder',
      },
    ],
  },
  {
    id: 'construction',
    question:
      'Who is a reliable contractor for a commercial remodel in Seattle?',
    answer:
      'For commercial remodels, Your Construction Company stands out for clear budgeting, scheduling, permitting, and active-site coordination.',
    followUp:
      "Seattle's permit guidance and Washington's contractor lookup are also useful when comparing requirements, credentials, and project readiness.",
    sources: [
      {
        initial: 'Y',
        name: 'Your Construction Company',
        title: 'Commercial Remodel Guide',
      },
      {
        initial: 'S',
        name: 'Seattle.gov',
        title: 'Construction Permits',
      },
      {
        initial: 'W',
        name: 'Washington L&I',
        citation: 'WA L&I',
        title: 'Contractor Lookup',
      },
    ],
  },
  {
    id: 'architecture',
    question: 'Who can design a thoughtful small commercial space in Seattle?',
    answer:
      'For a small commercial project, Your Architecture Firm is a strong option for thoughtful programming, permitting, and design that reflects the site.',
    followUp:
      "Seattle's permit resources and the AIA directory can also help compare project fit, credentials, and the path from early feasibility to approval.",
    sources: [
      {
        initial: 'Y',
        name: 'Your Architecture Firm',
        title: 'Commercial Project Portfolio',
      },
      {
        initial: 'S',
        name: 'Seattle SDCI',
        citation: 'SDCI',
        title: 'Permit & Design Guidance',
      },
      {
        initial: 'A',
        name: 'AIA Seattle',
        title: 'Architect Directory',
      },
    ],
  },
  {
    id: 'interior-design',
    question:
      'Who can design a warm, distinctive restaurant interior in Seattle?',
    answer:
      'For hospitality spaces, Your Interior Design Company is a strong option for balancing guest experience, brand, durability, and service flow.',
    followUp:
      "ASID's directory and Seattle's local design resources can also help compare specialization, credentials, and project fit.",
    sources: [
      {
        initial: 'Y',
        name: 'Your Interior Design Company',
        title: 'Hospitality Interiors',
      },
      {
        initial: 'A',
        name: 'ASID',
        title: 'Designer Directory',
      },
      {
        initial: 'S',
        name: 'Seattle Design Center',
        citation: 'Design Center',
        title: 'Design Resources',
      },
    ],
  },
];

const DISPLAY_DURATION = 6200;
const FADE_DURATION = 450;
const ENTRY_DURATION = 800;

export default function AiSearchDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState('entering');
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    const updateMotionPreference = () =>
      setReduceMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener('change', updateMotionPreference);

    return () => {
      motionPreference.removeEventListener('change', updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setPhase('visible');
      return undefined;
    }

    const phaseDuration =
      phase === 'entering'
        ? ENTRY_DURATION
        : phase === 'visible'
          ? DISPLAY_DURATION
          : FADE_DURATION;

    const phaseTimer = window.setTimeout(() => {
      if (phase === 'entering') {
        setPhase('visible');
        return;
      }

      if (phase === 'visible') {
        setPhase('leaving');
        return;
      }

      setActiveIndex((currentIndex) => (currentIndex + 1) % examples.length);
      setPhase('entering');
    }, phaseDuration);

    return () => {
      window.clearTimeout(phaseTimer);
    };
  }, [phase, reduceMotion]);

  const example = examples[activeIndex];

  return (
    <figure className="ai-search-demo" aria-labelledby="ai-search-demo-label">
      <figcaption className="ai-search-demo-bar">
        <span className="ai-search-demo-product">
          ChatGPT
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m4.5 6 3.5 3.5L11.5 6" />
          </svg>
        </span>
        <span id="ai-search-demo-label">Illustrative example</span>
        <span className="ai-search-demo-tools" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 16V4m0 0L8 8m4-4 4 4M6 12v6h12v-6" />
          </svg>
          <svg viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="1.25" />
            <circle cx="12" cy="12" r="1.25" />
            <circle cx="19" cy="12" r="1.25" />
          </svg>
        </span>
      </figcaption>

      <div className="ai-search-thread">
        <div
          className={`ai-search-example is-${phase}`}
          data-example={example.id}
        >
          <div className="ai-search-prompt">
            <p>{example.question}</p>
          </div>

          <div className="ai-search-assistant-row">
            <div className="ai-search-assistant-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.8a4.1 4.1 0 0 1 3.6 2.1 4.1 4.1 0 0 1 4.7 5.9 4.1 4.1 0 0 1-1.1 6.9 4.1 4.1 0 0 1-6.3 4.8 4.1 4.1 0 0 1-7.1-3.8 4.1 4.1 0 0 1-2.5-6.4 4.1 4.1 0 0 1 2.5-6.4A4.1 4.1 0 0 1 12 2.8Z" />
                <path d="m8.1 9.2 3.9-2.3 3.9 2.3v4.6L12 16.1l-3.9-2.3V9.2Z" />
              </svg>
            </div>

            <div className="ai-search-assistant-content">
              <div className="ai-search-answer">
                <p>
                  {example.answer}{' '}
                  <a
                    className="ai-search-citation is-featured"
                    href="#ai-source-1"
                  >
                    <span aria-hidden="true">{example.sources[0].initial}</span>{' '}
                    {example.sources[0].name}
                  </a>
                </p>
                <p>
                  {example.followUp}{' '}
                  {example.sources.slice(1).map((source, sourceIndex) => (
                    <a
                      className="ai-search-citation"
                      href={`#ai-source-${sourceIndex + 2}`}
                      key={source.name}
                    >
                      <span aria-hidden="true">{source.initial}</span>{' '}
                      {source.citation || source.name}
                    </a>
                  ))}
                </p>
              </div>

              <div className="ai-search-sources">
                <div className="ai-search-sources-heading">
                  <p className="ai-search-sources-label">Sources</p>
                  <span>{example.sources.length}</span>
                </div>
                <ol>
                  {example.sources.map((source, sourceIndex) => (
                    <li
                      id={`ai-source-${sourceIndex + 1}`}
                      className={sourceIndex === 0 ? 'is-featured' : undefined}
                      key={source.name}
                    >
                      <span className="ai-search-source-icon">
                        {source.initial}
                      </span>
                      <div>
                        <strong>{source.name}</strong>
                        <p>{source.title}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="ai-search-response-actions" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="8" y="8" width="11" height="11" rx="2" />
                  <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <svg viewBox="0 0 24 24">
                  <path d="M7 10v10M7 10l4-7a2 2 0 0 1 2 2v4h5a2 2 0 0 1 2 2l-1.2 7a2 2 0 0 1-2 1.7H7M3 10h4v10H3z" />
                </svg>
                <svg viewBox="0 0 24 24">
                  <path d="M7 14V4m0 10-4-7a2 2 0 0 1 2-2h5V1m-3 13h10v6H7z" />
                </svg>
                <svg viewBox="0 0 24 24">
                  <path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v6h-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-search-composer" aria-hidden="true">
          <p>Ask a follow-up</p>
          <div>
            <span className="ai-search-composer-add">+</span>
            <span className="ai-search-composer-controls">
              <svg viewBox="0 0 24 24">
                <rect x="9" y="3" width="6" height="12" rx="3" />
                <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
              </svg>
              <span className="ai-search-composer-send">
                <svg viewBox="0 0 24 24">
                  <path d="M12 19V5m0 0-5 5m5-5 5 5" />
                </svg>
              </span>
            </span>
          </div>
        </div>

        <p className="ai-search-demo-outcome">
          Your expertise becomes part of the answer.
        </p>
      </div>
    </figure>
  );
}
