import React from "react";
import arrow from "../images/right-arrow.png";
import appleTablet from "../images/apple-tablet.png";
import stockerTablet from "../images/stocker-tablet.png";

function ProjectsEs() {
  return (
    <section className="projects" id="projects">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        data-interval={false}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="projects-content" data-aos="fadeUpSlow">
                <div className="projects-text apple-text">
                  <div className="title-container">
                    <div className="small-title-alt">Proyecto</div>
                  </div>
                  <h3 className="title">Clon de Apple</h3>
                  <div className="text">Un clon del sitio web de apple.</div>
                  <a
                    className="project-link"
                    href="https://martinfusterappleclone.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="small-title-alt title-link">
                      Visitar sitio web
                    </div>
                    <img
                      src={arrow}
                      alt="Go to Website"
                      className="right-arrow"
                    />
                  </a>
                </div>
                <div className="projects-img">
                  <img
                    src={appleTablet}
                    alt="Apple Website"
                    className="tablet-carousel"
                  />
                  <a
                    href="https://github.com/MartinFuster/apple-clone"
                    target="_blank"
                    className="title small-title"
                    rel="noopener noreferrer"
                  >
                    Codigo Fuente <i className="fab fa-github github-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="projects-content">
                <div className="projects-text apple-text">
                  <div className="title-container">
                    <div className="small-title-alt">Proyecto</div>
                  </div>
                  <h3 className="title">Manejador de Stock</h3>
                  <div className="text">
                    Una aplicacion de manejo de stock para un cliente.
                  </div>
                  <a
                    className="project-link"
                    href="https://stocker-eng.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="small-title-alt title-link">
                      Visitar sitio web
                    </div>
                    <img
                      src={arrow}
                      alt="Go to Website"
                      className="right-arrow"
                    />
                  </a>
                </div>
                <div className="projects-img">
                  <img
                    src={stockerTablet}
                    alt="Stockr Website"
                    className="tablet-carousel"
                  />
                  <a
                    href="https://github.com/MartinFuster/stockr-eng"
                    className="title small-title"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codigo Fuente <i className="fab fa-github github-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="fas fa-chevron-left arrow-icon-slide"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previo</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="fas fa-chevron-right arrow-icon-slide"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Siguiente</span>
        </a>
      </div>
    </section>
  );
}

export default ProjectsEs;
