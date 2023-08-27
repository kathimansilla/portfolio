import projectA1 from '../images/project-alone-1.jpeg';
import projectA2 from '../images/project-alone-2.jpeg';
import projectA3 from '../images/project-alone-3.jpeg';
import projectA4 from '../images/project-alone-4.jpeg';
import project1 from '../images/project-team-1.jpeg';
import project2 from '../images/project-team-2.jpeg';
import project4 from '../images/project-team-4.jpeg';
import Pagination from './Pagination';

const ProjectSection = ({ projects }) => {
  const projectLi = projects.map((project) => {
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
          <Pagination projects={projects} />
        </section>
      </section>
    </>
  );
};

export default ProjectSection;
