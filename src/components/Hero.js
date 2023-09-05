import SoftSkills from './SoftSkills';
import Tools from './Tools';
import TypingText from './TypingText';

const Main = ( {hiddenClassT, hiddenClassSS, toggleSS, classSS, classT}) => {
  
 //functions
 const handleClickCloseSS = (ev) => {
  ev.preventDefault();
  let click = false;
  toggleSS(click);
}
  return (
      <section className="hero">
        <div className="hero__title">
          <a className="hero__title__link" href="https://github.com/kathimansilla" target="_blank" rel="noreferrer">
            <h1 className="title">Katherina Mansilla</h1>
            <h2 className="subTitle">Full-stack Developer Web</h2>
            <TypingText delay={70}/>
            <button className="aboutMeBtn">About me</button>
          </a>
        </div>
        <SoftSkills classSS={classSS} hiddenClassSS={hiddenClassSS} toggleSS={toggleSS}/>
        <Tools classT={classT} hiddenClassT={hiddenClassT}/>
      </section>
  );
};

export default Main;
