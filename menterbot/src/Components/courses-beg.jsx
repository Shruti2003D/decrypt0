import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import '../css/courses-beg.css'; // Import CSS file for this specific page
import courseImage from '../assets/course1.png';
import course2Image from '../assets/cyberforsenic.png';

const CoursesBeg = () => {
  return (
    <div className="courses-beg-page">
      <div className="dummyspace"></div>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center my-8">
          <h2 className="track-page-sub-heading">Category</h2>
          <h1 className="teams-page-heading-one margin-top-2rem margin-2rem">
            Beginner-level
          </h1>
        </div>
        <div className="course-card-container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
          <div className="course_card bg-orange-500 text-white p-4 rounded-lg shadow-lg">
            <div className="course_img1 h-60 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${course2Image})` }}></div>
            <div className="course_details_in p-4 flex flex-col justify-between">
              <div>
                <h3 className="course_title text-xl font-bold mb-2">Cyber Forensics</h3>
                <div className="course_card_flex flex items-center justify-between mb-4">
                  <div className="course-rating flex items-center">
                    <span className="rating-stars text-lg">★★★★★</span>
                    <span className="rating-value ml-2">4.5</span>
                  </div>
                  <div className="course_rate text-right">
                    <span className="discount_rate text-xl font-bold">₹ 59,999</span>
                    <span className="real_rate line-through ml-2">₹ 74,999</span>
                    <span className="discount_cent ml-2">20.00% OFF</span>
                  </div>
                </div>
                <p className="course-instructor text-sm">Instructor: <span className="font-bold">Abhishek Chouriya</span></p>
              </div>
              <div className="course-btn-flex flex justify-between mt-4">
                <Link className="button white-orange bg-white text-orange-500 font-bold py-2 px-4 rounded" to="/courses/cyber-forensics">Read more</Link>
                <a className="share-button flex items-center" href="#" data-title="Cyber Forensics" data-url="https://mentorbot.in/courses/Cyber%20Forensics">
                  <span>Share</span>
                  <img className="course_share ml-2" src="https://mentorbot.in/assets/white_share.svg" alt="Share" />
                </a>
              </div>
            </div>
          </div>
          <div className="course_card bg-orange-500 text-white p-4 rounded-lg shadow-lg">
            <div className="course_img h-60 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${courseImage})` }}></div>
            <div className="course_details_in p-4 flex flex-col justify-between">
              <div>
                <h3 className="course_title text-xl font-bold mb-2">Master's in Ethical Hacking</h3>
                <div className="course_card_flex flex items-center justify-between mb-4">
                  <div className="course-rating flex items-center">
                    <span className="rating-stars text-lg">★★★★★</span>
                    <span className="rating-value ml-2">4.5</span>
                  </div>
                  <div className="course_rate text-right">
                    <span className="discount_rate text-xl font-bold">₹ 49,999</span>
                    <span className="real_rate line-through ml-2">₹ 58,822</span>
                    <span className="discount_cent ml-2">15.00% OFF</span>
                  </div>
                </div>
                <p className="course-instructor text-sm">Instructor: <span className="font-bold">Abhishek Chouriya</span></p>
              </div>
              <div className="course-btn-flex flex justify-between mt-4">
                <Link className="button white-orange bg-white text-orange-500 font-bold py-2 px-4 rounded" to="/courses/masters-in-ethical-hacking">Read more</Link>
                <a className="share-button flex items-center" href="#" data-title="Master's in Ethical Hacking" data-url="https://mentorbot.in/courses/masters-in-ethical-hacking">
                  <span>Share</span>
                  <img className="course_share ml-2" src="https://mentorbot.in/assets/white_share.svg" alt="Share" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default CoursesBeg;
