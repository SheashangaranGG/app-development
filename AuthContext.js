// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsAuthenticated(true);
      setRole(storedUser.role);
      setEmail(storedUser.email);
    }
    setLoading(false); // Stop loading once the user state is checked
  }, []);

  const login = (role, email) => {
    setIsAuthenticated(true);
    setRole(role);
    setEmail(email);
    localStorage.setItem('user', JSON.stringify({ role, email }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
    setEmail(null);
    localStorage.removeItem('user');
    navigate('/UserLogin');
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or screen
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
