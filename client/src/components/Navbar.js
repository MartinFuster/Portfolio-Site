import React from "react";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

function Navbar() {
  return (
    <nav className="nav">
      <div className="main-box">M.</div>
      <div className="links">
        <div
          className="link-box"
          onClick={() => {
            scroller.scrollTo("about", {
              duration: 750,
              smooth: "easeOutCubic",
            });
          }}
        >
          About
        </div>
        <div
          className="link-box"
          onClick={() => {
            scroller.scrollTo("projects", {
              duration: 1000,
              smooth: "easeOutCubic",
            });
          }}
        >
          Portfolio
        </div>
        <div
          className="link-box"
          onClick={() => {
            scroller.scrollTo("design", {
              duration: 1250,
              smooth: "easeOutCubic",
            });
          }}
        >
          Design
        </div>
        <div className="link-box">Certificate</div>
        <div className="link-box">CV</div>
        <div
          className="link-box"
          onClick={() => {
            scroller.scrollTo("contact", {
              duration: 1500,
              smooth: "easeOutCubic",
            });
          }}
        >
          Contact
        </div>
      </div>
      <a className="language-changer" href="/es-ar">
        ES <i class="fas fa-globe-americas world-icon"></i>
      </a>
    </nav>
  );
}

export default Navbar;
