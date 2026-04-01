const themes = [
  { icon: "🌱", label: "Growth", value: "personal growth" },
  { icon: "🙏", label: "Gratitude", value: "gratitude" },
  { icon: "⚡", label: "Productivity", value: "productivity" },
  { icon: "☀️", label: "Positivity", value: "positivity" },
  { icon: "💆", label: "Self-care", value: "self-care" },
  { icon: "🎯", label: "Goals", value: "goals and intentions" },
  { icon: "💛", label: "Relationships", value: "relationships" },
  { icon: "🔮", label: "Creativity", value: "creativity" },
];

export default function ThemeSelector({ selected, onSelect }) {
  return (
    <div className="section">
      <h2 className="section-title">What do you want to explore?</h2>
      <div className="theme-grid">
        {themes.map((theme) => (
          <button
            key={theme.value}
            className={`theme-btn ${selected === theme.value ? "active" : ""}`}
            onClick={() => onSelect(theme.value)}
          >
            <span>{theme.icon}</span>
            <span>{theme.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}