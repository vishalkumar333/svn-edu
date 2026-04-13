import React, { useMemo, useState } from "react";
import "./Courses.css";

const coursesData = [
  { name: "GNM (General Nursing and Midwifery)", colleges: 38, type: "Medical" },
  { name: "MBA / PGDM", colleges: 102, type: "Management" },
  { name: "Hotel Management", colleges: 0, type: "Management" },
  { name: "MCA", colleges: 65, type: "IT" },
  { name: "B.Sc - Agriculture", colleges: 0, type: "Science" },
  { name: "B.Pharma", colleges: 0, type: "Medical" },
  { name: "B.Sc - Nursing", colleges: 0, type: "Medical" },
  { name: "BCA", colleges: 69, type: "IT" },
  { name: "BBA", colleges: 89, type: "Management" },
  { name: "B.Tech / BE", colleges: 411, type: "Engineering" },
  { name: "Polytechnic / Diploma", colleges: 30, type: "Engineering" }
];

const filters = ["All", "Medical", "Engineering", "IT", "Management", "Science"];

export default function InteractiveCoursesWhite() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => {
    return coursesData.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchFilter = activeFilter === "All" || c.type === activeFilter;
      return matchSearch && matchFilter;
    });
  }, [search, activeFilter]);

  return (
    <div className="page-white">

      {/* HEADER */}
      <div className="header-white">
        <h1>Our Courses</h1>
        <p>Explore, filter, and choose your best career path</p>

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

      {/* GRID */}
      <div className="grid-white">
        {filtered.map((course, index) => (
          <div
            key={index}
            className={`card-white ${expanded === index ? "expanded" : ""}`}
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            <h3>{course.name}</h3>

            <div className="meta-white">
              <span>{course.colleges} colleges</span>
              <span className="tag">{course.type}</span>
            </div>

            {expanded === index && (
              <div className="details-white">
                <p>
                  Explore admission pathways, eligibility, and state-wise
                  colleges for <b>{course.name}</b>.
                </p>

                
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}