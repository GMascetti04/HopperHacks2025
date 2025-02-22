import React from "react";
import CountdownTimer from "./CountdownTimer";

const MotivationPage = ({ celebrityName, celebrityImagePath }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundSize: "cover",
        padding: "20px",
        position: "relative", // Needed for button positioning
      }}
    >
      {/* Left Column: Celebrity Info */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/* Celebrity Image (Square) */}
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
          }}
        />

        {/* Celebrity Name */}
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginTop: "20px",
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          {celebrityName}
        </h1>

        {/* Motivational Quote */}
        <p
          style={{
            fontSize: "22px",
            fontWeight: "500",
            maxWidth: "400px",
            marginTop: "10px",
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
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "white", // Unified color scheme
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            marginBottom: "5px",
          }}
        >
          ⏳ Focus Timer
        </h2>
        <CountdownTimer initialTime={10} />
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
