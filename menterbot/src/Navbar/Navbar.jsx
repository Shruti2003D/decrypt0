  import React, { useState, useEffect } from 'react';
  import './Navbar.css';
  import logo from '../assets/menterbotlogo.png';
  import { Link } from 'react-router-dom';
  import Header from '../header/Header';
  import Login from '../Components/login';
  import Signup from '../Components/signup';

  const Navbar = () => {
    const [openLoginPage, setOpenLoginPage] = useState(false);
    const [openSignUpPage, setOpenSignUpPage] = useState(false);
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
              <button className='login-button hover-effect' onClick={() => setOpenLoginPage(true)}>Login</button>
              <button className='signup-button hover-effect' onClick={() => setOpenSignUpPage(true)}>Sign Up</button>
            </div>
          </div>
          {openLoginPage && (
            <Login onClose={() => setOpenLoginPage(false)}/>
          )}
          {openSignUpPage && (
            <Signup onClose={() => setOpenSignUpPage(false)}/>
          )}
        </nav>
      </>
    );
  };

  export default Navbar;
