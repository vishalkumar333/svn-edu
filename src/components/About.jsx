import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-container">

      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="about-text">
          <h1>About Career Darpan Consultancy</h1>
          <p>
            We help thousands of students pursue education and professional courses in India and abroad
            within an affordable budget.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Education Consultancy"
          />
        </div>
      </div>

      {/* ABOUT DETAILS */}
      <div className="about-content">

        <p>
          Career Darpan Consultancy, based in Sultanpur, is a leading education consultancy established in 2013.
          We provide complete admission guidance and information for Indian students seeking admission in top
          universities and colleges in India and abroad.
        </p>

        <p>
          We are dedicated to helping students and families who are committed to high achievement and ready to
          invest time and effort in their academic success. Our counseling process is personalized and tailored
          to each student’s goals.
        </p>

        <h2>Fields We Support</h2>
        <ul>
          <li>Medical (MBBS, BDS, BAMS, BHMS)</li>
          <li>Engineering</li>
          <li>MBA / PGDM / BBA</li>
          <li>BCA / MCA</li>
          <li>B.Pharmacy</li>
          <li>Hotel Management</li>
          <li>All Professional Courses</li>
        </ul>

        <h2>Why Choose Us?</h2>

        <div className="about-cards">
          <div className="card">
            <h3>Expert Guidance</h3>
            <p>Experienced consultants provide personalized admission support.</p>
          </div>

          <div className="card">
            <h3>Complete Support</h3>
            <p>From college selection to admission and financial guidance.</p>
          </div>

          <div className="card">
            <h3>Proven Success</h3>
            <p>Thousands of successful admissions in top colleges.</p>
          </div>

          <div className="card">
            <h3>Career Focused</h3>
            <p>We help you choose the right path for long-term success.</p>
          </div>
        </div>

        <h2>Our Services</h2>
        <ul>
          <li>Education Consulting</li>
          <li>Admission Guidance</li>
          <li>Direct Admission (Management Quota)</li>
          <li>Bihar Student Credit Card Assistance</li>
          <li>College Selection Guidance</li>
        </ul>

        {/* STATS */}
        <div className="stats">
          <div>
            <h3>3747+</h3>
            <p>Happy Students</p>
          </div>

          <div>
            <h3>2300+</h3>
            <p>Admissions Successfully Done</p>
          </div>
        </div>

      </div>
    </section>
  );
}