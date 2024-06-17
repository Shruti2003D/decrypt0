import React, { useState } from 'react';
import '../css/AddBlogsform.css';
import { useNavigate } from 'react-router-dom';

const IndividualBlog = () => {
    const [dateNumber, setDateNumber] = useState('');

    const [postTitle, setPostTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [blogadditional, setBlogAdditional] = useState('');
    const [postExcerpt, setPostExcerpt] = useState('');
    const [blogImage, setBlogImage] = useState(null); // Use null for file input
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setBlogImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('dateNumber', dateNumber);
        formData.append('postTitle', postTitle);
        formData.append('author', author);
        formData.append('category', category);
        formData.append('blogadditional', blogadditional);
        formData.append('postExcerpt', postExcerpt);
        formData.append('blogImage', blogImage);

        try {
            const response = await fetch('http://localhost:5000/api/add-blog', {
                method: 'POST',
                body: formData, // No need to set content-type, browser sets it automatically
            });

            if (response.ok) {
                alert('Blog added successfully');
                // Navigate to the blogs list page
                // navigate('/add-individual-blog');
            } else {
                alert('Failed to add blog');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <>
            <h1>Individual Blog Add</h1>
            <form onSubmit={handleSubmit} className="blog-post-form-1">
                <div className="form-group-1">
                    <label>Date Number</label>
                    <input
                        type="date"
                        required
                        value={dateNumber}
                        onChange={(e) => setDateNumber(e.target.value)}
                    />
                </div>
                <div className="form-group-1">
                    <label>Post Title</label>
                    <input
                        type="text"
                        required
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                </div>
                <div className="form-group-1">
                    <label>Author</label>
                    <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group-1">
                    <label>Category</label>
                    <input
                        type="text"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>                
                <div className="form-group-1">
                    <label>Information</label>
                    <textarea
                        value={postExcerpt}
                        required
                        onChange={(e) => setPostExcerpt(e.target.value)}
                    />
                </div>
                <div className="form-group-1">
                    <label>Additional Information</label>
                    <textarea
                        value={blogadditional}
                        required
                        onChange={(e) => setBlogAdditional(e.target.value)}
                    />
                </div>
                <div className="form-group-1">
                    <label>Blog Image</label>
                    <input
                        type="file"
                        required
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default IndividualBlog;
