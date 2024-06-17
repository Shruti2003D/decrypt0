import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCoursesIntermediate = () => {
    const [intcTitle, setIntCTitle] = useState('');
    const [intcfees, setIntCFees] = useState('');
    const [intcinstructor, setIntCInstructor] = useState('');
    const [intcinstructordomain, setIntCInstructorDomain] = useState('');
    const [intcwhatlearn, setIntCWhatLearn] = useState('');
    const [intcwhofor, setIntCWhoFor] = useState('');
    const [intcsyllabus, setIntCSyllabus] = useState('');
    const [intcImage, setIntCImage] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setIntCImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('intcTitle', intcTitle);
        formData.append('intcfees', intcfees);
        formData.append('intcinstructor', intcinstructor);
        formData.append('intcinstructordomain', intcinstructordomain);
        formData.append('intcwhatlearn', intcwhatlearn);
        formData.append('intcwhofor', intcwhofor);
        formData.append('intcsyllabus', intcsyllabus);
        formData.append('intcImage', intcImage);

        try {
            const response = await fetch('http://localhost:5000/api/add-courses-intermediate', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Intermediate Course added successfully');
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
            <h1>Add Intermediate Courses</h1>
            <form onSubmit={handleSubmit} className="career-post-form">
                <div className="form-group">
                    <label>Intermediate Course Title</label>
                    <input
                        type="text"
                        required
                        value={intcTitle}
                        onChange={(e) => setIntCTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Intermediate Course Fees</label>
                    <input
                        type="text"
                        required
                        value={intcfees}
                        onChange={(e) => setIntCFees(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Intermediate Course Instructor</label>
                    <input
                        type="text"
                        required
                        value={intcinstructor}
                        onChange={(e) => setIntCInstructor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Intermediate Course Instructor Domain</label>
                    <input
                        type="text"
                        required
                        value={intcinstructordomain}
                        onChange={(e) => setIntCInstructorDomain(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>What You Will Learn</label>
                    <textarea
                        required
                        value={intcwhatlearn}
                        onChange={(e) => setIntCWhatLearn(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Who is it for?</label>
                    <textarea
                        required
                        value={intcwhofor}
                        onChange={(e) => setIntCWhoFor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Syllabus</label>
                    <textarea
                        required
                        value={intcsyllabus}
                        onChange={(e) => setIntCSyllabus(e.target.value)}
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

export default AddCoursesIntermediate;
