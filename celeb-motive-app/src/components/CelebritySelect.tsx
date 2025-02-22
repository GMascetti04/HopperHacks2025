import { useState, useEffect } from "react";

interface Celebrity {
  name: string;
  image: string;
}

const CelebButtonGrid = ({onSelectCeleb}) => {
  const [celebrities, setCelebrities] = useState<Celebrity[]>([]);

  useEffect(() => {
    fetch("/celebs.json") 
      .then((response) => response.json())
      .then((data) => {
        setCelebrities(data.celebs);
        console.log(data.celebs);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div>
        {/* Subtitle */}
        <p style={{ textAlign: "center", fontSize: "18px", marginTop: "10px", fontWeight: "bold" }}>
                Select a celebrity below to motivate you:
        </p>
    
    <div 
      style={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem", 
          padding: "1.5rem",
          width: "100%",
        }}
      >
        {celebrities.map((celeb, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <button 
              type="button" 
              style={{
                border: "none", 
                background: "none", 
                padding: "0", 
                cursor: "pointer", 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={()=> {onSelectCeleb(celeb);}}
            >
              <img 
                src={celeb.image || "/assets/default.jpg"} 
                alt={celeb.name} 
                style={{
                  width: "8rem", 
                  height: "8rem", 
                  objectFit: "cover", 
                  borderRadius: "8px", 
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </button>
            <span 
              style={{
                display: "block", 
                marginTop: "0.5rem", 
                marginBottom: "1rem", 
                fontSize: "1rem", 
                fontWeight: "bold",
              }}
            >
              {celeb.name}
            </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default CelebButtonGrid;
