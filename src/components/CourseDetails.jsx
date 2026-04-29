import React from "react";
import { useLocation } from "react-router-dom";
import "./CourseDetails.css";

export default function CourseDetails() {
  const { state } = useLocation();

  if (!state) return <h2>No Data Found</h2>;

  return (
    <div className="details-page">
      <h1>{state.name}</h1>

      <div className="info-box">
        <p><b>Type:</b> {state.type}</p>
        <p><b>Total Colleges:</b> {state.colleges}</p>
      </div>

      <div className="section">
        <h2>Top Colleges</h2>

        <div className="college-grid">
          {state.collegesList.map((college, i) => (
            <div key={i} className="college-card">
              <h3>{college.name}</h3>
              <p>{college.location}</p>
              <div className="rating">⭐ {college.rating}</div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}