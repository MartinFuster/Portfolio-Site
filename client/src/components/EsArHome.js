import React from "react";
import IntroEs from "./IntroEs";
import Copyright from "./Copyright";
import AboutEs from "./AboutEs";
import ProjectsEs from "./ProjectsEs";
import DesignEs from "./DesignEs";
import ContactEs from "./ContactEs";

function EsArHome() {
  return (
    <section className="home">
      <IntroEs />
      <AboutEs />
      <ProjectsEs />
      <DesignEs />
      <ContactEs />
      <Copyright />
    </section>
  );
}

export default EsArHome;
