import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginType, setLoginType] = useState('user');
  const navigate = useNavigate();

  const toggleLoginType = () => {
    if (loginType === 'user') {
      setLoginType('admin');
      navigate('/AdminLogin');
    } else {
      setLoginType('user');
      navigate('/UserLogin');
    }
  };

  return (
    <LoginContext.Provider value={{ loginType, toggleLoginType }}>
      {children}
    </LoginContext.Provider>
  );
};
