import React, { useState, useContext } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { getalldata } from '../../axios';
import './Login.css';
import { LoginContext } from './LoginContext';
import { AuthContext } from './AuthContext';
import axios from 'axios';
// import { ExposureTwoTone } from '@mui/icons-material';

const UserLogin = () => {
  const navigate = useNavigate();
  const { loginType, toggleLoginType } = useContext(LoginContext);
  const [userdata, setUserdata] = useState({ email: "", password: "" });
  // const [ldata, setLData] = useState([]);

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       const res = await getalldata();
  //       setLData(res.data);
  //     } catch (error) {
  //       console.error("There was an error fetching the data!", error);
  //     }
  //   };
  //   fetchdata();
  // }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const validate = () => {
    const { email, password } = userdata;
    const emailRegex = /\S+@\S+\.\S+/;
    let isValid = true;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      isValid = false;
    }

    return isValid;
  };

  const { login } = useContext(AuthContext);

const handleSubmit = async (event) => {
  event.preventDefault();
  if (validate()) {
    try {
      const response = await axios.post("http://localhost:8091/api/users/login",userdata);
      console.log(response);
      if(response.status===200)
      {
        login('user',userdata.email);
        localStorage.setItem('isLoggedIn', 'true'); 
        navigate("/Main");
      }
      else{
        alert("Wrong email or password");
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  }
};

  return (
    <div className='parent'>
      <div className='parent-top-login'>CHESS Academy</div>
      <div className='child'>
        <h1>{loginType === 'user' ? 'User Login' : 'Admin Login'}</h1>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter your Email or Phone"
            label='Email'
            name='email'
            onChange={handleChange}
            value={userdata.email}
            fullWidth
          />
          <TextField
            helperText="Please enter your password"
            label='Password'
            type='password'
            name='password'
            onChange={handleChange}
            value={userdata.password}
            fullWidth
          />
        </Box>
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
        <br />
        <Button onClick={() => navigate('/signup')}>Create a new account</Button>
        <br />
        <Button onClick={toggleLoginType}>
          Switch to {loginType === 'user' ? 'Admin' : 'User'} Login
        </Button>
      </div>
    </div>
  );
};

export default UserLogin;
