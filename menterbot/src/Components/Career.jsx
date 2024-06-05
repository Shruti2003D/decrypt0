import React from 'react';
import { useNavigate } from 'react-router-dom';
import carrer1 from "../assets/carrers1.jpg";
import carrer2 from "../assets/carrers2.jpg";
import carrer3 from "../assets/carrers3.jpg";
import '../css/Carrers.css';
import Footer from './Footer';

const jobListings = [
  {
    title: "Application Development Trainer",
    date: "04 June 2024",
    description: "We are currently seeking an experienced Application Development Trainer to join our team. This role involves designing and delivering high-quality training modules in application development. The ideal candidate will have a strong background in app development, excellent module design skills, and a passion for teaching.",
    imageUrl: carrer1,
    route: "/job-details"
  },
  {
    title: "Exciting Opportunity: Azure AI Instructor in Delhi!",
    date: "04 June 2024",
    description: "MentorBot is actively seeking a talented Azure AI Instructor to join our team in Delhi. We are on the lookout for a professional who not only possesses expertise in Azure AI technologies but also has the ability to deliver knowledge with finesse and enthusiasm.",
    imageUrl: carrer2,
    route: "/job-details"
  },
  {
    title: "SonicWall Firewall Trainer (Advanced Topics)",
    date: "04 June 2024",
    description: "Elevate your career by joining us as an Advanced SonicWall Firewall Trainer. We are on the lookout for a seasoned professional with extensive expertise in SonicWall products to deliver top-notch online training sessions on advanced topics. If you are passionate about imparting knowledge and thrive in a corporate training environment, this is the role for you.",
    imageUrl: carrer3,
    route: "/job-details"
  },
  {
    title: "🌟 Unlock Opportunities as a Student Counselor 🌟",
    date: "04 June 2024",
    description: "Are you a graduate with a passion for guiding and mentoring? Join our esteemed team as a Student Counselor and play a pivotal role in shaping the educational journey of aspiring minds. This is not just a job; it's an opportunity to make a positive impact while enjoying the flexibility of a hybrid work model.",
    imageUrl: carrer1,
    route: "/job-details"
  },
  {
    title: "🚀 Join Our Dynamic Team as a Full Stack Developer! 🚀",
    date: "04 June 2024",
    description: "We're on the lookout for talented individuals to join our team as Full Stack Developers. This is not just a job; it's an opportunity to be part of an innovative and collaborative environment.",
    imageUrl: carrer2,
    route: "/job-details"
  },
  {
    title: "Campus Ambassador",
    date: "04 June 2024",
    description: "We're excited to have you on board as a Campus Ambassador. As a vital member of our team, your role is to bridge the gap between our organization and your campus community. Your enthusiasm and dedication will play a crucial role in representing our brand and building strong relationships on campus.",
    imageUrl: carrer3,
    route: "/job-details"
  },
  {
    title: "Campus Ambassador",
    date: "04 June 2024",
    description: "We're excited to have you on board as a Campus Ambassador. As a vital member of our team, your role is to bridge the gap between our organization and your campus community. Your enthusiasm and dedication will play a crucial role in representing our brand and building strong relationships on campus.",
    imageUrl: carrer3,
    route: "/job-details"
  }
];

const Career = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <>
    <div className="careers-section">
      <div className="careers-title">Join Our Team</div>
      <div className="careers-subtitle">Explore our current job openings</div>
      <div className="flex-testi-card">
        {jobListings.map((job, index) => (
          <div className="job-box" key={index} onClick={() => handleCardClick(job.route)}>
            <div className="job-inner-box">
              <img className="out-course-img" width="100%" src={job.imageUrl} alt={job.title} />
              <div className="job-date">{job.date}</div>
              <div className="job-title">{job.title}</div>
              <div className="job-description">{job.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Career;