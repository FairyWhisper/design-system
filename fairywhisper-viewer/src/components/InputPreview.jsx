import React from 'react';
import './InputPreview.css';

function InputPreview({ label, state }) {
  return (
    <div className="fw-input-preview">
      <label className="fw-input-label">{label}</label>
      <input
        className={`fw-input fw-input-${state}`}
        type="text"
        placeholder="Type something..."
        disabled={state === 'disabled'}
      />
      <div className="fw-input-meta">
        <div>State: {state}</div>
        <div>Radius: var(--input-radius)</div>
        <div>Padding: var(--input-padding)</div>
        <div>Shadow: var(--input-shadow)</div>
      </div>
    </div>
  );
}

export default InputPreview;
