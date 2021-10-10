import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div id='contact' className='contact'>
      <div className='contact__con'>
        <h1>
          Let's Work Together <span className='dot'>.</span>
        </h1>
        <p className='contact__paragraph'>
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </p>
        <a
          className='contact__mailto'
          href='mailto:adeyemiibrahim223@gmail.com'>
          adeyemiibrahim223@gmail.com
        </a>
      </div>
    </div>
  );
}
