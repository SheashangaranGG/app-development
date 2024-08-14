import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Manageuser.css';
import AdminNav from './AdminNav';
import { deletementordetail } from '../../axios';
import Addmentor from './AddMentor';
// import { handleDeleteUser } from '../../axios';

const ManageMentor = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8091/mentor/getmentordet");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  const deleteUser = async (id) => {
    try {
      await deletementordetail(id);
      setUsers(users.filter(users => users.id !== id));
      window.location.reload();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div>
        <div>
            <AdminNav/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div>
            <Addmentor/>
        </div>
    <div className="manage-users">
      <h2 style={{color:'black'}}>Manage Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.mentorId}>
              <td>{user.mentorId}</td>
              <td>{user.mentorName}</td>
              <td>{user.mentoremail}</td>
              <td>
                <button onClick={() => deleteUser(user.mentorId)}>Remove User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

  );
};

export default ManageMentor;