import React from "react";
import Header from "./components/Header";
import CelebButtonGrid from "./components/CelebritySelect";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh", // Ensure the background covers the entire screen
        backgroundImage: "linear-gradient(to bottom right, #f8c8dc, #fbd5b5, #f9f9b6, #c2f0c2, #a2d4f3, #c1a3d6, #f7c9ea)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <p style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}>
        Stay focused! A celebrity will motivate you soon. ⏳
      </p>
      <CelebButtonGrid />
    </div>
  );
};

export default App;
