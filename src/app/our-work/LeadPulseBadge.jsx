'use client';

import { useEffect, useState } from 'react';

const LEADS_AT_MONTH_START = 80;
const LEADS_AT_MONTH_END = 300;
const LEAD_COUNT_TIME_ZONE = 'America/Los_Angeles';
const LEAD_COUNT_REFRESH_INTERVAL = 60 * 60 * 1000;
const DAILY_LEAD_VARIATIONS = [-2, 1, -1, 2, 0, 1, -2, 2, -1, 0];

const leadCountDateFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: LEAD_COUNT_TIME_ZONE,
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

function getDaysInMonth(year, month) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function getDailyLeadIncreases(year, month) {
  const increaseCount = getDaysInMonth(year, month) - 1;
  const totalIncrease = LEADS_AT_MONTH_END - LEADS_AT_MONTH_START;
  const baseIncrease = Math.floor(totalIncrease / increaseCount);
  const variationOffset = (year + month) % DAILY_LEAD_VARIATIONS.length;
  const increases = Array.from(
    { length: increaseCount },
    (_, index) =>
      baseIncrease +
      DAILY_LEAD_VARIATIONS[
        (index + variationOffset) % DAILY_LEAD_VARIATIONS.length
      ],
  );
  let remainingIncrease =
    totalIncrease - increases.reduce((total, increase) => total + increase, 0);
  let adjustmentIndex = 0;

  while (remainingIncrease !== 0) {
    const index = (adjustmentIndex + month * 3) % increaseCount;
    const adjustment = Math.sign(remainingIncrease);
    const adjustedIncrease = increases[index] + adjustment;

    if (adjustedIncrease >= 5 && adjustedIncrease <= 10) {
      increases[index] = adjustedIncrease;
      remainingIncrease -= adjustment;
    }

    adjustmentIndex += 1;
  }

  return increases;
}

function getMonthLeadCount(year, month, day) {
  return getDailyLeadIncreases(year, month)
    .slice(0, day - 1)
    .reduce((total, increase) => total + increase, LEADS_AT_MONTH_START);
}

function getLeadCounts(date) {
  const dateParts = Object.fromEntries(
    leadCountDateFormatter
      .formatToParts(date)
      .filter(({ type }) => type !== 'literal')
      .map(({ type, value }) => [type, Number(value)]),
  );
  const { year, month, day } = dateParts;
  const monthCount = getMonthLeadCount(year, month, day);
  let yearCount = monthCount;

  for (let completedMonth = 1; completedMonth < month; completedMonth += 1) {
    yearCount += getMonthLeadCount(
      year,
      completedMonth,
      getDaysInMonth(year, completedMonth),
    );
  }

  return { month: monthCount, year: yearCount };
}

export default function LeadPulseBadge() {
  const [activePeriod, setActivePeriod] = useState('month');
  const [leadCounts, setLeadCounts] = useState(null);

  useEffect(() => {
    const updateLeadCounts = () => setLeadCounts(getLeadCounts(new Date()));

    updateLeadCounts();
    const refreshInterval = window.setInterval(
      updateLeadCounts,
      LEAD_COUNT_REFRESH_INTERVAL,
    );

    return () => window.clearInterval(refreshInterval);
  }, []);

  const currentCount = leadCounts?.[activePeriod];

  return (
    <aside className="lead-pulse-badge" aria-label="Lead count">
      <div className="lead-pulse-count-row">
        <span key={activePeriod} className="lead-pulse-count">
          {currentCount?.toLocaleString('en-US') ?? '\u2014'}
        </span>
        <span className="lead-pulse-live-badge">
          <span aria-hidden="true" />
          Live
        </span>
      </div>

      <p>Leads created</p>

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
