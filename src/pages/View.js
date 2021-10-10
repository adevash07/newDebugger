import React, { useState } from "react";
import Contact from "./contact/Contact";
import Intro from "./intro/Intro";
import Menu from "./menu/Menu";
import Project from "./projects/Project";
import Stacks from "./stacks/Stacks";
import "./view.scss";

export default function View() {
  const [menuActive, setmenuActive] = useState(false);
  const menuHandler = () => {
    setmenuActive((prev) => {
      console.log("here");
      console.log(menuActive);
      return !prev;
    });
  };
  return (
    <div className='view'>
      <div className='view__con container--wide'>
        <Menu active={menuActive} toggle={menuHandler} />
        <Intro toggle={menuHandler} />
        <Stacks />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
