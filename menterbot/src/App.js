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
import Courses from './Components/Courses';
import Login from './Components/login';
import Signup from './Components/signup';
import CoursesBeg from './Components/courses-beg';
import CoursesInt from './Components/courses-int';
import CoursesAdv from './Components/coursesadv';
import Blogsmain from './Components/blogs-main';
import CyberForensics from './Components/courses/course1';
import MastersInEthicalHacking from './Components/courses/course2';
import LinuxWindowsPrivilegeEscalation from './Components/courses/course3';
import BugBounty from './Components/courses/course4';
import JobDetails from './Components/JobDetails';
import ServicesOffensive from './Components/servicesoffensive';
import ServicesDefensive from './Components/servicesdefensive';
import ServicesAuditing from './Components/servicesauditing';
import ServicesCyber from './Components/servicescyber'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ServicesCyber from './Components/servicescyber';
import IndividualBlogInformation from './Components/blogs-main-individual';
function App() {

  return (
    <>
    <ToastContainer />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogsmain/>}/> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careersmain />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />

        <Route path="/courses/beginner" element={<CoursesBeg />} />
        <Route path="/courses/intermediate" element={<CoursesInt />} />
        <Route path="/courses/advanced" element={<CoursesAdv />} />
        <Route path="/courses/cyber-forensics" element={<CyberForensics />} />
        <Route path="/courses/masters-in-ethical-hacking" element={<MastersInEthicalHacking />} />
        <Route path="/courses/linux-windows-privilege-escalation" element={<LinuxWindowsPrivilegeEscalation />} /> {/* Add new route */}
        <Route path="/courses/bug-bounty" element={<BugBounty />} /> 

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/job-details/:id" element={<JobDetails />} />

        <Route path="/services/offensive-penetration-testing" element={<ServicesOffensive />} />
        <Route path="/services/defensive-penetration-testing" element={<ServicesDefensive />} />
        <Route path="/services/auditing" element={<ServicesAuditing />} />
        <Route path="/services/cyber-forensic" element={<ServicesCyber />} />

        <Route path="/blogs/:title" element={<IndividualBlogInformation />} />
        {/* <Route path="/blogs/individual-blog-information" element={<IndividualBlogInformation />} /> */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
