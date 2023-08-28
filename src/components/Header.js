import linkedin from '../images/linkedin.svg';
import twitter from '../images/square-x-twitter.svg';

const Header = ( {toggleTools, toggleSS} ) => {

//functions
const handleClickTools = (ev) => {
  ev.preventDefault();
  toggleTools();
}

const handleClickSS = (ev) => {
  ev.preventDefault();
  var click = true;
  toggleSS(click);
}

  return (
    <header className="header">
      <div className="header__logo">
        <a href="./" className="header__logo__link">
          <span className="logo">K</span>
        </a>
      </div>
      <nav className="header__nav">
        <ul className="ul">
          <li>
            <button className='ul__toolsBtn' onClick={handleClickTools}>Tools</button>
          </li>
          <li>
            <button className='ul__softSkillsBtn' onClick={handleClickSS}>Soft Skills</button>
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
          <li className="ul__linkedin">
            <a
              className="ul__linkedin__link"
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
          <li className="ul__twitter">
            <a
              className="ul__twitter__link"
              href="https://twitter.com/MansillaKathi"
              target="_blank"
              rel="noreferrer"
            >
              <img className="twitterLogo" src={twitter} alt="twitter logo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;