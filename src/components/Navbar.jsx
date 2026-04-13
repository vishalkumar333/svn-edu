import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT: Logo + Brand */}
      <NavLink to="/" className="brand">
        <img src="/logo.png" alt="logo" className="brand-logo" />
        <h2 className="brand-text">
          SVN <span>EduCon</span>
        </h2>
      </NavLink>

      {/* RIGHT: Navigation */}
      <ul className="nav-links">
        <li><NavLink to="/" className="link">Home</NavLink></li>
        <li><NavLink to="/about" className="link">About</NavLink></li>
        <li><NavLink to="/services" className="link">Services</NavLink></li>
        <li><NavLink to="/courses" className="link">Courses</NavLink></li>
        <li><NavLink to="/admission" className="link">Admission</NavLink></li>
        <li><NavLink to="/contact" className="link">Contact</NavLink></li>
      </ul>

    </nav>
  );
}