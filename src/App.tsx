import React from "react";
import "./App.css";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import LinksSection from "./components/LinksSection/LinksSection";

function App() {
  return (
    <div className="App">
      <div className="mainContent">
        <AboutMeSection />
        <SkillsSection />
        <LinksSection />
      </div>
    </div>
  );
}

export default App;
