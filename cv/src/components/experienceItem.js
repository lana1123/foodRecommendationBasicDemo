import React from "react";

const ExperienceItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <p>{data.period}</p>
      <p>{data.company}</p>
      <p>{data.title}</p>
      <ul>
        {data.jobdescription.map((detail) => (
          <li>{detail.detail}</li>
        ))}
      </ul>
      <span className="circle"></span>
    </div>
  </div>
);

export default ExperienceItem;
