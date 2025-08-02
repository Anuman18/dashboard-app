import React, { useEffect, useState } from "react";

function AnalyticsPanel({ habits }) {
  const [completedCount, setCompletedCount] = useState(0);
  const [completionPercent, setCompletionPercent] = useState(0);

  useEffect(() => {
    const completed = habits.filter((h) => h.checked).length;
    setCompletedCount(completed);
    setCompletionPercent(Math.round((completed / habits.length) * 100));
  }, [habits]);

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>📊 Today's Progress</h3>
      <p style={styles.text}>✅ Completed: {completedCount} / {habits.length}</p>
      <p style={styles.text}>📈 Completion: {completionPercent}%</p>
      <div style={styles.progressBar}>
        <div style={{ ...styles.fillBar, width: `${completionPercent}%` }} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#dbeafe",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#1e40af",
  },
  text: {
    margin: "0.3rem 0",
    color: "#1e3a8a",
  },
  progressBar: {
    marginTop: "0.5rem",
    height: "10px",
    backgroundColor: "#93c5fd",
    borderRadius: "5px",
    overflow: "hidden",
  },
  fillBar: {
    height: "100%",
    backgroundColor: "#2563eb",
    transition: "width 0.3s ease",
  },
};

export default AnalyticsPanel;
