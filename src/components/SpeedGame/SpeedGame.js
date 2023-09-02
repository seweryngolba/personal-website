import { useState, useRef } from "react";
import "./SpeedGame.css";
import Word from "../../functions/Word";
import Timer from "../../functions/Timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import realPhoto from "../../assets/myphoto.png";

const getTextToType = () =>
  "Hi, Seweryn, I'm really impressed by your website and I'm reaching out to initiate a collaboration with you and schedule a conversation. This is just a typing speed test, but I would be thrilled if you genuinely enjoyed it and would like to get in touch. Below you'll find all the contact details.".split(
    " "
  );

const SpeedGame = () => {
  const [userInput, setUserInput] = useState("");
  const textToType = useRef(getTextToType());
  const [startCounting, setStartCounting] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);

  function processInput(value) {
    if (activeWordIndex === textToType.current.length) {
      return;
    }

    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(" ")) {
      if (activeWordIndex === textToType.current.length - 1) {
        setStartCounting(false);
        setUserInput("Completed");
      } else {
        setUserInput("");
      }
      setActiveWordIndex((index) => index + 1);

      setCorrectWordArray((data) => {
        const word = value.trim();
        const newResult = [...data];
        newResult[activeWordIndex] =
          word === textToType.current[activeWordIndex];
        return newResult;
      });
    } else {
      setUserInput(value);
    }
  }

  return (
    <>
      <h2 className="titleContact">CONTACT</h2>
      <div className="containerContact">
        <div className="myPhoto">
          <img className="realPhoto" alt="Me" src={realPhoto}></img>
        </div>
        <div className="gameBox">
          <p className="typingText">
            {textToType.current.map((word, index) => {
              return (
                <Word
                  key={index}
                  text={word}
                  active={index === activeWordIndex}
                  correct={correctWordArray[index]}
                />
              );
            })}
          </p>
          <Timer
            startCounting={startCounting}
            correctWords={correctWordArray.filter(Boolean).length}
          />
          <input
            className="inputGame"
            placeholder="Start typing..."
            type="text"
            value={userInput}
            onChange={(e) => processInput(e.target.value)}
          />
          <div className="realInfo">
            <p>SEWERYN GOLBA</p>
            <p>EMAIL: SGOOLB@GMAIL.COM</p>
            <p>TEL: 881 515 126</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeedGame;
