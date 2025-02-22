import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(interval);

      return () => clearInterval(interval);
    }
  }, [timeLeft, isPaused]);

  const togglePause = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      clearInterval(intervalId);
      setIsPaused(true);
    }
  };

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}> {/* Reduced margin */}
      {/* Large Timer Display */}
      <h1
        style={{
          fontSize: "150px",
          fontWeight: "bold",
          color: "#0077ff",
          textShadow: "3px 3px 8px rgba(0, 0, 0, 0.2)",
          margin: "0", // Remove extra margins
        }}
      >
        {timeLeft > 0 ? formattedTime : "Time's up!"}
      </h1>

      {/* Pause/Unpause Button */}
      {timeLeft > 0 && (
        <div>
          <button
            onClick={togglePause}
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              backgroundColor: isPaused ? "#ff4081" : "#0077ff",
              color: "white",
              padding: "12px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              marginTop: "10px", // Smaller gap from the timer
            }}
          >
            {isPaused ? "Resume" : "Pause"}
          </button>

          {/* Status Indicator */}
          <div
            style={{
              marginTop: "5px", // Smaller gap from button
              fontSize: "20px",
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
