// src/components/TypeSample.jsx
import React from 'react';
import './TypeSample.css';

function TypeSample({ label, style }) {
  return (
    <div className="fw-type-sample">
      <div className="fw-type-label">{label}</div>
      <div className="fw-type-preview" style={style}>
        The quick brown fox jumps over the lazy dog.
      </div>
    </div>
  );
}

export default TypeSample;
