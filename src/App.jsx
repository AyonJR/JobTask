import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <Outlet />
    </UserProvider>
  );
};

export default App;
