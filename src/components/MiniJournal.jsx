import React, { useState } from "react";

function MiniJournal() {
  const [entry, setEntry] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (entry.trim() !== "") {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000); // auto-hide after 2s
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>📖 Mini Journal</h3>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write something about your day..."
        style={styles.textarea}
        rows={4}
      />
      <button onClick={handleSave} style={styles.button}>
        Save Entry
      </button>
      {saved && <p style={styles.savedText}>Saved ✅</p>}
    </div>
  );
}

const styles = {
  container: {
    background: "#f3f4f6",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#1f2937",
  },
  textarea: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    resize: "none",
    marginBottom: "0.75rem",
  },
  button: {
    background: "#4f46e5",
    color: "#fff",
    padding: "0.5rem 1rem",
    fontSize: "0.95rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  savedText: {
    color: "#16a34a",
    marginTop: "0.5rem",
    fontSize: "0.9rem",
  },
};

export default MiniJournal;
