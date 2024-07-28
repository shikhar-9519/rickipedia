import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Rickipedia
        </Link>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={toggleMenu}>
              Characters
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/locations" className="navbar-link" onClick={toggleMenu}>
              Locations
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/episodes" className="navbar-link" onClick={toggleMenu}>
              Episodes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
