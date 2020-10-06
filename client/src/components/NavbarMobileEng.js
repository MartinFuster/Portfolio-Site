import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

function NavbarMobileEng() {
  const [navActive, setNavActive] = useState(false);

  const navbarAnimation = useSpring({
    opacity: navActive ? 1 : 0,
    visibility: navActive ? "visible" : "hidden",
    width: navActive ? "100vw" : "100vw",
    height: navActive ? "100vh" : "0vh",
  });
  return (
    <>
      <div className="navbar-mobile">
        <a className="language-changer" href="/es-ar">
          <div
            className="main-box"
            onClick={() => (window.location.href = "/en-us")}
          >
            M.
          </div>
        </a>
        <div
          className="link-box"
          onClick={() => {
            setNavActive(true);
          }}
        >
          <i className="fas fa-bars bars-icon"></i>
        </div>
      </div>
      <animated.div className="nav-active" style={navbarAnimation}>
        <div className="close-cross" onClick={() => setNavActive(false)}>
          <i className="fas fa-times"></i>
        </div>
        <div className="links-mobile">
          <div
            className="link-box link-box-mobile"
            onClick={() => {
              scroller.scrollTo("about", {
                duration: 750,
                smooth: "easeOutCubic",
              });
              setNavActive(false);
            }}
          >
            About
          </div>
          <div
            className="link-box link-box-mobile"
            onClick={() => {
              scroller.scrollTo("projects", {
                duration: 1000,
                smooth: "easeOutCubic",
              });
              setNavActive(false);
            }}
          >
            Portfolio
          </div>
          <div
            className="link-box link-box-mobile"
            onClick={() => {
              scroller.scrollTo("design", {
                duration: 1250,
                smooth: "easeOutCubic",
              });
              setNavActive(false);
            }}
          >
            Design
          </div>
          <div
            className="link-box link-box-mobile"
            onClick={() => (window.location.href = "/certificate")}
          >
            Certificate
          </div>
          <div className="link-box link-box-mobile">CV</div>
          <div
            className="link-box link-box-mobile"
            onClick={() => {
              scroller.scrollTo("contact", {
                duration: 1500,
                smooth: "easeOutCubic",
              });
              setNavActive(false);
            }}
          >
            Contact
          </div>
          <div
            className="link-box link-box-mobile"
            onClick={() => {
              window.location.href = "/es-ar";
            }}
          >
            ES{" "}
            <i className="fas fa-globe-americas world-icon world-icon-mobile"></i>
          </div>
        </div>
      </animated.div>
    </>
  );
}

export default NavbarMobileEng;
