import React from "react";
import about from "../images/about.jpg";
import "./Home.css";
function About() {
  return (
    <div className="food-about">
      <div className="food-about-div1">
        <img src={about} alt="" />
      </div>

      <div className="food-about-div2">
        <p className="about-heading">About Us</p>
        <p className="about-main">
          Home Made is a vibrant platform that brings together passionate home
          cooks and discerning food lovers. We celebrate authentic flavors and
          traditions of homemade food, fosterning a community where culinary
          talents thrive and deliciousness known no bounds. Join us on this
          delightful journey.{" "}
        </p>
        <br />
        <button className="about-btn">See More</button>
      </div>
    </div>
  );
}

export default About;
