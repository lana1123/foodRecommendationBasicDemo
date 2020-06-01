import React from "react";
import "./totalFavFood.css";

//Child list items component / function
function TotalFavFood({ totalFood }) {
  return (
    <div className="totalfavfood">
      You have added <span>{totalFood}</span> favourite food!
    </div>
  );
}
export default TotalFavFood;
