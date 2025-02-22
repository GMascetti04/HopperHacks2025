import React from "react";
import CountdownTimer from "./CountdownTimer";

const MotivationPage = ({ celebrityName, celebrityImagePath, timerDuration }) => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start", // Align both top sections together
        justifyContent: "center",
        textAlign: "center",
        backgroundSize: "cover",
        padding: "40px 20px", // Adjusted padding for alignment
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
        {/* Celebrity Image (Aligned with Focus Timer Text) */}
        <img
          src={celebrityImagePath}
          alt={celebrityName}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "20px",
            objectFit: "cover",
            objectPosition: "center",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            marginBottom: "10px", // Ensures name and quote are close to image
          }}
        />

        {/* Celebrity Name */}
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
            marginBottom: "5px",
          }}
        >
          {celebrityName}
        </h1>

        {/* Motivational Quote */}
        <p
          style={{
            fontSize: "22px",
            fontWeight: "600",
            maxWidth: "600px",
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          "Stay focused! {celebrityName} believes in you. Keep pushing forward!"
        </p>
      </div>

      {/* Right Column: Enlarged Countdown Timer */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            marginBottom: "5px", // Adjusted to align with the top of the image
          }}
        >
          ⏳ Focus Timer
        </h2>
        <CountdownTimer initialTime={timerDuration} />
      </div>

      {/* Choose Another Celebrity Button (Bottom Center) */}
      <button
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "14px 28px",
          fontSize: "18px",
          fontWeight: "bold",
          backgroundColor: "white",
          color: "#0077ff",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
        onClick={() => window.location.reload()} // Resets the page
      >
        🔄 Choose Another Celebrity
      </button>
    </div>
  );
};

export default MotivationPage;
