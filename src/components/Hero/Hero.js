import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="textBox">
        <h2 className="helloTitle">HELLO STRANGER,</h2>
        <h1 className="nameTitle">I'M SEWERYN</h1>
        <p className="textTitle">
          SCROLL DOWN TO GET TO KNOW ME BETTER AND SEE MY PROJECTS
        </p>
        <div className="linksBox">
          <a
            href="https://www.linkedin.com/in/seweryn-golba-284002251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="squareIcon" icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/seweryngolba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="squareIcon" icon={faSquareGithub} />
          </a>
          <a href="mailto:sgoolb@gmail.com" className="mailLink">
            <FontAwesomeIcon className="mailIcon" icon={faPaperPlane} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
