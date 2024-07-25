import { TextField, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import '../../asserts/login_signUp.css'; 
import { useNavigate } from 'react-router-dom';

const First = () => {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let errors = [];
    if (!form.email) {
      errors.push("Email is required.");
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errors.push("Email is not valid.");
    }
    if (!form.password) {
      errors.push("Password is required.");
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      
      console.log(form);
      navigate('/Main');
      
    }
  };

  const handleEvent = () => {
    navigate('/SignUp');
  };
  return (
    <div className='login_background'>
      <div className='login_main'>
        <h1>Login</h1>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > :not(style)': { m: 1 } }}>

          <TextField
            helperText={'Please enter valid email'}
            id="email"
            name="email"
            label="Email"
            type="text"
            autoComplete="current-email"
            variant="filled"
            value={form.email}
            onChange={handleChange}
            />
          <TextField
            helperText={'Please enter password'}
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            value={form.password}
            onChange={handleChange}
          />
          <br />
          <Button variant="contained" type="submit">Login</Button>
        </Box>
        <p>Create a new account.
          <Button size="small" onClick={handleEvent}>Sign Up</Button>
        </p>
      </div>
    </div>
  );
}

export default First;
