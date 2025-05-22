import { Route, Routes } from "react-router-dom";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import LinksSection from "./components/LinksSection/LinksSection";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMeSection />} />
      <Route path="/skills" element={<SkillsSection />} />
      <Route path="/links" element={<LinksSection />} />
    </Routes>
  );
};

export default Router;
