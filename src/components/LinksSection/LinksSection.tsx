import React from "react";
import classes from "./LinksSection.module.scss";
import { Link, linkArray } from "./Links";

const LinksSection = () => {
  const getLinks = () => {
    return linkArray.map((link: Link) => {
      return (
        <>
          {link.description ? <div>{link.description}</div> : undefined}
          <a href={link.href}>{link.linkText}</a>
        </>
      );
    });
  };
  return <div className="section">{getLinks()}</div>;
};

export default LinksSection;
