import React from 'react';
import ColorSwatch from '../components/ColorSwatch';
import './Colors.css';

function Colors() {

  const backgrounds = [
    '--color-bg-primary',
    '--color-bg-secondary',
    '--color-bg-surface',
    '--color-bg-surface-alt',
    '--color-bg-overlay',
    '--color-bg-inverse'
  ];

  const textColors = [
    '--color-text-primary',
    '--color-text-secondary',
    '--color-text-muted',
    '--color-text-inverse',
    '--color-text-accent',
    '--color-text-warning',
    '--color-text-danger',
    '--color-text-success'
  ];

  const accents = [
    '--color-accent-primary',
    '--color-accent-secondary',
    '--color-accent-soft',
    '--color-accent-glow',
    '--color-accent-gradient'
  ];

  const borders = [
    '--color-border-light',
    '--color-border',
    '--color-border-strong'
  ];

  const semantic = [
    '--color-success',
    '--color-warning',
    '--color-danger',
    '--color-info'
  ];

  return (
    <div className="fw-colors-page">

      <h1>Colours</h1>

      <section>
        <h2>Backgrounds</h2>
        <div className="fw-swatch-grid">
          {backgrounds.map(name => <ColorSwatch key={name} name={name} />)}
        </div>
      </section>

      <section>
        <h2>Text Colours</h2>
        <div className="fw-swatch-grid">
          {textColors.map(name => <ColorSwatch key={name} name={name} />)}
        </div>
      </section>

      <section>
        <h2>Accents</h2>
        <div className="fw-swatch-grid">
          {accents.map(name => <ColorSwatch key={name} name={name} />)}
        </div>
      </section>

      <section>
        <h2>Borders</h2>
        <div className="fw-swatch-grid">
          {borders.map(name => <ColorSwatch key={name} name={name} />)}
        </div>
      </section>

      <section>
        <h2>Semantic</h2>
        <div className="fw-swatch-grid">
          {semantic.map(name => <ColorSwatch key={name} name={name} />)}
        </div>
      </section>

    </div>
  );
}

export default Colors;
