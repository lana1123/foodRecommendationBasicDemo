import React from "react";
import "../App.css";
import "./skills.css";

function Skills() {
  const rows = [];
  let lastCategory = null;

  SKILLS.forEach((skill) => {
    if (skill.category !== lastCategory) {
      rows.push(
        <div className="category" key={skill.category}>
          {skill.category}
        </div>
      );
    }
    rows.push(
      <div className="skills" key={skill.skills}>
        {skill.skills}
      </div>
    );
    lastCategory = skill.category;
  });

  return (
    <div>
      Skills
      <div>
        <div>{rows}</div>
      </div>
    </div>
  );
}

export default Skills;

const SKILLS = [
  { category: "Technical", skills: "C" },
  { category: "Technical", skills: "C++" },
  { category: "Technical", skills: "C#" },
  { category: "Technical", skills: "PHP" },
  { category: "Technical", skills: "PowerShell" },
  { category: "Technical", skills: "React js" },
  { category: "Technical", skills: "Javascript" },
  { category: "Technical", skills: "SQL Server" },
  { category: "Technical", skills: "PostgreSQL" },
  { category: "Technical", skills: "Python" },
  { category: "Technical", skills: "LabVIEW" },
  { category: "Technical", skills: "Matlab" },
  { category: "Technical", skills: "Git" },
  { category: "Technical", skills: "JIRA" },
  { category: "Technical", skills: "Confluence" },
  { category: "Technical", skills: "Postman" },
  { category: "Technical", skills: "SOAP UI" },
  { category: "Technical", skills: "Zilog ZDS II" },
  { category: "Technical", skills: "RIMU PCB Designer" },
  { category: "Technical", skills: "PSPICE" },
  { category: "Language", skills: "English" },
  { category: "Language", skills: "Bahasa Melayu" },
  { category: "Language", skills: "Chinese" },
  { category: "Others", skills: "Toastmasters member" },
  { category: "Others", skills: "Guitar" },
  { category: "Others", skills: "Organ" },
];
