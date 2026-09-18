import React from "react";
import "./BrandMagic.css";

export default function BrandMagic() {
  return (
    <div className="brandmagic-page">
      <h1 className="page-title">Brand Magic</h1>
      <p className="page-description">
        The principles that make FairyWhisper's design system both magical and practical.
      </p>
    <p className="brand-manifesto">
  FairyWhisper keeps things straightforward: readable type, calm colours, and components that don’t start drama.
  The magic is small and deliberate — a softened corner, a quiet animation, a moment of friendliness that doesn’t interrupt your flow.
  Everything here is built to reduce friction, support clarity, and make interfaces feel like they were designed by someone who actually uses them.
  No cosmic metaphors. No “design is a journey” speeches. Just thoughtful, well‑behaved UI with a light touch and a bit of personality.
    </p>

      <div className="brandmagic-showcase">
        <div className="brand-block primary">Primary Palette</div>
        <div className="brand-block accent">Accent Palette</div>
        <div className="brand-block typography">Typography System</div>
        <div className="brand-block motion">Motion Principles</div>
      </div>
    </div>
  );
}
