import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/menterbotlogo.png';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setHideNavbar(true);
      } else {
        // Scrolling up
        setHideNavbar(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <Header />
      <nav className={`Navbar ${hideNavbar ? 'hide' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Menterbot Logo" className="logo-img" />
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/blogs" className="navbar-text hover-effect">Blogs</Link>
            <Link to="/about" className="navbar-text hover-effect">About</Link>
            <Link to="/contact" className="navbar-text hover-effect">Contact</Link>
            <Link to="/careers" className="navbar-text hover-effect">Careers</Link>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
