import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section id="start" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe to find super attractive deals on comfy homes.
            <br />
            We hope you find your perfect residence soon.
          </span>
          <button className="button">
            <a href="mailto:abhishekpuri2468@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
