// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Rickipedia
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Characters
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/locations" className="navbar-link">
              Locations
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/episodes" className="navbar-link">
              Episodes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
