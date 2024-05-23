// BugBounty.jsx
import React from 'react';
import '../courses/css/course4.css'
import Footer from '../Footer';
import LocalImage4 from '../courses/courseadv1.png';
const BugBounty = () => {
  return (
    <div>
      <div>
        <div className="courses-beg-page">
          <div className="dummyspace"></div>
          <div className="center">
            <div className="section">
              <div>
                <h2 className="track-page-sub-heading">Category</h2>
                <h1 className="teams-page-heading-one margin-top-2rem margin-2rem">
                  Expert-level
                </h1>
                <section className="course-band">
                  <div className="center">
                    <div className="blog-article-head">
                      <h2 className="mb-subheading blog-band-color">Bug Bounty</h2>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="box-shade margin-1rem">

                    <img className="out-course-img" width="100%" src={LocalImage4} alt="Master's in Ethical Hacking" />

                    <p></p>
                  </div>

                  <div className="course-right-left">
                    <div className="course-left">
                      <div className="course-details-box margin-1rem">
                        <h2 class="font-weigh"> What you will learn</h2>
                        <div className="text">
                          Bug Bounty Hunter is an all-encompassing security course that equips free-hand security testers to discover potential bugs in applications and websites following advanced methodologies. Live web application penetration testing POC. Comprehensive tech-how to exploit diverse web applications and platforms.
                        </div>

                      </div>
                      <div className="course-details-box margin-1rem">
                        <h2 className="font-weigh">Who is it for</h2>
                        <div>
                          <p className="text">
                            Anyone looking to become a bug bounty hunter with little to no prior experience.
                          </p>

                        </div>
                      </div>
                      <div className="course-details-box margin-1rem">
                        <h2 class="font-weigh"> Who is your Instructor</h2>
                        <div class="margin-1rem" className="text">Abhishek Chouriya</div>
                        <div>
                          <p className="text">cyber security trainer</p>
                        </div>

                      </div>
                    </div>
                    <div className="course-right">
                      <div className="course-details-box margin-1rem">
                        <div className="course_rate orange">
                          <h2 class="font-weigh">
                            Price:
                            <span className="discount_rate">₹ 40,000</span>
                            <span className="real_rate">(₹ 50,000</span>
                            <span classn="discount_cent">₹ 20.00% OFF)</span>
                          </h2>
                        </div>
                        <div className="margin-1rem">
                          <a className="button orange-btn" href="#">
                            Enroll now
                          </a>
                          <a className="button orange-btn margin-1rem" target="_blank" href="#">
                            Let's talk
                          </a>
                          <div>

                          </div>

                        </div>


                      </div>
                      <div className="course-details-box margin-1rem">
                        <div className="margin-1rem">
                          <h2 className="font-weigh">Syllabus</h2>
                          <div>
                            <p className="text">
                              1-Introduction to WAPT & OWASP Top 10<br />
                              2-Pentest Lab Setup<br />
                              3-Information Gathering & Reconnaissance<br />
                              4-Netcat For Pentester<br />
                              5-Configuration Management Testing<br />
                              6-Cryptography<br />
                              7-Authentication<br />
                              8-Session Management<br />
                              9-Local File Inclusion<br />
                              10-Remote File Inclusion<br />
                              11-Path Traversal<br />
                              12-OS Command Injection<br />
                              13-Open Redirect<br />
                              14-Unrestricted File Upload<br />
                              15-PHP Web Shells<br />
                              16-HTML Injection<br />
                              17-Cross-Site Scripting (XSS)<br />
                              18-Client-Side Request Forgery<br />
                              19-SQL Injection<br />
                              M20-XXE Injection<br />

                              <br></br>
                            </p>
                          </div>
                          <div>
                            <a className="button orange-btn" href="#">Download Here</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

            </div>
          </div>

          <Footer /> {/* Include Footer component */}
        </div>
      </div>


    </div>
  );
};

export default BugBounty;
