import React from "react";

function MoodTracker() {
  return (
    <div style={styles.box}>
      <h2>Mood Tracker</h2>
      <p>Track your mood here.</p>
    </div>
  );
}

const styles = {
  box: {
    background: "white",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default MoodTracker;
