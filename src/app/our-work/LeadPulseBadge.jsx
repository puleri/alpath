'use client';

import { useState } from 'react';

const periods = {
  month: {
    count: 134,
    label: 'Leads created',
  },
  year: {
    count: 1649,
    label: 'Leads created',
  },
};

export default function LeadPulseBadge() {
  const [activePeriod, setActivePeriod] = useState('month');
  const currentPeriod = periods[activePeriod];

  return (
    <aside className="lead-pulse-badge" aria-label="Lead count">
      <div className="lead-pulse-count-row">
        <span key={activePeriod} className="lead-pulse-count">
          {currentPeriod.count.toLocaleString('en-US')}
        </span>
        <span className="lead-pulse-live-badge">
          <span aria-hidden="true" />
          Live
        </span>
      </div>

      <p>{currentPeriod.label}</p>

      <div className="lead-pulse-toggle" aria-label="Lead count period">
        <button
          type="button"
          aria-pressed={activePeriod === 'month'}
          onClick={() => setActivePeriod('month')}
        >
          This month
        </button>
        <button
          type="button"
          aria-pressed={activePeriod === 'year'}
          onClick={() => setActivePeriod('year')}
        >
          This year
        </button>
      </div>
    </aside>
  );
}
