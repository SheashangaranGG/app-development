import React from 'react';
import './CourseCart.css'
import { Button } from '@mui/material';
const CourseCart = ({ cart, removeCourse, clearCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{listStyleType:'none'}}>
          {cart.map((course, index) => (
            <li key={index}>
            <div className='cartedit'>
            <img src={course.img} style={{height:"150px",width:"150px",borderRadius:"150px"}}/>
            {course.name}
            <Button variant='contained' onClick={() => removeCourse(index)} sx={{backgroundColor:"red"}}>Remove</Button>
            </div>
            </li>
          ))}
        </ul>
      )}
      <Button variant='contained' onClick={clearCart}>Clear Cart</Button>
    </div>
  );
};

export default CourseCart;