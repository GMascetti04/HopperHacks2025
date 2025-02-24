import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import {Mood} from "../types";

const UserOptions = ({ celebrityName, celebrityImagePath, onChangeCurrentCeleb, onDone, onChangeDuration, userContextText, onChangeUserContextText, onSelectMood, selectedMood } : { celebrityName : string, celebrityImagePath : string, onChangeCurrentCeleb : () => void, onDone : () => void, onChangeDuration : (x : number) => void, userContextText : string, onChangeUserContextText : (x : string) => void, onSelectMood : (x : Mood) => void, selectedMood : Mood | undefined}) => {
  
  const [moods, setMoods] = useState<never[]>([]);
  const [selectedTime, setSelectedTime] = useState(new Date(0, 0, 0, 0, 25, 0)); // Default to 25 minutes

  useEffect(() => {
    fetch("/moods.json")
      .then((response) => response.json())
      .then((data) => setMoods(data))
      .catch((error) => console.error("Error loading moods data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#333" }}>
      {/* Main Layout */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "50px", marginBottom: "20px" }}>
        
        {/* Celebrity Selection */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", color: "#333", marginBottom: "10px" }}>You Selected:</h2>
          <img
            src={celebrityImagePath}
            alt={celebrityName}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "5px" }}>{celebrityName}</p>
          <button
            onClick={onChangeCurrentCeleb}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "bold",
              backgroundColor: "#ff4081",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Change
          </button>
        </div>

        {/* Timer Selection */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", color: "#333", marginBottom: "10px" }}>Set Timer:</h2>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopTimePicker
              views={["hours", "minutes", "seconds"]}
              label="Select Duration"
              ampm={false}
              value={selectedTime}
              onChange={(date) => {
                if (date) {
                  setSelectedTime(date); // Update selected time
                  onChangeDuration(date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
                }
              }}
              
            />
          </LocalizationProvider>
        </div>

        {/* Activity Input */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", color: "#333", marginBottom: "10px" }}>What are you doing?</h2>
          <textarea
            id="textarea"
            value={userContextText}
            onChange={(e) => onChangeUserContextText(e.target.value)}
            rows={4}
            cols={40}
            placeholder="Ex. I have a test to study for..."
            maxLength={500}
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              resize: "none",
              width: "100%",
              fontSize: "16px",
              fontFamily: "'Poppins', sans-serif", // Fixes font in text area
            }}
          />
          <p style={{ fontSize: "14px", marginTop: "5px", color: userContextText.length >= 500 ? "red" : "#333" }}>
            {500 - userContextText.length} characters remaining
          </p>
        </div>
      </div>

      {/* Mood Selection */}
      <h2 style={{ fontSize: "22px", color: "#333", marginBottom: "10px" }}>
        How should {celebrityName} motivate you?
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
        {moods.map((mood : Mood) => (
          <div
            key={mood.id}
            onClick={() => onSelectMood(mood)}
            style={{
              cursor: "pointer",
              padding: "10px",
              borderRadius: "10px",
              transition: "transform 0.3s ease",
              backgroundColor: selectedMood?.id === mood.id ? "#D3D3D3" : "rgba(255,255,255,0.5)",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              width: "100px",
              color: "#333",
              backdropFilter: "blur(5px)",
            }}
            title={mood.description}
          >
            <div style={{ fontSize: "40px" }}>{mood.emoji}</div>
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>{mood.description}</div>
          </div>
        ))}
      </div>

      {/* Display Selected Mood Message */}
      {selectedMood && (
        <div
          style={{
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "rgba(255,255,255,0.5)",
            color: "#333",
            padding: "10px",
            borderRadius: "10px",
            backdropFilter: "blur(8px)",
          }}
        >
          {celebrityName} will {selectedMood.message} to keep you motivated!
        </div>
      )}

      {/* Motivate Me Button */}
      <button
        onClick={onDone}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "18px",
          fontWeight: "bold",
          backgroundColor: "#0077ff",
          color: "white",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        Motivate Me! 🚀
      </button>
    </div>
  );
};

export default UserOptions;
