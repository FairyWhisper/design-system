import React from 'react';
import InputPreview from '../../components/InputPreview';
import './Inputs.css';

function Inputs() {
  const states = ['default', 'hover', 'focus', 'disabled'];

  return (
    <div className="fw-inputs-page">
      <h1>Inputs</h1>

      <div className="fw-inputs-grid">
        {states.map(s => (
          <InputPreview key={s} label={`${s} state`} state={s} />
        ))}
      </div>
    </div>
  );
}

export default Inputs;
