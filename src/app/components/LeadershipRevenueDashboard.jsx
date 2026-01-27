"use client";

import { revenueDashboardData } from "@/lib/demoData";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function LeadershipRevenueDashboard() {
  const {
    lastUpdated,
    revenueReality,
    flowStages,
    systemHealth,
    guardrails,
    checklist,
    leakageRisks,
    efficiencyMetrics,
    eventLog,
  } = revenueDashboardData;

  return (
    <section className="revenue-dashboard">
      <header className="dashboard-header">
        <div>
          <p className="dashboard-eyebrow">Revenue System — Live Status</p>
          <p className="dashboard-subtitle">
            All figures are simulated for sandbox monitoring. No funds moved.
          </p>
        </div>
        <div className="dashboard-meta">
          <span className="dashboard-badge">Test Mode (Sandbox Events)</span>
          <span className="dashboard-updated">Last updated: {lastUpdated}</span>
        </div>
      </header>

      <div className="dashboard-grid">
        <section className="card-grid">
          <h2>Revenue Reality</h2>
          <div className="kpi-grid">
            {revenueReality.map((item) => (
              <article key={item.title} className="kpi-card">
                <p className="kpi-title">{item.title}</p>
                <p className="kpi-value">
                  {typeof item.value === "number"
                    ? currencyFormatter.format(item.value)
                    : item.value}
                </p>
                <p className="kpi-change">{item.change}</p>
                <p className="kpi-note">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-row">
          <div className="card flow-card">
            <header className="card-header">
              <div>
                <h2>Where money is moving</h2>
                <p className="card-subtitle">Simulated CRM → Payments → Accounting flow</p>
              </div>
              <span className="card-tag">Sandbox model</span>
            </header>
            <ol className="flow-stepper">
              {flowStages.map((stage, index) => (
                <li key={stage.stage} className="flow-step">
                  <div className="flow-step-index">{index + 1}</div>
                  <div>
                    <p className="flow-step-title">{stage.stage}</p>
                    <p className="flow-step-detail">
                      {stage.count} deals · {currencyFormatter.format(stage.value)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Count</th>
                    <th>Value</th>
                    <th>Avg time</th>
                    <th>Conversion</th>
                  </tr>
                </thead>
                <tbody>
                  {flowStages.map((stage) => (
                    <tr key={stage.stage}>
                      <td>{stage.stage}</td>
                      <td>{stage.count}</td>
                      <td>{currencyFormatter.format(stage.value)}</td>
                      <td>{stage.avgTime}</td>
                      <td>{stage.conversion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="side-stack">
            <div className="card">
              <header className="card-header">
                <h2>System Health & Guardrails</h2>
                <span className="card-tag">Test signal</span>
              </header>
              <ul className="health-list">
                {systemHealth.map((item) => (
                  <li key={item.label}>
                    <div>
                      <p className="health-label">{item.label}</p>
                      <p className="health-detail">{item.detail}</p>
                    </div>
                    <span className="health-status">{item.status}</span>
                  </li>
                ))}
              </ul>
              <div className="guardrails">
                <h3>Guardrails active</h3>
                <ul>
                  {guardrails.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card">
              <header className="card-header">
                <h2>Operational checklist</h2>
                <span className="card-tag">Simulated</span>
              </header>
              <ul className="checklist">
                {checklist.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <span className="checklist-status">{item.status}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <header className="card-header">
                <h2>Recent System Events</h2>
                <span className="card-tag">Sandbox log</span>
              </header>
              <ul className="event-log">
                {eventLog.map((event) => (
                  <li key={`${event.timestamp}-${event.summary}`}>
                    <span className="event-time">{event.timestamp}</span>
                    <span className="event-summary">{event.summary}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="dashboard-row dashboard-row--halves">
          <div className="card">
            <header className="card-header">
              <h2>Leakage & Risk</h2>
              <span className="card-tag">Simulated alerts</span>
            </header>
            <ul className="risk-list">
              {leakageRisks.map((risk) => (
                <li key={risk.title}>
                  <p className="risk-title">{risk.title}</p>
                  <p className="risk-detail">{risk.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <header className="card-header">
              <h2>Efficiency & Leverage</h2>
              <span className="card-tag">Test metrics</span>
            </header>
            <ul className="metrics-list">
              {efficiencyMetrics.map((metric) => (
                <li key={metric.label}>
                  <div>
                    <p className="metric-label">{metric.label}</p>
                    <p className="metric-detail">{metric.detail}</p>
                  </div>
                  <span className="metric-value">{metric.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <footer className="dashboard-footer">
        Simulated events. No funds moved.
      </footer>
    </section>
  );
}
