import React from "react";
import "./Home.css";
import chef from "../images/gettyimages-98682263-612x612.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="food-home">
      <div className="food-header">
        <h2 className="food-head-h3">Foodie</h2>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <div className="head-buttons">
          <button>Get Start</button>
          <p>
            {/* <Link to="/login" target="_blank"> */}
            Login
            {/* </Link> */}
          </p>
        </div>
      </div>

      {/* main page */}
      <div className="home-main">
        <div className="home-main1">
          <p className="main1-p0">Your Favorite Food</p>
          <p className="main1-p">Delivered to You</p>
          <br />
          <div className="home-main1-p2">
            <p>Savor the delight of your preferred cuisine, conveniently</p>
            <p className="main-p">delivered your desired location.</p>

            <br />
            <br />
            <br />
            <button>Get Start</button>
          </div>
        </div>

        <div className="home-main2">
          <img src={chef} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
