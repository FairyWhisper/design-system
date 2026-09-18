import "./TagsChips.css";

export default function TagsChips() {
  const tags = [
    { label: "UI", color: "var(--color-bg-surface)" },
    { label: "Components", color: "var(--color-bg-inverse)" },
    { label: "Tokens", color: "var(--color-accent-primary)" },
    { label: "Sprint 2", color: "var(--color-accent-secondary)" },
  ];

  return (
    <div className="tagschips-page">
      <h1 className="page-title">Tags & Chips</h1>
      <p className="page-description">
        Compact visual identifiers used for categorisation and quick context.
      </p>

      <div className="tags-container">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="chip"
            style={{ backgroundColor: tag.color }}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
