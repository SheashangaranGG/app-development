import React from 'react';
import '../asserts/Camp.css'; // Make sure this path is correct based on your folder structure
import Navbar from './Navbar';

const Camp = () => {
  return (
        <div><Navbar/>
    <div className="camp-container">
      <h1>Welcome to the Camp!</h1>
      <p>Stay tuned for more information about our upcoming events.</p>
    </div>
        </div>
  );
};

export default Camp;
