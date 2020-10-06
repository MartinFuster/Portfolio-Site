import React from "react";
import planeTablet from "../images/plane-tablet.png";

function DesignEs() {
  const width = window.innerWidth;
  return (
    <section className="design" id="design">
      <div className="container">
        <div className="content-design">
          <div className="info-section-design">
            <h3
              className="title color-secondary"
              data-aos="fade"
              data-aos-delay={width > 900 ? "1500" : "0"}
            >
              Diseño.
            </h3>
            <div
              className="text"
              data-aos="fade"
              data-aos-delay={width > 900 ? "2250" : "0"}
            >
              Siempre me encantaron los proyectos limpios y simples, entonces
              aprendí como hacerlos, ¡y me volví bastante bueno en ello!
            </div>
            <div
              className="text"
              data-aos="fade"
              data-aos-delay={width > 900 ? "2750" : "0"}
            >
              Realicé multiples diseños para mi Agencia Digital y clientes, los
              cuales pueden encontrar en instagram{" "}
              <a
                className="ig-link"
                href="https://www.instagram.com/doppledesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @<span className="underline">doppledesign</span>
              </a>
              .
            </div>
          </div>
          <div className="image-section">
            <img
              data-aos="tablet"
              data-aos-delay="500"
              src={planeTablet}
              alt="Travel Concept Design"
              className="plane-tablet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignEs;
