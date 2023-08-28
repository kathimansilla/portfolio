const SoftSkills = ({ classSS, hiddenClassSS, toggleSS }) => {
  // objects
  const softSkillsObj = [
    'English B1',
    'Agile and Scrum',
    'Time management',
    'Self-discipline',
    'Teamwork',
    'Fast Learner',
    'Determination',
    'Proactivity',
    'Adaptability',
    'Project Management',
    'Creativity',
    'Flexibility',
    'Communication skills',
  ];

  //functions
  const SoftSkillsLi = (softSkillsObj) => {
    return softSkillsObj.map((eachSoftSkill) => (
      <li>
        <p className="hero__softSkills__container__item">{eachSoftSkill}</p>
      </li>
    ));
  };

  const handleClickCloseSS = (ev) => {
    ev.preventDefault();
    let click = false;
    toggleSS(click);
  };
  return (
    <>
      <div className={`hero__softSkills ${classSS} ${hiddenClassSS}`}>
        <button className="closeSoftSkillsBtn" onClick={handleClickCloseSS}>
          <span>X</span>
        </button>
        <ul className="hero__softSkills__container">
          {SoftSkillsLi(softSkillsObj)}
        </ul>
      </div>
    </>
  );
};

export default SoftSkills;
