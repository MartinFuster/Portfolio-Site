import React from "react";
import Navbar from "./Navbar";
import arrow from "../images/down-arrow.png";

function IntroEng() {
  return (
    <section className="intro">
      <div className="container">
        <Navbar />
        <div className="content">
          <div className="name-content u-unselectable-text">
            <div className="name">Martin</div>
            <div className="last-name">Fuster</div>
            <img src={arrow} alt="down-arrow" className="arrow" />
          </div>
          <div className="resume">
            <div className="title-container">
              <div className="small-title-alt">Full Stack Web Dev.</div>{" "}
              <div className="bar"></div>
            </div>
            <h3 className="title">
              Based in Buenos Aires, I'm a Full Stack Web Developer.
            </h3>
            <div className="text">
              I'm specialized at building web apps with React.js, Node.js and
              Firebase.
            </div>
            <div className="resume-contact">P : +54 11-2389-2231</div>
            <div className="resume-contact u-no-margin">
              E : martinfuster3@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroEng;
