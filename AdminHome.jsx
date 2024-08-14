import React from 'react';
import AdminNav from './AdminNav';
import AdminProfile from './AdminProfile';
import './AdminHome.css'


const AdminHome = () => {
  return (
    <div className='adminhome'>
        <div>
        <AdminNav/>
        </div>
        <div>
        <AdminProfile/>
        </div>
    </div>
  );
};

export default AdminHome;
