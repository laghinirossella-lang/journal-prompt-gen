export default function PromptDisplay({ prompt, loading, error }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
  };

  if (loading) {
    return (
      <div className="prompt-box loading">
        <div className="spinner" />
        <p>Crafting your prompt...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="prompt-box error">
        <p>Something went wrong. Try again 🙏</p>
      </div>
    );
  }

  if (!prompt) return null;

  return (
    <div className="prompt-box">
      <p className="prompt-text">"{prompt}"</p>
      <button className="copy-btn" onClick={copyToClipboard}>
        Copy to clipboard
      </button>
    </div>
  );
}