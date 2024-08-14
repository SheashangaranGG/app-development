import React, { useState } from 'react';
import { Button } from '@mui/material';
// import AdminNav from './AdminNav';
import './ManageCourses.css'; // Import CSS file
import { addcoursementor } from '../../axios'; // Import the function to add mentor to course

const UpdateCoursesMentor = () => {
  const [newCoursemen, setNewCoursemen] = useState({ courseId: '', mentorId: '' });
  const [errors, setErrors] = useState({ courseId: '', mentorId: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCoursemen({ ...newCoursemen, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (newCoursemen.courseId.trim() === '') {
      errors.courseId = 'Course ID is required';
      isValid = false;
    }

    if (newCoursemen.mentorId.trim() === '') {
      errors.mentorId = 'Mentor ID is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleUpdateCourseMentor = async () => {
    if (!validate()) {
      return;
    }

    try {
      const response =await addcoursementor(newCoursemen.courseId, newCoursemen.mentorId);
      if(response.status === 200){
        alert('Mentor successfully assigned to the course!');  
      }
      window.location.reload();
      setNewCoursemen({ courseId: '', mentorId: '' });
    } catch (error) {
      console.error('Error updating course mentor:', error);
    }
  };

  return (
    <div>
      <div className="manage-courses-container">
        <div className="manage-courses-background"></div>
        <h1>Update Course Mentor</h1>
        <div className="manage-courses-form">
          <input
            type="text"
            name="courseId"
            placeholder="Course ID"
            value={newCoursemen.courseId}
            onChange={handleChange}
          />
          {errors.courseId && <p className="error">{errors.courseId}</p>}
          <input
            type="text"
            name="mentorId"
            placeholder="Mentor ID"
            value={newCoursemen.mentorId}
            onChange={handleChange}
          />
          {errors.mentorId && <p className="error">{errors.mentorId}</p>}
          <Button onClick={handleUpdateCourseMentor}>Update Course Mentor</Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoursesMentor;
