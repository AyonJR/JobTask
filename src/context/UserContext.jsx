import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('guest');

  useEffect(() => {
    const fetchUserRole = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const { default: jwtDecode } = await import('jwt-decode');
        const decodedToken = jwtDecode(token);
        setUserRole(decodedToken.role);
      } else {
        setUserRole('guest');
      }
    };
    fetchUserRole();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUserRole('guest');
  };

  return (
    <UserContext.Provider value={{ userRole, logout }}>
      {children}
    </UserContext.Provider>
  );
};
