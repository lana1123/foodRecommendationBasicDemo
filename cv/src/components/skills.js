import React from "react";
import "../App.css";
import "./skills.css";
import SKILLS from "../skillsData";

function Skills() {
  const rowsTechnical = [];
  const rowsLanguage = [];
  const rowsOther = [];

  SKILLS.forEach((skill) => {
    if (skill.category == "Technical") {
      rowsTechnical.push(
        <div className="skills" key={skill.skills}>
          {skill.skills}
        </div>
      );
    } else if (skill.category == "Language") {
      rowsLanguage.push(
        <div className="skills" key={skill.skills}>
          {skill.skills}
        </div>
      );
    } else {
      rowsOther.push(
        <div className="skills" key={skill.skills}>
          {skill.skills}
        </div>
      );
    }
  });

  return (
    <div class="wrapper">
      <div className="Title">Skills</div>
      <div className="category">
        Technical
        <div className="grid-wrapper">{rowsTechnical}</div>
      </div>
      <div className="category">
        Language
        <div className="grid-wrapper">{rowsLanguage}</div>
      </div>
      <div className="category">
        Others
        <div className="grid-wrapper">{rowsOther}</div>
      </div>
    </div>
  );
}

export default Skills;
