import React from "react";
import PortfolioData from "../portfolioData";
import PortfolioItem from "./portfolioItem";
import "./portfolio.css";

const Portfolio = () =>
  PortfolioData.length > 0 && (
    <div className="portfolio-container">
      {PortfolioData.map((data, idx) => (
        <PortfolioItem data={data} key={idx} />
      ))}
    </div>
  );

export default Portfolio;
