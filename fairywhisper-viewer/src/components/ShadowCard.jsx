// src/components/ShadowCard.jsx
import React from 'react';
import './ShadowCard.css';

function ShadowCard({ label, shadow }) {
  return (
    <div className="fw-shadow-card">
      <div className="fw-shadow-box" style={{ boxShadow: shadow }}></div>
      <div className="fw-shadow-label">{label}</div>
      <div className="fw-shadow-token">{shadow}</div>
    </div>
  );
}

export default ShadowCard;
