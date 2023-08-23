import '../styles/App.scss';
import Header from './Header';
import Main from './Hero';
import ProjectSection from './ProjectSection';
import Footer from './Footer';

function App() {
  return (
    <div className="main">
      <Header />
      <main className="main">
        <Main />
        <ProjectSection/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
