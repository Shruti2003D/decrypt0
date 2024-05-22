import React from 'react';

import Footer from '../Components/Footer';

import '../css/blogs-main.css';

const Blogsmain = () => {
  return (
    <div className="courses-container">
      <h1>Advanced Level Courses</h1>
      <p>Welcome to the Advanced Level Courses. These courses are for advanced learners looking to master their skills.</p>
      <ul>
        <li>Course 1: Machine Learning</li>
        <li>Course 2: Full Stack Development</li>
        <li>Course 3: Advanced Cybersecurity Practices</li>
      </ul>
      <Footer /> {/* Include Footer component */}
    </div>
    
    
  );
};

export default Blogsmain;
