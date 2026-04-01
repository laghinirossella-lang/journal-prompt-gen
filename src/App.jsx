import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import ThemeSelector from "./components/ThemeSelector";
import LengthToggle from "./components/LengthToggle";
import PromptDisplay from "./components/PromptDisplay";
import "./App.css";

export default function App() {
  const [mood, setMood] = useState(null);
  const [theme, setTheme] = useState(null);
  const [length, setLength] = useState("short");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const canGenerate = mood && theme;

  const generatePrompt = async () => {
    setLoading(true);
    setError(false);
    setPrompt("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood, theme, length }),
      });

      const data = await res.json();
      if (data.prompt) {
        setPrompt(data.prompt);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Journal</h1>
        <p className="subtitle">Your daily prompt, personalised.</p>
      </header>

      <main className="main">
        <MoodSelector selected={mood} onSelect={setMood} />
        <ThemeSelector selected={theme} onSelect={setTheme} />
        <LengthToggle selected={length} onSelect={setLength} />

        <button
          className={`generate-btn ${!canGenerate ? "disabled" : ""}`}
          onClick={generatePrompt}
          disabled={!canGenerate || loading}
        >
          {loading ? "Generating..." : "✦ Generate my prompt"}
        </button>

        <PromptDisplay prompt={prompt} loading={loading} error={error} />
      </main>
    </div>
  );
}