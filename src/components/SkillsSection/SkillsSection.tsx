import React from "react";
import classes from "./SkillsSection.module.scss";
import { Chip } from "primereact/chip";
import { Skill, skillsArray } from "./Skills";

const SkillsSection = () => {
  const createSkillChips = () => {
    return skillsArray.map((skill: Skill) => {
      return <Chip label={`${skill.name} ${skill.yearsOfExperience}`} />;
    });
  };

  const skillsText =
    "Technologies I have used, as well as years of experience, starting from the most recent: \n";
  return (
    <div className={classes.skillsSection}>
      <div className={classes.skillsText}>{skillsText}</div>
      <div>{createSkillChips()}</div>
    </div>
  );
};

export default SkillsSection;
