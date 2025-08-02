import React, { useState } from "react";

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const moods = [
    { emoji: "😄", label: "Happy" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😞", label: "Sad" },
  ];

  const selectMood = (index) => {
    setSelectedMood(index);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>📊 Mood Tracker</h3>
      <div style={styles.moodRow}>
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => selectMood(index)}
            style={{
              ...styles.moodButton,
              backgroundColor: selectedMood === index ? "#fde68a" : "#fff",
            }}
          >
            <span style={styles.emoji}>{mood.emoji}</span>
            <span style={styles.label}>{mood.label}</span>
          </button>
        ))}
      </div>
      {selectedMood !== null && (
        <p style={styles.selectedText}>
          You’re feeling: <strong>{moods[selectedMood].label}</strong>
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    background: "#fefce8",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
    color: "#ca8a04",
  },
  moodRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  moodButton: {
    flex: 1,
    margin: "0 0.5rem",
    padding: "0.75rem",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    transition: "0.3s",
  },
  emoji: {
    fontSize: "1.5rem",
    display: "block",
  },
  label: {
    fontSize: "0.9rem",
    marginTop: "0.25rem",
    color: "#374151",
  },
  selectedText: {
    marginTop: "1rem",
    fontSize: "1rem",
    color: "#78350f",
  },
};

export default MoodTracker;
