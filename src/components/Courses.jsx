import React, { useMemo, useState } from "react";
import "./Courses.css";
import { useNavigate } from "react-router-dom";
import coursesData from "../data/coursesData";

const filters = ["All", "Medical", "Engineering", "IT", "Management", "Science"];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return coursesData.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchFilter = activeFilter === "All" || c.type === activeFilter;
      return matchSearch && matchFilter;
    });
  }, [search, activeFilter]);

  const goToDetails = (course) => {
    const slug = course.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    navigate(`/course/${slug}`, { state: course });
  };

  return (
    <div className="page-white">
      <div className="header-white">
        <h1>Our Courses</h1>
        <p>Explore your career path</p>

        <input
          type="text"
          placeholder="Search course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filters-white">
          {filters.map((f) => (
            <button
              key={f}
              className={activeFilter === f ? "active" : ""}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-white">
        {filtered.map((course, index) => (
          <div
            key={index}
            className="card-white"
            onClick={() => goToDetails(course)}
          >
            <h3>{course.name}</h3>
            <div className="meta-white">
              <span>{course.colleges} colleges</span>
              <span className="tag">{course.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}