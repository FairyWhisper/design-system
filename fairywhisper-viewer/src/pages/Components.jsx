import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';

function Components() {
  const items = [
    { label: 'Buttons', path: '/components/buttons' },
    { label: 'Inputs', path: '/components/inputs' },
    { label: 'Cards', path: '/components/cards' },
    { label: 'Tags & Chips', path: '/components/tags-chips' },
    { label: 'Avatars', path: '/components/avatars' },
    { label: 'Alerts', path: '/components/alerts' },
  ];

  return (
    <div className="fw-components-page">
      <h1>Components</h1>

      <div className="fw-components-grid">
        {items.map(item => (
          <Link key={item.label} to={item.path} className="fw-components-tile">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Components;
