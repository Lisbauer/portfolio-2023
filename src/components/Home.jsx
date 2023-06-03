import React, { useState } from "react";
import "./home.css";
import "./fonts.css";

const Home = () => {
  const [rocketActive, setRocketActive] = useState(false);

  const handleClick = () => {
    setRocketActive(true);
    setTimeout(() => {
      setRocketActive(false);
    }, 7000);
  };

  return (
    <div>
      <section className="stars-section">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </section>
      <section className="home-section">
        <div className="frontend-box">
          <img className="astro2" src="../images/astro3.png" alt="" />
          <h3 className="hi">HI, I'M</h3>
          <h1 className="h1-intro"> LISA BAUER </h1>
          <h3 className="secondary-text">AND I'M A </h3>
          <h2 className="frontend-text">
            {" "}
            <span className="front-span">FRONTEND</span> <br />{" "}
            <span className="dev-span">DEVELOPER</span>
          </h2>

          <div className="container-welcome">
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E </span>
            <span>T</span>
            <span>O </span>
            <span>M</span>
            <span>Y </span>
            <span>P</span>
            <span>O</span>
            <span>R</span>
            <span>T</span>
            <span>F</span>
            <span>O</span>
            <span>L</span>
            <span>I</span>
            <span>O</span>
          </div>
        </div>
      </section>

      <div className="bubbles">
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 24 }}></span>
        <span style={{ "--i": 10 }}></span>
        <span style={{ "--i": 14 }}></span>
        <span style={{ "--i": 23 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 25 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 21 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 26 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 13 }}></span>
        <span style={{ "--i": 28 }}></span>
      </div>
    </div>
  );
};

export default Home;
