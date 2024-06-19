import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/courses-beg.css'; // Import CSS file for this specific page

const CoursesBeg = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }

    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5001/courses/beg');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched data:', data); // Debug: Log the fetched data
          setCourses(data);
        } else {
          console.error('Failed to fetch courses');
          setError('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error fetching courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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

  return (
    <div className="courses-beg-page">
      <div className="dummyspace"></div>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center my-8">
          <h2 className="track-page-sub-heading">Category</h2>
          <h1 className="teams-page-heading-one margin-2rem">Beginner-level</h1>
        </div>
        <div className="course-card-container course_cards">
          {courses.map((course) => (
            <div className="course_card course_details" key={course._id}>
              {course.begcImage && course.begcImage.data && course.begcImage.contentType ? (
                <div
                  className="course_img"
                  style={{ backgroundImage: `url(data:${course.begcImage.contentType};base64,${arrayBufferToBase64(course.begcImage.data.data)})` }}
                ></div>
              ) : (
                <div
                  className="course_img"
                  style={{ backgroundImage: `url('/path/to/default/image.png')` }}
                ></div>
              )}
              <div className="course_details_in">
                <h3 className="course_title">{course.begcTitle}</h3>
                <div className="course_card_flex">
                  <div className="course-rating">
                    <span className="rating-stars">★★★★★</span>
                    <span className="rating-value">5.0</span>
                  </div>
                  <div className="course_rate">
                    <span className="discount_rate">{course.begcfees.split('(')[0]}</span>
                    <span className="real_rate">{course.begcfees.match(/\( (.*) /)[1]}</span>
                    <span className="discount_cent">{course.begcfees.match(/\( .* (\d+\.\d+% OFF)/)[1]}</span>
                  </div>
                </div>
                <p className="course-instructor">
                  Instructor: <span className="font-weight">{course.begcinstructor}</span>
                </p>
                <div className="course-btn-flex">
                  <Link className="button white-orange" to={`/courses/${course._id}`}>Read more</Link>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesBeg;
