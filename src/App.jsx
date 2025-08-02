import React from "react";

function App() {
  return (
    <div className="app-container" style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Legend’s Dashboard</h1>
      </header>

      <main style={styles.mainContent}>
        <p>Welcome to your daily productivity and mindset tracker.</p>
      </main>
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: "sans-serif",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  },
  header: {
    padding: "1rem",
    backgroundColor: "#1f2937",
    color: "white",
    textAlign: "center",
  },
  heading: {
    margin: 0,
    fontSize: "1.8rem",
  },
  mainContent: {
    padding: "2rem",
  },
};

export default App;
