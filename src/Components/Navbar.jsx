import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { routes } from '../routes';

const Navbar = () => {
  const { userRole, logout } = useUser();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {routes[userRole]?.map((route, index) => (
            <Link 
              key={index} 
              to={route.path} 
              className="text-white hover:bg-blue-700 px-3 py-2 rounded"
            >
              {route.label}
            </Link>
          ))}
        </div>
        {userRole !== 'guest' && (
          <button 
            onClick={logout} 
            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
