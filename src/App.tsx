import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import LinksSection from "./components/LinksSection/LinksSection";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="mainContent">
          {/* <AboutMeSection />
          <SkillsSection />
          <LinksSection /> */}
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
