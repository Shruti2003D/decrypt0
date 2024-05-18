import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Blogs from './Components/Blogs';
import Partner from './Components/Partner';
import Testimonials from "./Components/Testimonials";
import Footer from './Components/Footer';

//import Home from './components/Home'; // Import Home component
import About from './Components/About'; // Import About component
import Contact from './Components/Contact'; // Import Contact component
import Careers from './Components/Career'; // Import Careers component
import Courses from './Components/Courses'; // Import Courses component
import Login from './Components/login';// Import Login component
import Signup from './Components/signup'; // Import Signup component
import CoursesBeg from './Components/courses-beg';
import CoursesInt from './Components/courses-int';
import CoursesAdv from './Components/coursesadv';
function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
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
        <Testimonials />
        <Blogs />
        <Partner/>
        <Footer />
      </div>

      {/* Route definitions */}
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/beginner" element={<CoursesBeg />} />
        <Route path="/courses/intermediate" element={<CoursesInt />} />
        <Route path="/courses/advanced" element={<CoursesAdv />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
