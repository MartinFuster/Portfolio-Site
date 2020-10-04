import React from "react";
import planeTablet from "../images/plane-tablet.png";

function DesignEng() {
  return (
    <section className="design" id="design">
      <div className="container">
        <div className="content-design">
          <div className="info-section-design">
            <h3
              className="title color-secondary"
              data-aos="fade"
              data-aos-delay="1500"
            >
              Design.
            </h3>
            <div className="text" data-aos="fade" data-aos-delay="2250">
              I always loved a clean and simple design, so I learned how to do
              them, and got quite good at doing so!
            </div>
            <div className="text" data-aos="fade" data-aos-delay="2750">
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
