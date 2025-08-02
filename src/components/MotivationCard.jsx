import React from "react";

const quotes = [
  "You are your only limit.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Small steps every day lead to big results.",
  "Discipline is the bridge between goals and accomplishment.",
  "It’s not about being the best. It’s about being better than yesterday.",
  "Success starts with self-belief.",
];

function MotivationCard() {
  const today = new Date().getDate();
  const quote = quotes[today % quotes.length];

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>💡 Daily Motivation</h3>
      <p style={styles.quote}>"{quote}"</p>
    </div>
  );
}

const styles = {
  container: {
    background: "#fef9c3",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
    border: "1px solid #fcd34d",
  },
  title: {
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
    color: "#92400e",
  },
  quote: {
    fontSize: "1rem",
    color: "#78350f",
    fontStyle: "italic",
  },
};

export default MotivationCard;
