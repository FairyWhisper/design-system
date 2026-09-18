// src/pages/Typography.jsx
import React from 'react';
import TypeSample from '../components/TypeSample';
import './Typography.css';

function Typography() {

  const fontFamilies = [
    { label: 'Base Font', style: { fontFamily: 'var(--font-family-base)' }},
    { label: 'Heading Font', style: { fontFamily: 'var(--font-family-heading)' }},
    { label: 'Mono Font', style: { fontFamily: 'var(--font-family-mono)' }},
    { label: 'Signature Font', style: { fontFamily: 'var(--font-family-signature)' }},
  ];

  const fontSizes = [
    { label: 'XS — var(--font-size-xs)', style: { fontSize: 'var(--font-size-xs)' }},
    { label: 'SM — var(--font-size-sm)', style: { fontSize: 'var(--font-size-sm)' }},
    { label: 'MD — var(--font-size-md)', style: { fontSize: 'var(--font-size-md)' }},
    { label: 'LG — var(--font-size-lg)', style: { fontSize: 'var(--font-size-lg)' }},
    { label: 'XL — var(--font-size-xl)', style: { fontSize: 'var(--font-size-xl)' }},
    { label: 'XXL — var(--font-size-xxl)', style: { fontSize: 'var(--font-size-xxl)' }},
  ];

  const fontWeights = [
    { label: 'Light — 300', style: { fontWeight: 'var(--font-weight-light)' }},
    { label: 'Normal — 400', style: { fontWeight: 'var(--font-weight-normal)' }},
    { label: 'Medium — 500', style: { fontWeight: 'var(--font-weight-medium)' }},
    { label: 'Bold — 700', style: { fontWeight: 'var(--font-weight-bold)' }},
    { label: 'Black — 900', style: { fontWeight: 'var(--font-weight-black)' }},
  ];

  return (
    <div className="fw-typography-page">
      <h1>Typography</h1>

      <section>
        <h2>Font Families</h2>
        {fontFamilies.map(item => (
          <TypeSample key={item.label} label={item.label} style={item.style} />
        ))}
      </section>

      <section>
        <h2>Font Sizes</h2>
        {fontSizes.map(item => (
          <TypeSample key={item.label} label={item.label} style={item.style} />
        ))}
      </section>

      <section>
        <h2>Font Weights</h2>
        {fontWeights.map(item => (
          <TypeSample key={item.label} label={item.label} style={item.style} />
        ))}
      </section>
    </div>
  );
}

export default Typography;
