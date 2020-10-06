import React from "react";
import cv from "../pdf/Martin-Fuster-CV.pdf";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

function NavbarEs() {
  return (
    <nav className="nav" data-aos="fade">
      <div
        className="main-box"
        onClick={() => (window.location.href = "/es-ar")}
      >
        M.
      </div>
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
          Acerca
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
          Portafolio
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
          Diseño
        </div>
        <div
          className="link-box"
          onClick={() => (window.location.href = "/certificado")}
        >
          Certificado
        </div>
        <a className="link-box" href={cv} download>
          CV
        </a>
        <div
          className="link-box"
          onClick={() => {
            scroller.scrollTo("contact", {
              duration: 1500,
              smooth: "easeOutCubic",
            });
          }}
        >
          Contacto
        </div>
      </div>
      <a className="language-changer" href="/en-us">
        EN <i className="fas fa-globe-europe world-icon"></i>
      </a>
    </nav>
  );
}

export default NavbarEs;
