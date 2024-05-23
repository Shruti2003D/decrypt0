// CyberForensics.jsx
import React from 'react';
import '../courses/css/course1.css'
import Footer from '../Footer';
import LocalImage2 from '../courses/coursebeg2.png';
//

const CyberForensics = () => {
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
                    <h2 className="mb-subheading blog-band-color">Cyber Forensics</h2>
                  </div>
                </div>
              </section>
              <section>
                <div className="box-shade margin-1rem">

                  <img className="out-course-img" width="100%" src={LocalImage2} alt="Master's in Ethical Hacking" />

                  <p></p>
                </div>

                <div className="course-right-left">
                  <div className="course-left">
                    <div className="course-details-box margin-1rem">
                      <h2 class="font-weigh"> What you will learn</h2>
                      <div className="text">
                        Cyber forensics is a process of extracting data as proof of a crime (that involves electronic devices) while following proper investigation rules to nab the culprit by presenting the evidence to the court. Cyber forensics is also known as computer forensics. The main aim of cyber forensics is to maintain the thread of evidence and documentation to find out who did the crime digitally.
                      </div>

                    </div>
                    <div className="course-details-box margin-1rem">
                      <h2 className="font-weigh">Who is it for</h2>
                      <div>
                        <p className="text">

                          Professionals seeking to specialize in digital investigations.<br />
                          Law enforcement personnel involved in cybercrime investigations.<br />
                          Legal professionals dealing with digital evidence in legal cases.<br />
                          Information security specialists looking to enhance their skills in incident response.<br />
                          Computer science students interested in the field of digital forensics.<br />
                          Network administrators aiming to understand and respond to security incidents.<br />
                          Cybersecurity analysts aiming to develop expertise in forensic analysis.<br />
                          Forensic investigators focused on digital evidence collection and analysis.<br />
                          Incident responders responsible for handling cybersecurity breaches.<br />
                          Risk and compliance professionals dealing with data breach incidents.<br />

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
                          <span className="discount_rate">₹ 59,999</span>
                          <span className="real_rate">(₹ 74999</span>
                          <span classn="discount_cent">20.00% OFF)</span>
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
                            Module 01: Computer Forensics in Today’s World<br />
                            Module 02: Computer Forensics Investigation Process<br />
                            Module 03: Understanding Hard Disks and File Systems<br />
                            Module 04: Data Acquisition and Duplication<br />
                            Module 05: Defeating Anti-Forensics Techniques<br />
                            Module 06: Windows Forensics<br />
                            Module 07: Linux and Mac Forensics<br />
                            Module 08: Network Forensics<br />
                            Module 09: Investigating Web Attacks<br />
                            Module 10: Database Forensics<br />
                            Module 11: Cloud Forensics<br />
                            Module 12: Investigating Email Crimes<br />
                            Module 13: Malware Forensics<br />
                            Module 14: Mobile Forensics<br />
                            Module 15: IoT Forensics<br />
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

export default CyberForensics;
