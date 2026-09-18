// src/pages/Radius.jsx
import React from 'react';
import RadiusCard from '../components/RadiusCard';
import './Radius.css';

function Radius() {

  const radii = [
    { label: 'Radius None', token: 'var(--radius-none)' },
    { label: 'Radius XS', token: 'var(--radius-xs)' },
    { label: 'Radius SM', token: 'var(--radius-sm)' },
    { label: 'Radius MD', token: 'var(--radius-md)' },
    { label: 'Radius LG', token: 'var(--radius-lg)' },
    { label: 'Radius XL', token: 'var(--radius-xl)' },
    { label: 'Radius Full', token: 'var(--radius-full)' },
    { label: 'Radius Pill', token: 'var(--radius-pill)' },
  ];

  return (
    <div className="fw-radius-page">
      <h1>Radius</h1>

      <div className="fw-radius-grid">
        {radii.map(item => (
          <RadiusCard key={item.label} label={item.label} radius={item.token} />
        ))}
      </div>
    </div>
  );
}

export default Radius;
