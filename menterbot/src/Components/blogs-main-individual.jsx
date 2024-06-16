import React from 'react';
import Footer from './Footer';
import Blogs from "./Blogs";
import '../css/blogs-main-individual.css';
import image1 from '../assets/trialblog.png';
import Facebook from '../assets/white_icons8-facebook.svg';
import Twitter from '../assets/white_icons8-twitter.svg';
import LinkedIn from '../assets/white_icons8-linkedin.svg';
import Gmail from '../assets/white_mail.svg';
import WhatsApp from '../assets/wa (1).svg';
const IndividualBlogInformation = () => {
    return (
        <>
            <section className="blog-main-individual-section">
                <div className="blog-header">
                    <div className="background-overlay"></div>
                    <div className="blog-title-container">
                        <div className="vertical-line"></div>
                        <h1 className="blog-title">Blogs</h1>
                    </div>
                </div>
                <div className='blogs-individual-title-background'>
                <h1 className='blogs-individual-title'>OSCP Certification: A complete guide</h1>
                <div className="blogs-individual-social-icons">
                        <h3 className='blogs-individual-share-heading'>Share it on : </h3>
                        <a href="https://www.facebook.com/people/Mentor-Bot/100072427163735/" target="_blank"><img src={Facebook} alt="Facebook" /></a>
                        <a href="https://twitter.com/mentorb0t" target="_blank"><img src={Twitter} alt="Twitter" /></a>
                        <a href="https://www.linkedin.com/in/mentor-bot-73274724b/" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
                        <a href="https://www.youtube.com/channel/UC_Pj72CWHP-ZPyUGtk4igHg" target="_blank"><img src={Gmail} alt="Gmail" /></a>
                        <a href="https://wa.me/+917224032078" target="_blank"><img src={WhatsApp} alt="WhatsApp" /></a>
                    </div>
                </div>
                <div className='blogs-individual-section-padding'>
                    
                    <img class='blogs-individual-image' src={image1} />

                    <div className="blogs-individual-post-meta">
                        <div className="blogs-individual-meta-item">
                            <span>Posted by</span>
                            <strong>Author</strong>
                        </div>
                        <div className="blogs-individual-meta-item">
                            <span>Categories</span>
                            <strong>Blogs</strong>
                        </div>
                        <div className="blogs-individual-meta-item">
                            <span>Date</span>
                            <strong>25/12/2022</strong>
                        </div>
                    </div>
                    <p className="post-excerpt">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.
                        Many desktop publishing packages and web pa
                    </p>
                    <span className='blogs-individual-subtitle'>Additional Information</span>
                    <p className="post-excerpt">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.

                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.

                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.

                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <hr />
                </div>
                <Blogs />
                <Footer />
            </section>

        </>

    );
};

export default IndividualBlogInformation;
