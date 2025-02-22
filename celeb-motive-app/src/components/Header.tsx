import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "10px",
        fontSize: "42px",
        fontWeight: "bold",
        background: "rgba(255, 255, 255, 0.5)", // Transparent white for a soft overlay
        color: "#2C3E50",
        textShadow: "2px 2px 6px rgba(0, 74, 173, 0.3)",
        borderRadius: "20px",
        width: "80%",
        margin: "20px auto",
        letterSpacing: "1px",
        fontFamily: "'Fredoka', sans-serif",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        animation: "bounce 1.5s infinite alternate ease-in-out",
      }}
    >
      ✨ Celebrity Motivation ✨
    </header>
  );
};

export default Header;
