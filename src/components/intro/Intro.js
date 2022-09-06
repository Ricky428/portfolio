import React from 'react'
import "./Intro.css"
import Me from "../../img/me.png"

function Intro() {
  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello! My Name is</h2>
          <h1 className="i-name">Sukhwinder Singh</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Full Stack Developer</div>
            </div>
          </div>
          <div className="i-desc">
            I design the Front end of applications.
            Good in React, JavaScript, HTML, CSS.
            Worked with SQL, Express, Node as well.
          </div>
        </div>
        
      </div>

      <div className="intro-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
