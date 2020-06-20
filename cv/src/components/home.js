import React, { useState } from "react";
import ProfilePicture from "./pictures/ProfilePicture.JPG";
import "./home.css";
import ReactCardFlip from "react-card-flip";

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="flip front">
          <img src={ProfilePicture} alt="ProfilePicture" />
          <div className="basic-info">
            <h3>Basic info</h3>
            <table>
              <tr>
                <td>Name</td>
                <td>Wong Ying Qian (Lana)</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>0129790688</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>lana_1123@hotmail.com</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  09-13A, Oasis 2, Jalan Mutiara 3, Mutiara Heights, 43000
                  Kajang, Selangor
                </td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>23 Nov 1987</td>
              </tr>
            </table>
          </div>
          <button onClick={handleClick}>Flip me</button>
        </div>

        <div className="flip back">
          <div className="back-container">
            <h3>Career objective</h3>
            <div className="career-objective">
              To constantly develop solutions, automations and improve
              applications to increase work efficiency and to become full-stack
              developer
            </div>
            <button onClick={handleClick}>Flip back</button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Home;
