import React from "react";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";
import "./stacks.scss";

export default function Stacks() {
  return (
    <div className='stack'>
      <div className='stack__con'>
        <h2 className='stack__hi'>
          Hi , I'am Ibrahim. Nice to meet you________________🤖{" "}
          <span className='dot'>.</span>
        </h2>
        <h1 className='stack__about header1'>
          About<span className='dot'>.</span>
        </h1>
        <div className='stack__grid'>
          <div className='stack__grid__list1'>
            <p>
              Since the beginning of my journey in 2019 into the world of
              Software Engineering and currently working as FrontEnd Developer
              @ImperoTechne. Through this experiences, I've had the oppurtunity
              to collaborate with several talented developer and designer in
              creating digital products for both Enterprise and consumer use,
              writing code that are maintaineable and scaleable.
            </p>
            <p className='quote'>
              <ImQuotesLeft /> As I've grown as a developer, I've worked
              alongside senior designers and developers who have raised my
              standards for whats expected of any web application.{" "}
              <ImQuotesRight />
            </p>
          </div>
          <div className='stack__grid__list1 gads'>
            <div className='stack__gads'>
              <h1 className='stack__gads__header header1'>
                Being an Andela Mobile Web Specialist Mentor{" "}
                <span className='dot'>.</span>
              </h1>
              <p className='stack__gads__text'>
                Being a recipient of the Andela in partner with Google Africa
                Developer training Certification in 2019, which help launch my
                career in tech. I was super excited when andela reached out,
                inviting me to be one their 2021 MWS Mentors. I recognise the
                impact of such program in building tech talent in africa, as a
                product of the program.
                <br />
                <br />
                Tasked with the duties of mentoring both aspiring, junior & even
                Intermediate level developer, guilding on through the process
                building web and wep applicatio. Provide lessons from HTML, CSS
                and Javascript, React, Angular, git. Finally, guilding them on
                building a Web Application as their final assesment for getting
                the certification.
                <br />
                <br />
                It served as a oppurtunity to learn from developers from all
                level and different corners of the world, brushing on my
                programming, leadership and mentoring skills.
              </p>
            </div>
            <div className='stack__duties'></div>
          </div>
          <div className='stack__grid__list1 second'>
            <div className='stack__skills'>
              <h1 className='skills__header header1'>
                My Skills<span className='dot'>.</span>
              </h1>
              <div className='stack__flex'>
                <ul className='stack__skills__ui'>
                  <li className='stack__skill__list'>
                    <span className='list__style'></span>
                    <span className='header3'>Javascript</span>
                  </li>
                  <li className='stack__skill__list'>
                    <span className='list__style'></span>
                    <span className='header3'>React, Hooks, Context Api</span>
                  </li>
                  <li className='stack__skill__list'>
                    <span className='list__style'></span>
                    <span className='header3'>Sass, Material UI</span>
                  </li>
                  <li className='stack__skill__list'>
                    <span className='list__style'></span>
                    <span className='header3'>Styled Components</span>
                  </li>
                </ul>
                <ul className='stack__skills__ui'>
                  <li className='stack__skill__list secondList'>
                    <span className='list__style'></span>
                    <span className='header3'>Graphql</span>
                  </li>
                  <li className='stack__skill__list secondList'>
                    <span className='list__style'></span>
                    <span className='header3'>Git & GitHub</span>
                  </li>
                  <li className='stack__skill__list secondList'>
                    <span className='list__style'></span>
                    <span className='header3'>Redux </span>
                  </li>
                  <li className='stack__skill__list secondList'>
                    <span className='list__style'></span>
                    <span className='header3'>Java</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
