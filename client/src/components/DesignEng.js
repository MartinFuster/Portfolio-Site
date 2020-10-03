import React from "react";
import planeTablet from "../images/plane-tablet.png";

function DesignEng() {
  return (
    <section className="design" id="design">
      <div className="container">
        <div className="content-design">
          <div className="info-section-design">
            <h3 className="title color-secondary">Design.</h3>
            <div className="text">
              I always loved a clean and simple design, so I learned how to do
              them, and got quite good at doing so!
            </div>
            <div className="text">
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
