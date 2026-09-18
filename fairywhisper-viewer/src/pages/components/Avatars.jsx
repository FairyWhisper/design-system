import React from 'react';
import AvatarPreview from '../../components/AvatarPreview';
import './Avatars.css';

function Avatars() {
  const sizes = ['sm', 'md', 'lg'];

  return (
    <div className="fw-avatars-page">
      <h1>Avatars</h1>

      <div className="fw-avatars-grid">
        {sizes.map(s => (
          <AvatarPreview key={s} size={s} />
        ))}
      </div>
    </div>
  );
}

export default Avatars;
