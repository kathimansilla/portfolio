import '../styles/App.scss';
import Header from './Header';
import Hero from './Hero';
import ProjectSection from './ProjectSection';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  //state variables
  const [hiddenClassT, setHiddenClassT] = useState('');
  const [hiddenClassSS, setHiddenClassSS] = useState('');

  //functions
  const toggleTools = () => {
    setHiddenClassT(hiddenClassT === '' ? 'hidden' : '');
  }

  const showSS = (click) => {
    console.log('ejecuté showss');
    console.log(click);
    click === true ? setHiddenClassSS('') : setHiddenClassSS('hidden');
  }
  
  return (
    <>
      <Header toggleTools={toggleTools} showSS={showSS} />
      <main>
        <Hero hiddenClassT={hiddenClassT} hiddenClassSS={hiddenClassSS} showSS={showSS} />
        <ProjectSection/>
      </main>
      <Footer />
    </>
  );
}

export default App;
