import React from "react";

function Copyright() {
  const year = new Date().getFullYear();
  const width = window.innerWidth;

  return (
    <section className="copyright">
      <div className="container">
        <div
          className="copyright-text"
          data-aos="fade"
          data-aos-delay={width > 900 ? "5500" : "0"}
          data-anchor-placement="bottom bottom"
        >
          Copyright © {year} Martin Fuster.
        </div>
      </div>
    </section>
  );
}

export default Copyright;
