import linkedin from '../images/linkedinSinFondo.png';
import github from '../images/githubw.svg';
import menu from '../images/bars.svg';
import x from '../images/xmark.svg';

const Header = ({ toggleTools, toggleSS }) => {
  //functions
  const handleClickTools = (ev) => {
    ev.preventDefault();
    toggleTools();
  };

  const handleClickSS = (ev) => {
    ev.preventDefault();
    var click = true;
    toggleSS(click);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a
          href="https://github.com/kathimansilla"
          rel="noreferrer"
          className="header__logo__link"
        >
          <span>K</span>
        </a>
      </div>
      <nav className="header__nav">
        <button className="header__nav__menu">
          <img className="header__nav__menu__img " src={menu} alt="menu bars" />
          <img className="header__nav__menu__img menuImgCollapsed" src={x} alt="close menu mark" />
        </button>
          <ul className="ul ulCollapsed">
            <li>
              <button className="ul__toolsBtn" onClick={handleClickTools}>
                Tech stack
              </button>
            </li>
            <li>
              <button className="ul__softSkillsBtn" onClick={handleClickSS}>
                Soft Skills
              </button>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Ne4zV7TIRoakofjxzIH7jBf7foff8L3u/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="ul__cvBtn">Resume</button>
              </a>
            </li>
            <li>
              <a href={'mailto:mansillakatherina@gmail.com'}>
                <button className="ul__contactBtn">Contact</button>
              </a>
            </li>
            <div className="ul__rrssLogos">
              <li className="ul__rrssLogos__linkedin">
                <a
                  className="ul__rrssLogos__linkedin__link"
                  href="https://www.linkedin.com/in/katherina-mansilla/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="linkedinLogo"
                    src={linkedin}
                    alt="linkedin logo"
                  />
                </a>
              </li>
              <li className="ul__rrssLogos__github">
                <a
                  className="ul__rrssLogos__github__link"
                  href="https://github.com/kathimansilla"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="githubLogo" src={github} alt="github logo" />
                </a>
              </li>
            </div>
          </ul>
      </nav>
    </header>
  );
};

export default Header;
