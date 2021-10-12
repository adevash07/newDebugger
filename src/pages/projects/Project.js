import React from "react";
import { Debugger, salizaar, String, Petals } from "../../assets";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import "./projects.scss";

export default function Project() {
  return (
    <div id='project' className='project'>
      <div className='project__con'>
        <h1 className='project__header header1'>
          What I've been working on<span className='dot'>.</span>
        </h1>
        <p className='project__paragraph header4'>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, articles, and companies I've
          dedicated my time to.
        </p>
        <div className='project__grid'>
          <div className='project__grid__list'>
            <div className='project__grid__container'>
              <div className='imgCon'>
                <img src={String} alt='' />
              </div>
              <h2 className='header2'>Strings (The App.)</h2>
              <p>
                A Full Realtime Chat Application built using React, Redux, scss,
                Node.js, web socket
              </p>
              <h4>
                <a href='https://strings.netlify.app'>
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>
          <div className='project__grid__list'>
            <div className='project__grid__container'>
              <div className='imgCon'>
                <img src={salizaar} alt='Salizaar the E-commmerce App' />
              </div>
              <h2 className='header2'>Salizaar</h2>
              <p>
                An E-commerce Site to order pizza and other dishes, built with
                React, Context Api, Firebase, scss
              </p>
              <h4>
                <a alt='link' href='#e'>
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>
          <div className='project__grid__list'>
            <div className='project__grid__container'>
              <div className='imgCon'>
                <img src={Debugger} alt='' />
              </div>

              <h2 className='header2'>Working at ImperoTechne</h2>
              <p>Worked at ImperoTechne as FrontEnd Developer</p>
              <h4>
                Know More <BsBoxArrowInUpRight />
              </h4>
            </div>
          </div>
          <div className='project__grid__list'>
            <div className='project__grid__container'>
              <div className='imgCon'>
                <img src={Petals} alt='' />
              </div>
              <h2 className='header2'>a Hotel Petals</h2>
              <p>
                An Hotel webiste to book rooms. Built HTML, CSS(SCSS),
                Javascript
              </p>
              <h4>
                <a href='https://petalshotel.netlify.com'>
                  View More <BsBoxArrowInUpRight />
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div className='coming'>
          <h2 className='header2'>COMING SOON - SYNTAX</h2>
          <p className='header3'>
            Syntax is a Web App that helps developers improve their Typing
            accuracy, Prescision and Speed.
          </p>
        </div>
      </div>
    </div>
  );
}
