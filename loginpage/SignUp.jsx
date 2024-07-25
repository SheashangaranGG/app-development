import React, { useState } from 'react';
import '../../asserts/login_signUp.css'; 
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    if (!form.firstName) {
      window.alert('First Name is required.');
      return false;
    }
    if (!form.lastName) {
      window.alert('Last Name is required.');
      return false;
    }
    if (!form.email) {
      window.alert('Email is required.');
      return false;
    }
    if (!form.password) {
      window.alert('Password is required.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(form);
      // window.alert('Sign Up Successful!');
      navigate('/Main');
    }
  };

  return (
    <div className='login_background'>
      <div className='signUp_main'>
        <h1>Sign Up</h1>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
          <TextField helperText={'Enter FirstName'}
          id="first-name"
          name="firstName"
          label="First Name"
          type="text"
          variant="filled"
          value={form.firstName}
          onChange={handleChange}
          />
          <TextField
          helperText={'Enter LastName'}
          id="last-name"
          name="lastName"
          label="Last Name"
          type="text"
          variant="filled"
          value={form.lastName}
          onChange={handleChange}
          />
          <TextField
            helperText={'Enter Email'}
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="filled"
            value={form.email}
            onChange={handleChange}
            />
          <TextField
            helperText={'Enter Password'}
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="filled"
            value={form.password}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">Sign Up</Button>
        </Box>
        <p>Already have an account?
          <Button size="small" onClick={() => navigate('/Login')}>Login</Button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
