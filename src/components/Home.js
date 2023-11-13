import React from "react";
import "./Home.css";
import chef from "../images/gettyimages-98682263-612x612.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import Chef from "./Chef";

function Home() {
  return (
    <div className="food-home">
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
            <Link to="/items">
              <button>Get Start</button>
            </Link>
          </div>
        </div>

        <div className="home-main2">
          <img src={chef} alt="" />
        </div>
      </div>
      <div>
        <About />

        <MenuItems />

        <Menu />

        <Chef />
      </div>
    </div>
  );
}

export default Home;
