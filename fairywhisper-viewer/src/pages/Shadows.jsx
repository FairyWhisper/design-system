// src/pages/Shadows.jsx
import React from 'react';
import ShadowCard from '../components/ShadowCard';
import './Shadows.css';

function Shadows() {

  const normalShadows = [
    { label: 'Shadow XS', token: 'var(--shadow-xs)' },
    { label: 'Shadow SM', token: 'var(--shadow-sm)' },
    { label: 'Shadow MD', token: 'var(--shadow-md)' },
    { label: 'Shadow LG', token: 'var(--shadow-lg)' },
    { label: 'Shadow XL', token: 'var(--shadow-xl)' },
  ];

  const specialShadows = [
    { label: 'Glow SM', token: 'var(--shadow-glow-sm)' },
    { label: 'Glow MD', token: 'var(--shadow-glow-md)' },
    { label: 'Glow LG', token: 'var(--shadow-glow-lg)' },
  ];

  return (
    <div className="fw-shadows-page">
      <h1>Shadows</h1>

      <section>
        <h2>Normal Shadows</h2>
        <div className="fw-shadow-grid">
          {normalShadows.map(item => (
            <ShadowCard key={item.label} label={item.label} shadow={item.token} />
          ))}
        </div>
      </section>

      <section>
        <h2>Special Shadows</h2>
        <div className="fw-shadow-grid">
          {specialShadows.map(item => (
            <ShadowCard key={item.label} label={item.label} shadow={item.token} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Shadows;
