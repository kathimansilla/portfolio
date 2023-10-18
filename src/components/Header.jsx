import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import menu from '../images/bars.svg';
import x from '../images/xmark.svg';
import { useState } from 'react';

const Header = ({ toggleTools, toggleSS }) => {
  //state variables
  const [menuCollapsed, setMenuCollapsed] = useState('ulCollapsed');
  const [menuActive, setMenuActive] = useState('');
  const [hiddenMenuX, setenuIHiddenMenuX] = useState('menuImgCollapsed');
  const [hiddenMenuBars, setHiddenMenuBars] = useState('');

  //functions
  const handleClickTools = (ev) => {
    ev.preventDefault();
    toggleTools();
    setMenuCollapsed('ulCollapsed');
    setMenuActive('');
    setenuIHiddenMenuX('menuImgCollapsed');
    setHiddenMenuBars('');
  };

  const handleClickSS = (ev) => {
    ev.preventDefault();
    var click = true;
    toggleSS(click);
    setMenuCollapsed('ulCollapsed');
    setMenuActive('');
    setenuIHiddenMenuX('menuImgCollapsed');
    setHiddenMenuBars('');
    toggleTools(true);
  };

  const handleClickMenu = (ev) => {
    ev.preventDefault();
    if (menuCollapsed === 'ulCollapsed') {
      setMenuCollapsed('');
      setMenuActive('ul');
      setenuIHiddenMenuX('');
      setHiddenMenuBars('menuImgCollapsed');
    } else {
      setMenuCollapsed('ulCollapsed');
      setMenuActive('');
      setenuIHiddenMenuX('menuImgCollapsed');
      setHiddenMenuBars('');
    }
  };

  const handleClickCloseMenu = () => {
    setMenuCollapsed('ulCollapsed');
    setMenuActive('');
    setenuIHiddenMenuX('menuImgCollapsed');
    setHiddenMenuBars('');
  }

  return (
    <header className="header">
      <div className="header__logo">
        <a
          href="https://github.com/kathimansilla"
          rel="noreferrer"
          className="header__logo__link"
          target="_blank"
        >
          <span>K</span>
        </a>
      </div>
      <nav className="header__nav">
        <button className="header__nav__menu" onClick={handleClickMenu}>
          <img className={`header__nav__menu__img ${hiddenMenuBars}`} src={menu} alt="menu bars" />
          <img
            className={`header__nav__menu__img ${hiddenMenuX}`}
            src={x}
            alt="close menu mark"
          />
        </button>
        <ul className={`${menuActive} ${menuCollapsed}`}>
          <li>
            <button
              className="ul__toolsBtn"
              onClick={handleClickTools}
            >
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
              <button className="ul__cvBtn" onClick={handleClickCloseMenu} >CV</button>
            </a>
          </li>
          <li>
            <a href={'mailto:mansillakatherina@gmail.com'}>
              <button className="ul__contactBtn" onClick={handleClickCloseMenu}>Contact</button>
            </a>
          </li>
          <div className="ul__rrssLogos">
            <li className="ul__rrssLogos__linkedin">
              <a
                className="ul__rrssLogos__linkedin__link"
                href="https://www.linkedin.com/in/katherina-mansilla/"
                target="_blank"
                rel="noreferrer"
                onClick={handleClickCloseMenu}
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
                onClick={handleClickCloseMenu}
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
