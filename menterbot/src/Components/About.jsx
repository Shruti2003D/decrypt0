import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  // Accessing route parameters using useParams hook
  let { id } = useParams();

  return (
    <div>
      <h2>About Page</h2>
      <p>About Page Content</p>
      {/* Displaying the route parameter */}
      <p>Route Parameter: {id}</p>
    </div>
  );
};

export default About;
