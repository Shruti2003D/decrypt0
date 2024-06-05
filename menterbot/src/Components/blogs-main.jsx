import React from 'react';
import Footer from '../Components/Footer';
import '../css/blogs-main.css';

const Blogsmain = () => {
  return (
    <section className="blogs-section">

       <div className="blog-header">
        <div className="background-overlay"></div>
        <div className="blog-title-container">
          <div className="vertical-line"></div>
          <h1 className="blog-title">Blogs</h1>
        </div>
      </div> 
      <div className='blogs-section-padding'>
        {/* Sampe Part 1 */}
        <div className='blog-post-summary'>
          <div className='date-container'>
            <h1 className='date-number-design'>04</h1>
            <p className='date-word-section'> June </p>
          </div>
          <div className="post-details">
            <h2 className="post-title">Unlocking Security Insights: How SIEM Tools Enhance Threat Detection</h2>
            <div className="post-meta">
              <div className="meta-item">
                <span>Posted by</span>
                <strong>Keny White</strong>
              </div>
              <div className="meta-item">
                <span>Categories</span>
                <strong>Blog</strong>
              </div>
              <div className="meta-item">
                <span>Comments</span>
                <strong>0 Comment</strong>
              </div>
            </div>
          </div>
        </div>
        <p className="post-excerpt">
          A SIEM (Security Information and Event Management) tool is a comprehensive cybersecurity solution that centralizes security event data collection, analysis, and response. It enables organizations to detect, investigate, and respond to security threats effectively by providing real-time monitoring, advanced analytics, and automated incident response capabilities. SIEM tools play a crucial role in strengthening cybersecurity postures, enhancing threat detection, and mitigating risks in today's dynamic and evolving threat landscape
        </p>
        <button className="read-more">READ MORE</button>

        {/* Sampe Part 2 */}
        <div className='blog-post-summary'>
          <div className='date-container'>
            <h1 className='date-number-design'>03</h1>
            <p className='date-word-section'> June </p>
          </div>
          <div className="post-details">
            <h2 className="post-title">EncroChat: The Dark Side of Secure Communication</h2>
            <div className="post-meta">
              <div className="meta-item">
                <span>Posted by</span>
                <strong>Keny White</strong>
              </div>
              <div className="meta-item">
                <span>Categories</span>
                <strong>Blog</strong>
              </div>
              <div className="meta-item">
                <span>Comments</span>
                <strong>0 Comment</strong>
              </div>
            </div>
          </div>
        </div>
        <p className="post-excerpt">
          In the murky underworld of organised crime, communication is a double-edged sword. Criminals need to coordinate their activities, but they also face the constant threat of surveillance by law enforcement agencies. Enter EncroChat, a shadowy network that promised secure communication for those operating outside the law.
        </p>
        <button className="read-more">READ MORE</button>
      </div>

      <Footer />
    </section>
  );
};

export default Blogsmain;
