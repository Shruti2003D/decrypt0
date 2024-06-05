import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js'; // Import Footer component
import courseAdvimg from '../assets/expertcourse.png';

const CoursesAdv = () => {
  return (
    <div className="courses-beg-page">
    <div className="dummyspace"></div>
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="text-center my-8">
        <h2 className="track-page-sub-heading">Category</h2>
        <h1 className="teams-page-heading-one margin-top-2rem margin-2rem">
        Expert-Level
        </h1>
      </div>
      <div className="course-card-container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
        <div className="course_card bg-orange-500 text-white p-4 rounded-lg shadow-lg">
          <div className="course_img1 h-60 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${courseAdvimg})` }}></div>
          <div className="course_details_in p-4 flex flex-col justify-between">
            <div>
              <h3 className="course_title text-xl font-bold mb-2">Bug Bounty</h3>
              <div className="course_card_flex flex items-center justify-between mb-4">
                <div className="course-rating flex items-center">
                  <span className="rating-stars text-lg">★★★★★</span>
                  <span className="rating-value ml-2">4.5</span>
                </div>
                <div className="course_rate text-right">
                  <span className="discount_rate text-xl font-bold">₹ 6000</span>
                  <span className="real_rate line-through ml-2">₹ 7500</span>
                  <span className="discount_cent ml-2">20.00% OFF</span>
                </div>
              </div>
              <p className="course-instructor text-sm">Instructor: <span className="font-bold">Abhishek Chouriya</span></p>
            </div>
            <div className="course-btn-flex flex justify-between mt-4">
              <Link className="button white-orange bg-white text-orange-500 font-bold py-2 px-4 rounded" to="/courses/linux-windows-privilege-escalation">Read more</Link>
              <a className="share-button flex items-center" href="#" data-title="Linux/ Windows Privilege Escalation" data-url="https://mentorbot.in/courses/linux-windows-privilege-escalation">
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

export default CoursesAdv;
