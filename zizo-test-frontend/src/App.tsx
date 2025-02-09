import React, { useState } from "react";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "";

const App: React.FC = () => {
  // State for text input, result, and error
  const [text, setText] = useState("");
  const [result, setResult] = useState<Record<string, number> | null>(null);
  const [error, setError] = useState("");

  const handleClassifyWords = async () => {
    if (!text) {
      setError("Please enter some text.");
      return;
    }
    setError(""); 
    try {
      const response = await fetch((`${API_URL}/word-counter`), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        setError("Error classifying words.");
      }
    } catch (err) {
      setError("Error occurred while contacting API.");
      console.log('response error:',err)
    }
  };

  return (
    <section>
      <div className="logo-wrapper">
        <img
          className="logo"
          src="https://playzizo.com/wp-content/uploads/2023/04/Footer-Logo.png"
          alt="Logo"
        />
      </div>
      <h2>Word Classifier</h2>
      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button
        style={{ marginTop: "10px", padding: "10px 15px", fontSize: "16px" }}
        onClick={handleClassifyWords}
      >
        Classify Words
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Results:</h3>
          <ul>
            {Object.entries(result).map(([type, count]) => (
              <li key={type}>
                <strong>{type}:</strong> {count}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default App;
