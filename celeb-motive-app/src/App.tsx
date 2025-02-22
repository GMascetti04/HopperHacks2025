import React from "react";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <p style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}>
        Stay focused! A celebrity will motivate you soon. ⏳
      </p>
    </div>
  );
};

export default App;
