import React from "react";
// import "../App.css";
import "./referees.css";
import refereeData from "./refereeData";

const Referees = () => {
  return (
    <div className="container">
      <div className="referees-grid">
        {refereeData.map((referee) => (
          <div className="card referee">
            <table key={referee.name}>
              <tr>
                <td>Name:</td>
                <td>{referee.name}</td>
              </tr>
              <tr>
                <td>Position:</td>
                <td>{referee.position}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{referee.phone}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{referee.email}</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referees;
