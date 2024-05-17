import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/menterbotlogo.png';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const bannerHeight = document.querySelector('.banner').offsetHeight;

      setHideNavbar(scrollTop > bannerHeight / 2);
      setScrolledUp(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <nav className={`Navbar ${hideNavbar ? 'hide' : ''} ${scrolledUp ? 'scrolled-up' : ''}`}>
        <div className="logo">
          <img src={logo} alt="Menterbot Logo" className="logo-img" />
        </div>
        <div className="navbar-links">
          <Link to="/blogs" className="navbar-text hover-effect">Blogs</Link>
          <Link to="/about" className="navbar-text hover-effect">About</Link>
          <Link to="/contact" className="navbar-text hover-effect">Contact</Link>
          <Link to="/careers" className="navbar-text hover-effect">Careers</Link>
          {/* <Link to="/services" className="navbar-text hover-effect">Services</Link> */}
          <div className="dropdown">
            <Link to="/courses" className="navbar-text hover-effect">Courses</Link>
            <div className="dropdown-content">
              <Link to="/courses/beginner" className="navbar-text">Beginner Level</Link>
              <Link to="/courses/intermediate" className="navbar-text">Intermediate Level</Link>
              <Link to="/courses/advanced" className="navbar-text">Advanced Level</Link>
            </div>
          </div>
        </div>
        <div className="login-signup">
          <Link to="/login" className="login-button hover-effect">Login</Link>
          <Link to="/signup" className="signup-button hover-effect">Sign Up</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
