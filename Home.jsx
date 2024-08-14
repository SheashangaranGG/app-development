import React, { useEffect } from 'react';
import '../asserts/mainpage.css';
import image1 from './images/chess-uriel.gif';
import image2 from './images/chess.gif';
import image3 from './images/good-chess.gif';
import image4 from './images/piotas-chess-kpftr.gif';
import Navbar from './Navbar';

const Home = () => {

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-in2');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className='other'>
        <div className='corner1'>
        <img src={image1} alt="Tournament 1" style={{height:"280px",width:"280px"}}/><br/>
        <img src={image2} alt="Tournament 2" style={{height:"280px",width:"280px"}}/>
        </div>
        <div className='content_intro'>
          <h3>Unleash Your Potential with World-Class Chess Training</h3>
          <p>
            At Grandmasters Chess Academy, we believe that every chess enthusiast has the potential to become a master.
            Our academy is dedicated to providing top-tier chess education and training to players of all ages and skill levels.
            Whether you are a beginner looking to learn the basics or an advanced player aiming to compete at the highest levels,
            our expert coaches and comprehensive curriculum will help you achieve your goals.
          </p>
        </div>
        <div className='corner2'>
        <img src={image3} alt="Tournament 3" style={{height:"280px",width:"280px"}}/><br/>  
        <img src={image4} alt="Tournament 4" style={{height:"280px",width:"280px"}}/>
        </div>
      </div>
      <section className='section1'>
        <header className="header">
          <h1>Welcome to Grandmasters Chess Academy</h1>
        </header> 
        <div className="content-section">
          <div className="content slide-in2">
            <h2 className='head-content'>Why Choose Us?</h2>
            <p className='para-content'>Expert Coaches: Learn from internationally recognized grandmasters and experienced instructors.<br/>
Comprehensive Curriculum: Our structured programs cater to all skill levels, from novice to expert.<br/>
Flexible Learning Options: Choose from online classes, in-person training, and private coaching sessions.<br/>
Community and Events: Participate in regular tournaments, workshops, and social events to enhance your learning experience.<br/></p>
          </div>
          <div className="image">
            <img className="img-con" src="http://ts2.mm.bing.net/th?id=OIP.s-QaGntkit33x21VK1UDqAHaEK&pid=15.1" alt="Land for Sale" />
          </div>
        </div>
        <div className="content-section">
          <div className="content slide-in2">
            <h2 className='head-content'>Programs Offered</h2>
            <p className='para-content'>Beginner Classes: Introduction to chess rules, basic strategies, and fundamental skills.<br/>
Intermediate Training: Advanced tactics, opening principles, and mid-game strategies.<br/>
Advanced Coaching: Personalized training plans, endgame techniques, and tournament preparation.<br/>
Kids & Youth Programs: Fun and engaging classes tailored for young learners.<br/>
Corporate Workshops: Team-building sessions and strategic thinking workshops for businesses.</p>
          </div>
          <div className="image">
            <img className="img-con" src="http://ts2.mm.bing.net/th?id=OIP.s-QaGntkit33x21VK1UDqAHaEK&pid=15.1" alt="Houses for Rent" />
          </div>
        </div>
        <div className="content-section">
          <div className="content slide-in2">
            <h2 className='head-content'>How to Apply</h2>
            <p className='para-content'>Explore Our Programs: Review the detailed descriptions of our programs to find the one that best suits your needs.
Register Online: Fill out our simple online application form to secure your spot.<br/>
Schedule a Consultation: Book a meeting with one of our coaches to discuss your goals and create a personalized training plan.<br/>
Start Learning: Begin your journey to chess mastery with the support of our dedicated team.</p>
          </div>
          <div className="image">
            <img className="img-con" src="http://ts2.mm.bing.net/th?id=OIP.s-QaGntkit33x21VK1UDqAHaEK&pid=15.1" alt="Houses for Sale" />
          </div>
        </div>
        <div className="content-section">
          <div className="content slide-in2">
            <h2 className='head-content'>Success Stories</h2>
            <p className='para-content'>Read about our students who have gone on to achieve great success in national and international chess competitions. Their journeys inspire us and highlight the effectiveness of our training programs.</p>
          </div>
          <div className="image">
            <img className="img-con" src="http://ts2.mm.bing.net/th?id=OIP.s-QaGntkit33x21VK1UDqAHaEK&pid=15.1" alt="Houses for Sale" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
