import React, { useContext, useEffect } from 'react';
import { CourseContext } from './CourseContext';
import axios from 'axios';

const UserCourses = () => {
  const { courses, setCourses } = useContext(CourseContext);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3380/Courses");
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, [setCourses]);

  return (
    <div>
      <h1>Available Courses:</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserCourses;
