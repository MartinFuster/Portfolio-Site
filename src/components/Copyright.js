import React from "react";

function Copyright() {
  const year = new Date().getFullYear();

  return (
    <section className="copyright">
      <div className="container">
        <div className="copyright-text">Copyright © {year} Martin Fuster.</div>
      </div>
    </section>
  );
}

export default Copyright;
