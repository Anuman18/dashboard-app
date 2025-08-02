import React, { useState, useEffect } from "react";

const quotes = [
  "Stay focused and never give up.",
  "Discipline is the bridge between goals and accomplishment.",
  "Small steps every day lead to big results.",
  "The best project you'll ever work on is you.",
  "Consistency beats motivation.",
  "Be legendary. Daily.",
];

function DailyQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);

  return (
    <div style={styles.container}>
      <p style={styles.quote}>"{quote}"</p>
    </div>
  );
}

const styles = {
  container: {
    background: "#f3f4f6",
    padding: "1rem",
    borderRadius: "12px",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  quote: {
    fontStyle: "italic",
    fontSize: "1rem",
    color: "#374151",
  },
};

export default DailyQuote;
