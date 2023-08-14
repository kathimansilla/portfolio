import '../styles/App.scss';

function App() {
  return (
    <div className="main">
      <header className="titleContainer">
        <h1 className="titleContainer__title">Katherina Mansilla</h1>
        <h2 className="titleContainer__subTitle">Full-stack Developer Web</h2>
      </header>
      <section className='navContainer'>
        <button className="navContainer__projects">Projects</button>
        <button className="navContainer__cv">CV</button>
        <form className="formContainer">
          <label htmlFor="formContainer__tools">Tools</label>
          <input className="formContainer__tools" type="text" id='tools' placeholder='Javascript' />
          <label htmlFor="softSkills">Soft Skills</label>
          <input className="formContainer__tools" type="text" id='softSkills' placeholder='Fast learner' />
        </form>
      </section>
      <section className="toolsContainer">
        <img
          className="toolsContainer__item"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
        />
        <img
          className="toolsContainer__item"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
        />
        <img
          className="toolsContainer__item"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
        />
        <img
          className="toolsContainer__item"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
          alt="sass"
        />
        <img
          className="toolsContainer__item"
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          alt="git"
        />
        <img
          className="toolsContainer__item"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="reactjs"
        />
        <img
          className="toolsContainer__item"
          src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
          alt="nodejs"
        />
        <img
          className="toolsContainer__item--bigWidth1"
          src="https://kinsta.com/wp-content/uploads/2019/04/logo-mysql-1.svg"
          alt="mysql"
        />
        <img
          className="toolsContainer__item--bigWidth2"
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
          alt="mongodb"
        />
      </section>
    </div>
  );
}

export default App;