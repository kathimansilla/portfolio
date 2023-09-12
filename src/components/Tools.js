const Tools = ({ hiddenClassT, classT, toggleTools, hiddenBackBtn }) => {

  // object
  const toolsObj = [
    {
      class: 'hero__tools__item',
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      alt: 'javascript',
    },
    {
      class: 'hero__tools__item',
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      alt: 'html5',
    },
    {
      class: 'hero__tools__item',
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      alt: 'css3',
    },
    {
      class: 'hero__tools__item',
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
      alt: 'sass',
    },
    {
      class: 'hero__tools__item',
      src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
      alt: 'git',
    },
    {
      class: 'hero__tools__item--width1',
      src: 'https://kinsta.com/wp-content/uploads/2019/04/logo-mysql-1.svg',
      alt: 'mysql',
    },
    {
      class: 'hero__tools__item--width2',
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
      alt: 'mongodb',
    },
    {
      class: 'hero__tools__item',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      alt: 'reactjs',
    },
    {
      class: 'hero__tools__item',
      src: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
      alt: 'nodejs',
    },
  ];

  const ToolsLi = (toolsObj) => {
    return toolsObj.map((eachTool) => (
      <li key={eachTool.src} className={eachTool.class}>
        <img className={eachTool.class} src={eachTool.src} alt={eachTool.alt} />
      </li>
    ));
  };


  //function

  const handleClickCloseT = () => {
    toggleTools();
  };
  
  return (
    <>
      <button className={`closeToolsBtn ${hiddenBackBtn}`} onClick={handleClickCloseT}>
        <span>Volver</span>
      </button>
      <div>
        <ul className={`hero__tools ${hiddenClassT} ${classT}`}>
          {ToolsLi(toolsObj)}
        </ul>
      </div>
    </>
  );
};

export default Tools;
