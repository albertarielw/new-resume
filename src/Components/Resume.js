import React, { Component } from "react";
import Slide from "react-reveal";


class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>
            {education.description}
            <br />
            {education.description2}
          </p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>
            {work.description}

            <div className="break-special" />
            {
              work.stacks.map( (stack) =>
                <img src={"icons/" + stack} alt="Python Logo" style={{ width: '35px', height: '35px' }} />
              )
            }

          </p>
        </div>
      );
    });

    console.log(this.props.data.projects)

    const project = this.props.data.projects.map(function (project) {
      return (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p className="info">
            {project.category}
            <span>&bull;</span> 
            <a href={project.github_url}>
              <img src="icons/github.png" alt="Python Logo" style={{ width: '20px', height: '20px', position: 'relative', top: '4px', marginRight: '5px' }} />
            </a>
            <a href={project.website_url}>
              <img src="icons/globe.png" alt="Python Logo" style={{ width: '20px', height: '20px', position: 'relative', top: '4px' }} />
            </a>
          </p>
          <p>
            {project.description}
            <div className="break-special" />
            {
              project.stacks.map( (stack) =>
                <img src={"icons/" + stack} alt="Python Logo" style={{ width: '35px', height: '35px' }} />
              )
            }

          </p>
        </div>
      );
    });


    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>


        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Project</span>
              </h1>
            </div>

            <div className="nine columns main-col">{project}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
