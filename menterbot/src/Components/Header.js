
// src/components/Header.js
import React, { useState, useEffect } from 'react';
import '../css/Header.css';

const Header = ({ hideNavbar, scrolledUp }) => {
  const [hideHeader, setHideHeader] = useState(false);
  const [headerScrolledUp, setHeaderScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const bannerHeight = document.querySelector('.banner')?.offsetHeight || 0;

      if (scrollTop > bannerHeight / 2) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      setHeaderScrolledUp(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${hideHeader ? 'hide' : ''} ${headerScrolledUp ? 'scrolled-up' : ''}`}>
      {/* Your Header Content */}
      <div className="header-content">
      <h1>✨ Welcome To Learn With Fun!!! ✨</h1>
        {/* Add other header content as needed */}
      </div>
    </header>
  );
};

export default Header;
