import React from "react";

function AboutEng() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-info-section">
            <div className="title-container">
              <div className="small-title-alt title-main-color">About Me</div>{" "}
              <div className="bar bar-small"></div>
            </div>
            <h3 className="title">How did i get into programming?</h3>
            <div className="text">
              I fell in love of coding when I was 17 years old and had to do a
              website for a school project. it was supposed to be a year-long
              process, but I was so excited I finished it in a week.
            </div>
            <div className="text">
              From there I started to learn about different languages,
              frameworks and plugins to make better web apps, I did a few Udemy
              courses alongside college and built a strong set of tools to work
              with.
            </div>
            <div className="btn">Contact Me</div>
          </div>
          <div className="about-contact-info">
            <div className="title-container">
              <div className="small-title-alt title-main-color">&nbsp;</div>{" "}
            </div>
            <h3 className="title">Any type of query or discussion?</h3>
            <div className="text">Lets have a chat!</div>

            <div className="resume-contact u-no-margin about-contact">
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
