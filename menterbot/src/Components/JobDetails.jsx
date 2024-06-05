import React,{ useState } from 'react';
import '../css/JobDetails.css';
import Footer from './Footer';
import ApplyAdt from '../Components/applyforAdt';

const JobDetails = () => {
  const [openAdtPage, setOpenADTPage] = useState(false);
  return (
    <>
      <section>
        <div className="center">
          <div className="box-shade margin-1rem">
            <img
              className="out-course-img"
              width="100%"
              src="https://mentorbot.in/storage/images/application-development-trainer_20240130210219_w800_q80.jpg"
              alt="Application Development Trainer"
            />
          </div>
          <div className="blog-article-description">
            We are currently seeking an experienced Application Development Trainer to join our team. This role involves designing and delivering high-quality training modules in application development. The ideal candidate will have a strong background in app development, excellent module design skills, and a passion for teaching.
          </div>
          <div className="job-details-content">
            <p><strong>Location:</strong> Various (Travel Required) 🌍</p>
            <p><strong>Experience Level:</strong> 3+ Years 🚀</p>
            <p><strong>Type:</strong> Full-Time ⏰</p>
            <p><strong>About Our Company:</strong> As a premier IT consulting firm, we specialize in providing comprehensive technology solutions and training programs to a diverse range of clients. Our commitment to innovation and excellence sets us apart in the dynamic world of information technology.</p>
            <p><strong>Key Responsibilities:</strong></p>
            <ul>
              <li>Design and develop engaging and effective training modules in application development.</li>
              <li>Deliver training sessions to a variety of audiences, adapting to different learning styles and skill levels.</li>
              <li>Stay abreast of the latest trends and advancements in app development to ensure the training material is current and relevant.</li>
              <li>Provide hands-on guidance and support to trainees during the learning process.</li>
              <li>Work collaboratively with the IT consulting team to assess training needs and customize modules accordingly.</li>
              <li>Travel to various training locations as required by the company (all travel and accommodation expenses will be covered by the company).</li>
            </ul>
            <p><strong>Qualifications:</strong></p>
            <ul>
              <li>Minimum of 3 years of experience in application development.</li>
              <li>Proven experience in designing and delivering training modules.</li>
              <li>Strong knowledge of multiple programming languages and app development frameworks.</li>
              <li>Excellent communication and presentation skills.</li>
              <li>Ability to engage and inspire trainees.</li>
              <li>Willingness to travel frequently for training delivery.</li>
              <li>A bachelor's degree in Computer Science, IT, or a related field. Relevant certifications in app development will be an added advantage.</li>
            </ul>
            <p><strong>What We Offer:</strong></p>
            <ul>
              <li>A dynamic and supportive work environment.</li>
              <li>Opportunities to work with diverse technologies and clients.</li>
              <li>Competitive salary package.</li>
              <li>Comprehensive coverage of all travel and accommodation expenses.</li>
              <li>Opportunities for professional growth and development.</li>
            </ul>
            <p><strong>How to Apply:</strong> Send your updated resume to <a href="mailto:hiring@mentorbot.in">hiring@mentorbot.in</a>.</p>
            <p>Please mention "Application Development Trainer - [Your Name]" in the subject line. (Pdf only). Highlight your experience in app development and previous training engagements, if any.</p>
            <p>We are an equal-opportunity employer and value diversity at our company. We do not discriminate based on race, religion, colour, national origin, gender, sexual orientation, age, marital status, or disability status. Join us in shaping the future of application development training! 🚀</p>
            <button className='button orange-btn' onClick={() => setOpenADTPage(true)}>Apply for Above Role</button>
            {openAdtPage && (
              <ApplyAdt onClose={() => setOpenADTPage(false)} />
            )}
          </div>
          <div className="margin-1rem">
            <div className="font-size09">
              <div>Team Mentorbot</div>
              <div>30 January 2024</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobDetails;
