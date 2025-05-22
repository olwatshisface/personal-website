import React, { useEffect, useRef, useState } from "react";
import classes from "./AboutMeSection.module.scss";
import { SelectButton } from "primereact/selectbutton";
import { CSSTransition } from "react-transition-group";

const AboutMeSection = () => {
  const introductionHeaderText = `Hi there! I'm Ethan Crochet. \n `;
  const professionalIntroductionBodyText = `I'm a Software Engineer with 8 years of professional experience, driven by a passion for building clean, user-focused applications. With a strong background in front-end technologies like JavaScript, React, and TypeScript, I specialize in creating scalable, intuitive software that balances performance with usability. I also have a few years of experience doing full-stack development, and am brushing up my skills to learn more of the back-end side of things.\n
I'm known for being a collaborative team player who communicates clearly across disciplines. I believe that great software comes from strong teamwork, thoughtful design, and attention to detail. Whether I'm leading an initiative or contributing to a team project, I bring curiosity, accountability, and a focus on delivering real value.\n
Code quality and maintainability are priorities in my work—I promote clear standards, thorough reviews, and continuous improvement. I also enjoy mentoring others and helping teams grow stronger through shared knowledge and best practices.\n
Above all, I value the creative problem-solving aspect of engineering and the chance to grow daily—not just as a developer, but as a teammate and leader.`;

  // TODO: perhaps steam integration for a currently playing section? maybe something like goodreads for currently reading?
  const personalIntroductionBodyText = `I'm an avid gamer. My primary platform is PC, but I also have a PS5 to play with my friends. I generally prefer single-player games (I'm always a sucker for a good story). Having said that, I'll play anything. If you've heard of a major game release, I've almost certainly played it. That also includes whichever Battle Royale or shooter my friends are playing. Right now it's Call Of Duty Warzone.
  My other primary hobby is reading. I don't do it as often as I would like, if I'm being honest, but once I'm hooked, I'll do nothing but read until I've consumed the entire book/series.
  This is less of a hobby and more of just something I do as part of my daily routine, but I enjoy going to the gym quite a bit, I lift 6 days a week. It's mostly just to keep myself in some semblance of decent shape `;

  const selectButtonOptions = ["Professional", "Personal"];

  const [selectedOption, setSelectedOption] = useState<String>(
    selectButtonOptions[0]
  );

  const nodeRef = useRef(null);

  //SelectButton allows to you click the same option and twice, changing the selection to "nothing", this block catches that and makes it act as a "toggle" instead
  useEffect(() => {
    if (!(selectedOption === selectButtonOptions[0])) {
      setSelectedOption(selectButtonOptions[1]);
    } else {
      setSelectedOption(selectButtonOptions[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);
  return (
    <div className="section">
      <div className={classes.aboutMeHeader}>{introductionHeaderText}</div>

      <SelectButton
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.value);
        }}
        options={selectButtonOptions}
      />
      <div className={classes.aboutMeBody}>
        {selectedOption === "Professional" ? (
          professionalIntroductionBodyText
        ) : (
          <CSSTransition
            in={!(selectedOption === "Professional")}
            ref={nodeRef}
            addEndListener={() => false}
            key={"personalTextBody"}
            classNames={"my-node"}
          >
            <>{personalIntroductionBodyText}</>
          </CSSTransition>
        )}
      </div>
    </div>
  );
};

export default AboutMeSection;
