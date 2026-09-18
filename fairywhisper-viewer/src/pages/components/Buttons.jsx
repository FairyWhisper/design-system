import React from 'react';
import ButtonPreview from '../../components/ButtonPreview';
import './Buttons.css';


function Buttons() {
  const variants = ['primary', 'secondary', 'ghost'];

  return (
    <div className="fw-buttons-page">
      <h1>Buttons</h1>

      <div className="fw-buttons-grid">
        {variants.map(v => (
          <ButtonPreview key={v} label={`${v} button`} variant={v} />
        ))}
      </div>
    </div>
  );
}

export default Buttons;
