import React from "react";
import { Hero, Net } from "../../assets/index";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "./intro.scss";
import ArrowDown from "../../component/loading/ArrowDown/ArrowDown";

export default function Intro({ toggle }) {
  return (
    <div id='home' className='intro'>
      <div className='intro__header'>{/* <h3>debugger________🤖</h3> */}</div>
      <div className='intro__con'>
        <div className='intro__coloured'>
          <div className='intro__toggle'>
            <span className='toggler' onClick={() => toggle()}></span>
          </div>
          <h2 className='header1 name'>
            Ibrahim Adeyemi, <span className='header4'>aka debugger.</span>
          </h2>
          <h3 className={`header1 work`}>
            <span className={`work__dev`}>SOFTWARE DEVELOPER</span>
            <span className={`work__ui`}>UI ENGINEER</span>
            <span className={`work__lan`}>Andela MWS MENTOR</span>
          </h3>

          <h4 className='header4 principles'>
            <span>- Design</span>
            <span>- Functionality</span>
            <span>- Scalability</span>
            <span>- Reliable</span>
          </h4>
          <p className='intro__about'>
            <span style={{ color: "white" }}>
              React.js, Vue, Node, Java, Salesforce
            </span>
            <br />
            <br />
            <span style={{ color: "white", marginTop: "10rem" }}>
              SrollDown to checkout my work.
              <ArrowDown />
            </span>
          </p>
        </div>
        <div className='intro__neutral'>
          <div className='intro__hero'>
            <img src={Hero} alt='Ibrahim Adeyemi' />
          </div>
          <div className='intro__net'>
            <Net />
            <Net />
          </div>
          <div className='intro__toggle'>
            <span className='toggler' onClick={() => toggle()}></span>
          </div>
          <ul className='intro__social'>
            <li className='intro__social__list'>
              <AiFillLinkedin size='20' />
            </li>
            <li className='intro__social__list'>
              <AiFillGithub size='20' />
            </li>
            <li className='intro__social__list'>
              <AiFillTwitterSquare size='20' />
            </li>
          </ul>
        </div>
      </div>
      <ul className='intro__social'>
        <li className='intro__social__list'>
          <AiFillLinkedin size='20' />
        </li>
        <li className='intro__social__list'>
          <AiFillGithub size='20' />
        </li>
        <li className='intro__social__list'>
          <AiFillTwitterSquare size='20' />
        </li>
      </ul>
      <span className='intro__menu'>navigation</span>
      <div className='intro__footer'></div>
    </div>
  );
}
