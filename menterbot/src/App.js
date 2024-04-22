
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './header/Header';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Blogs from './Blog/Blogs';
import Footer from './Footer/Footer'

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Banner/> 
      <div className="content-container">
        <div className="mentorbot-container">
          <h2>MENTORBOT</h2>
          <h3>Dream / Work / Achieve</h3>
          <div className="description-box">
            <p>Welcome to our organisation, where we are committed to assisting individuals in achieving their personal and professional objectives through career guidance, student development programmes, and cybersecurity training. Our purpose is to provide students and professionals with the skills and information they need to excel in their chosen industries while simultaneously prioritising their personal development.</p>
            <p>We understand that selecting on a career path can be a difficult and daunting experience, which is why we provide complete career counselling services in order to assist individuals in identifying their talents and interests and navigating the employment market. Our skilled consultants work with each person to develop an individually tailored strategy that is in line with their goals and aspirations.</p>
          </div>
        </div>
      </div>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
