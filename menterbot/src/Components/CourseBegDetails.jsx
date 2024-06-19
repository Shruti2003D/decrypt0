import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/CourseBegDetails.css';

const CourseBegDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5001/courses/beg`);
        if (response.ok) {
          const data = await response.json();
          const foundCourse = data.find((c) => c._id === id);
          if (foundCourse) {
            setCourse(foundCourse);
          } else {
            setError('Course not found');
          }
        } else {
          console.error('Failed to fetch courses');
          setError('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Error fetching courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <section className="center">
      <div className="box-shade">
        {course.begcImage && course.begcImage.data && (
          <img
            className="out-course-img"
            src={`data:${course.begcImage.contentType};base64,${arrayBufferToBase64(course.begcImage.data.data)}`}
            alt={course.begcTitle}
          />
        )}
        <div className="course-details-content">
          <div className="course-band">
            <h2>{course.begcTitle}</h2>
          </div>
          <div className="course-right-left">
            <div className="course-details-box">
              <div className="mb-subheading">Instructor Details</div>
              <div className="margin-1rem">
                <strong>Instructor:</strong> {course.begcinstructor}
              </div>
              <div className="margin-1rem">
                <strong>Domain:</strong> {course.begcinstructordomain || 'Not specified'}
              </div>
              <div className="margin-1rem">
                <strong>Fees:</strong> {course.begcfees}
              </div>
            </div>
            <div className="course-details-box">
              <div className="mb-subheading">Course Overview</div>
              <div className="margin-1rem">
                <strong>About this course:</strong> {course.begcwhatlearn || 'No description available'}
              </div>
              {course.begcsyllabus && (
                <div className="margin-1rem">
                  <strong>Syllabus:</strong>
                  <ul>
                    {course.begcsyllabus.split('\r\n').map((syllabusItem, index) => (
                      <li key={index}>{syllabusItem}</li>
                    ))}
                  </ul>
                </div>
              )}
              {course.begcwhofor && (
                <div className="margin-1rem">
                  <strong>Who is this course for:</strong>
                  <ul>
                    {course.begcwhofor.split('\r\n').map((target, index) => (
                      <li key={index}>{target}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="buttons-container">
            <button className="button orange-btn">Enroll Me</button>
            <button className="button">Download</button>
            <button className="button">Share</button>
          </div>
          <div className="font-size09 text">
            <div>🚀 MentorBot: Educating Today, Empowering Tomorrow. 🚀</div>
            <div>Team MentorBot</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBegDetails;
