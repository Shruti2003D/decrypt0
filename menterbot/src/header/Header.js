// Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const bannerHeight = document.querySelector('.banner').offsetHeight;
      if (scrollTop > bannerHeight / 2) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${hideHeader ? 'hide' : ''}`}>
      <h1>✨ Welcome To Learn With Fun!!! ✨</h1>
    </header>
  );
};

export default Header;
