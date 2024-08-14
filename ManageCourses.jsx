import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';
import { CourseContext } from '../Couses/CourseContext';
import { getCourses, addCourse, deleteCoursesdetail} from '../../axios'; // Import axios functions
import { Button } from '@mui/material';
import AdminNav from './AdminNav';
import './ManageCourses.css'; // Import CSS file
import { Icons } from '../../images/Icons/Icons';
// import { Update } from '@mui/icons-material';
import UpdateCoursesMentor from './UpdateCousesMentor';
const ManageCourses = () => {
  const { courses, setCourses } = useContext(CourseContext);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', content: '', img: '' });
  const [errors, setErrors] = useState({ title: '', description: '', content: '', img: '' });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleImageChange = (selectedOption) => {
    setNewCourse({ ...newCourse, img: selectedOption.value });
    setErrors({ ...errors, img: '' });
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (newCourse.title.trim() === '') {
      errors.title = 'Course title is required';
      isValid = false;
    }

    if (newCourse.description.trim() === '') {
      errors.description = 'Course description is required';
      isValid = false;
    }

    if (newCourse.img.trim() === '') {
      errors.img = 'Course img is required';
      isValid = false;
    }

    if (newCourse.content.trim() === '') {
      errors.Content = 'Course Content is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleAddCourse = async () => {
    if (!validate()) {
      return;
    }

    try {
      const response = await addCourse(newCourse);
      window.location.reload();
      setCourses([...courses, response.data]);
      setNewCourse({ title: '', description: '', content: '', img: '' ,durationDays: 0});
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await deleteCoursesdetail(id);
      setCourses(courses.filter(course => course.id !== id));
      window.location.reload();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const customSingleValue = ({ data }) => (
    <div className="custom-single-value">
      <img src={data.value} alt="" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
      {data.label}
    </div>
  );

  const customOption = ({ data, innerRef, innerProps }) => (
    <div ref={innerRef} {...innerProps} className="custom-option">
      <img src={data.value} alt="" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
      {data.label}
    </div>
  );

  return (
    <div>
      <div>
        <AdminNav />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="manage-courses-container">
        <div className="manage-courses-background"></div>
        <h1>Manage Courses</h1>
        <div className="manage-courses-form">
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={newCourse.title}
            onChange={handleChange}
          />
          {errors.title && <p className="error">{errors.title}</p>}
          <input
            type="text"
            name="description"
            placeholder="Course Amount"
            value={newCourse.description}
            onChange={handleChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
          <Select
            name="img"
            options={Icons}
            value={Icons.find(option => option.value === newCourse.img)}
            onChange={handleImageChange}
            components={{ SingleValue: customSingleValue, Option: customOption }}
            placeholder="Select Icon"
          />
          {errors.img && <p className="error">{errors.img}</p>}
          <input
            type="text"
            name="content"
            placeholder="Course Content"
            value={newCourse.content}
            onChange={handleChange}
          />
          {errors.content && <p className="error">{errors.content}</p>}
          {errors.img && <p className="error">{errors.img}</p>}
          <input
            type="Number"
            name="durationDays"
            placeholder="duration days"
            value={newCourse.durationDays}
            onChange={handleChange}
          />
          {errors.content && <p className="error">{errors.content}</p>}
          <Button onClick={handleAddCourse}>Add Course</Button>
        </div>
        <ul className="course-list">
  {courses.map((course) => (
    <li key={course.courseId}>
      <b>CourseId :{course.courseId}</b><br/>
      <b>CourseTitle:{course.title}</b><br/>
      {/* <img src={course.img}/> */}
      {/* Assuming there is only one mentor per course. If there could be multiple mentors, you would need to iterate over the mentor array */}
      {course.mentor.length > 0 ? (
        <div>
          <b> MentorID:{course.mentor[0].mentorId}</b><br/>
          <b> MentorName:{course.mentor[0].mentorName}</b><br/>
        </div>
      ) : (
        <p>No mentor assigned</p>
      )}
        <br></br>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleDeleteCourse(course.courseId)}
      >
        Delete Mentor from course
      </Button>
    </li>
  ))}
</ul>
      </div>
      <div>
        <UpdateCoursesMentor/>
      </div>
    </div>
  );
};

export default ManageCourses;