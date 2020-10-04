import React from "react";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

function AboutEng() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-info-section">
            <div className="title-container" data-aos="fadeUpSlow">
              <div className="small-title-alt title-main-color">About Me</div>{" "}
              <div className="bar bar-small"></div>
            </div>
            <h3 className="title" data-aos="fadeUpSlow" data-aos-delay="1000">
              How did i get into programming?
            </h3>
            <div className="text" data-aos="fadeUpSlow" data-aos-delay="1500">
              I fell in love of coding when I was 17 years old and had to do a
              website for a school project. it was supposed to be a year-long
              process, but I was so excited I finished it in a week.
            </div>
            <div className="text" data-aos="fadeUpSlow" data-aos-delay="2000">
              From there I started to learn about different languages,
              frameworks and plugins to make better web apps, I did a few Udemy
              courses alongside college and built a strong set of tools to work
              with.
            </div>
            <div
              data-aos="fadeUpSlow"
              data-aos-delay="2500"
              className="btn"
              onClick={() => {
                scroller.scrollTo("contact", {
                  duration: 1250,
                  smooth: "easeOutCubic",
                });
              }}
            >
              Contact Me
            </div>
          </div>
          <div className="about-contact-info">
            <div className="title-container">
              <div className="small-title-alt title-main-color">&nbsp;</div>{" "}
            </div>
            <h3
              className="title"
              data-aos="fadeUpSlow"
              data-aos="fadeUpSlow"
              data-aos-delay="3500"
            >
              Any type of query or discussion?
            </h3>
            <div
              className="text"
              data-aos="fadeUpSlow"
              data-aos="fadeUpSlow"
              data-aos-delay="4000"
            >
              Lets have a chat!
            </div>

            <div
              data-aos="fadeUpSlow"
              data-aos-delay="4500"
              className="resume-contact u-no-margin about-contact"
              data-aos="fadeUpSlow"
            >
              martinfuster3<span className="u-no-decoration">@</span>gmail.com
              {
                //eslint-disable-next-line
                <a
                  className="fas fa-envelope envelope-icon"
                  href="mailto:martinfuster3@gmail.com"
                ></a>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutEng;
