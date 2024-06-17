import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCoursesExpert = () => {
    const [expcTitle, setExpCTitle] = useState('');
    const [expcfees, setExpCFees] = useState('');
    const [expcinstructor, setExpCInstructor] = useState('');
    const [expcinstructordomain, setExpCInstructorDomain] = useState('');
    const [expcwhatlearn, setExpCWhatLearn] = useState('');
    const [expcwhofor, setExpCWhoFor] = useState('');
    const [expcsyllabus, setExpcSyllabus] = useState('');
    const [expcImage, setExpCImage] = useState(null);
    const navigate = useNavigate();


    const handleFileChange = (event) => {
        setExpCImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('expcTitle', expcTitle);
        formData.append('expcfees', expcfees);
        formData.append('expcinstructor', expcinstructor);
        formData.append('expcinstructordomain', expcinstructordomain);
        formData.append('expcwhatlearn', expcwhatlearn);
        formData.append('expcwhofor', expcwhofor);
        formData.append('expcsyllabus', expcsyllabus);
        formData.append('expcImage', expcImage);


        try {
            const response = await fetch('http://localhost:5000/api/add-courses-expert', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Expert Course added successfully');
                // navigate('/add-career');
            } else {
                const errorText = await response.text(); // Get the error message from the response
                console.error('Failed to add expert courses:', errorText);
                alert('Failed to add expert courses: ' + errorText);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error: ' + error.message);
        }
    };

    return (
        <>
            <h1>Add Expert Courses</h1>
            <form onSubmit={handleSubmit} className="career-post-form">
                <div className="form-group">
                    <label>Expert Course Title</label>
                    <input
                        type="text"
                        required
                        value={expcTitle}
                        onChange={(e) => setExpCTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Expert Course Fees</label>
                    <input
                        type="text"
                        required
                        value={expcfees}
                        onChange={(e) => setExpCFees(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Expert Course Instructor</label>
                    <input
                        type="text"
                        required
                        value={expcinstructor}
                        onChange={(e) => setExpCInstructor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Expert Course Instructor Domain</label>
                    <input
                        type="text"
                        required
                        value={expcinstructordomain}
                        onChange={(e) => setExpCInstructorDomain(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>What You Will Learn</label>
                    <textarea
                        required
                        value={expcwhatlearn}
                        onChange={(e) => setExpCWhatLearn(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Who is it for?</label>
                    <textarea
                        required
                        value={expcwhofor}
                        onChange={(e) => setExpCWhoFor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Syllabus</label>
                    <textarea
                        required
                        value={expcsyllabus}
                        onChange={(e) => setExpcSyllabus(e.target.value)}
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

export default AddCoursesExpert;
