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
      "Improve web performance",
      "Optimize sales pipeline",
      "Stabilize product reliability",
      "Gain visibility",
    ],
  },
  {
    id: "businessType",
    label: "By Business Type",
    options: [
      "All",
      "Healthcare services",
      "Cybersecurity SaaS",
      "Startup technology company",
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
    title: "WordPress to Next.js migration that kept user trust",
    context: "For a healthcare company with a trusted brand experience and underperforming web scores",
    problem:
      "The legacy WordPress stack held back performance and conversions, but changing the UX risked disrupting user trust.",
    systemApplied: "Web Consulting + Revenue Automation",
    outcome:
      "Migrated the site to Next.js while preserving the familiar look and feel, improving web scores and lead conversion.",
    challenge: "Improve conversion rate",
    businessType: "Healthcare services",
    systems: ["Web Consulting", "Revenue Automation"],
  },
  {
    title: "Salesforce + Snowflake dashboards for executive sales visibility",
    context: "For a private cybersecurity SaaS company with fragmented sales reporting",
    problem:
      "Sales leaders lacked a reliable way to identify high-performing regions and salespeople across pipeline stages.",
    systemApplied: "Revenue Automation + Business Intelligence",
    outcome:
      "Built dashboards that organized Salesforce data via the Snowflake API to optimize pipeline decisions and regional coaching.",
    challenge: "Optimize sales pipeline",
    businessType: "Cybersecurity SaaS",
    systems: ["Revenue Automation", "Business Intelligence"],
  },
  {
    title: "Codebase audit after a critical valuation outage",
    context: "For a fast-moving startup product team during a high-stakes valuation period",
    problem:
      "The product went down at a crucial moment, exposing reliability and architectural risks in a rapidly evolving codebase.",
    systemApplied: "Business Intelligence",
    outcome:
      "Delivered a focused codebase audit with prioritized remediation steps to stabilize operations and reduce repeat incidents.",
    challenge: "Stabilize product reliability",
    businessType: "Startup technology company",
    systems: ["Business Intelligence"],
  },
  {
    title: "Executive reporting that drives action",
    context: "For leadership teams that need clear weekly decision signals",
    problem: "Operational data exists but is too inconsistent for confident decisions.",
    systemApplied: "Business Intelligence",
    outcome: "Clear performance visibility and faster strategic decision-making.",
    challenge: "Gain visibility",
    businessType: "Cybersecurity SaaS",
    systems: ["Business Intelligence"],
  },
];

const featuredCases = [
  {
    title: "WordPress to Next.js modernization",
    problem: "Low web scores and conversion friction on a legacy stack.",
    solution: "Rebuilt in Next.js while preserving the trusted design users already knew.",
    outcome: "Stronger performance metrics and improved lead conversion.",
  },
  {
    title: "Pipeline visibility for cybersecurity SaaS",
    problem: "No unified view of regional and rep-level sales performance.",
    solution: "Salesforce data model + Snowflake API dashboards for leadership.",
    outcome: "Faster, more confident pipeline and coaching decisions.",
  },
  {
    title: "Post-outage startup code audit",
    problem: "Production outage during a crucial valuation window.",
    solution: "Rapid architecture and reliability audit with prioritized fixes.",
    outcome: "Clear stabilization roadmap and reduced operational risk.",
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
          <a className="secondary-button" href="/case-studies">
            → Talk Through Your System
          </a>
        </div>
      </section>
    </main>
  );
}
