import React from 'react';
import '../css/courses-int.css';
import Footer from '../Components/Footer';
import courseIntimg from '../assets/coursesint.png';


const CoursesInt = () => {
  return (
    <div className="courses-beg-page">
    <div className="dummyspace"></div>
    <div className="center"> {/* New division with classname center */}
      <div className="section">
        <div>
          <h2 className="track-page-sub-heading">Category</h2>
          <h1 className="teams-page-heading-one margin-top-2rem margin-2rem">
            Intermediate-level
          </h1>
        </div>
        <div className="course-card-container">
          <div className="course_cards">

            <div className="course_card">
              <div className="course_details">
              <div className="course_img1" style={{ backgroundImage: `url(${courseIntimg})` }}></div>
                <div className="course_details_in">
                  <div className="course_title">Linux/ Windows Privilege Escalation</div>
                  <div className="course_card_flex">
                    <div className="course-rating">
                      <span className="rating-stars">★★★★★</span>
                      <span className="rating-value">4.5</span>
                    </div>
                    <div className="course_rate">
                      <span className="discount_rate">₹ 6000</span>
                      <span className="real_rate">(₹ 7500</span>
                      <span className="discount_cent">20.00% OFF)</span>
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
                  <a className="button white-orange" href="https://mentorbot.in/courses/Cyber%20Forensics">Read more</a>
                  <a className="share-button course-instructor" href="#" data-title="Cyber Forensics" data-url="https://mentorbot.in/courses/Cyber%20Forensics" style={{ display: 'flex' }}>
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

export default CoursesInt;
