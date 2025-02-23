import { useState, useEffect, useRef } from "react";
import CountdownTimer from "./CountdownTimer";
import { Mood } from "../types";

const MotivationPage = ({ celebrityName, celebContext, celebrityImagePath, timerDuration, userContextText, celebMood } : 
  { celebrityName : string, celebContext : string, celebrityImagePath : string, timerDuration : number, userContextText : string, celebMood : Mood | undefined }
) => {
  const [quote, setQuote] = useState("");

  // useRef to check if the fetch function has been called
  const hasFetched = useRef(false);

  // Call fetchNewQuote when the component mounts
  useEffect(() => {
    if (!hasFetched.current) {
      fetchNewQuote();
      hasFetched.current = true;
    }
  }, []);

  const fetchNewQuote = async () => {
    const url = "http://127.0.0.1:5000/generate-motivation";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            celeb_name : celebrityName,
            celeb_contex : celebContext,
            user_context : userContextText,
            celeb_mood : celebMood,
            
            query_text: "Give me a new motivational quote" }),
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
        // alignItems: "center", // Ensures both halves align at the center
        justifyContent: "center",
        textAlign: "center",
        backgroundSize: "cover",
        padding: "20px 10px",
        position: "relative",
        maxWidth: "90vw",
        margin: "0 auto",
      }}
    >
      {/* Left Column: Celebrity Info (50% Width) */}
      <div
        style={{
          flex: 1,
          maxWidth: "45%", // Makes it take exactly half of the screen
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // Centers everything inside
          textAlign: "center",
        }}
      >
        {/* Celebrity Image (Scales with Window Size) */}
        <img
          src={celebrityImagePath}
          alt={celebrityName}
          style={{
            width: "80%", // Adjusted to make it responsive
            maxHeight: "300px",
            maxWidth: "300px",
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
            marginBottom: "5px",
          }}
        >
          {celebrityName}
        </h1>

        {/* Motivational Quote */}
        <div
          style={{
            width: "80%", // Ensures quote never exceeds the width of the section
            minHeight: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            overflow: "hidden",
            padding: "10px",
            wordWrap: "break-word",
            whiteSpace: "normal",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "white",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
              margin: "0",
              whiteSpace: "normal",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {quote}
          </p>
        </div>

        {/* Generate New Quote Button */}
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
          onMouseOver={(e) => ((e.target as HTMLButtonElement).style.transform = "scale(1.05)")}
          onMouseOut={(e) => ((e.target as HTMLButtonElement).style.transform = "scale(1)")}
        >
          Generate new quote
        </button>
      </div>

      {/* Right Column: Countdown Timer (50% Width) */}
      <div
        style={{
          flex: 1,
          maxWidth: "45%", // Makes it take exactly half of the screen
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

        {/* Choose Another Celebrity Button */}
        <button
          style={{
            marginTop: "50px", // Moves the button lower
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
            alignSelf: "center",
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
