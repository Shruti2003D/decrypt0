import React from 'react';
import { useParams } from 'react-router-dom';
import abhishekPhoto from '../assets/Abhishek.jpg';
import hrishabhPhoto from '../assets/Hrishab.jpg';
import khushiPhoto from '../assets/Khushi.jpeg';
import '../css/About.css';
import Footer from "./Footer";
const About = () => {
  // Accessing route parameters using useParams hook
  let { id } = useParams();

  return (
    <section className="about-us-section">
      <h1 className="about-us-title">About Us</h1>
      <div className="motivation-box">
        <div className="motivation-inner-box">
          <h2>Our Motivation</h2>
          <p>
            Welcome to our extraordinary team, the driving force behind transformative career counseling, personal development, and technical training. At MentorBot, our dedicated experts merge their profound knowledge and unwavering passion to guide you towards a path of success and self-discovery. With a diverse range of talents and backgrounds, our team is committed to unlocking your true potential, helping you navigate career choices, and empowering personal growth.
          </p>
          <p>
            We provide comprehensive technical training to equip you with the skills demanded by today's evolving industries. Discover our exceptional team of mentors and coaches, and embark on a remarkable journey of personal and professional transformation with us.
          </p>
        </div>
      </div>

      <h2 className="about-us-subtitle">Meet the amazing people behind our success</h2>
      <div className="team-container">
        <div className="team-member">
          <div className="member-inner-box">
            <img src={abhishekPhoto} alt="Abhishek Chouriya" className="member-photo" />
            <h3 className="member-name">Abhishek Chouriya</h3>
            <p className="member-role">Founder</p>
            <p className="member-description">
              Abhishek Chouriya is a cyber security trainer, public speaker, and proponent of student development. With years of experience in the field, he is passionate about teaching others about the importance of cyber security and the steps that individuals and companies can take to protect themselves.
            </p>
            <p className="member-description">
              Abhishek is dedicated to supporting students in accomplishing their goals and reaching their full potential. He has developed a number of training programmes and courses for people and groups of all skill levels. Through his public speaking engagements, he offers his skills and encourages audiences to take action to protect themselves and their organisations from cyber threats. Abhishek is making a significant impact in his community and beyond.
            </p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-inner-box">
            <img src={hrishabhPhoto} alt="Hrishabh Chhipa" className="member-photo" />
            <h3 className="member-name">Hrishabh Chhipa</h3>
            <p className="member-role">Co-Founder</p>
            <p className="member-description">
              Meet Hrishabh Chhipa, one of the co-founders of MENTORBOT. He has a special set of abilities and is a strategic problem-solver in addition to being an economics graduate. With a focus on team orientation and deep thinking, he has been instrumental in driving Mentorbot's success.
            </p>
            <p className="member-description">
              As a content editor and reviewer, he ensures the highest standards of quality for all written materials produced by the company. Additionally, he brings a fresh viewpoint to the team as a dynamic public speaker who enjoys talking about mindset, personal development, and AI.
            </p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-inner-box">
            <img src={khushiPhoto} alt="Khushi Jain" className="member-photo" />
            <h3 className="member-name">Khushi Jain</h3>
            <p className="member-role">Associate</p>
            <p className="member-description">
              Meet Khushi Jain, a committed MentorBot team member. She is a final-year BPT, or Bachelor of Physiotherapy, student who also works as a physiotherapist. She adds a unique viewpoint to the team with an abundance of expertise in the sector and outstanding communication abilities.
            </p>
            <p className="member-description">
              Khushi is an important member of the MentorBot team, offering assistance and direction to clients with their physiotherapy preparation. Her passion for assisting others, combined with her great communication abilities, makes her a vital member of the MentorBot team.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>

  );
};

export default About;
