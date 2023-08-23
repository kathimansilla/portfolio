//import logo from '../images/kLogo.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/square-x-twitter.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="./" className='header__logo__link'>
          <span className='logo'>K</span>
          {/*<img className='logo' src={logo} alt="logoKaherinaMansilla" />*/}
        </a>
      </div>
      <nav className='header__nav'>
      <form className='form'>
          <label className='form__toolsLabel' htmlFor="tools">Tools</label>
          <select className='form__toolsSelect' name="tools" id="tools"></select>
          <label className='form__softSkillsLabel' htmlFor="softSkills">Soft Skills</label>
          <select className='form__softSkillsSelect' name="softSkills" id="softSkills"></select>
        </form>
      <ul className='ul'>
          <li>
            <a href="https://drive.google.com/file/d/1Ne4zV7TIRoakofjxzIH7jBf7foff8L3u/view?usp=sharing" target='_blank' rel='noreferrer'>
              <button className='ul__cvBtn'>
                Resume
              </button>
            </a>
          </li>
          <li>
            <a href={'mailto:mansillakatherina@gmail.com'}><button className='ul__contactBtn'>Contact</button></a>
          </li>
          <li className='ul__linkedin'>
            <a className='ul__linkedin__link' href="https://www.linkedin.com/in/katherina-mansilla/" target='_blank' rel='noreferrer'><img className='linkedinLogo' src={linkedin} alt="linkedin logo" /></a>
          </li>
          <li className='ul__twitter'>
          <a className='ul__twitter__link' href="https://twitter.com/MansillaKathi" target='_blank' rel='noreferrer'><img className='twitterLogo' src={twitter} alt="twitter logo" /></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
