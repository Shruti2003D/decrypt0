import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/menterbotlogo.png';
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
        {/* Adjust the following divs according to your layout */}
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
    </>
  );
};

export default Navbar;
