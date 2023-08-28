import '../styles/App.scss';
import Header from './Header';
import Hero from './Hero';
import ProjectSection from './ProjectSection';
import Footer from './Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  //state variables
  const [hiddenClassT, setHiddenClassT] = useState('hiddenT');
  const [hiddenClassSS, setHiddenClassSS] = useState('hidden');
  const [classSS, setClassSS] = useState('');
  const [classT, setClassT] = useState('');
  //const [desactive, setDesactive] = useState('');

  //data array
  const projects = [
    {
        id: 1,
        name: 'API RESTful', 
        url_project: 'https://github.com/Adalab/modulo-4-evaluacion-final-kathimansilla', 
        url_github: 'https://github.com/Adalab/modulo-4-evaluacion-final-kathimansilla', 
    },
    {
        id: 2,
        name: 'Rick and Morty\'s characters', 
        url_project: 'http://beta.adalab.es/modulo-3-evaluacion-final-kathimansilla/', 
        url_github: 'https://github.com/Adalab/modulo-3-evaluacion-final-kathimansilla', 
    },
    {
        id: 3,
        name: 'Townsville\'s projects', 
        url_project: 'https://project-promo-t-module-4-team-4.onrender.com/', 
        url_github: 'https://github.com/Adalab/project-promo-t-module-4-team-4', 
    },
    {
        id: 4,
        name: 'Adalab Tech Summit', 
        url_project: 'http://beta.adalab.es/project-promo-T-module-2-team-4/', 
        url_github: 'https://github.com/Adalab/project-promo-T-module-2-team-4', 
    },
    {
        id: 5,
        name: 'Some Disney characters', 
        url_project: 'http://beta.adalab.es/modulo-2-evaluacion-final-kathimansilla/', 
        url_github: 'https://github.com/Adalab/modulo-2-evaluacion-final-kathimansilla', 
    },
    {
        id: 6,
        name: 'Villanas del código', 
        url_project: 'http://beta.adalab.es/project-promo-t-module-1-team-2/', 
        url_github: 'https://github.com/Adalab/project-promo-t-module-1-team-2', 
    },
    {
        id: 7,
        name: 'Anonymous Proxy', 
        url_project: 'http://beta.adalab.es/modulo-1-evaluacion-final-kathimansilla/', 
        url_github: 'https://github.com/Adalab/modulo-1-evaluacion-final-kathimansilla', 
    },
];

  //functions
  const toggleTools = () => {
    if (hiddenClassT === '') {
      setTimeout(() => setHiddenClassT('hiddenT'), 500);
      setClassT('');
    } else {
      setTimeout(() => setClassT('active'), 500);
      setHiddenClassT('');
    };
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
      <main>
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
        <ProjectSection projects={projects} />
      </main>
      <Footer />
    </>
  );
}

export default App;
