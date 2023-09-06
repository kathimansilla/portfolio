import SoftSkills from './SoftSkills';
import Tools from './Tools';
import TypingText from './TypingText';

const Main = ( {hiddenClassT, hiddenClassSS, toggleSS, classSS, classT, toggleTools, hiddenBackBtn }) => {
  return (
      <section className="hero">
        <div className="hero__title">
          
            <h1 className="title">Katherina Mansilla</h1>
            <h2 className="subTitle">Full-stack Developer Web</h2>
            <TypingText delay={70}/>
            <button className="aboutMeBtn">About me</button>
    
        </div>
        <SoftSkills classSS={classSS} hiddenClassSS={hiddenClassSS} toggleSS={toggleSS}/>
        <Tools classT={classT} hiddenClassT={hiddenClassT} toggleTools={toggleTools} hiddenBackBtn={hiddenBackBtn} />
      </section>
  );
};

export default Main;
