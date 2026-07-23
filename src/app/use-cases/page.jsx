"use client";

import { useMemo, useState } from "react";

const filterGroups = [
  {
    id: "challenge",
    label: "By Challenge",
    options: [
      "All",
      "Improve conversion rate",
      "Improve pipeline efficiency",
      "Reduce reliability risk",
    ],
  },
  {
    id: "businessType",
    label: "By Business Type",
    options: [
      "All",
      "Established services company",
      "Private cybersecurity SaaS",
      "Startup tech company",
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
    title: "WordPress to Next.js Migration Without Losing Trusted Brand Feel",
    context: "For an established company with strong traffic but underperforming web scores and lead conversion",
    problem:
      "Their WordPress site was slowing performance and conversion, but leadership could not risk changing the familiar experience their users trusted.",
    systemApplied: "Web Consulting",
    outcome:
      "Completed a migration from WordPress to Next.js while preserving the visual identity users already knew, improving web scores and lead conversion.",
    challenge: "Improve conversion rate",
    businessType: "Established services company",
    systems: ["Web Consulting"],
  },
  {
    title: "Salesforce + Snowflake Dashboards for Cybersecurity SaaS Leaders",
    context:
      "For a private cybersecurity SaaS company that needed clearer executive visibility into pipeline performance",
    problem:
      "Sales data lived in Salesforce but lacked a unified dashboard view for pipeline health, top-performing regions, and high-performing sales reps.",
    systemApplied: "Revenue Automation + Business Intelligence",
    outcome:
      "Built dashboards powered by Salesforce data through the Snowflake API, helping executives optimize pipeline decisions across regions and sales teams.",
    challenge: "Improve pipeline efficiency",
    businessType: "Private cybersecurity SaaS",
    systems: ["Revenue Automation", "Business Intelligence"],
  },
  {
    title: "Critical Product Audit During a High-Stakes Outage",
    context:
      "For a startup tech company whose fast-moving product went down at a crucial valuation moment",
    problem:
      "The team needed immediate technical clarity on systemic codebase weaknesses contributing to instability and downtime risk.",
    systemApplied: "Web Consulting + Business Intelligence",
    outcome:
      "Delivered a focused codebase audit with prioritized reliability findings so leadership could stabilize the platform and protect momentum.",
    challenge: "Reduce reliability risk",
    businessType: "Startup tech company",
    systems: ["Web Consulting", "Business Intelligence"],
  },
];

const featuredCases = [
  {
    title: "Modern Web Migration, Familiar Experience",
    problem: "A legacy WordPress stack limited performance and conversion.",
    solution: "Migrated to Next.js while keeping the trusted site experience intact.",
    outcome: "Improved web scores and lead conversion.",
  },
  {
    title: "Pipeline Visibility for Executive Sales Decisions",
    problem: "Salesforce data was too fragmented for leadership insight.",
    solution: "Built Snowflake API-powered dashboards for regions and rep performance.",
    outcome: "Sharper pipeline optimization across the sales organization.",
  },
  {
    title: "Outage Response Through Codebase Audit",
    problem: "A valuation-critical outage exposed hidden reliability risks.",
    solution: "Performed a rapid technical audit with prioritized remediation.",
    outcome: "Clear stabilization plan for a fast-moving product team.",
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
