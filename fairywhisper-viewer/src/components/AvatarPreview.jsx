import React from 'react';
import './AvatarPreview.css';

function AvatarPreview({ size }) {
  return (
    <div className="fw-avatar-preview">
      <div className={`fw-avatar fw-avatar-${size}`}>A</div>

      <div className="fw-avatar-meta">
        <div>Size: {size}</div>
        <div>Radius: var(--radius-full)</div>
        <div>Shadow: var(--shadow-sm)</div>
      </div>
    </div>
  );
}

export default AvatarPreview;
