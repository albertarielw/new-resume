import React, { Component } from "react";
import Slide from "react-reveal";
import Zmage from "react-zmage";

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

    // let id = 1;
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
            {
                project.website_url !== "" &&
                <a href={project.website_url}>
                  <img src="icons/globe.png" alt="Python Logo" style={{ width: '20px', height: '20px', position: 'relative', top: '4px' }} />
                </a>
            }
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
          {/* <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
            <div key={id++} className="columns portfolio-item" style={{ display: "flex" }}>
              <div className="item-wrap">
                <Zmage alt={project.title} src={"/images/portfolio/" + project.image} />
              </div>
            </div>
          </div> */}
        </div>
      );
    });

    // let id = 1;
    const miniProject = this.props.data.miniProjects.map(function (project) {
      return (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p className="info">
            {project.category}
            {
              project.github_url !== "" &&
              project.website_url !== "" &&
              <span>&bull;</span> 
            }
            {
              project.github_url !== "" &&
              <a href={project.github_url}>
                <img src="icons/github.png" alt="Python Logo" style={{ width: '20px', height: '20px', position: 'relative', top: '4px', marginRight: '5px' }} />
              </a>
            }
            {
                project.website_url !== "" &&
                <a href={project.website_url}>
                  <img src="icons/globe.png" alt="Python Logo" style={{ width: '20px', height: '20px', position: 'relative', top: '4px' }} />
                </a>
            }
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
          {/* <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
            <div key={id++} className="columns portfolio-item" style={{ display: "flex" }}>
              <div className="item-wrap">
                <Zmage alt={project.title} src={"/images/portfolio/" + project.image} />
              </div>
            </div>
          </div> */}
        </div>
      );
    });

    const skillset = this.props.data.skillset.map(function (skill) {
      return (
        <div key={skill.title}>
          <h3>{skill.title}</h3>
          <div className="break-special" />
          {
            skill.stacks.map( (stack) =>
              <img src={"icons/" + stack} alt="Python Logo" style={{ width: '35px', height: '35px' }} />
            )
          }
        </div>
      );
    });

    // const skills = this.props.data.skills.map((skills) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + skills.name.toLowerCase();
    //   const width = skills.level;

    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    // });

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
                <span>Work Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>


        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>

            <div className="nine columns main-col">{project}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">{skillset}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Activities</span>
              </h1>
            </div>

            <div className="nine columns main-col">{miniProject}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
