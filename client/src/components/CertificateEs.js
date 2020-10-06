import React from "react";
import certificate from "../images/certificate-es.jpg";
import NavbarEs from "./NavbarEs";
import NavbarMobileEs from "./NavbarMobileEs";

function CertificateEs() {
  return (
    <section className="home intro">
      <div className="container">
        <NavbarEs />
        <NavbarMobileEs />
      </div>
      <section className="intro intro-certificate">
        <div className="container">
          <div className="certificate-box" data-aos="fadeUpSlow">
            <img
              src={certificate}
              alt="certificate"
              className="certificate-img"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default CertificateEs;
