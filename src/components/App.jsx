import '..//styles/App.scss';
import Header from './Header';
import Main from './Main';
import ProjectSection from './ProjectSection';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  //state variables
  const [hiddenClassT, setHiddenClassT] = useState('hiddent');
  const [hiddenClassSS, setHiddenClassSS] = useState('hidden');
  const [hiddenBackBtn, setHiddenBackBtn] = useState('hiddenBackBtn');
  const [classSS, setClassSS] = useState('');
  const [classT, setClassT] = useState('');

  //data array
  const projects = [
    {
      id: 1,
      name: 'taskflow | Gestor de tareas',
      url_project:
        'https://kathimansilla.github.io/taskflow/',
      url_github:
        'https://github.com/kathimansilla/taskflow',
    },
    {
      id: 2,
      name: 'API RESTful',
      url_project:
        'https://github.com/kathimansilla/modulo-4-evaluacion-final-kathimansilla',
      url_github:
        'https://github.com/kathimansilla/modulo-4-evaluacion-final-kathimansilla',
    },
    {
      id: 3,
      name: "Rick and Morty's characters",
      url_project:
        'https://kathimansilla.github.io/rick-and-morty-characters/',
      url_github:
        'https://github.com/kathimansilla/modulo-3-evaluacion-final-kathimansilla',
    },
    {
      id: 4,
      name: 'Adalab Tech Summit',
      url_project:
        'https://kathimansilla.github.io/Adalab-Tech-Summit/',
      url_github:
        'https://github.com/kathimansilla/project-promo-T-module-2-team-4',
    },
    {
      id: 5,
      name: "Townsville's projects",
      url_project: 'https://project-promo-t-module-4-team-4.onrender.com/',
      url_github:
        'https://github.com/kathimansilla/project-promo-t-module-4-team-4',
    },
    {
      id: 6,
      name: 'Some Disney characters',
      url_project:
        'https://kathimansilla.github.io/Some-Disney-characters/',
      url_github:
        'https://github.com/kathimansilla/modulo-2-evaluacion-final-kathimansilla',
    },
    {
      id: 7,
      name: 'Villanas del código',
      url_project: 'http://beta.adalab.es/project-promo-t-module-1-team-2/',
      url_github:
        'https://github.com/kathimansilla/project-promo-t-module-1-team-2',
    },
    {
      id: 8,
      name: 'Anonymous Proxy',
      url_project:
        'https://kathimansilla.github.io/Anonymous-Proxy/',
      url_github:
        'https://github.com/kathimansilla/modulo-1-evaluacion-final-kathimansilla',
    },
  ];

  //functions
  const toggleTools = (SSopen) => {
    if (hiddenClassT === '' || SSopen) {
      setTimeout(() => setHiddenClassT('hiddent'), 500);
      setClassT('');
      setHiddenBackBtn('hiddenBackBtn');
    } else {
      setTimeout(() => setClassT('active'), 500);
      setHiddenClassT('');
      setHiddenBackBtn('');
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
        <Main
          hiddenClassT={hiddenClassT}
          hiddenClassSS={hiddenClassSS}
          classSS={classSS}
          toggleSS={toggleSS}
          classT={classT}
          toggleTools={toggleTools}
          hiddenBackBtn={hiddenBackBtn}
        />
        <ProjectSection
          projects={projects}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
