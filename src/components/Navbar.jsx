import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      {/* BRAND */}
      <NavLink to="/" className="brand" onClick={closeMenu}>
        <img src="/logo.png" alt="logo" className="brand-logo" />
        <h2 className="brand-text">
          SVN <span>EduCon</span>
        </h2>
      </NavLink>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" className="link" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="link" onClick={closeMenu}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className="link" onClick={closeMenu}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link" onClick={closeMenu}>
            About
          </NavLink>
        </li>
      </ul>

    </nav>
  );
}