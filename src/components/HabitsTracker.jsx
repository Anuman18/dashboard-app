import React, { useState } from "react";
import AnalyticsPanel from "./AnalyticsPanel";

function HabitsTracker() {
  const initialHabits = [
    { id: 1, label: "🧘 Meditate", checked: false },
    { id: 2, label: "📚 Read", checked: false },
    { id: 3, label: "🏃‍♂️ Workout", checked: false },
    { id: 4, label: "🛏 Sleep 7+ hrs", checked: false },
    { id: 5, label: "💧 Drink Water", checked: false },
  ];

  const [habits, setHabits] = useState(initialHabits);

  const toggleHabit = (id) => {
    const updated = habits.map((h) =>
      h.id === id ? { ...h, checked: !h.checked } : h
    );
    setHabits(updated);
  };

  return (
    <div style={styles.wrapper}>
      <AnalyticsPanel habits={habits} />

      <div style={styles.container}>
        <h3 style={styles.heading}>✅ Daily Habits</h3>
        <ul style={styles.list}>
          {habits.map((habit) => (
            <li key={habit.id} style={styles.item}>
              <input
                type="checkbox"
                checked={habit.checked}
                onChange={() => toggleHabit(habit.id)}
                style={styles.checkbox}
              />
              <span
                style={{
                  ...styles.label,
                  textDecoration: habit.checked ? "line-through" : "none",
                }}
              >
                {habit.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    marginBottom: "1.5rem",
  },
  container: {
    background: "#fef3c7",
    padding: "1rem",
    borderRadius: "12px",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "0.75rem",
    color: "#92400e",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  checkbox: {
    marginRight: "0.75rem",
    width: "1rem",
    height: "1rem",
  },
  label: {
    fontSize: "1rem",
    color: "#78350f",
  },
};

export default HabitsTracker;
