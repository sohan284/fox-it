// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for navbar styles
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate(e);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
        <img
                  onClick={() => {
                    handleNavigate("/");
                  }}
                  className="lg:h-12 h-12 w-auto"
                  src="https://i.ibb.co/X3RtxjP/logo.png"
                  alt="FoxIt"
                  border="0"
                /><a href="#home" className="navbar-brand">Fox-It</a>
        </div>
        <div className="navbar-right">
          {/* For mobile view, toggle button */}
          <button className="toggle-button" onClick={() => setShowLinks(!showLinks)}>
            {showLinks ?   <FontAwesomeIcon icon={faTimes} />: <FontAwesomeIcon icon={faBars} />}
          </button>
          {/* For larger screens, navigation links */}
          <div className={`navbar-links ${showLinks ? 'show' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
