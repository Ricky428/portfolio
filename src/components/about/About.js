import React from 'react'
import "./About.css";
import Me2 from "../../img/me2.jpg"

function About() {
  return (
    <div className='about'>
     <div className="about-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img src={Me2} alt="" 
        className="a-img" />
      </div>
     </div>


     <div className="about-right">
      <h1 className="a-title">About Me</h1>
      <div className="a-sub">
        I'm Hard wroking guy who did Bachlor of Arts and aspire to build an IT Career.
      </div>
      <div className="a-desc">
        From School to College lived a desciplined life since i was a part of Bharat Scouts and Guides and won several Awards like
        <p> <strong>Governor Award</strong> as Scout, <strong>President Award</strong> as Scout, <strong>Governor Award</strong> as a <strong>Rover, Service Excellence Award</strong> etc.</p>
        A Sapiosexual who enjoys the Learning and healthy competitive environment.
      </div>
     
     </div>
    </div>
  )
}

export default About
