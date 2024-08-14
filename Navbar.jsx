import { Box, Button, ButtonGroup } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../asserts/homeNavbar.css';
import image1 from './images/globalrook-rook.gif';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/Main');
  };

  const buttons = isLoggedIn ? (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button key="one" size="large" onClick={() => navigate('/Main')}>Home</Button>,
      <Button key="three" size="large" onClick={() => navigate('/computer')}>Computer</Button>,
      <Button key="five" size="large" onClick={() => navigate('/learn')}>Learn</Button>,
      <Button key="six" size="large" onClick={() => navigate('/contactUs')}>Contact Us</Button>,
      <Button key="seven" size="large" onClick={() => navigate('/about')}>About</Button>,
      <Button key="eight" size="large" onClick={() => navigate('/profile')}>Profile</Button>,
      <Button key="nine" size="large" onClick={handleLogout}>Logout</Button>,
    </ButtonGroup>
  ) : (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button key="one" size="large" onClick={() => navigate('/Main')}>Home</Button>,
      <Button key="six" size="large" onClick={() => navigate('/contactUs')}>Contact Us</Button>,
      <Button key="seven" size="large" onClick={() => navigate('/about')}>About</Button>,
      <ButtonGroup disableElevation variant="contained" aria-label="Disabled button group">
        <Button key="eight" size="large" onClick={() => navigate('/UserLogin')}>Login</Button>,
        <Button key="nine" size="large" onClick={() => navigate('/SignUp')}>SignUp</Button>,
      </ButtonGroup>
    </ButtonGroup>
  );

  return (
    <div className='navbar'>
      <div className='Icon'>
        <img src={image1} alt="Tournament 1" />
        <h1>CHESS Academy</h1>
      </div>
      <Box sx={{ display: 'flex', '& > *': { m: 1 }, justifyContent: 'flex-end' }}>
        {buttons}
      </Box>
    </div>
  );
};

export default Navbar;
