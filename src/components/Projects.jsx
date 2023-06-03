import React from "react";
import "./projects.css";
import "./fonts.css";

const Projects = () => {
  return (
    <div className="projectmain">
      <div className="project-main">
        <div className="myproject" data-aos="zoom-in">
          <span>M</span>
          <span>Y </span>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </div>
        <h2 className="project-text" data-aos="zoom-out-down">
          My projects
        </h2>

        <div className="project-container">
          <div
            className="project-card"
            style={{ "--clr": "#66e3ff" }}
            data-aos="zoom-out-right"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/project-1.png"
                alt="awg project"
              />
            </div>
            <div className="project-content">
              <h2>AWG Project</h2>
              <p>
                My first landing page, my first freelance job, and my first time
                working together with a UX/UI designer, done for Avatar World
                Group (AWG)
              </p>
              <a href="">CHECK OUT</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#ff0086" }}
            data-aos="zoom-out"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/project-2.png"
                alt="picture"
              />
            </div>
            <div className="project-content">
              <h2>GEEKWORLD Project</h2>
              <p>
                My first website made with HTML, CSS, Bootstrap, and Sass, an
                ecommerce site for a fictional collectible figurine store.
              </p>
              <a href="">CHECK OUT</a>
            </div>
          </div>

          <div
            className="project-card"
            style={{ "--clr": "#ae00ff" }}
            data-aos="zoom-out-left"
          >
            <div className="project-imgBx">
              <img
                className="project-img"
                src="../../images/paperwallet.png"
                alt="picture"
              />
            </div>
            <div className="project-content">
              <h2>LINGERIE CLOTHES Project</h2>
              <p>
                An Ecommerce for the brand A.M.
              </p>
              <a href="">CHECK OUT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
