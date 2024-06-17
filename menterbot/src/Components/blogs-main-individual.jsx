import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/blogs-main-individual.css';
import Facebook from '../assets/white_icons8-facebook.svg';
import Twitter from '../assets/white_icons8-twitter.svg';
import LinkedIn from '../assets/white_icons8-linkedin.svg';
import Gmail from '../assets/white_mail.svg';
import WhatsApp from '../assets/wa (1).svg';
import Footer from './Footer';
import Blogs from './Blogs';
const IndividualBlogInformation = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { title } = useParams();

    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');

        if (!hasReloaded) {
          localStorage.setItem('hasReloaded', 'true');
          window.location.reload();
        }

        const fetchBlog = async () => {
            try {
                const response = await fetch('http://localhost:5001/blogs');
                if (response.ok) {
                    const data = await response.json();
                    const foundBlog = data.find((b) => b.postTitle === decodeURIComponent(title));
                    if (foundBlog) {
                        setBlog(foundBlog);
                    } else {
                        setError('Blog post not found');
                    }
                } else {
                    console.error('Failed to fetch blogs');
                    setError('Failed to fetch blogs');
                }
            } catch (error) {
                console.error('Error:', error);
                setError('Error fetching blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [title]);

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date)) {
            return { fullDate: dateString, day: '', month: '' }; // Return the original string if date is invalid
        }
        const day = String(date.getDate()).padStart(2, '0');
        const monthIndex = date.getMonth();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const month = monthNames[monthIndex];
        const year = date.getFullYear();
        return {
            fullDate: `${day}/${String(monthIndex + 1).padStart(2, '0')}/${year}`,
            day,
            month
        };
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!blog) {
        return <div>Blog post not found.</div>;
    }

    const { fullDate } = formatDate(blog.dateNumber);

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
                            <h1 className='blogs-individual-title'>{blog.postTitle}</h1>
                            <div className="blogs-individual-social-icons">
                                <h3 className='blogs-individual-share-heading'>Share it on: </h3>
                                <a href="https://www.facebook.com/people/Mentor-Bot/100072427163735/" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" /></a>
                                <a href="https://twitter.com/mentorb0t" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter" /></a>
                                <a href="https://www.linkedin.com/in/mentor-bot-73274724b/" target="_blank" rel="noopener noreferrer"> <img src={LinkedIn} alt="LinkedIn" /></a>
                                <a href="https://www.youtube.com/channel/UC_Pj72CWHP-ZPyUGtk4igHg" target="_blank" rel="noopener noreferrer"><img src={Gmail} alt="Gmail" /></a>
                                <a href="https://wa.me/+917224032078" target="_blank" rel="noopener noreferrer"><img src={WhatsApp} alt="WhatsApp" /></a>
                            </div>
                        </div>
                        <div className='blogs-individual-section-padding'>
                            {blog.blogImage && blog.blogImage.data && (
                                <img
                                    className='blogs-individual-image'
                                    src={`data:${blog.blogImage.contentType};base64,${arrayBufferToBase64(blog.blogImage.data.data)}`}
                                    alt="Blog"
                                />
                            )}
                            <div className="blogs-individual-post-meta">
                                <div className="blogs-individual-meta-item">
                                    <span>Posted by</span>
                                    <strong>{blog.author}</strong>
                                </div>
                                <div className="blogs-individual-meta-item">
                                    <span>Categories</span>
                                    <strong>{blog.category}</strong>
                                </div>
                                <div className="blogs-individual-meta-item">
                                    <span>Date</span>
                                    <strong>{fullDate}</strong>
                                </div>
                            </div>
                            <p className="post-excerpt">{blog.postExcerpt}</p>
                            <span className='blogs-individual-subtitle'>Additional Information</span>
                            <p className="post-excerpt">{blog.blogadditional}</p>
                            <hr />
                        </div>  
                <Blogs/>                  
                <Footer/>
            </section>
        </>
    );
};

export default IndividualBlogInformation;
