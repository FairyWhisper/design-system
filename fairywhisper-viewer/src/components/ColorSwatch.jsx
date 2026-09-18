import './ColorSwatch.css';
import '../tokens/fairywhisper-tokens.css';

function ColorSwatch({ name }) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name);

  return (
    <div className="fw-swatch">
      <div
        className="fw-swatch-color"
        style={{ background: value }}
      ></div>

      <div className="fw-swatch-info">
        <strong>{name}</strong>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default ColorSwatch;
