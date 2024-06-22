import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Navbar/Navbar';
import About from './Components/About';
import Contact from './Components/ContactUs';
import Careersmain from "./Components/Careersmain";
import Services from './Components/services';
// import Courses from './Components/Courses';
import Login from './Components/login';
import Signup from './Components/signup';
import Dashboard from "./Components/dashboard";

import Blogsmain from './Components/blogs-main';
import JobDetails from './Components/JobDetails';
import ServicesOffensive from './Components/servicesoffensive';
import ServicesDefensive from './Components/servicesdefensive';
import ServicesAuditing from './Components/servicesauditing';
import ServicesCyber from './Components/servicescyber'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndividualBlogInformation from './Components/blogs-main-individual';
import CoursesExp from './Components/CoursesExp';
import CoursesIntDetails from "./Components/CoursesIntDetails";
import CourseBegDetails from "./Components/CourseBegDetails";
import CourseExpDetails from "./Components/CourseExpDetails";
import CoursesBeg from "./Components/CoursesBeg";
import CoursesInt from "./Components/CoursesInt";

function App() {

  return (
    <>
    <ToastContainer />
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogsmain/>}/> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careersmain />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/courses" element={<Courses />} /> */}

        <Route path="/courses/beginner" element={<CoursesBeg />} />
        <Route path="/courses/intermediate" element={<CoursesInt />} />
        <Route path="/courses/advanced" element={<CoursesExp />} />
        <Route path="/courses/:id" element={<CourseBegDetails/>} />
        <Route path="/courses/int/:id" element={<CoursesIntDetails/>} />
        <Route path="/courses/exp/:id" element={<CourseExpDetails/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/services/offensive-penetration-testing" element={<ServicesOffensive />} />
        <Route path="/services/defensive-penetration-testing" element={<ServicesDefensive />} />
        <Route path="/services/auditing" element={<ServicesAuditing />} />
        <Route path="/services/cyber-forensic" element={<ServicesCyber />} />

        <Route path="/blogs/:title" element={<IndividualBlogInformation />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
