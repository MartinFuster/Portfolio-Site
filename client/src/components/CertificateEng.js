import React from "react";
import Navbar from "./Navbar";
import NavbarMobileEng from "./NavbarMobileEng";
import certificate from "../images/certificate.jpg";

function CertificateEng() {
  return (
    <section className="home intro">
      <div className="container">
        <Navbar />
        <NavbarMobileEng />
      </div>
      <section className="intro intro-certificate">
        <div className="container">
          <div className="certificate-box" data-aos="fadeUpSlow">
            <img
              src={certificate}
              alt="certificate image"
              className="certificate-img"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default CertificateEng;
