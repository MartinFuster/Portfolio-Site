import React from "react";

function Navbar() {
  return (
    <nav className="nav">
      <div className="main-box">M.</div>
      <div className="links">
        <div className="link-box">About</div>
        <div className="link-box">Portfolio</div>
        <div className="link-box">Design</div>
        <div className="link-box">Certificate</div>
        <div className="link-box">CV</div>
        <div className="link-box">Contact</div>
      </div>
      <div className="language-changer">
        EN <i class="fas fa-chevron-down down-icon"></i>
      </div>
    </nav>
  );
}

export default Navbar;
