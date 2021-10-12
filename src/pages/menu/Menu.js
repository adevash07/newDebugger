import React from "react";
import "./menu.scss";

export default function Menu({ active, toggle }) {
  return (
    <div className={`menu ${active && "active"}`}>
      <ul className={`menu__list ${active && "active"}`}>
        <li className='menu__item header2'>
          <a href='#home'>Home</a>
        </li>
        <li className='menu__item header2'>
          <a href='#about'>About</a>
        </li>
        <li className='menu__item header2'>
          <a href='#skills'>Skills</a>
        </li>
        <li className='menu__item header2'>
          <a href='#project'>Projects</a>
        </li>
        <li className='menu__item header2'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='intro__toggle'>
        <span className='toggler' onClick={() => toggle()}></span>
      </div>
    </div>
  );
}
