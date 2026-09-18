// src/PreviewPalette.jsx
import ColorVariantPreview from './components/ColorVariantPreview';

const colorTokens = [
  "--color-bg-primary",
  "--color-bg-secondary",
  "--color-bg-surface",
  "--color-bg-surface-alt",
  "--color-bg-overlay",
  "--color-bg-inverse",
  "--color-text-primary",
  "--color-text-secondary",
  "--color-text-muted",
  "--color-text-inverse",
  "--color-text-accent",
  "--color-success",
  "--color-warning",
  "--color-danger",
  "--color-info",
  "--color-accent-primary",
  "--color-accent-secondary",
  "--color-accent-soft",
  "--color-accent-glow",
];

export function PreviewPalette() {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "var(--color-bg-primary)",
        minHeight: "100vh",
        color: "var(--color-text-primary)",
        fontFamily: "var(--font-family-base)",
      }}
    >
      <h1>FairyWhisper Palette Preview</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        {colorTokens.map((token) => (
          <div
            key={token}
            style={{
              background:
                token === "--color-accent-gradient"
                  ? "var(--color-accent-gradient)"
                  : `var(${token})`,
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-sm)",
              padding: "8px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              height: "80px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                textAlign: "center",
                textShadow: "0 1px 2px rgba(0,0,0,0.6)",
              }}
            >
              {token.replace("--", "")}
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "48px" }}>
        <ColorVariantPreview />
      </div>
    </div>
  );
}
