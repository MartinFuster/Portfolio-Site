import React from "react";
import arrow from "../images/down-arrow.png";
import NavbarEs from "./NavbarEs";
import NavbarMobileEs from "./NavbarMobileEs";

function IntroEs() {
  return (
    <section className="intro">
      <div className="container">
        <NavbarEs />
        <NavbarMobileEs />
        <div className="content-design" data-aos="fadeUpSlow">
          <div className="name-content u-unselectable-text">
            <div className="name">Martin</div>
            <div className="last-name">Fuster</div>
            <img src={arrow} alt="down-arrow" className="arrow" />
          </div>
          <div className="resume">
            <div className="title-container">
              <div className="small-title-alt">Des. Web Full Stack</div>{" "}
              <div className="bar"></div>
            </div>
            <h3 className="title">Soy un Desarrollador Web Full Stack.</h3>
            <div className="text">
              Estoy especializado en crear aplicaciones web con React.js,
              Node.js y Firebase.
            </div>
            <div className="resume-contact">T : +54 11-2389-2231</div>
            <div className="resume-contact u-no-margin">
              E : martinfuster3@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroEs;
