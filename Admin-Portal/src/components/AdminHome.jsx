import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AdminHome.css';

const AdminHome = () => {
    return (
        <section className="admin-home-section">
            <div className="admin-home-division">
                <h1>Admin Portal</h1>
                <div className="button-container">
                    <Link to="/add-individual-blog" target="_blank">
                        <button className="admin-button">Add Blogs</button>
                    </Link>
                    <Link to="/add-career">
                        <button className="admin-button">Add Careers</button>
                    </Link>
                    <Link to="/add-testimonial">
                        <button className="admin-button">Add Testimonials</button>
                    </Link>
                    <Link to="/add-courses-beginner">
                        <button className="admin-button">Add Beginner Courses</button>
                    </Link>
                    <Link to="/add-courses-intermediate">
                        <button className="admin-button">Add Intermediate Courses</button>
                    </Link>
                    <Link to="/add-courses-expert">
                        <button className="admin-button">Add Advance Courses</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AdminHome;
