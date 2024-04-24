import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import logo from '../assets/menterbotlogo.png';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">
        <img src={logo} alt="Menterbot Logo" className="logo-img" />
      </div>
      <div className="navbar-links">
        <a href="/blogs" className="navbar-text hover-effect">Blogs</a>
        <a href="/about" className="navbar-text hover-effect">About</a>
        <a href="/contact" className="navbar-text hover-effect">Contact</a>
        <a href="/careers" className="navbar-text hover-effect">Careers</a>
        <div className="dropdown">
          <a href="/courses" className="navbar-text hover-effect">Courses</a>
          <div className="dropdown-content">
            <a href="/courses/beginner" className="navbar-text">Beginner Level</a>
            <a href="/courses/intermediate" className="navbar-text">Intermediate Level</a>
            <a href="/courses/advanced" className="navbar-text">Advanced Level</a>
          </div>
        </div>
      </div>
      <div className="login-signup">
        <a href="/login" className="login-button hover-effect">Login</a>
        <a href="/signup" className="signup-button hover-effect">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;