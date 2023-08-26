import projectA1 from '../images/project-alone-1.jpeg';
import projectA2 from '../images/project-alone-2.jpeg';
import projectA3 from '../images/project-alone-3.jpeg';
import projectA4 from '../images/project-alone-4.jpeg';
import project1 from '../images/project-team-1.jpeg';
import project2 from '../images/project-team-2.jpeg';
import project4 from '../images/project-team-4.jpeg';

const ProjectSection = () => {
    return (<>
      <section className='projectSection'>
        <h3 className='projectSection__title'>Projects</h3>
        <section className='projects'>
          <div className='projects__container'><a href="https://github.com/Adalab/modulo-4-evaluacion-final-kathimansilla" className="linkProject" target="_blank" rel="noreferrer"><img src={projectA4} className="projects__container__item" alt="project alone 4" /></a></div>
          <div className='projects__container'><a href="https://github.com/Adalab/modulo-3-evaluacion-final-kathimansilla" className="linkProject" target="_blank" rel="noreferrer"><img src={projectA3} className="projects__container__item" alt="project alone 3" /></a></div>
          <div className='projects__container'><a href="https://github.com/Adalab/project-promo-t-module-4-team-4" className="linkProject" target="_blank" rel="noreferrer"><img src={project4} className="projects__container__item" alt="project 2" /></a></div>
          {/*<div className='projects__container'><a href="https://github.com/Adalab/project-promo-T-module-2-team-4" className="linkProject" target="_blank" rel="noreferrer"><img src={project2} className="projects__container__item" alt="project alone 2" /></a></div>
          <div className='projects__container'><a href="https://github.com/Adalab/modulo-2-evaluacion-final-kathimansilla" className="linkProject" target="_blank" rel="noreferrer"><img src={projectA2} className="projects__container__item" alt="project 1" /></a></div>
          <div className='projects__container'><a href="https://github.com/Adalab/project-promo-t-module-1-team-2" className="linkProject" target="_blank" rel="noreferrer"><img src={project1} className="projects__container__item" alt="project alone 1" /></a></div>
          <div className='projects__container'><a href="https://github.com/Adalab/modulo-1-evaluacion-final-kathimansilla" className="linkProject" target="_blank" rel="noreferrer"><img src={projectA1} className="projects__container__item" alt="project 4" /></a></div>*/}
        </section>
      </section>
      </>);
};

export default ProjectSection;