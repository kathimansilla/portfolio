import '../styles/App.scss';
import Header from './Header';
import Hero from './Hero';
import ProjectSection from './ProjectSection';
import Footer from './Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  //state variables
  const [hiddenClassT, setHiddenClassT] = useState('hidden');
  const [hiddenClassSS, setHiddenClassSS] = useState('hidden');
  const [classSS, setClassSS] = useState('');
  const [classT, setClassT] = useState('');
  const [desactive, setDesactive] = useState('');

  //functions
  const toggleTools = () => {
    if (hiddenClassT === '') {
      setTimeout(() => setHiddenClassT('hidden'), 1000);
      setDesactive('desactive');
      setClassT('');

    } else {
      setTimeout(() => setClassT('active'), 1000);
      setHiddenClassT('');
      setTimeout(() => setDesactive(''), 1000);
    };

    /*setHiddenClassT(hiddenClassT === '' ? 'hidden' : '');*/
  };

  const showSS = (click) => {
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
      <Header toggleTools={toggleTools} showSS={showSS} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                hiddenClassT={hiddenClassT}
                hiddenClassSS={hiddenClassSS}
                classSS={classSS}
                showSS={showSS}
                classT={classT}
                desactive={desactive}
              />
            }
          />
        </Routes>
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
