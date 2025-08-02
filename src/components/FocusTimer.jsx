import React, { useState, useEffect, useRef } from "react";

function FocusTimer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(25 * 60);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Focus Timer</h2>
      <div style={styles.timer}>{formatTime(secondsLeft)}</div>
      <div style={styles.controls}>
        <button onClick={handleStartPause} style={styles.button}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
      </div>
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
    textAlign: "center",
  },
  heading: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
  },
  timer: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#00796b",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default FocusTimer;
