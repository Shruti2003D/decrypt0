import React, { useState } from 'react';
import '../css/AddCareerForm.css';
import { useNavigate } from 'react-router-dom';

const AddCareer = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [howToApply, setHowToApply] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [applicationDeadline, setApplicationDeadline] = useState('');
    const [jobImage, setJobImage] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setJobImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('jobTitle', jobTitle);
        formData.append('company', company);
        formData.append('location', location);
        formData.append('jobDescription', jobDescription);
        formData.append('responsibilities', responsibilities);
        formData.append('qualifications', qualifications);
        formData.append('howToApply', howToApply);
        formData.append('contactEmail', contactEmail);
        formData.append('applicationDeadline', applicationDeadline);
        formData.append('jobImage', jobImage);

        try {
            const response = await fetch('http://localhost:5000/api/add-career', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Career opportunity added successfully');
                // navigate('/add-career');
            } else {
                const errorText = await response.text(); // Get the error message from the response
                console.error('Failed to add career opportunity:', errorText);
                alert('Failed to add career opportunity: ' + errorText);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error: ' + error.message);
        }
    };

    return (
        <>
            <h1>Add Career Opportunity</h1>
            <form onSubmit={handleSubmit} className="career-post-form">
                <div className="form-group">
                    <label>Job Title</label>
                    <input
                        type="text"
                        required
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Company</label>
                    <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Job Description</label>
                    <textarea
                        required
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Responsibilities</label>
                    <textarea
                        required
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Qualifications</label>
                    <textarea
                        required
                        value={qualifications}
                        onChange={(e) => setQualifications(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>How to Apply</label>
                    <textarea
                        required
                        value={howToApply}
                        onChange={(e) => setHowToApply(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Contact Email</label>
                    <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Application Deadline</label>
                    <input
                        type="date"
                        required
                        value={applicationDeadline}
                        onChange={(e) => setApplicationDeadline(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Job Image</label>
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

export default AddCareer;
