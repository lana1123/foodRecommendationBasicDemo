import React from "react";
import ExperienceData from "../experienceData";
import ExperienceItem from "./experienceItem";
import "./experience.css";

const Experience = () =>
  ExperienceData.length > 0 && (
    <div className="timeline-container">
      {ExperienceData.map((data, idx) => (
        <ExperienceItem data={data} key={idx} />
      ))}
    </div>
  );

export default Experience;
