import React from 'react';
import './ButtonPreview.css';

function ButtonPreview({ label, variant }) {
  return (
    <div className="fw-button-preview">
      <button className={`fw-btn fw-btn-${variant}`}>
        {label}
      </button>

      <div className="fw-button-meta">
        <div>Variant: {variant}</div>
        <div>Radius: var(--radius-md)</div>
        <div>Padding: var(--space-sm) var(--space-md)</div>
        <div>Shadow: var(--shadow-sm)</div>
      </div>
    </div>
  );
}

export default ButtonPreview;
