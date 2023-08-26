import '../styles/App.scss';
import Header from './Header';
import Hero from './Hero';
import ProjectSection from './ProjectSection';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  //state variables
  const [hiddenClassT, setHiddenClassT] = useState('hidden');
  const [hiddenClassSS, setHiddenClassSS] = useState('hidden');
  const [classSS, setClassSS] = useState('');
  //const [transitionOut, setTransitionOut] = useState('');

  //functions
  const toggleTools = () => {
    setHiddenClassT(hiddenClassT === '' ? 'hidden' : '');
  };

  const showSS = (click) => {
    console.log('ejecuté showss');
    console.log(click);
    if (click === true) {
      console.log('activé classSS');
      setClassSS('active');
      //setTimeout (() => setTransitionOut(''), 1000);
      setHiddenClassSS('');
    } else {
      setClassSS('');
      //setTimeout (() => setTransitionOut('transitionOut'), 1000);
      setTimeout (() => setHiddenClassSS('hidden'), 1000);
    }
  };

  return (
    <>
      <Header toggleTools={toggleTools} showSS={showSS} />
      <main>
        <Hero
          hiddenClassT={hiddenClassT}
          hiddenClassSS={hiddenClassSS}
          showSS={showSS}
          classSS={classSS}
          //transitionOut={transitionOut}
        />
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
