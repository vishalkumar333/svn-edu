import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.css";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const navigate = useNavigate();

  // 🔹 Replace with your actual WhatsApp number (with country code, no + or spaces)
  const phoneNumber = "917260996793";

  // Optional pre-filled message
  const message = "Hello, I need career guidance.";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${7260996793}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="hero">
      {/* Background */}
      <img src={heroImg} alt="Career Guidance" className="hero-img" />
      <div className="overlay"></div>

      {/* Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="title">
          Shape Your <span>Future</span> With Expert Guidance
        </h1>

        <p className="subtitle">
          Get admission in top colleges with personalized counselling,
          career planning, and complete support.
        </p>

        <div className="hero-buttons">
          {/* ✅ WhatsApp Button */}
          <button className="btn primary" onClick={handleWhatsApp}>
            Get Guidance
          </button>

          {/* ✅ Navigate to Courses */}
          <button
            className="btn secondary"
            onClick={() => navigate("/courses")}
          >
            Explore Courses
          </button>
        </div>
      </motion.div>
    </section>
  );
}