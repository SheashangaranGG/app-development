import React, { useEffect, useState,useContext} from 'react';
import axios from 'axios';
import image from '../../images/Chess_Proflie.jpg';
import { Button } from '@mui/material';
import './AdminProfile.css';
import { CourseContext } from '../Couses/CourseContext';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
    const [data, setData] = useState({});
    const navigate=useNavigate();
    const { courses, setCourses } = useContext(CourseContext);

useEffect(() => {
    const fetchCourses = async () => {
    try {
        const response = await axios.get('http://localhost:8091/courses/getCoursesdata');
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
                const response = await axios.get("http://localhost:8091/admin/admindata");
                const latestData = response.data[response.data.length - 1];
                setData(latestData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='AProfile'>
            <div className="Aprofile-container">
                <div className="Aprofile-header">
                    <img src={image} alt="User Avatar" className="Aprofile-avatar" />
                    <div className="Aprofile-info">
                        <h1>{data.name}</h1>
                        <p>{data.bio}</p>
                        <Button varient='outlined' onClick={()=> navigate('/UserLogin')}>LogOut</Button>
                    </div>
                </div>
                <div className="Aprofile-details">
                    <h2>Details</h2>
                    <p><strong>Location:</strong> {data.location}</p>
                    <p><strong>Joined:</strong> {data.date}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                </div>
                <div className="Aprofile-activity">
                    <h2>Achievements:</h2>
                    <div>
                        <h4>Top 20 chess Academy in India</h4>
                        <h4>We have create 3 GM's ("Grant Masters") in the past 5 years</h4>
                        {/* Add dynamic course listing here if available */}
                    </div>
                    <h2 style={{color:'Black'}}>Courses</h2>
                    <ul className="Acourse-list">
    {courses.map((course) => (
        <li key={course.courseId} className="Acourse-item">
            <div className="Acourse-title">{course.title}</div>
            <div className="Acourse-description">
                <b>
                    MentorID: {course.mentor && course.mentor.length > 0 ? course.mentor[0].mentorName : 'N/A'}<br></br>
                    MentorID: {course.mentor && course.mentor.length > 0 ? course.mentor[0].rating : 'N/A'} stars
                </b>
                <br/>
                <b>Description: {course.description}</b>
            </div>
            <div className="Acourse-img-container">
                <img className="Acourse-img" src={course.img} alt="course icon" />
            </div>
        </li>
    ))}
</ul>

                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
