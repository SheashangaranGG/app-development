import React from 'react';
import '../../asserts/Navbar.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image1 from '../images/globalrook-rook.gif';

const AdminNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <div className="Icon">
          <img src={image1} alt="Tournament 1" />
          <h1>CHESS Academy</h1>
        </div>
        <ul className="navbar-menu">
            <Button variant="outlined" onClick={() => navigate('/AdminHome')}>Profile</Button>
            <Button variant="outlined" onClick={() => navigate('/ManageCourses')}>ManageCourses</Button>
           <Button variant="outlined" onClick={() => navigate('/ManageUsers')}>ManageUsers</Button>
            <Button variant="outlined" onClick={() => navigate('/ManageMentor')}>ManageMentor</Button>
        </ul>
      </nav>
    </div>
  );
}

export default AdminNav;
