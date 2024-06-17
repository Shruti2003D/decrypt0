import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/AdminHome';
import AddBlogMongo from './components/MongoAddBlogs';
import BlogsMainDecrypt from './components/blogs-main';
import AddCareer from './components/AddCarrer';
import AddCoursesBeginner from './components/AddCourseBeginner';
import AddCoursesIntermediate from './components/AddCourseIntermediate';
import AddCourseExpert from './components/AddCourseExpert';
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/add-individual-blog" element={<AddBlogMongo />} />
          <Route path="/blogs" element={<BlogsMainDecrypt />} />
          <Route path="/add-career" element={<AddCareer />} />
          <Route path="/add-courses-beginner" element={<AddCoursesBeginner />} />
          <Route path="/add-courses-intermediate" element={<AddCoursesIntermediate />} />
          <Route path="add-courses-expert" element={<AddCourseExpert/>} />
          {/* You can add more routes here for Add Careers and Add Testimonials */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
