import React from "react";
import IntroEng from "./IntroEng";
import AboutEng from "./AboutEng";
import ProjectsEng from "./ProjectsEng";
import DesignEng from "./DesignEng";
import ContactEng from "./ContactEng";
import Copyright from "./Copyright";

function EnUsHome() {
  return (
    <section className="home">
      <IntroEng />
      <AboutEng />
      <ProjectsEng />
      <DesignEng />
      <ContactEng />
      <Copyright />
    </section>
  );
}

export default EnUsHome;
