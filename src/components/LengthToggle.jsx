export default function LengthToggle({ selected, onSelect }) {
  return (
    <div className="section">
      <h2 className="section-title">Prompt depth?</h2>
      <div className="toggle-row">
        <button
          className={`toggle-btn ${selected === "short" ? "active" : ""}`}
          onClick={() => onSelect("short")}
        >
          ✦ Quick spark
          <span className="toggle-sub">One simple question</span>
        </button>
        <button
          className={`toggle-btn ${selected === "deep" ? "active" : ""}`}
          onClick={() => onSelect("deep")}
        >
          ✦ Deep dive
          <span className="toggle-sub">2–3 layered questions</span>
        </button>
      </div>
    </div>
  );
}