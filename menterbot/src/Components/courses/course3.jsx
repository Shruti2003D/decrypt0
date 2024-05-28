// LinuxWindowsPrivilegeEscalation.jsx
import React from 'react';
import '../courses/css/course3.css'
import Footer from '../Footer';
import LocalImage3 from '../courses/courseint1.png';

const LinuxWindowsPrivilegeEscalation = () => {
  return (
    <div>
      <div className="courses-beg-page">
        <div className="dummyspace"></div>
        <div className="center">
          <div className="section">
            <div>
              <h2 className="track-page-sub-heading">Category</h2>
              <h1 className="teams-page-heading-one margin-top-2rem margin-2rem">
                Intermediate-level
              </h1>
              <section className="course-band">
                <div className="center">
                  <div className="blog-article-head">
                    <h2 className="mb-subheading blog-band-color">Linux/ Windows Privilege Escalation</h2>
                  </div>
                </div>
              </section>
              <section>
                <div className="box-shade margin-1rem">

                  <img className="out-course-img" width="100%" src={LocalImage3} alt="Master's in Ethical Hacking" />

                  <p></p>
                </div>

                <div className="course-right-left">
                  <div className="course-left">
                    <div className="course-details-box margin-1rem">
                      <h2 class="font-weigh"> What you will learn</h2>
                      <div className="text">
                        Do this course if you want to improve your Capture the Flag skills and get ready for certifications like the OSCP. If your Senior Security Analyst, need to conduct comperihensive testing or Grey Box Pentesting.
                      </div>

                    </div>
                    <div className="course-details-box margin-1rem">
                      <h2 className="font-weigh">Who is it for</h2>
                      <div>
                        <p className="text">
                          Penetration Testers.<br />
                          Cyber Security Analysts.<br />
                          Cyber Security Students who want to become an advanced PenTester.<br />
                          Students interested in how attackers escalate privileges on modern Windows endpoints.<br />
                          Anyone who starves into learning hacking and security.<br />
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
                          <span className="discount_rate"> ₹ 6000</span>
                          <span className="real_rate">(₹ 7500</span>
                          <span classn="discount_cent">50.00% OFF)</span>
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
                            Linux Privilege Escalation
                            M1-Linux Fundamental<br />
                            M2-Writable Files<br />
                            M3-Misconfigured NFS<br />
                            M4-Abusing Sudo Rights<br />
                            M5-SUID Binaries<br />
                            M6-Capabilities<br />
                            M7-Groups<br />
                            M8-Exploiting Cron jobs<br />
                            M9-Kernel Exploit<br />
                            M10-Automated Script<br />
                            M11-Shell Escaping<br />
                            M12-Password Hunting<br />
                            Windows Privilege Escalation<br />
                            M1-Introduction & Lab Setup<br />
                            M2-Exploiting Scheduled Tasks<br />
                            M3-Weak Services/Permissions<br />
                            M4-Kernel Exploits<br />
                            M5-Logon Autostart Execution<br />
                            M6-Passwords Hunting<br />
                            M7-Bypass ACL<br />
                            M8-Automated Tools<br />
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

export default LinuxWindowsPrivilegeEscalation;
