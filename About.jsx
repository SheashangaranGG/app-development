import React from 'react';
import Navbar from './Navbar';
import firstimg from './images/First.png';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Button } from '@mui/material';
import '../asserts/About.css';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.png'
import join from './images/Join.jpg'
import camp from './images/Camp.jpg'
import tournaments from './images/Tournement.jpg'
import Footer from './Footer.jsx';
const About = () => {
  return (
    <div className='Aboutus'>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <h1 style={{textAlign:"center",userSelect:'none'}}> About us</h1>
      <div className='about-container'>
        <div className='image-container'>
          <img src={firstimg} alt='First' />
        </div>
        <div className='content-container'>
          <p>In 2004, Adam Weissbarth was an enthusiastic chess player and a full-time graduate student in Statistics...</p>
          <p>As soon as he started, he found that the best hour of his week was the time he spent teaching chess to the kids...</p>
          <p>After some thought and a lot of preparation, Adam decided to make a career change and teach chess to children full-time...</p>
          <p>You can see one of their first lessons below! Later that year, two of their students won national championships for the first (but not last) time...</p>
          <p>For the last few years, we’ve been teaching chess to students in nearly 300 schools each week...</p>
          <p>In August of 2021, we joined the Play Magnus Group, the company of world chess champion Magnus Carlsen...</p>
          <p>We also teach chess online. We offer games against other kids, tournaments, live lesson broadcasts/shows...</p>
          <p>In August of 2021, we joined the Play Magnus Group, the company of world chess champion Magnus Carlsen.  In March of 2022, we became Magnus Chess Academy, his official academy!</p>
          <p>We also teach chess online. We offer games against other kids, tournaments, live lesson broadcasts/shows, small group lessons, and all sorts of other pre-recorded lessons, workouts, and exercises.</p>
        </div>
      </div>
      <hr></hr>
      <div className='content-journey'>
          <h2 style={{textAlign:"center",userSelect:'none'}}>OUR JOURNEY</h2>
          <p>2004: Adam Weissbarth, a graduate student in Statistics and an avid chess player, took up a job as a chess coach at a local elementary school. The joy he found in teaching chess led him to make a career change.</p>
          <p>2006: Silver Knights Chess was founded by Adam, focusing on teaching chess to children full-time.</p>
          <p>2008: Adam’s brother Daniel, also a lifelong chess player and Adam’s first student, joined the academy. Together, they expanded the reach and impact of their teaching</p>
          <p>2008: For the first time, two of their students won national championships, marking the beginning of many successes to come.</p>
          <p>2021: The academy joined the Play Magnus Group, led by World Chess Champion Magnus Carlsen, further enhancing its resources and reach.</p>
          <p>2022: Rebranded as Magnus Chess Academy, we became the official academy of Magnus Carlsen.</p>
        </div>
        <div className='content-journey'>
        <hr></hr>
  <h2 style={{ textAlign: "center",userSelect:'none' }}>Our Programs</h2>
  <div className='level'>
    <div className='box1'>
      <div className='box-content'>
        <img src={image1} alt='Newbie' />
        <br />Explore Courses<br />
        <ArrowCircleRightIcon />
      </div>
    </div>
    <div className='box1'>
      <div className='box-content'>
        <img src={image2} alt='Average' />
        <br />Explore Courses<br />
        <ArrowCircleRightIcon />
      </div>
    </div>
    <div className='box1'>
      <div className='box-content'>
        <img src={image3} alt='Skilled' />
        <br />Explore Courses<br />
        <ArrowCircleRightIcon />
      </div>
    </div>
    <div className='box1'>
      <div className='box-content'>
        <img src={image4} alt='Skilled' />
        <br />Explore Courses<br />
        <ArrowCircleRightIcon />
      </div>
    </div>
  </div>
  <hr></hr>
      <div className='content-journey'>
          <h2 style={{textAlign:"center",userSelect:'none'}}>Join us</h2>
          <div className='level2'>
    <div className='box2'>
      <div className='box-content2'>
        <text style={{fontFamily:'', fontWeight:'100px',fontSize:'25px'}}>Online Courses</text>
        <img src={join} alt='Online Courses' />
        <Button variant="outlined">Signup for Free</Button>
      </div>
    </div>
    <div className='box2'>
      <div className='box-content2'>
      <text style={{fontFamily:'', fontWeight:'100px',fontSize:'25px'}}>Tournements</text>
        <img src={tournaments} alt='Tournments' />
        <br></br>
        <Button variant='outlined'> Signup for Tournments</Button>
      </div>
    </div>
    <div className='box2'>
      <div className='box-content2'>
      <text style={{fontFamily:'', fontWeight:'100px',fontSize:'25px'}}>JOIN CAMP</text>
        <img src={camp} alt='Skilled' />
        <Button variant='outlined'> Join Champ</Button>
      </div>
    </div>
      </div>
      </div>
    </div>
        <div>
          <Footer/>
        </div>
      </div>
  );
}

export default About;