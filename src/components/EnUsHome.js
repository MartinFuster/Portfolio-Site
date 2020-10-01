import React from "react";
import IntroEng from "./IntroEng";
import AboutEng from "./AboutEng";
import ProjectsEng from "./ProjectsEng";
import DesignEng from "./DesignEng";

function EnUsHome() {
  return (
    <section className="home">
      <IntroEng />
      <AboutEng />
      <ProjectsEng />
      <DesignEng />
    </section>
  );
}

export default EnUsHome;
