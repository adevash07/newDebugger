import React from "react";
import {
  salizaar,
  String,
  Petals,
  Tech,
  OkeShop,
  Zuri,
  WhineNDine,
  Baker,
} from "../../assets";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import "./projects.scss";
import Animate from "../../component/animate/Animate";

export default function Project() {
  return (
    <div id="project" className="project">
      <div className="project__con">
        <Animate animateTop={true}>
          <h1 className="project__header header1">
            What I've been working on<span className="dot">.</span>
          </h1>
        </Animate>
        <Animate animateLeft={true}>
          <p className="project__paragraph header4">
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I've
            dedicated my time to.
          </p>
        </Animate>
        <div className="project__grid">
          <div className="project__grid__list">
            <div className="project__grid__container">
              <div className="imgCon">
                <img src={Tech} alt="Salizaar the E-commmerce App" />
              </div>
              <h2 className="header2">TechTalent</h2>
              <p>
                A web application to source TechTalent talent in the african
                ecosystem. List project, Hire Talent, Outsource to freelancers.
                Built with Typescript, React, Redux
              </p>
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  alt="link"
                  href="https://techtalent.netlify.app/"
                >
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>
          <div className="project__grid__list">
            <div className="project__grid__container">
              <div className="imgCon">
                <img src={OkeShop} alt="" />
              </div>
              <h2 className="header2">Oke-Clothings</h2>
              <p>A Clothings and accessories website. Built HTML, CSS(SCSS),</p>
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://adevash07.github.io/Oke-clothings/"
                >
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>{" "}
          <div className="project__grid__list">
            <>
              <div className="project__grid__container">
                <div className="imgCon">
                  <img src={Petals} alt="" />
                </div>
                <h2 className="header2">a Hotel Petals</h2>
                <p>
                  An Hotel webiste to book rooms. Built HTML, CSS(SCSS),
                  Javascript
                </p>
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://petalshotel.netlify.com"
                  >
                    View More <BsBoxArrowInUpRight />
                  </a>
                </h4>
              </div>
            </>
          </div>
          <div className="project__grid__list">
            <div className="project__grid__container">
              <div className="imgCon">
                <img src={salizaar} alt="Salizaar the E-commmerce App" />
              </div>
              <h2 className="header2">Lucid Profile</h2>
              <p>
                A profile view and edit for a tech online tech training. Built
                with Html and CSS(SCSS), Javascript.
              </p>
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  alt="link"
                  href="https://adevash07.github.io/lucidtest/"
                >
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>
          <div className="project__grid__list">
            <div className="project__grid__container">
              <div className="imgCon">
                <img src={String} alt="" />
              </div>
              <h2 className="header2">Strings (The App.)</h2>
              <p>
                A Full Realtime Chat Application built using React, Redux, scss,
                React Chat Engine, Firebase
              </p>
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://stringschat.netlify.app"
                >
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>
          <div className="project__grid__list">
            <>
              <div className="project__grid__container">
                <div className="imgCon">
                  <img src={Petals} alt="" />
                </div>
                <h2 className="header2">a Hotel Petals</h2>
                <p>
                  An Hotel webiste to book rooms. Built HTML, CSS(SCSS),
                  Javascript
                </p>
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://petalshotel.netlify.com"
                  >
                    View More <BsBoxArrowInUpRight />
                  </a>
                </h4>
              </div>
            </>
          </div>
          <div className="project__grid__list">
            <div className="project__grid__container">
              <div className="imgCon">
                <img src={salizaar} alt="Salizaar the E-commmerce App" />
              </div>
              <h2 className="header2">Salizaar</h2>
              <p>
                An E-commerce Site to order pizza and other dishes, built with
                React, Context Api, Firebase, scss
              </p>
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  alt="link"
                  href="https://salizaar.netlify.app/"
                >
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>
          <div className="project__grid__list">
            <div className="project__grid__container">
              <div className="imgCon">
                <img src={Baker} alt="" />
              </div>
              <h2 className="header2">Bakers Life The App.)</h2>
              <p>
                A Baker webisite to order all kinds confectionery, built with
                Html, CSS(SCSS), Javascript.
              </p>
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://stringschat.netlify.app"
                >
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>
          <div className="project__grid__list">
            <>
              <div className="project__grid__container">
                <div className="imgCon">
                  <img src={Zuri} alt="" />
                </div>
                <h2 className="header2">ZuriAcademy</h2>
                <p>
                  A tech training school website. Built HTML, CSS(SCSS),
                  Javascript.
                </p>
                <h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://adevash07.github.io/edu/"
                  >
                    View More <BsBoxArrowInUpRight />
                  </a>
                </h4>
              </div>
            </>
          </div>
          <div className="project__grid__list">
            <div className="project__grid__container">
              <div className="imgCon">
                <img src={WhineNDine} alt="Salizaar the E-commmerce App" />
              </div>
              <h2 className="header2">WhineNDine</h2>
              <p>
                A E-commerce Restuarant Website to order food, built with React,
                Redux, Context Api, Firebase, scss.
              </p>
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  alt="link"
                  href="https://salizaar.netlify.app/"
                >
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div className="coming">
          <h2 className="header2">COMING SOON - SYNTAX</h2>
          <p className="header3">
            Syntax is a Web App that helps developers improve their Typing
            accuracy, Prescision and Speed.
          </p>
        </div>
      </div>
    </div>
  );
}
