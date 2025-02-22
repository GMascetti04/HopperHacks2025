import React from "react";
import Header from "./components/Header";
import CelebButtonGrid from "./components/CelebritySelect";
import HelpButton from "./components/HelpButton";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom right, #f8c8dc, #fbd5b5, #f9f9b6, #c2f0c2, #a2d4f3, #c1a3d6, #f7c9ea)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Header */}
      <Header />

      {/* Subtitle */}
      <p style={{ textAlign: "center", fontSize: "18px", marginTop: "10px", fontWeight: "bold" }}>
        Select a celebrity below to motivate you:
      </p>

      {/* Celebrity Selection */}
      <CelebButtonGrid />
      
      {/* Help Button */}
      <HelpButton />

    </div>
  );
};

export default App;
