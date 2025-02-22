import React, { useState } from "react";

const HelpButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Help Button */}
      <button
        onClick={togglePopup}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0077ff",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "50px",
          padding: "12px 18px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        Need Help?
      </button>

      {/* Pop-up Modal */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            backgroundColor: "#f8f9fa", // Light gray for contrast
            color: "#333",
            borderRadius: "12px",
            padding: "10px",
            width: "280px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            border: "2px solid #0077ff",
            zIndex: 1000,
          }}
        >
          {/* Title */}
          <h3
            style={{
              margin: "5px 0",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#0077ff",
            }}
          >
            💡 How to Use 💡 
          </h3>

          {/* Instructions */}
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "1.6",
              marginBottom: "15px",
            }}
          >
            <b>Choose a celebrity</b> 😍
            <br />
            <b>Set a timer</b> ⏳ 
            <br />
            <b>Get motivation!</b> 💪
          </p>

          {/* Close Button */}
          <button
            onClick={togglePopup}
            style={{
              backgroundColor: "#ff4081",
              color: "white",
              fontSize: "14px",
              padding: "8px 14px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
          >
            ✖ Close
          </button>
        </div>
      )}
    </>
  );
};

export default HelpButton;
