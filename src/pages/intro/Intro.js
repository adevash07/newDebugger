import React from "react";
import { Net } from "../../assets/index";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "./intro.scss";
import ArrowDown from "../../component/loading/ArrowDown/ArrowDown";

function Intro({ toggle }) {
  return (
    <div id="home" className="intro">
      <div className="intro__header">{/* <h3>debugger________🤖</h3> */}</div>
      <div className="intro__con">
        <div className="intro__coloured">
          <div className="intro__toggle">
            <span className="toggler" onClick={() => toggle()}></span>
          </div>
          <h2 className="header1 name">
            Ibrahim Adeyemi, <span className="header4">aka debugger.</span>
          </h2>
          <h3 className={`header1 work`}>
            <span className={`work__dev`}>SOFTWARE DEVELOPER</span>
            <span className={`work__ui`}>UI ENGINEER</span>
            <span className={`work__lan`}>Andela MWS MENTOR</span>
          </h3>

          <h4 className="header4 principles">
            <span>- Design</span>
            <span>- Functionality</span>
            <span>- Scalability</span>
            <span>- Reliable</span>
          </h4>
          <p className="intro__about">
            <span style={{ color: "white" }}>A REACT SPECIALIST.</span>
            <br />
            <br />
            <span
              style={{
                color: "white",
                marginTop: "3rem",
                display: "inlineBlock",
              }}
            >
              SrollDown to checkout my work.
            </span>
            <ArrowDown />
          </p>
        </div>
        <div className="intro__neutral">
          <div className="intro__hero">
            <img
              src="https://res.cloudinary.com/adevasn07/image/upload/v1648767749/stripes-1-designify_2_d0woug.png"
              alt="Ibrahim Adeyemi"
            />
          </div>
          <div className="intro__net">
            <Net />
            <Net />
          </div>
          <div className="intro__toggle">
            <span className="toggler" onClick={() => toggle()}></span>
          </div>
          <ul className="intro__social">
            <li className="intro__social__list">
              <a href="https://www.linkedin.com/in/adeyemiibrahim/">
                <AiFillLinkedin size="20" />{" "}
              </a>
            </li>
            <li className="intro__social__list">
              <a href="https://github.com/adevash07">
                <AiFillGithub size="20" />
              </a>
            </li>
            <li className="intro__social__list">
              <a href="https://www.twitter.com/adevash07">
                <AiFillTwitterSquare size="20" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="intro__social">
        <li className="intro__social__list">
          <a href="https://www.linkedin.com/in/adeyemiibrahim/">
            <AiFillLinkedin size="20" />{" "}
          </a>
        </li>
        <li className="intro__social__list">
          <a href="https://github.com/adevash07">
            <AiFillGithub size="20" />
          </a>
        </li>
        <li className="intro__social__list">
          <a href="https://www.twitter.com/adevash07">
            <AiFillTwitterSquare size="20" />
          </a>
        </li>
      </ul>
      <span className="intro__menu">navigation</span>
      <div className="intro__footer"></div>
    </div>
  );
}

export default React.memo(Intro);
