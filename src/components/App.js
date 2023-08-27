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

  //functions
  const toggleTools = () => {
    setHiddenClassT(hiddenClassT === '' ? 'hidden' : '');
  };

  const showSS = (click) => {
    console.log('ejecuté showss');
    console.log(click);
    if (click === true) {
      console.log('activé classSS');
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
