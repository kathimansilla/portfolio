import githubLogo from '../images/githubw.svg';
import globeWeb from '../images/globe-solid.svg';
import arrowRight from '../images/arrow-right.svg';
import arrowLeft from '../images/arrow-left.svg';
import { useState } from 'react';

const ProjectSection = ({ projects }) => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const [currentProjects, setCurrentProjects] = useState(projects.slice(0, 3));

  const handlePrev = (ev) => {
    ev.preventDefault();
    if (currentPage > 1) {
      const endIndex = (currentPage - 1) * projectsPerPage;
      const startIndex = endIndex - projectsPerPage;
      setCurrentProjects(projects.slice(startIndex, endIndex));
      setCurrentPage(currentPage - 1);
      return currentProjects;
    }
  };

  const handleNext = (ev) => {
    ev.preventDefault();
    if (currentProjects.length >= 3) {
      const startIndex = currentPage * projectsPerPage;
      const endIndex = startIndex + projectsPerPage;
      setCurrentProjects(projects.slice(startIndex, endIndex));
      setCurrentPage(currentPage + 1);
      return currentProjects;
    }
  };

  // Render the list of the current projects
  const projectLi = currentProjects.map((project) => {
    return (
      <li key={project.id} className="projects__container">
        <p className="projects__container__title">{project.name}</p>
        <div className="containerLogos">
          <a
            href={project.url_project}
            className="linkProject"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="containerLogos__item globe"
              src={globeWeb}
              alt="github logo"
            />
          </a>
          <a
            href={project.url_github}
            className="linkGuthubPtoject"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="containerLogos__item github"
              src={githubLogo}
              alt="github logo"
            />
          </a>
        </div>
      </li>
    );
  });

  return (
    <>
      <section className="projectSection">
        <h3 className="projectSection__title">Projects</h3>
        <section className="projectSection__container">
          <ul className="projects">{projectLi}</ul>
        </section>
        {/*<Pagination />*/}
        <form action="back" className="pagination">
          <button className="pagination__btn" onClick={handlePrev}><img className="pagination__btn__img" src={arrowLeft} alt="arrow-right" />
          </button>
          <span className="pagination__text">Page {currentPage}</span>
          <button className="pagination__btn next" onClick={handleNext}>
            <img className="pagination__btn__img next" src={arrowRight} alt="arrow left" />
          </button>
        </form>
      </section>
    </>
  );
};

export default ProjectSection;
