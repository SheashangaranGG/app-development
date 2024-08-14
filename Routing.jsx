import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLogin from './Login/User-Login';
import SignUp from './SignUp';
import Main from './Home';
import Computer from '../Chess/ChessRouting';
import Profile from './Profile';
import AboutUs from './About';
import ContactUS from './Contact_us';
// import Admindash from './Admindash';
// import Admincourse from './AdminCourses copy';
// import Adminuser from './Adminuser';
import AdminLogin from './Login/AdminLogin';
import Courses from './Courses';
import { AuthProvider } from './Login/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import AdminHome from './AdminContent/AdminHome';
import ManageCourses from './AdminContent/ManageCourses';
import ManageUsers from './AdminContent/Manageuser';
import ManageMentor from './AdminContent/Managementor';


const Routing = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUS />} />
          
          {/* Protected Routes */}
          <Route 
            path="/profile" 
            element={<ProtectedRoute element={<Profile />} roleRequired="user" />} 
          />
          <Route 
            path="/computer" 
            element={<ProtectedRoute element={<Computer />} roleRequired="user" />} 
          />
          <Route 
            path="/learn" 
            element={<ProtectedRoute element={<Courses />} roleRequired="user" />} 
          />
            <Route
          path="/AdminHome"
          element={<ProtectedRoute element={<AdminHome />} roleRequired="admin" />}
        />
        <Route
          path="/ManageCourses"
          element={<ProtectedRoute element={<ManageCourses />} roleRequired="admin" />}
        />
        <Route
          path="/ManageUsers"
          element={<ProtectedRoute element={<ManageUsers />} roleRequired="admin" />}
        />
        <Route
          path="/ManageMentor"
          element={<ProtectedRoute element={<ManageMentor />} roleRequired="admin" />}
        />
          {/* /> */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default Routing;
