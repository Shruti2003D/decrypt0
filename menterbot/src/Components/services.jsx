import React from 'react';
import '../css/services.css';
import img1 from '../Components/Services/img1.webp';
import img2 from '../Components/Services/img2.webp';
import img3 from '../Components/Services/img3.webp';
import img4 from '../Components/Services/img4.webp';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Services = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className='background-container'>
        <div className='content'>
          <h1>Our Services</h1>
          <p><a className='menter'>MentorBot</a> is an innovative cyber defense platform offering fast and effective <br /> remote monitoring solutions for securing your environment.</p>
          <p>The core role of MentorBot is to enhance cyber defense practices. </p>
          <p className='para'>"Empower your security strategy with MentorBot."</p>
        </div>
        <div className='cards-container'>
          <div className='card'>
            <img src={img1} alt='img1' />
            <Link to="/services/offensive-penetration-testing" target="_blank">
              <h2>Offensive-Penetration Testing</h2>
              <p>Simulated cyberattacks on systems, networks, and applications to identify and exploit vulnerabilities before malicious hackers can.</p>
            </Link>
          </div>
          <div className='card'>
            <img src={img2} alt='img2' />
            <Link to="/services/defensive-penetration-testing" target="_blank">
              <h2>Defensive-Penetration Testing</h2>
              <p>Focuses on strengthening an organization’s defenses by identifying and mitigating vulnerabilities to ensure robust security measures.</p>
            </Link>
          </div>
          <div className='card'>
            <img src={img3} alt='img3' />
            <Link to="/services/auditing" target="_blank">
              <h2>Auditing</h2>
              <p>Auditing involves assessing an organization's security controls, policies, and compliance with standards to ensure effectiveness and regulatory adherence.</p>
            </Link>
          </div>
          <div className='card'>
            <img src={img4} alt='img4' />
            <Link to="/services/cyber-forensic" target="_blank">
              <h2>Cyber forensic</h2>
              <p>Investigates and analyzes cyber incidents to uncover evidence, understand attacks, and aid in legal proceedings.</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
