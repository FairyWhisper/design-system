import React from 'react';
import CardPreview from '../../components/CardPreview';
import './Cards.css';

function Cards() {
  const variants = ['default', 'elevated', 'outline', 'accent'];

  return (
    <div className="fw-cards-page">
      <h1>Cards</h1>

      <div className="fw-cards-grid">
        {variants.map(v => (
          <CardPreview key={v} variant={v} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
