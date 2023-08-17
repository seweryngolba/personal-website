import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cvPdf from "../../assets/CV Seweryn Golba.pdf";

const Navbar = () => {
  return (
    <div className="navContainer">
      <a href="/" className="logo">
        SG
      </a>
      <a
        href={cvPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="cvLogo"
      >
        CV
        <FontAwesomeIcon className="downloadIcon" icon={faDownload} />
      </a>
    </div>
  );
};

export default Navbar;
