// src/components/RadiusCard.jsx
import React from 'react';
import './RadiusCard.css';

function RadiusCard({ label, radius }) {
  return (
    <div className="fw-radius-card">
      <div className="fw-radius-box" style={{ borderRadius: radius }}></div>
      <div className="fw-radius-label">{label}</div>
      <div className="fw-radius-token">{radius}</div>
    </div>
  );
}

export default RadiusCard;
