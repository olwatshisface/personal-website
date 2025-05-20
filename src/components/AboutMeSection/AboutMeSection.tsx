import React from "react";
import classes from "./AboutMeSection.module.scss";

const AboutMeSection = () => {
  const introductionHeaderText = `Hi there! I'm Ethan Crochet. \n `;
  const introductionBodyText = `I'm a Software Engineer with 8 years of professional experience, driven by a passion for building clean, user-focused applications. With a strong background in front-end technologies like JavaScript, React, and TypeScript, I specialize in creating scalable, intuitive software that balances performance with usability. I also have a few years of experience doing full-stack development, and am brushing up my skills to learn more of the back-end side of things.\n
I'm known for being a collaborative team player who communicates clearly across disciplines. I believe that great software comes from strong teamwork, thoughtful design, and attention to detail. Whether I'm leading an initiative or contributing to a team project, I bring curiosity, accountability, and a focus on delivering real value.\n
Code quality and maintainability are priorities in my work—I promote clear standards, thorough reviews, and continuous improvement. I also enjoy mentoring others and helping teams grow stronger through shared knowledge and best practices.\n
Above all, I value the creative problem-solving aspect of engineering and the chance to grow daily—not just as a developer, but as a teammate and leader.`;
  return (
    <div className={classes.aboutMe}>
      <div className={classes.aboutMeHeader}>{introductionHeaderText}</div>
      <div className={classes.aboutMeBody}>{introductionBodyText}</div>
    </div>
  );
};

export default AboutMeSection;
