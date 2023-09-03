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
  const [displayArrowR, setDisplayArrowR] = useState('');
  const [displayArrowL, setDisplayArrowL] = useState('hidden');

  const handlePrev = (ev) => {
    console.log(currentPage);
    ev.preventDefault();
    if (currentPage > 1) {
      setDisplayArrowR('');
      const endIndex = (currentPage - 1) * projectsPerPage;
      const startIndex = endIndex - projectsPerPage;
      setCurrentProjects(projects.slice(startIndex, endIndex));
      setCurrentPage(currentPage - 1);
      if (currentPage < 3) {
        setDisplayArrowL('hidden');
      }
      return currentProjects;
    }
  };

  const handleNext = (ev) => {
    ev.preventDefault();
    if (currentProjects.length >= 3) {
      setDisplayArrowL('');
      const startIndex = currentPage * projectsPerPage;
      const endIndex = startIndex + projectsPerPage;
      setCurrentProjects(projects.slice(startIndex, endIndex));
      setCurrentPage(currentPage + 1);
      if (currentPage >= 2) {
        setDisplayArrowR('hidden');
      }
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
          <button className={`pagination__btn ${displayArrowL}`} onClick={handlePrev}><img className="pagination__btn__img" src={arrowLeft} alt="arrow-right" />
          </button>
          <button className={`pagination__btn next ${displayArrowR}`} onClick={handleNext}>
            <img className="pagination__btn__img next" src={arrowRight} alt="arrow left" />
          </button>
        </form>
        <span className="pagination__text">Page {currentPage}</span>
      </section>
    </>
  );
};

export default ProjectSection;
