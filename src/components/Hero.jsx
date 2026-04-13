import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h1 className="title">
          Shape Your <span>Future</span> With Expert Guidance
        </h1>

        <p className="subtitle">
          Get admission in top colleges with personalized counselling,
          career planning, and complete support.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">Get Guidance</button>
          <button className="btn secondary">Explore Courses</button>
        </div>
      </div>
    </section>
  );
}