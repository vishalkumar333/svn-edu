import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-container">

          {/* LOGO */}
          <NavLink to="/" className="logo">
            <img src="/logo.png" alt="logo" />
            <span>SVN <b>Admission zone</b></span>
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="desktop-menu">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <motion.nav
              className="mobile-menu"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {links.map((item) => (
                <motion.div
                  key={item.path}
                  variants={{
                    hidden: { opacity: 0, x: 25 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <NavLink
                    to={item.path}
                    className="mobile-link"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}