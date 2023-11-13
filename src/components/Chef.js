import React from "react";
import chef1 from "../images/chef1.jpg";
import "./Home.css";
import chef2 from "../images/chef2.jpg";
import chef3 from "../images/cehf3.webp";
import chef4 from "../images/bobby-flay-2.jpg";
import cehf5 from "../images/sanjeev-kapoor.webp";
function Chef() {
  return (
    <div className="food-chef">
      <h1>Our Chefs</h1>
      <p className="chef-p1">
        Masterful chef creating extraodinary dishes with expertise and culinary
        finesse
      </p>
      <div className="chef-img">
        <div className="chef-img1">
          <img src={chef2} alt="" className="chef-img3" />
          <p>Gordon Ramsay</p>
        </div>

        <div className="chef-img1">
          <img src={cehf5} alt="" className="chef-img2" />
          <p>sanjeev kapoor</p>
        </div>

        <div className="chef-img1">
          <img src={chef3} alt="" className="chef-img4" />
          <p>Jamie Oliver</p>
        </div>
      </div>
    </div>
  );
}

export default Chef;
