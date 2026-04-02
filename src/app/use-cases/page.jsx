"use client";

import { useMemo, useState } from "react";

const filterGroups = [
  {
    id: "challenge",
    label: "By Challenge",
    options: [
      "All",
      "Increase lead volume",
      "Improve conversion rate",
      "Automate follow-up",
      "Unify systems",
      "Gain visibility",
    ],
  },
  {
    id: "businessType",
    label: "By Business Type",
    options: [
      "All",
      "Professional services",
      "Local service businesses",
      "SaaS / tech-enabled",
      "Growth-stage companies",
    ],
  },
  {
    id: "system",
    label: "By System",
    options: ["All", "Web Consulting", "Revenue Automation", "Business Intelligence"],
  },
];

const useCases = [
  {
    title: "Turning Website Traffic into Qualified Leads",
    context: "For firms with steady traffic but low conversion",
    problem: "Visitors leave without taking action.",
    systemApplied: "Web Consulting + Revenue Automation",
    outcome: "Increased conversions, clearer lead flow.",
    challenge: "Improve conversion rate",
    businessType: "Professional services",
    systems: ["Web Consulting", "Revenue Automation"],
  },
  {
    title: "Building Consistent Lead Flow for Local Operators",
    context: "For local teams relying on referrals and inconsistent demand",
    problem: "Lead volume spikes and drops with no predictable pattern.",
    systemApplied: "Web Consulting + Revenue Automation",
    outcome: "Reliable weekly pipeline and fewer missed opportunities.",
    challenge: "Increase lead volume",
    businessType: "Local service businesses",
    systems: ["Web Consulting", "Revenue Automation"],
  },
  {
    title: "Automating Follow-Up After Demo Requests",
    context: "For SaaS teams losing momentum after initial inquiry",
    problem: "High-intent leads go cold before sales responds.",
    systemApplied: "Revenue Automation",
    outcome: "Faster response time and stronger demo-to-close rate.",
    challenge: "Automate follow-up",
    businessType: "SaaS / tech-enabled",
    systems: ["Revenue Automation"],
  },
  {
    title: "Connecting Disconnected Tools Into One System",
    context: "For growth-stage companies juggling multiple platforms",
    problem: "Teams duplicate work because systems do not communicate.",
    systemApplied: "Revenue Automation + Business Intelligence",
    outcome: "Unified workflows and cleaner operational handoffs.",
    challenge: "Unify systems",
    businessType: "Growth-stage companies",
    systems: ["Revenue Automation", "Business Intelligence"],
  },
  {
    title: "Creating Clarity with Executive Dashboards",
    context: "For leadership teams managing growth without visibility",
    problem: "Decisions depend on fragmented reports and guesswork.",
    systemApplied: "Business Intelligence",
    outcome: "Clear performance visibility and faster strategic decisions.",
    challenge: "Gain visibility",
    businessType: "Growth-stage companies",
    systems: ["Business Intelligence"],
  },
  {
    title: "Fixing Conversion Friction in Service Funnels",
    context: "For professional firms with strong offers but weak conversion flow",
    problem: "Prospects stall between interest and consultation booking.",
    systemApplied: "Web Consulting",
    outcome: "Higher booking rates without increasing ad spend.",
    challenge: "Improve conversion rate",
    businessType: "Professional services",
    systems: ["Web Consulting"],
  },
];

const featuredCases = [
  {
    title: "Inconsistent Lead Flow",
    problem: "Leads are unpredictable.",
    solution: "Capture + routing + follow-up system.",
    outcome: "Stable pipeline.",
  },
  {
    title: "High Traffic, Low Conversion",
    problem: "Website traffic is not translating into opportunities.",
    solution: "Audit + conversion architecture.",
    outcome: "More leads without more traffic.",
  },
  {
    title: "No Visibility Into Performance",
    problem: "Decisions are based on guesswork.",
    solution: "BI dashboards + reporting.",
    outcome: "Clear decision-making.",
  },
];

const recognitionChecklist = [
  "We get traffic, but not enough leads",
  "We have leads, but they do not convert",
  "Follow-up is manual or inconsistent",
  "Our tools do not talk to each other",
  "We do not trust our data",
];

export default function UseCasesPage() {
  const [filters, setFilters] = useState({
    challenge: "All",
    businessType: "All",
    system: "All",
  });

  const filteredUseCases = useMemo(() => {
    return useCases.filter((useCase) => {
      const matchesChallenge =
        filters.challenge === "All" || useCase.challenge === filters.challenge;
      const matchesBusinessType =
        filters.businessType === "All" || useCase.businessType === filters.businessType;
      const matchesSystem =
        filters.system === "All" || useCase.systems.includes(filters.system);

      return matchesChallenge && matchesBusinessType && matchesSystem;
    });
  }, [filters]);

  return (
    <main className="use-cases-page">
      <section className="use-cases-hero container">
        <div className="use-cases-hero-content">
          <p className="use-cases-eyebrow">Use Cases</p>
          <h1>Systems built for real business problems</h1>
          <p>
            Explore how we design and implement systems that solve specific
            challenges across industries and growth stages.
          </p>
          <a className="primary-button" href="/contact">
            → Talk Through Your Use Case
          </a>
        </div>
        <div className="use-cases-hero-visual" aria-hidden="true">
          <div className="hero-visual-grid" />
          <div className="hero-visual-node hero-visual-node-foundation">Foundation</div>
          <div className="hero-visual-node hero-visual-node-flow">Flow</div>
          <div className="hero-visual-node hero-visual-node-visibility">Visibility</div>
        </div>
      </section>

      <section className="use-cases-filters" aria-label="Filter use cases">
        <div className="container use-cases-filters-row">
          {filterGroups.map((group) => (
            <label key={group.id} className="use-cases-filter-group">
              <span>{group.label}</span>
              <select
                value={filters[group.id]}
                onChange={(event) =>
                  setFilters((previous) => ({
                    ...previous,
                    [group.id]: event.target.value,
                  }))
                }
              >
                {group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </section>

      <section className="use-cases-grid-section container">
        <div className="use-cases-grid-heading">
          <h2>Use cases by challenge, business type, and system</h2>
          <p>{filteredUseCases.length} scenarios matched your filters.</p>
        </div>

        <div className="use-cases-grid">
          {filteredUseCases.map((useCase) => (
            <article key={useCase.title} className="use-case-card">
              <h3>{useCase.title}</h3>
              <p className="use-case-context">{useCase.context}</p>
              <p>
                <strong>Problem:</strong> {useCase.problem}
              </p>
              <p>
                <strong>System Applied:</strong> {useCase.systemApplied}
              </p>
              <p>
                <strong>Outcome:</strong> {useCase.outcome}
              </p>
              <a href="/contact">→ Learn More</a>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-use-cases container" aria-label="Featured use cases">
        <h2>Featured use cases</h2>
        <div className="featured-use-cases-grid">
          {featuredCases.map((item) => (
            <article key={item.title} className="featured-use-case-card">
              <h3>{item.title}</h3>
              <p>
                <strong>Problem:</strong> {item.problem}
              </p>
              <p>
                <strong>Solution:</strong> {item.solution}
              </p>
              <p>
                <strong>Outcome:</strong> {item.outcome}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="system-mapping container">
        <h2>Every use case maps to a system</h2>
        <div className="system-mapping-rail" role="presentation">
          <div>
            <p>Foundation</p>
            <span>(Web)</span>
          </div>
          <div>
            <p>Flow</p>
            <span>(Automation)</span>
          </div>
          <div>
            <p>Visibility</p>
            <span>(BI)</span>
          </div>
        </div>
        <p>
          Different problems live in different parts of the system. We identify
          where the issue exists, then design the right solution.
        </p>
      </section>

      <section className="recognition-section container">
        <h2>Do you recognize your situation?</h2>
        <ul>
          {recognitionChecklist.map((item) => (
            <li key={item}>
              <span aria-hidden="true">☐</span>
              {item}
            </li>
          ))}
        </ul>
        <p>If any of these sound familiar, there&apos;s a system behind it.</p>
      </section>

      <section className="use-cases-conversion container">
        <h2>Let&apos;s map your use case</h2>
        <p>
          We&apos;ll break down your current system, identify gaps, and show you
          exactly where to improve.
        </p>
        <div className="use-cases-conversion-links">
          <a className="primary-button" href="/contact">
            → Start with an Audit
          </a>
          <a className="secondary-button" href="/contact">
            → Talk Through Your System
          </a>
        </div>
      </section>
    </main>
  );
}
