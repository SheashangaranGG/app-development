import React, { useState, useContext, useEffect } from 'react';
import { CourseContext } from './CourseContext';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import './UserCourse.css';
import { getCourses } from '../../axios';
import { AuthContext } from '../Login/AuthContext';

const UserCourse = () => {
  const { courses, setCourses } = useContext(CourseContext);
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [courseId, setCourseId] = useState(null);
  const { email } = useContext(AuthContext);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, [setCourses]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8091/api/users/getbyEmail", {
          params: { email },
        });
        setUser(response.data);
        setUserId(response.data.id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [email]);

  const handleClickEnroll = (course) => {
    setSelectedCourse(course);
    setCourseId(course.courseId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch("http://localhost:8091/api/users/updateUserCourse", null, {
        params: { userId, courseId }
      });
      // Fetch updated user data after successful enrollment
      const response = await axios.get("http://localhost:8091/api/users/getbyEmail", {
        params: { email },
      });
      setUser(response.data); // Update user state with new data
      handleClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!user) {
    return (<div>Loading...</div>);
  }

  const isEnrolled = (courseId) => {
    if (user && user.courses) {
      return user.courses.some((course) => course.courseId === courseId);
    }
    return false;
  };

  return (
    <div className="mainuser-courses-container">
      <h1>Available Courses</h1>
      <ul className="maincourse-list">
        {courses.map((course) => (
          <li key={course.courseId} className="maincourse-item">
            <div className="maincourse-title">{course.title}</div>
            <div className="maincourse-description">
              <b>{course.description}</b>
              {course.mentor.length > 0 ? (
                <div>
                  <b>Mentor Name: {course.mentor[0].mentorName}</b><br />
                </div>
              ) : (
                <p>No mentor assigned</p>
              )}
            </div>
            <div className="maincourse-img-container">
              <img className="maincourse-img" src={course.img} alt="course icon" />
            </div>
            <Button
              className="enroll-button"
              variant="contained"
              color={isEnrolled(course.courseId) ? "secondary" : "primary"}
              onClick={() => isEnrolled(course.courseId) ? null : handleClickEnroll(course)}
              disabled={isEnrolled(course.courseId)}
            >
              {isEnrolled(course.courseId) ? "Enrolled" : "Enroll"}
            </Button>
          </li>
        ))}
      </ul>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "black" }}>Enroll in <br />{selectedCourse?.title}</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div>
              <b>Course Content:</b> {selectedCourse?.content}  <br /><br />
              <b>Course Description:</b> {selectedCourse?.description}
              {selectedCourse?.mentor.length > 0 ? (
                <div>
                  <b>Mentor Name: {selectedCourse?.mentor[0].mentorName}</b><br />
                  <b>Mentor Rating: {selectedCourse?.mentor[0].rating}</b><br />
                </div>
              ) : (
                <p>No mentor assigned</p>
              )}
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Enroll
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserCourse;
