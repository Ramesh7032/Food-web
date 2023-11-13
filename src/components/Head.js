import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import foodie1 from "../images/foodie.gif";
import foodie2 from "../images/foodie2.gif";
function Head() {
  return (
    <div>
      <div className="food-header">
        {/* <h1 className="food-head-h3">
          <Link to="/" className="food-header-link">
            {" "}
            Foodie{" "}
          </Link>
        </h1> */}
        <Link to="/">
          <img src={foodie2} alt="" />
        </Link>

        <ul>
          <li>
            {" "}
            <Link to="/" className="head-li-link">
              {" "}
              Home
            </Link>
          </li>

          <li>
            <Link to="/items" className="head-li-link">
              Menu{" "}
            </Link>
          </li>
          <li>
            <Link to="/about" className="head-li-link">
              Blog
            </Link>
          </li>
          <li>Contact Us</li>
        </ul>
        <div className="head-buttons">
          <Link to="/items">
            {" "}
            <button clas>Get Start</button>
          </Link>

          <Link to="/login" target="_blank" className="head-link">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Head;
