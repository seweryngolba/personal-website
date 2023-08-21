import "./AboutMe.css";
import skillsData from "../../data/skillsData";
import SkillBars from "../SkillBars/SkillBars";

const AboutMe = () => {
  return (
    <div className="aboutContainer">
      <h2 className="aboutTitle">ABOUT ME</h2>
      <p className="aboutDescription">
        I STARTED LEARNING TO BE A FRONTEND DEVELOPER OVER HALF A YEAR AGO. I
        COMPLETED SEVERAL COURSES AND TOOK PART IN A HALF-YEAR BOOTCAMP IN THE
        FIELD OF HTML, CSS, JAVASCRIPT AND REACT. I COMPLETED MY MASTER'S DEGREE
        IN TOURISM AND RECREATION, BUT IT WASN'T WHAT I WANTED TO DO. I HAVE
        ALWAYS HAD MORE OR LESS CONTACT WITH CREATING GRAPHICS OR WEBSITES AS A
        HOBBY
      </p>
      <div className="aboutBox">
        <div className="myAvatar"></div>
        <div className="mySkills">
          <div className="nameAge">
            <h3 className="myName">SEWERYN GOLBA</h3>
            <h3 className="myAge">26</h3>
          </div>
          <div className="skillsList">
            {skillsData.map((skill, index) => (
              <SkillBars
                key={index}
                language={skill.language}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
