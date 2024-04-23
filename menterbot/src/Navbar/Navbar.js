import React from 'react';
import './Navbar.css'; // Import the CSS file
import logo from '../assets/menterbotlogo.png'; // Assuming this is the path to your logo image

const Navbar = ({ backgroundColor }) => {
  return (
    <nav className="Navbar" style={{ backgroundColor }}>
      <div className="logo">
        <img src={logo} alt="Menterbot Logo" />
      </div>
      <div className="navbar-links">
        <a href="#blogs">Blogs</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#careers">Careers</a>
        <a href="#services">Services</a>
        <a href="#courses">Courses</a>
      </div>
      <div className="login-signup">
        <a href="#login" className="login-button">Login</a>
        <a href="#signup" className="signup-button">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;