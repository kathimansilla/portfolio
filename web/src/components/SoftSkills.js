const SoftSkills = ( {classSS, hiddenClassSS, showSS } ) => {

//functions
  const handleClickCloseSS = (ev) => {
    ev.preventDefault();
    let click = false;
    showSS(click);
  }
return (
    <>
    <div className={`hero__softSkills ${classSS} ${hiddenClassSS}`}>
          <div className="hero__softSkills__container">
            <button className="closeSoftSkillsBtn" onClick={handleClickCloseSS}><span>X</span></button>
            <p className="hero__softSkills__container__item">English B1</p>
            <p className="hero__softSkills__container__item">Agile and Scrum</p>
            <p className="hero__softSkills__container__item">Time management</p>
            <p className="hero__softSkills__container__item">Self-discipline</p>
            <p className="hero__softSkills__container__item">Teamwork</p>
            <p className="hero__softSkills__container__item">Fast Learner</p>
            <p className="hero__softSkills__container__item">Determination</p>
            <p className="hero__softSkills__container__item">Proactivity</p>
            <p className="hero__softSkills__container__item">Adaptability</p>
            <p className="hero__softSkills__container__item">Project Management</p>
            <p className="hero__softSkills__container__item">Creativity</p>
            <p className="hero__softSkills__container__item">Flexibility</p>
            <p className="hero__softSkills__container__item">Communication skills</p>
          </div>
        </div>
    </>
)
}

export default SoftSkills;