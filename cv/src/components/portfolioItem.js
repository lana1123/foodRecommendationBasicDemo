import React from "react";

const PortfolioItem = ({ data }) => (
  <div className="portfolio-container">
    <div className="portfolio-item">
      <h3>Project: {data.title}</h3>
      <p>Description: {data.description}</p>
      <div>Demo:</div>
      <a href={data.link} target="_blank">
        {data.link}
      </a>
      <ul>
        Languages involved:
        {data.skills.map((skill) => (
          <li>{skill.skill}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default PortfolioItem;
