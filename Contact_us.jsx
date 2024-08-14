import React, { useState } from 'react';
import { TextField, Autocomplete, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import SendIcon from '@mui/icons-material/Send';
import '../asserts/contact.css';
// import Footer from './Footer'
import image1 from './images/abstract-chess-pieces-digital-art-style_23-2151476128.jpg';
import Navbar from './Navbar';

const Contact = () => {
  // const navigate = useNavigate();
  const [userdata, setUserdata] = useState({ email: "", number: "", message: "" });

  const Profession = [
    { label: 'Beginner' },
    { label: 'Intermediate' },
    { label: 'Professional' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const validate = () => {
    const { email, number, message } = userdata;
    const emailRegex = /\S+@\S+\.\S+/;
    const numberRegex = /^[0-9]{10}$/;
    let isValid = true;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    if (!numberRegex.test(number)) {
      alert("Enter a Correct Mobile Number");
      isValid = false;
    }

    if (!message.trim()) {
      alert("Enter your message");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "9fd0e359-12a9-4cf1-82ab-d55ecbce5c64");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert('Form Submitted Successfully');
    } else {
      alert('Form Submission Failed');
    }
  };

  return (
    <>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
    <div className='container'>
      <div className='sidebar'>
        <img src={image1} alt='Its okay' height='100%' width='100%' />
      </div>
      <form className='Contact' onSubmit={handleSubmit}>
        <div className='Contact-item'>
          <h1>Contact us</h1>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField
              helperText="Please enter your Email"
              label='Email'
              name='email'
              onChange={handleChange}
              value={userdata.email}
              required
            />
            <TextField
              helperText="Mobile Number"
              label='Number'
              name='number'
              onChange={handleChange}
              value={userdata.number}
              required
            />
          </Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Profession}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Profession" />}
            />
          <TextField
            id='filled-multiline-flexible'
            label='Message'
            name='message'
            multiline
            maxRows={3}
            variant='filled'
            onChange={handleChange}
            value={userdata.message}
            required
            />
          <Button variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
   </>
  );
};

export default Contact;
