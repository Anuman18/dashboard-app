import React, { useEffect, useState } from "react";

function MilestonesPanel({ habits }) {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const completed = habits.filter((h) => h.checked).length;
    const unlocked = [];

    if (completed >= 1) unlocked.push("🥉 First Step");
    if (completed >= 3) unlocked.push("🥈 Half Way");
    if (completed === habits.length) unlocked.push("🥇 Perfect Day");

    setBadges(unlocked);
  }, [habits]);

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>🏅 Milestones</h3>
      {badges.length > 0 ? (
        <ul style={styles.list}>
          {badges.map((badge, idx) => (
            <li key={idx} style={styles.item}>{badge}</li>
          ))}
        </ul>
      ) : (
        <p style={styles.text}>Keep going to unlock achievements!</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    background: "#dcfce7",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#166534",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  item: {
    background: "#86efac",
    padding: "0.5rem 0.75rem",
    borderRadius: "8px",
    fontSize: "0.9rem",
    color: "#065f46",
  },
  text: {
    color: "#065f46",
    fontStyle: "italic",
  },
};

export default MilestonesPanel;
