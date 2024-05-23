import React from 'react';
import Footer from './Footer'; // Import Footer component
import '../css/courses-beg.css'; // Import CSS file for this specific page
import courseImage from '../assets/course1.png';
import course2Image from '../assets/cyberforsenic.png';



const CoursesBeg = () => {
  return (
    <div className="courses-beg-page">
      <div className="dummyspace"></div>
      <div className="center"> {/* New division with classname center */}
        <div className="section">
          <div>
            <h2 className="track-page-sub-heading">Category</h2>
            <h1 className="teams-page-heading-one margin-top-2rem margin-2rem">
              Beginner-level
            </h1>
          </div>
          <div className="course-card-container">
            <div className="course_cards">

              <div className="course_card">
                <div className="course_details">
                <div className="course_img1" style={{ backgroundImage: `url(${course2Image})` }}></div>
                  <div className="course_details_in">
                    <div className="course_title">Cyber Forensics</div>
                    <div className="course_card_flex">
                      <div className="course-rating">
                        <span className="rating-stars">★★★★★</span>
                        <span className="rating-value">4.5</span>
                      </div>
                      <div className="course_rate">
                        <span className="discount_rate">₹ 59,999 </span>
                        <span className="real_rate">(₹ 74,999  </span>
                        <span className="discount_cent">20.00% OFF)</span>
                      </div>
                      <div></div>
                      <div>
                        <p className="course-instructor">
                         <div className='instructor'>Instructor: </div> <span className="discount_rate">Abhishek Chouriya</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="course-btn-flex">
                    <a className="button white-orange" href="https://mentorbot.in/courses/Cyber%20Forensics">Read more</a>
                    <a className="share-button course-instructor" href="#" data-title="Cyber Forensics" data-url="https://mentorbot.in/courses/Cyber%20Forensics" style={{ display: 'flex' }}>
                      <span>share</span>
                      <img className="course_share" src="https://mentorbot.in/assets/white_share.svg" alt="" />
                    </a>
                  </div>
                </div>

              </div>

              <div className="course_card">
                <div className="course_details">
                <div className="course_img" style={{ backgroundImage: `url(${courseImage})` }}></div>
                  <div className="course_details_in">
                    <div className="course_title">Master's in Ethical Hacking</div>
                    <div className="course_card_flex">
                      <div className="course-rating">
                        <span className="rating-stars">★★★★★</span>
                        <span className="rating-value">4.5</span>
                      </div>
                      <div className="course_rate">
                        <span className="discount_rate">₹ 49,999</span>
                        <span className="real_rate">(₹ 58,822</span>
                        <span className="discount_cent">15.00% OFF)</span>
                      </div>
                      <div></div>
                      <div>
                        <p className="course-instructor">
                          Instructor: <span className="discount_rate">Abhishek Chouriya</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="course-btn-flex">
                    <a className="button white-orange" href="https://mentorbot.in/courses/masters-in-ethical-hacking">Read more</a>
                    <a className="share-button course-instructor" href="#" data-title="Master's in Ethical Hacking" data-url="https://mentorbot.in/courses/masters-in-ethical-hacking" style={{ display: 'flex' }}>
                      <span>share</span>
                      <img className="course_share" src="https://mentorbot.in/assets/white_share.svg" alt="" />
                    </a>
                  </div>
                </div>

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
