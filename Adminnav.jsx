import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Adminnav = () => {
    const navigate = useNavigate();
    const buttons = [
      <ButtonGroup variant="text" aria-label="Basic button group">
      <Button key="one" size='large' onClick={()=>navigate('/Admindash')}>Home</Button>,
      <Button key="three" size='large' onClick={()=>navigate('/AdminCourses')}>Manage courses</Button>,
      <Button key="three" size='large' onClick={()=>navigate('/AdminStudent')}>Manage students</Button>,
      <ButtonGroup disableElevation variant="contained" aria-label="Disabled button group">
        <Button key="seven" size='large' onClick={()=>navigate('/Login')}>Login</Button>,
        <Button key="seven" size='large' onClick={()=>navigate('/SignUp')}>SignUp</Button>,
      </ButtonGroup>
      </ButtonGroup>
    ];
  return (
    <div className='navbar' >
      <Box sx={{display: 'flex','& > *': {m: 1,},alignItems:'revert',justifyContent:'flex-end'}}>
        {buttons}
      </Box>
      </div>
  ) 
}

export default Adminnav