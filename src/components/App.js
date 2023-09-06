import '../styles/App.scss';
import Header from './Header';
import Hero from './Hero';
import ProjectSection from './ProjectSection';
import Footer from './Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  //state variables
  const [hiddenClassT, setHiddenClassT] = useState('hiddent');
  const [hiddenClassSS, setHiddenClassSS] = useState('hidden');
  const [hiddenClassProjects, setHiddenClassProjects] = useState('');
  const [classSS, setClassSS] = useState('');
  const [classT, setClassT] = useState('');

  //data array
  const projects = [
    {
      id: 1,
      name: 'API RESTful',
      url_project:
        'https://github.com/kathimansilla/modulo-4-evaluacion-final-kathimansilla',
      url_github:
        'https://github.com/kathimansilla/modulo-4-evaluacion-final-kathimansilla',
    },
    {
      id: 2,
      name: "Rick and Morty's characters",
      url_project:
        'http://kathimansilla.github.io/modulo-3-evaluacion-final-kathimansilla/',
      url_github:
        'https://github.com/kathimansilla/modulo-3-evaluacion-final-kathimansilla',
    },
    {
      id: 3,
      name: "Townsville's projects",
      url_project: 'https://project-promo-t-module-4-team-4.onrender.com/',
      url_github:
        'https://github.com/kathimansilla/project-promo-t-module-4-team-4',
    },
    {
      id: 4,
      name: 'Adalab Tech Summit',
      url_project:
        'https://kathimansilla.github.io/project-promo-T-module-2-team-4/',
      url_github:
        'https://github.com/kathimansilla/project-promo-T-module-2-team-4',
    },
    {
      id: 5,
      name: 'Some Disney characters',
      url_project:
        'https://kathimansilla.github.io/modulo-2-evaluacion-final-kathimansilla/',
      url_github:
        'https://github.com/kathimansilla/modulo-2-evaluacion-final-kathimansilla',
    },
    {
      id: 6,
      name: 'Villanas del código',
      url_project: 'http://beta.adalab.es/project-promo-t-module-1-team-2/',
      url_github:
        'https://github.com/kathimansilla/project-promo-t-module-1-team-2',
    },
    {
      id: 7,
      name: 'Anonymous Proxy',
      url_project:
        'https://kathimansilla.github.io/modulo-1-evaluacion-final-kathimansilla/',
      url_github:
        'https://github.com/kathimansilla/modulo-1-evaluacion-final-kathimansilla',
    },
  ];

  //functions
  const toggleTools = () => {
    if (hiddenClassT === '') {
      setTimeout(() => setHiddenClassT('hiddent'), 500);
      setClassT('');
      setHiddenClassProjects('');
    } else {
      setTimeout(() => setClassT('active'), 500);
      setHiddenClassT('');
      setHiddenClassProjects('hiddenProjectSection');
    }
  };

  const toggleSS = (click) => {
    if (click === true) {
      setTimeout(() => setClassSS('active'), 300);
      setHiddenClassSS('');
    } else {
      setClassSS('');
      setTimeout(() => setHiddenClassSS('hidden'), 1000);
    }
  };

  return (
    <>
      <Header toggleTools={toggleTools} toggleSS={toggleSS} />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                hiddenClassT={hiddenClassT}
                hiddenClassSS={hiddenClassSS}
                classSS={classSS}
                toggleSS={toggleSS}
                classT={classT}
              />
            }
          />
        </Routes>
        <ProjectSection
          projects={projects}
          hiddenClassProjects={hiddenClassProjects}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
