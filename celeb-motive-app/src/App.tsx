import React from "react";
import Header from "./components/Header";
import CelebButtonGrid from "./components/CelebritySelect";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <p style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}>
        Stay focused! A celebrity will motivate you soon. ⏳
      </p>
      <CelebButtonGrid/>
    </div>
  );
};

export default App;
