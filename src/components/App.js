import '../styles/App.scss';
import Header from './Header';
import Hero from './Hero';
import ProjectSection from './ProjectSection';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectSection/>
      </main>
      <Footer />
    </>
  );
}

export default App;
