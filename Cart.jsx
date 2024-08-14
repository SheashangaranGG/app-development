import React, { useState } from 'react';
import Content from './Content.jsx';
import CourseCart from './CourseCart.jsx';
import './Cart.css';
// import './App.css'

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [currentView, setCurrentView] = useState('beginner');

  const addCourse = (course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  const removeCourse = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className='nav'>
    <div className='navbar2'>
    <h2 onClick={() => setCurrentView('beginner')} className='hover-coursenav'>Beginner</h2>
    <h2 onClick={() => setCurrentView('intermediate') }className='hover-coursenav'>Intermediate</h2>
    <h2 onClick={() => setCurrentView('advanced')} className='hover-coursenav'>Advanced</h2>
    <h2 onClick={() => setCurrentView('cart')} className='hover-coursenav'>Cart ({cart.length})</h2>
    </div>
      <br></br>
      
      {currentView === 'cart' ? (
        <CourseCart cart={cart} removeCourse={removeCourse} clearCart={clearCart} />
      ) : (
        <Content currentview={currentView} addCourse={addCourse} />
      )}
    </div>
  );
};

export default Cart;