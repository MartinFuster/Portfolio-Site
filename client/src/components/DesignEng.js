import React from "react";
import planeTablet from "../images/plane-tablet.png";

function DesignEng() {
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
              Design.
            </h3>
            <div
              className="text"
              data-aos="fade"
              data-aos-delay={width > 900 ? "2250" : "0"}
            >
              I always loved a clean and simple design, so I learned how to do
              them, and got quite good at doing so!
            </div>
            <div
              className="text"
              data-aos="fade"
              data-aos-delay={width > 900 ? "2750" : "0"}
            >
              I did multiple designs for my Digital Agency and clients, which
              you can find on Instagram{" "}
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

export default DesignEng;
