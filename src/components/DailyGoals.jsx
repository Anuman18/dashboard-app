import React, { useState } from "react";

function DailyGoals() {
  const [goals, setGoals] = useState(["", "", ""]);
  const [checked, setChecked] = useState([false, false, false]);

  const handleGoalChange = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>🎯 Daily Goals</h3>
      {goals.map((goal, index) => (
        <div key={index} style={styles.goalRow}>
          <input
            type="checkbox"
            checked={checked[index]}
            onChange={() => toggleCheck(index)}
            style={styles.checkbox}
          />
          <input
            type="text"
            value={goal}
            onChange={(e) => handleGoalChange(index, e.target.value)}
            placeholder={`Goal ${index + 1}`}
            style={styles.input}
          />
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    background: "#fff7ed",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
    color: "#d97706",
  },
  goalRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.75rem",
  },
  checkbox: {
    marginRight: "0.5rem",
    width: "16px",
    height: "16px",
  },
  input: {
    flex: 1,
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
    fontSize: "0.95rem",
  },
};

export default DailyGoals;
