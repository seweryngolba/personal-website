import React, { useState, useEffect, useRef } from "react";
import "./SpeedGame.css";

const getTextToType = () =>
  "Some random text to type to check speed I change it later I put here fake contact message to check typing speed".split(
    " "
  );

function Word(props) {
  const { text, active, correct } = props;

  if (correct === true) {
    return <span className="correct">{text} </span>;
  }
  if (correct === false) {
    return <span className="incorrect">{text} </span>;
  }
  if (active) {
    return <span className="active">{text} </span>;
  }
  return <span>{text} </span>;
}

Word = React.memo(Word);

function Timer(props) {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    if (props.startCounting) {
      setInterval(() => {}, 1000);
    }
  }, [props.startCounting]);

  return <p>Speed: {speed}</p>;
}

const SpeedGame = () => {
  const [userInput, setUserInput] = useState("");
  const textToType = useRef(getTextToType());
  const [startCounting, setStartCounting] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);

  function processInput(value) {
    if (startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(" ")) {
      setActiveWordIndex((index) => index + 1);
      setUserInput("");

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
    <div className="containerContact">
      <div className="gameBox">
        <h2>CONTACT</h2>
        <Timer startCounting={false} />
        <p>
          {textToType.current.map((word, index) => {
            return (
              <Word
                text={word}
                active={index === activeWordIndex}
                correct={correctWordArray[index]}
              />
            );
          })}
        </p>
        <input
          type="text"
          value={userInput}
          onChange={(e) => processInput(e.target.value)}
        />
        <div className="realInfo">
          <p>SEWERYN GOLBA</p>
          <p>EMAIL: SGOOLB@GMAIL.COM</p>
          <p>TEL: 881 515 126</p>
        </div>
      </div>
      <div className="myPhoto"></div>
    </div>
  );
};

export default SpeedGame;
