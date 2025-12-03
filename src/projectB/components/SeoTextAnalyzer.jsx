import { useState } from "react";

export default function SeoTextAnalyzer() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeText = async () => {
    if (!text.trim()) {
      alert("Please enter some text!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/projectB/ml/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">Content Analyzer</h1>

      <textarea
        className="text-box"
        placeholder="Enter text to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="button" onClick={analyzeText} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {loading && <div className="loader"></div>}

      {result && (
        <div className="results-box">
          <h2>Results</h2>

          <p className="result-item">
            <span className="result-label">Readability:</span>{" "}
            {result.readability}
          </p>

          <p className="result-item">
            <span className="result-label">Quality:</span> {result.quality}
          </p>

          <p className="result-item">
            <span className="result-label">Keyword Stuffing:</span>{" "}
            {result.stuffing}
          </p>
        </div>
      )}
    </div>
  );
}
