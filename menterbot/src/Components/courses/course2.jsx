// MastersInEthicalHacking.jsx
import React from 'react';
import '../courses/css/course2.css'
import Footer from '../Footer';
import LocalImage from '../courses/coursebeg1.png';

const MastersInEthicalHacking = () => {
  return (
    <div>
      <div className="courses-beg-page">
        <div className="dummyspace"></div>
        <div className="center">
          <div className="section">
            <div>
              <h2 className="track-page-sub-heading">Category</h2>
              <h1 className="teams-page-heading-one margin-top-2rem margin-2rem">
                Beginner-level
              </h1>
              <section className="course-band">
                <div className="center">
                  <div className="blog-article-head">
                    <h2 className="mb-subheading blog-band-color">Master's in Ethical Hacking</h2>
                  </div>
                </div>
              </section>
              <section>
                <div className="box-shade margin-1rem">

                  <img className="out-course-img" width="100%" src={LocalImage} alt="Master's in Ethical Hacking" />

                  <p></p>
                </div>

                <div className="course-right-left">
                  <div className="course-left">
                    <div className="course-details-box margin-1rem">
                      <h2 class="font-weigh"> What you will learn</h2>
                      <div className="text">
                        "Embark on a transformative journey into the world of cybersecurity with our comprehensive Master's in Ethical Hacki program. This cutting-edge course is meticulously designed to equip students with the advanced skills and knowledge needed to navigate the rapidly evolving landscape of cyber threats and security vulnerabilities.
                      </div>

                    </div>
                    <div className="course-details-box margin-1rem">
                      <h2 className="font-weigh">Who is it for</h2>
                      <div>
                        <p className="text">
                          College Students<br />
                          IS/IT specialist, analyst, or manager<br />
                          IS/IT auditor or consultant<br />
                          IT operations manager<br />
                          Network security officers and practitioners<br />
                          Site administrators<br />
                          Technical support engineer<br />
                          Senior systems engineer<br />
                          Systems analyst or administrator<br />
                          IT security specialist, analyst, manager, architect, or administrator<br />
                          IT security officer, auditor, or engineer<br />
                          Network specialist, analyst, manager, architect, consultant, or administrator
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
                          <span className="discount_rate">₹ 49,999</span>
                          <span className="real_rate">(₹ 58,822</span>
                          <span classn="discount_cent">15.00% OFF)</span>
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
                            Introduction to Ethical Hacking<br />
                            Foot Printing and Reconnaissance<br />
                            Scanning Networks<br />
                            Enumeration<br />
                            Vulnerability Analysis<br />
                            System Hacking<br />
                            Malware Threats<br />
                            Sniffing<br />
                            Social Engineering<br />
                            Denial-of-Service<br />
                            Session Hijacking<br />
                            Evading IDS, Firewalls, and Honeypots<br />
                            Hacking Web Servers<br />
                            Hacking Web Applications<br />
                            SQL Injection<br />
                            Hacking Wireless Networks<br />
                            Hacking Mobile Platforms<br />
                            IoT and OT Hacking<br />
                            Cloud Computing<br />
                            Cryptography<br />
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
  );
};

export default MastersInEthicalHacking;
