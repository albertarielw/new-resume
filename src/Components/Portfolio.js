import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item" style={{ display: "flex" }}>
          <div className="item-wrap">
            <div style={{ textAlign: "center" }}>{projects.title}</div>
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.category}</div>
            <div style={{ textAlign: "center" }}>
            {
              projects.stacks.map( (stack) =>
                <img src={"icons/" + stack} alt="Python Logo" style={{ width: '35px', height: '35px' }} />
              )
            }
            </div>

          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Here are my recent projects!</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
