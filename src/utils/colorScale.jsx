// Convert HEX → HSL
function hexToHsl(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = ((b - r) / d + 2); break;
      case b: h = ((r - g) / d + 4); break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Convert HSL → HEX
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  const toHex = x =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, '0');

  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

// FairyWhisper Scaling Method
function generateVariants(hex, tokenName = '') {
  const { h, s, l } = hexToHsl(hex);

  // LIGHT VARIANT (unchanged)
  const light = {
    h,
    s: Math.max(0, s - 15),
    l: Math.min(100, l + 35)
  };

  // DARK VARIANT (adaptive)
  let darkL, darkS;

  if (l < 40) {
    // Already dark → don't push it into black hole territory
    darkL = Math.max(0, l - 8);   // was -10
    darkS = Math.min(100, s + 12); // was +10

    if (typeof tokenName === 'string' && tokenName.includes('secondary')) {
      darkL += 4; // slightly lighter
    }
  } else if (l < 70) {
    // Mid-tone → deepen nicely
    darkL = Math.max(0, l - 20);
    darkS = Math.min(100, s + 15);
  } else {
    // Bright colours → dramatic darkening
    darkL = Math.max(0, l - 30);
    darkS = Math.min(100, s + 20);
  }

  const dark = {
    h,
    s: darkS,
    l: darkL
  };

  return {
    base: hex,
    light: hslToHex(light.h, light.s, light.l),
    dark: hslToHex(dark.h, dark.s, dark.l)
  };
}

export { generateVariants };
