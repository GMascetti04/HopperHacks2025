import React, { useState } from "react";
import Header from "./components/Header";
import CelebButtonGrid from "./components/CelebritySelect";
import HelpButton from "./components/HelpButton";
import UserOptions from "./components/UserOptions";
import MotivationPage from "./components/MotivationPage";

const App: React.FC = () => {
  const [currentPage, changeCurrentPage] = useState<number>(1);
  const [currentCeleb, changeCurrentCeleb] = useState({ name: "", image: "", context: "" });
  const [currentTimerDuration, changeCurrentTimerDuration] = useState(1500);
  const [userContextText, changeUserContextText] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);


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

      {/* Celebrity Selection */}
      {currentPage === 1 && (
        <CelebButtonGrid
          onSelectCeleb={(selectedCelebrity) => {
            changeCurrentCeleb(selectedCelebrity);
            changeCurrentPage(2);
          }}
        />
      )}

      {/* User Options Page */}
      {currentPage === 2 && (
        <UserOptions
          celebrityName={currentCeleb.name}
          celebrityImagePath={currentCeleb.image}
          onChangeCurrentCeleb={() => changeCurrentPage(1)}
          onDone={() => changeCurrentPage(3)}
          onChangeDuration={(x) => {changeCurrentTimerDuration(x);}}
          userContextText={userContextText}
          onChangeUserContextText={changeUserContextText}
          onSelectMood={setSelectedMood}
          selectedMood={selectedMood}
        />
      )}

      {/* Motivation Page (Final Screen) */}
      {currentPage === 3 && (
        <MotivationPage
          celebrityName={currentCeleb.name}
          celebrityImagePath={currentCeleb.image}
          timerDuration={currentTimerDuration}
          celebContext={currentCeleb.context}
          userContextText={userContextText}
          celebMood={selectedMood}
        />
      )}

      {/* Help Button */}
      <HelpButton />
    </div>
  );
};

export default App;
