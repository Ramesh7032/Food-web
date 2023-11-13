import React from "react";

function Footer() {
  return (
    <div className="food-footer">
      <div className="food-footer1">
        <div className="food-footer2">
          <p className="footer-p1">Have a Question in your Mind</p>
          <p className="footer-p1"> Let us help you</p>

          <p className="footer-p2">
            Our friendly support team is here to assist you promptly. Contact us
            anytime for any asssistance or queries you may have.Your
            satisfaction is our priority.
          </p>
          <div className="footer-form1">
            <form className="footer-form">
              <input type="text" placeholder="Email" className="footer-input" />
              <br />
              <input
                type="text"
                placeholder="Comment"
                className="footer-input"
              />
            </form>
            <div className="footer-btn">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="food-footer3">
        <div className="food-footer4">
          <div className="footer1">
            <p
              className="footer1-p"
              style={{ color: "orange", fontSize: "30px" }}
            >
              Foodie
            </p>
            <p className="footer1-p2">
              Home Made is a vibrant platform that brings together passionate
              home cooks and discerning food lovers. We celebrate the authentic
              flavors and journey
            </p>
          </div>
          <div className="footer2">
            <h3>Menu</h3>
            <p>Home</p>
            <p>Our Menu</p>
            <p>Our chefs</p>
            <p>Pricing</p>
            <p>Downloads</p>
          </div>
          <div className="footer3">
            <h3>company</h3>
            <p>About</p>
            <p>contact Us</p>
            <p>Help Center</p>
            <p>Blog</p>
          </div>
          <div className="footer4">
            <h3>Follow On</h3>
          </div>
        </div>
        <div className="ho">
          <div className="hor"></div>
          <p>All copyrights 2023, design by Ramesh. All rights reserved</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
