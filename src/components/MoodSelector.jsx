const moods = [
  { emoji: "😊", label: "Happy", value: "happy" },
  { emoji: "😔", label: "Low", value: "low" },
  { emoji: "😰", label: "Anxious", value: "anxious" },
  { emoji: "😤", label: "Frustrated", value: "frustrated" },
  { emoji: "😐", label: "Neutral", value: "neutral" },
  { emoji: "🤩", label: "Excited", value: "excited" },
];

export default function MoodSelector({ selected, onSelect }) {
  return (
    <div className="section">
      <h2 className="section-title">How are you feeling?</h2>
      <div className="mood-grid">
        {moods.map((mood) => (
          <button
            key={mood.value}
            className={`mood-btn ${selected === mood.value ? "active" : ""}`}
            onClick={() => onSelect(mood.value)}
          >
            <span className="mood-emoji">{mood.emoji}</span>
            <span className="mood-label">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}