import React, { useState} from 'react';
import { Button } from '@mui/material';
import { addMentor } from '../../axios';
import './ManageCourses.css'; // Import CSS file
const AddMentor = () => {
  const [newMentor, setNewMentor] = useState({ mentorName:'', mentorAddress: '', mentoremail: '', mentormobile: '',rating:'' });
  const [errors, setErrors] = useState({ mentorName: '', mentorAddress: '', mentoremail: '', mentormobile: '',rating:'' });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMentor({ ...newMentor, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let isValid = true;
    const emailRegex = /\S+@\S+\.\S+/;
    const mobileRegex = /^\d{10}$/;

    let errors = {};
  
    if (newMentor.mentorName.trim() === '') {
      errors.mentorName = 'Name is required';
      isValid = false;
    }
  
    if (newMentor.mentorAddress.trim() === '') {
      errors.mentorAddress = 'Mentor address is required';
      isValid = false;
    }
  
    if (!emailRegex.test(newMentor.mentoremail)) {
      errors.mentoremail = 'Email is required and must be in a correct format';
      isValid = false;
    }
  
    if (!mobileRegex.test(newMentor.mentormobile)||newMentor.mentormobile.trim().length !== 10) {
      errors.mentormobile = 'Mobile number must be exactly 10 digits';
      isValid = false;
    }
  
    if (newMentor.rating.trim() === '') {
      errors.rating = 'Rating is required';
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
      await addMentor(newMentor);
      setNewMentor({ mentorName: '', mentorAddress: '', mentoremail: '', mentormobile: '' ,rating: ''});
      window.location.reload();
    } catch (error) {
      console.error('Error adding Mentor:', error);
    }
  };

  return (
    <div>
      <div className="manage-courses-container">
        <div className="manage-courses-background"></div>
        <h1>Addmentor</h1>
        <div className="manage-courses-form">
          <input
            type="text"
            name="mentorName"
            placeholder="MentorName"
            value={newMentor.mentorName}
            onChange={handleChange}
          />
          {errors.mentorName && <p className="error">{errors.mentorName}</p>}
          <input
            type="text"
            name="mentorAddress"
            placeholder="Mentor Address"
            value={newMentor.mentorAddress}
            onChange={handleChange}
          />
          {errors.mentorAddress && <p className="error">{errors.mentorAddress}</p>}
          <input
            type="text"
            name="mentoremail"
            placeholder="Mentor email"
            value={newMentor.mentoremail}
            onChange={handleChange}
          />
          {errors.mentoremail && <p className="error">{errors.mentoremail}</p>}
          <input
            type="text"
            name="mentormobile"
            placeholder="Mobile number"
            value={newMentor.mentormobile}
            onChange={handleChange}
          />
          {errors.mentormobile && <p className="error">{errors.mentormobile}</p>}
          <input
            type="text"
            name="rating"
            placeholder="Rating of the mentor"
            value={newMentor.rating}
            onChange={handleChange}
          />
          {errors.rating && <p className="error">{errors.rating}</p>}
          <Button onClick={handleAddCourse}>Add Mentor</Button>
        </div>
      </div>
    </div>
  );
};

export default AddMentor;
