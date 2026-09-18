import React from 'react';
import './CardPreview.css';

function CardPreview({ variant }) {
  return (
    <div className={`fw-card-preview fw-card-${variant}`}>
      <div className="fw-card-header">
        <h3 className="fw-card-title">Card Title</h3>
      </div>

      <p className="fw-card-body">
        This is an example of the {variant} card variant. It demonstrates spacing, radius, shadow, and text tokens.
      </p>

      <div className="fw-card-meta">
        <div>Variant: {variant}</div>
        <div>Radius: var(--radius-lg)</div>
        <div>Padding: var(--space-lg)</div>
        <div>Shadow: var(--shadow-md)</div>
      </div>
    </div>
  );
}

export default CardPreview;
