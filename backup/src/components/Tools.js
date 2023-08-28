import mongoDBLogo from "../images/mongodblogo.png";

const Tools = ( {hiddenClassT, classT}) => {
    return (<div className={`hero__tools ${hiddenClassT} ${classT}`}>
    <img
      className="hero__tools__item"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      alt="javascript"
    />
    <img
      className="hero__tools__item"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
      alt="html5"
    />
    <img
      className="hero__tools__item"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
      alt="css3"
    />
    <img
      className="hero__tools__item"
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
      alt="sass"
    />
    <img
      className="hero__tools__item"
      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
      alt="git"
    />
    <img
      className="hero__tools__item"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="reactjs"
    />
    <img
      className="hero__tools__item"
      src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
      alt="nodejs"
    />
    <img
      className="hero__tools__item--width1"
      src="https://kinsta.com/wp-content/uploads/2019/04/logo-mysql-1.svg"
      alt="mysql"
    />
    <img
      className="hero__tools__item--width2"
      src={mongoDBLogo}
      alt="mongodb"
    />
    </div>)
};

export default Tools;