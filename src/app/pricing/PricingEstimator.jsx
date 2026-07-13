'use client';

import { useMemo, useState } from 'react';

const oneTimeItems = [
  {
    id: 'website',
    label: 'Website build',
    detail: 'Strategy, design, development, launch support',
    price: 8500,
    defaultSelected: true,
  },
  {
    id: 'copy',
    label: 'Messaging and page copy',
    detail: 'Positioning, offer clarity, service-page copy',
    price: 2500,
    defaultSelected: true,
  },
  {
    id: 'migration',
    label: 'Content or WordPress migration',
    detail: 'Route mapping, media recovery, redirects',
    price: 3000,
    defaultSelected: false,
  },
  {
    id: 'seo-audit',
    label: 'SEO audit and strategy',
    detail: 'Technical audit, keyword map, 90-day roadmap',
    price: 3500,
    defaultSelected: false,
  },
];

const monthlyItems = [
  {
    id: 'ads',
    label: 'Google Ads management',
    detail: 'Campaign structure, reporting, monthly optimization',
    price: 1000,
    defaultSelected: true,
  },
  {
    id: 'seo',
    label: 'Monthly SEO management',
    detail: 'Content direction, technical improvements, reporting',
    price: 2500,
    defaultSelected: false,
  },
  {
    id: 'care',
    label: 'Website care and iteration',
    detail: 'Updates, monitoring, small improvements',
    price: 750,
    defaultSelected: false,
  },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

function ToggleRow({ item, selected, onToggle }) {
  return (
    <button
      type="button"
      className={`pricing-estimator-row${selected ? ' is-selected' : ''}`}
      aria-pressed={selected}
      onClick={() => onToggle(item.id)}
    >
      <span className="pricing-estimator-check" aria-hidden="true">
        {selected ? 'On' : '+'}
      </span>
      <span>
        <strong>{item.label}</strong>
        <small>{item.detail}</small>
      </span>
      <span>{formatCurrency(item.price)}</span>
    </button>
  );
}

export default function PricingEstimator() {
  const [selectedOneTime, setSelectedOneTime] = useState(() =>
    oneTimeItems
      .filter((item) => item.defaultSelected)
      .map((item) => item.id),
  );
  const [selectedMonthly, setSelectedMonthly] = useState(() =>
    monthlyItems
      .filter((item) => item.defaultSelected)
      .map((item) => item.id),
  );

  const totals = useMemo(() => {
    const oneTimeTotal = oneTimeItems
      .filter((item) => selectedOneTime.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);
    const monthlyTotal = monthlyItems
      .filter((item) => selectedMonthly.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);

    return { oneTimeTotal, monthlyTotal };
  }, [selectedOneTime, selectedMonthly]);

  const toggleOneTime = (id) => {
    setSelectedOneTime((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id],
    );
  };

  const toggleMonthly = (id) => {
    setSelectedMonthly((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id],
    );
  };

  return (
    <div className="pricing-estimator">
      <div className="pricing-estimator-options">
        <div>
          <p className="pricing-mini-label">Project scope</p>
          <div className="pricing-estimator-list">
            {oneTimeItems.map((item) => (
              <ToggleRow
                key={item.id}
                item={item}
                selected={selectedOneTime.includes(item.id)}
                onToggle={toggleOneTime}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="pricing-mini-label">Ongoing support</p>
          <div className="pricing-estimator-list">
            {monthlyItems.map((item) => (
              <ToggleRow
                key={item.id}
                item={item}
                selected={selectedMonthly.includes(item.id)}
                onToggle={toggleMonthly}
              />
            ))}
          </div>
        </div>
      </div>

      <aside className="pricing-estimator-total" aria-label="Estimated pricing">
        <p className="pricing-mini-label">Your estimate</p>
        <div>
          <span>Project investment</span>
          <strong>{formatCurrency(totals.oneTimeTotal)}</strong>
        </div>
        <div>
          <span>Monthly management</span>
          <strong>{formatCurrency(totals.monthlyTotal)}</strong>
        </div>
        <p>
          These numbers are directional. The first call is where we narrow scope
          and tell you what actually makes sense.
        </p>
        <a className="primary-button" href="/contact">
          Start a conversation
        </a>
      </aside>
    </div>
  );
}
