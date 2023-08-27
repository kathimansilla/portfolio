import projectA1 from '../images/project-alone-1.jpeg';
import projectA2 from '../images/project-alone-2.jpeg';
import projectA3 from '../images/project-alone-3.jpeg';
import projectA4 from '../images/project-alone-4.jpeg';
import project1 from '../images/project-team-1.jpeg';
import project2 from '../images/project-team-2.jpeg';
import project4 from '../images/project-team-4.jpeg';
import Pagination from './Pagination';
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
    }};

  const handleNext = (ev) => {
    ev.preventDefault();
    if (currentProjects.length >= 3) {
      const startIndex = (currentPage) * projectsPerPage;
      const endIndex = startIndex + projectsPerPage;
      setCurrentProjects(projects.slice(startIndex, endIndex));
      setCurrentPage(currentPage + 1);
      return currentProjects;
    }
  };

  const projectLi = currentProjects.map((project) => {
    return (
      <li key={project.id}>
        <div className="projects__container">
          <p>{project.name}</p>
          <a
            href={project.url_project}
            className="linkProject"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={projectA4}
              className="projects__container__item"
              alt="project alone 4"
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
        <section>
          <ul className="projects">{projectLi}</ul>
          {/*<Pagination projects={projects} />*/}
        </section>

      {/*<Pagination />*/}
      <form action="back" className="pagination">
        <button className="pagination__button" onClick={handlePrev} >
          ← Anterior
        </button>
        <span className="pagination_text">Página {currentPage}</span>
        <button className="pagination__button" onClick={handleNext} >
          Siguiente →
        </button>
      </form>
      </section>
    </>
  );
};

export default ProjectSection;
