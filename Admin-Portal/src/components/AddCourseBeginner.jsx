import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCoursesBeginner = () => {
    const [begcTitle, setBegCTitle] = useState('');
    const [begcfees, setBegCFees] = useState('');
    const [begcinstructor, setBegCInstructor] = useState('');
    const [begcinstructordomain, setBegCInstructorDomain] = useState('');
    const [begcwhatlearn, setBegCWhatLearn] = useState('');
    const [begcwhofor, setBegCWhoFor] = useState('');
    const [begcsyllabus, setBegCSyllabus] = useState('');
    const [begcImage, setBegCImage] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setBegCImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('begcTitle', begcTitle);
        formData.append('begcfees', begcfees);
        formData.append('begcinstructor', begcinstructor);
        formData.append('begcinstructordomain', begcinstructordomain);
        formData.append('begcwhatlearn', begcwhatlearn);
        formData.append('begcwhofor', begcwhofor);
        formData.append('begcsyllabus', begcsyllabus);
        formData.append('begcImage', begcImage);

        try {
            const response = await fetch('http://localhost:5000/api/add-courses-beginner', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Beginner Course added successfully');
                // navigate('/add-career');
            } else {
                const errorText = await response.text(); // Get the error message from the response
                console.error('Failed to add beginner courses:', errorText);
                alert('Failed to add beginner courses: ' + errorText);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error: ' + error.message);
        }
    };

    return (
        <>
            <h1>Add Beginner Courses</h1>
            <form onSubmit={handleSubmit} className="career-post-form">
                <div className="form-group">
                    <label>Beginner Course Title</label>
                    <input
                        type="text"
                        required
                        value={begcTitle}
                        onChange={(e) => setBegCTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Beginner Course Fees</label>
                    <input
                        type="text"
                        required
                        value={begcfees}
                        onChange={(e) => setBegCFees(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Beginner Course Instructor</label>
                    <input
                        type="text"
                        required
                        value={begcinstructor}
                        onChange={(e) => setBegCInstructor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Beginner Course Instructor Domain</label>
                    <input
                        type="text"
                        required
                        value={begcinstructordomain}
                        onChange={(e) => setBegCInstructorDomain(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>What You Will Learn</label>
                    <textarea
                        required
                        value={begcwhatlearn}
                        onChange={(e) => setBegCWhatLearn(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Who is it for?</label>
                    <textarea
                        required
                        value={begcwhofor}
                        onChange={(e) => setBegCWhoFor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Syllabus</label>
                    <textarea
                        required
                        value={begcsyllabus}
                        onChange={(e) => setBegCSyllabus(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Course Image</label>
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

export default AddCoursesBeginner;
