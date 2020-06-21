import React from "react";

const EducationItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <p>{data.year}</p>
      <p>{data.school}</p>
      <p>{data.description}</p>
      <p>{data.results}</p>
      <span className="circle"></span>
    </div>
  </div>
);

export default EducationItem;
