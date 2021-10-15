import React from "react";
import Animate from "../../component/animate/Animate";
import "./stacks.scss";

export default function Stacks() {
  return (
    <div id='about' className='stack'>
      <div className='stack__con'>
        <Animate animateTop={true}>
          <h2 className='stack__hi'>
            Hi , I'am Ibrahim. Nice to meet you________________🤖{" "}
            <span className='dot'>.</span>
          </h2>
        </Animate>
        <Animate animateTop={true}>
          <h1 className='stack__about header1'>
            About<span className='dot'>.</span>
          </h1>{" "}
        </Animate>
        <div className='stack__grid'>
          <div className='stack__grid__list1'>
            <p>
              <Animate animateTop={true}>
                <span>
                  I have <span className='red'>over 2years</span> Experince in
                  Software Engineering and currently working as{" "}
                  <span className='red'>FrontEnd Developer @ImperoTechne.</span>
                </span>
              </Animate>
              <Animate animateTop={true}>
                <span>
                  Worked on Project{" "}
                  <span className='red'>
                    ERP SOLUITON and Freelancing Solution like UpWork.
                  </span>{" "}
                  for both Enterprise and Consumer use.
                </span>
              </Animate>
            </p>
          </div>
          <div className='stack__grid__list1 gads'>
            <div className='stack__gads'>
              <Animate animateLeft={true}>
                <h1 className='stack__gads__header header1'>
                  Being an Andela Web Specialist Mentor{" "}
                  <span className='dot'>.</span>
                </h1>
              </Animate>

              <p className='stack__gads__text'>
                Being a recipient of the Andela in partner with Google Africa
                Developer training Certification in 2019, which help launch my
                career in tech.
                <br />
                <br />I was super excited when andela reached out, inviting me
                to be one their 2021 MWS Mentors. I recognise the impact of such
                program in building tech talent in africa, as a product of the
                program.
                <br />
                <br />
                Tasked with the duties of mentoring both aspiring, junior,
                Intermediate level developer, guilding on through the process of
                building web applications. <br />
                <br />
                Provided lessons from HTML, CSS and Javascript, React, Angular,
                git. Finally, guilding them on building a Web Application as
                their final assesment for getting the certification.
              </p>
            </div>
            <div className='stack__duties'></div>
          </div>
          <div className='stack__grid__list1 second'>
            <div id='skills' className='stack__skills'>
              <Animate animateLeft={true}>
                <h1 className='skills__header header1'>
                  My Skills<span className='dot'>.</span>
                </h1>
              </Animate>
              <div className='stack__flex'>
                <Animate animateLeft={true}>
                  <ul className='stack__skills__ui'>
                    <Animate animateTop={true}>
                      <li className='stack__skill__list'>
                        <span className='list__style'></span>
                        <span className='header3'>TypeScript, Javascript</span>
                      </li>
                    </Animate>
                    <Animate animateTop={true}>
                      <li className='stack__skill__list'>
                        <span className='list__style'></span>
                        <span className='header3'>
                          React, Hooks, Context Api
                        </span>
                      </li>
                    </Animate>
                    <Animate animateTop={true}>
                      <li className='stack__skill__list'>
                        <span className='list__style'></span>
                        <span className='header3'>SCSS, Material UI</span>
                      </li>
                    </Animate>
                    <Animate animateTop={true}>
                      <li className='stack__skill__list'>
                        <span className='list__style'></span>
                        <span className='header3'>Styled Components</span>
                      </li>
                    </Animate>
                  </ul>
                </Animate>
                <Animate animateRight={true}>
                  <ul className='stack__skills__ui'>
                    <Animate animateBottom={true}>
                      <li className='stack__skill__list secondList'>
                        <span className='list__style'></span>
                        <span className='header3'>React Router,Graphql</span>
                      </li>
                    </Animate>
                    <Animate animateBottom={true}>
                      <li className='stack__skill__list secondList'>
                        <span className='list__style'></span>
                        <span className='header3'>Git, Npm, yarn, Netlify</span>
                      </li>
                    </Animate>
                    <Animate animateBottom={true}>
                      <li className='stack__skill__list secondList'>
                        <span className='list__style'></span>
                        <span className='header3'>Redux, Agile SDLC </span>
                      </li>
                    </Animate>
                    <Animate animateBottom={true}>
                      <li className='stack__skill__list secondList'>
                        <span className='list__style'></span>
                        <span className='header3'>
                          React Testing Libray, Jest
                        </span>
                      </li>
                    </Animate>
                  </ul>
                </Animate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
