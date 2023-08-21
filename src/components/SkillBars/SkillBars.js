import "./SkillBars.css";

const SkillBars = ({ language, level }) => {
  const filledBars = Array.from({ length: level }, (_, index) => (
    <div key={index} className="filledBar"></div>
  ));

  const emptyBars = Array.from({ length: 5 - level }, (_, index) => (
    <div key={index} className="emptyBar"></div>
  ));

  return (
    <div className={`skillBar ${language.toLowerCase()}`}>
      <div className={`language ${language.toLowerCase()}`}>{language}</div>
      <div className="barsContainer">
        <div className="bars">
          {filledBars}
          {emptyBars}
        </div>
      </div>
    </div>
  );
};

export default SkillBars;
