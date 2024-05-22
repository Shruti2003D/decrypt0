import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Navbar/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Careers from './Components/Career';
import Courses from './Components/Courses';
import Login from './Components/login';
import Signup from './Components/signup';
import CoursesBeg from './Components/courses-beg';
import CoursesInt from './Components/courses-int';
import CoursesAdv from './Components/coursesadv';
import Blogsmain from './Components/blogs-main';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogsmain/>}/>
        
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
