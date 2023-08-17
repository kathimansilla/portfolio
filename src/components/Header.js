import logo from '../images/kLogo.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/square-x-twitter.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="./">
          <img className='logo' src={logo} alt="logoKaherinaMansilla" />
        </a>
      </div>
      <nav className='header__nav'>
        <form className='form'>
          <label className='toolsLabel' htmlFor="tools">Tools</label>
          <select className='toolsArrow' name="tools" id="tools"></select>
          <label className='softSkillsLabel' htmlFor="softSkills">Soft Skills</label>
          <select className='softSkillsArrow' name="softSkills" id="softSkills"></select>
        </form>
        <ul className='ul'>
          <li>
            <button className='ul__cvBtn'>Resume | CV</button>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/katherina-mansilla/" target='_blank' rel='noreferrer'><img className='ul__linkedinLogo' src={linkedin} alt="linkedin logo" /></a>
          </li>
          <li>
          <a href="https://twitter.com/MansillaKathi" target='_blank' rel='noreferrer'><img className='ul__twitterLogo' src={twitter} alt="twitter logo" /></a>
          </li>
          <li>
            <button className='ul__contactBtn'>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
