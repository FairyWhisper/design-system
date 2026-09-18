import { useState } from 'react';
import { generateVariants } from '../utils/colorScale';

export default function ColorVariantPreview() {
  
  const [input, setInput] = useState('#382840');
  const variants = generateVariants(input);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Color Variant Preview</h2>

      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Base Color (HEX):
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            marginLeft: '1rem',
            padding: '0.5rem',
            fontSize: '1rem',
            width: '120px'
          }}
        />
      </label>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Swatch label="Base" color={variants.base} />
        <Swatch label="Light Variant" color={variants.light} />
        <Swatch label="Dark Variant" color={variants.dark} />
      </div>
    </div>
  );
}

function Swatch({ label, color }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          borderRadius: '8px',
          border: '1px solid #444'
        }}
      />
      <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{label}</div>
      <div style={{ fontSize: '0.8rem', color: '#aaa' }}>{color}</div>
    </div>
  );
}
