import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Load audio file
  const alarmSound = new Audio('/timer.mp3'); // Ensure bell.mp3 is in public folder
  alarmSound.loop = true;

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(interval);

      return () => clearInterval(interval);
    }
  }, [timeLeft, isPaused]);

  // Play bell sound when time reaches zero
  useEffect(() => {
    if (timeLeft === 0) {
      alarmSound.play();
    }
  }, [timeLeft]);

  const togglePause = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      clearInterval(intervalId);
      setIsPaused(true);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setTimeLeft(initialTime);
    setIsPaused(false);
  };

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div style={{ textAlign: "center", marginTop: "2vh" }}>
      <h1
        style={{
          fontSize: "10vw",
          fontWeight: "bold",
          color: "#0077ff",
          textShadow: "3px 3px 8px rgba(0, 0, 0, 0.2)",
          margin: "0",
          width: "30vw",
          maxWidth: "15em",
          textAlign: "center",
        }}
      >
        {timeLeft > 0 ? formattedTime : "Time's up!"}
      </h1>

      {timeLeft > 0 && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "1vh" }}>
          <button
            onClick={togglePause}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              backgroundColor: isPaused ? "#ff4081" : "#0077ff",
              color: "white",
              padding: "0.8rem 1.5rem",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              marginBottom: "0.8rem",
            }}
          >
            {isPaused ? "Resume" : "Pause"}
          </button>

          <button
            onClick={resetTimer}
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "#738b94",
              color: "white",
              padding: "0.7rem 1.2rem",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
             Reset 🔄
          </button>

          <div
            style={{
              marginTop: "0.5vh",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: isPaused ? "red" : "green",
            }}
          >
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
