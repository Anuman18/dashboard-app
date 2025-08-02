import React, { useState } from "react";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😞", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😌", label: "Calm" },
];

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>How are you feeling today?</h2>
      <div style={styles.moodGrid}>
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => handleMoodSelect(mood)}
            style={{
              ...styles.moodButton,
              backgroundColor:
                selectedMood?.label === mood.label ? "#e0f7fa" : "#fff",
              border:
                selectedMood?.label === mood.label
                  ? "2px solid #00acc1"
                  : "1px solid #ccc",
            }}
          >
            <span style={styles.emoji}>{mood.emoji}</span>
            <span>{mood.label}</span>
          </button>
        ))}
      </div>

      {selectedMood && (
        <p style={styles.selected}>You feel <strong>{selectedMood.label}</strong> today!</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    background: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    marginBottom: "2rem",
  },
  heading: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
  },
  moodGrid: {
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap",
  },
  moodButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem",
    width: "70px",
    height: "70px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "0.875rem",
    transition: "all 0.2s",
  },
  emoji: {
    fontSize: "1.5rem",
  },
  selected: {
    marginTop: "1rem",
    color: "#00796b",
  },
};

export default MoodTracker;
