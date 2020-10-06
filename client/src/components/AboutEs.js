import React from "react";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

function AboutEs() {
  const width = window.innerWidth;
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-info-section">
            <div className="title-container" data-aos="fadeUpSlow">
              <div className="small-title-alt title-main-color">Acerca</div>{" "}
              <div className="bar bar-small"></div>
            </div>
            <h3
              className="title"
              data-aos="fadeUpSlow"
              data-aos-delay={width > 900 ? "1000" : "0"}
            >
              ¿Como comencé a programar?
            </h3>
            <div
              className="text"
              data-aos="fadeUpSlow"
              data-aos-delay={width > 900 ? "1500" : "0"}
            >
              Me enamoré de la programacion cuando tenia 17 años y tuve que
              crear un sitio web para un proyecto de la escuela. Se suponia que
              iba a ser un proyecto anual, pero estaba tan emocionado que lo
              completé en una semana.
            </div>
            <div
              className="text"
              data-aos="fadeUpSlow"
              data-aos-delay={width > 900 ? "2000" : "0"}
            >
              Desde ahí empeze a aprender sobre diferentes lenguajes, frameworks
              y plugins para crear mejores aplicaciones web, hice algunos cursos
              de Udemy a la par con la universidad y construí un fuerte set de
              herramientas con las que trabajar.
            </div>
            <div
              data-aos="fadeUpSlow"
              data-aos-delay={width > 900 ? "2500" : "0"}
              className="btn"
              onClick={() => {
                scroller.scrollTo("contact", {
                  duration: 1250,
                  smooth: "easeOutCubic",
                });
              }}
            >
              Contactame
            </div>
          </div>
          <div className="about-contact-info">
            <div className="title-container">
              <div className="small-title-alt title-main-color">&nbsp;</div>{" "}
            </div>
            <h3 className="title" data-aos="fadeUpSlow" data-aos-delay="3500">
              ¿Algún tipo de duda o discusión?
            </h3>
            <div className="text" data-aos="fadeUpSlow" data-aos-delay="4000">
              ¡Tengamos una charla!
            </div>

            <div
              data-aos="fadeUpSlow"
              data-aos-delay="4500"
              className="resume-contact u-no-margin about-contact"
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

export default AboutEs;
