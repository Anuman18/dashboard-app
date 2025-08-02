import React from "react";
import MoodTracker from "./components/MoodTracker";
import FocusTimer from "./components/FocusTimer";
import DailyGoals from "./components/DailyGoals";
import MindsetQuote from "./components/MindsetQuote";
import ReflectionJournal from "./components/ReflectionJournal";
import DailyQuote from "./components/DailyQuote";


function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Legend's Dashboard</h1>
        <p style={styles.subtitle}>Track your mindset, goals, and focus daily.</p>
      </header>

      <main style={styles.mainContent}>
        <MoodTracker />
        <DailyQuote />
        <FocusTimer />
        <DailyGoals />
        <MindsetQuote />
        <ReflectionJournal />
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    padding: "1rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2rem",
    margin: 0,
  },
  subtitle: {
    color: "#666",
    marginTop: "0.5rem",
  },
  mainContent: {
    maxWidth: "600px",
    margin: "0 auto",
  },
};

export default App;
