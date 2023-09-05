import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left-side*/}
        <div className="flexColStart f-left">
          <img src="./logo2.png" width={120} alt="homyz" />
          <span className="secondaryText">
            Owning a home is a keystone of wealth…
            <br />
            both financial affluence and emotional security.
          </span>
        </div>
        {/*right-side*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            199 New York, William Street-62, USA
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
