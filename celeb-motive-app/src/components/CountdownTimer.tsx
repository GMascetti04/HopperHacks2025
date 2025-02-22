import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false); // State to track if the timer is paused
  const [intervalId, setIntervalId] = useState(null); // Store the interval ID

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1); // Decrease time left by 1 each second
      }, 1000);
      setIntervalId(interval);

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [timeLeft, isPaused]); // Run when timeLeft or isPaused changes

  // Function to toggle pause and unpause
  const togglePause = () => {
    if (isPaused) {
      // When unpausing, restart the timer
      setIsPaused(false);
    } else {
      // When pausing, stop the timer
      clearInterval(intervalId);
      setIsPaused(true);
    }
  };

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Format time with leading zeros (e.g., 02:03:09)
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>{timeLeft > 0 ? formattedTime : "Time's up!"}</p>

      {timeLeft > 0 && (
        <div>
          <button onClick={togglePause}>{isPaused ? 'Unpause' : 'Pause'}</button>
          {/* Display a visual cue */}
          <div style={{ color: isPaused ? 'red' : 'green', fontWeight: 'bold' }}>
            {isPaused ? 'Paused' : 'Running'}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
