import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    icon: "🎯",
    title: "Career Counselling",
    desc: "Discover your strengths, interests, and ideal career path.",
  },
  {
    icon: "🏫",
    title: "Admission Guidance",
    desc: "Get admission into top Indian & international universities.",
  },
  {
    icon: "📚",
    title: "Entrance Exam Guidance",
    desc: "Prepare for JEE, NEET, CAT, CLAT & more.",
  },
  {
    icon: "💻",
    title: "Virtual Counselling",
    desc: "Online counselling anytime, anywhere with experts.",
  },
];

const steps = [
  "Profile Analysis",
  "Course & Exam Selection",
  "Study Roadmap Creation",
  "Application Support",
  "Admission Success",
];

export default function Services() {
  return (
    <div className="services-wrapper">

      {/* HEADER */}
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1>Build Your Future With Confidence</h1>
        <p>Our Services</p>
      </motion.div>

      {/* SERVICES CARDS */}
      <div className="services-grid">
        {services.map((item, i) => (
          <motion.div
            className="service-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* HOW WE WORK */}
      <motion.div
        className="process-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>How We Work</h2>

        <div className="steps">
          {steps.map((step, i) => (
            <motion.div
              className="step"
              key={i}
              whileHover={{ scale: 1.05 }}
            >
              <span>{i + 1}</span>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA SECTION */}
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Start Your Journey Today</h2>
        <p>Talk to expert counsellors and plan your future smartly.</p>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919308064181?text=Hi%20I%20want%20career%20counselling%20help"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="whatsapp-btn"
        >
          Talk to Expert
        </motion.a>
      </motion.div>
    </div>
  );
}