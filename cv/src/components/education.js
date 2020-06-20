import React from "react";
import EducationData from "../educationData";
import EducationItem from "./educationItem";
import "./education.css";

const Education = () =>
  EducationData.length > 0 && (
    <div className="timeline-container">
      {EducationData.map((data, idx) => (
        <EducationItem data={data} key={idx} />
      ))}
    </div>
  );

export default Education;
