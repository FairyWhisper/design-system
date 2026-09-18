// src/pages/Spacing.jsx
import React from 'react';
import './Spacing.css';

function Spacing() {
  const spacings = [
    { label: 'XXS — var(--space-xxs)', value: 'var(--space-xxs)' },
    { label: 'XS — var(--space-xs)', value: 'var(--space-xs)' },
    { label: 'SM — var(--space-sm)', value: 'var(--space-sm)' },
    { label: 'MD — var(--space-md)', value: 'var(--space-md)' },
    { label: 'LG — var(--space-lg)', value: 'var(--space-lg)' },
    { label: 'XL — var(--space-xl)', value: 'var(--space-xl)' },
    { label: 'XXL — var(--space-xxl)', value: 'var(--space-xxl)' },
    { label: 'Card Padding — var(--space-card-padding)', value: 'var(--space-card-padding)' },
    { label: 'Section Gap — var(--space-section-gap)', value: 'var(--space-section-gap)' },
  ];

  return (
    <div className="fw-spacing-page">
      <h1>Spacing</h1>
      <p>Visualising the spacing scale used across FairyWhisper layouts.</p>

      <div className="fw-spacing-grid">
        {spacings.map(item => (
          <div key={item.label} className="fw-spacing-item">
            <div className="fw-spacing-label">{item.label}</div>
            <div className="fw-spacing-bar" style={{ height: item.value }}></div>
            <div className="fw-spacing-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Spacing;
