import React from "react";
import Contact from "./contact/Contact";
import Intro from "./intro/Intro";
import Project from "./projects/Project";
import Stacks from "./stacks/Stacks";
import "./view.scss";

export default function View() {
  return (
    <div className='view'>
      <div className='view__con container--wide'>
        <Intro />
        <Stacks />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
