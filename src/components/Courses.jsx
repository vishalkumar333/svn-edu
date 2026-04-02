import React from "react";

const courses = [
  "B.TECH / M.TECH",
  "MBBS / BHMS / BAMS",
  "MBA / MCA / PGDM",
  "POLYTECHNIC",
  "B.Ed / D.El.Ed",
  "B.PHARMA",
  "ANM / GNM",
  "LLB / LLM",
  "PGDCA",
  "B.SC / M.SC",
  "JOURNALISM",
  "HOTEL MANAGEMENT",
  "BIO-TECHNOLOGY",
  "YOGA",
  "AERONAUTICS"
];

export default function Courses() {
  return (
    <section className="courses">
      <h2>All Courses Available</h2>
      <div className="grid">
        {courses.map((course, index) => (
          <div key={index} className="card">
            {course}
          </div>
        ))}
      </div>
    </section>
  );
}