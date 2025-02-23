import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";

const MotivationPage = ({ celebrityName, celebrityImagePath, timerDuration }) => {
  const [quote, setQuote] = useState(`"Stay focused! ${celebrityName} believes in you. Keep pushing forward!"`);

  const fetchNewQuote = async () => {
    const url = "http://127.0.0.1:5000/generate-motivation";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query_text: "Give me a new motivational quote" }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch new quote ${response.status}`);
      }

      const data = await response.json();
      setQuote(data.motivational_text);
    } catch (error) {
      console.error("Error fetching new quote:", error);
      setQuote("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "center",
        backgroundSize: "cover",
        padding: "20px 10px",
        position: "relative",
      }}
    >
      {/* Left Column: Celebrity Info */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Celebrity Image (Scales with Window Size) */}
        <img
        src={celebrityImagePath}
        alt={celebrityName}
        style={{
            width: "min(30vw, 360px)",  // Scales up to 400px max
            height: "min(30vw, 360px)", // Maintains square aspect ratio
            borderRadius: "20px",
            objectFit: "cover",
            objectPosition: "center",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            marginBottom: "10px",
        }}
        />


        {/* Celebrity Name */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
            marginBottom: "1px",
          }}
        >
          {celebrityName}
        </h1>

        {/* Motivational Quote */}
        <p
          style={{
            fontSize: "20px",
            fontWeight: "500",
            maxWidth: "700px",
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
            marginBottom: "10px",
          }}
        >
          {quote}
        </p>

        {/* Generate New Quote Button (Left Side) */}
        <button
          onClick={fetchNewQuote}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            background: "#0077ff",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            letterSpacing: "1px",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Generate new quote
        </button>
      </div>

      {/* Right Column: Countdown Timer */}
        <div
        style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",
            height: "100%", 
        }}
        >

        <h2
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            marginBottom: "5px",
          }}
        >
          Focus Timer ⏳
        </h2>
        <CountdownTimer initialTime={timerDuration} />

        {/* Choose Another Celebrity Button (Right Side, Under Reset Button) */}
        <button
          style={{
            marginTop: "70px", // Moves the button lower
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "white",
            color: "#0077ff",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            alignSelf: "center", // Keeps it aligned properly
          }}
          onClick={() => window.location.reload()}
        >
          Choose another celebrity
        </button>
      </div>
    </div>
  );
};

export default MotivationPage;
