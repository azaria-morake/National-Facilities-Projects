// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Decode token to get user info
      const decodedToken = jwt_decode(token);
      setUser(decodedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">NSF Project</Link>
        <div className="flex items-center">
          <Link to="/resources" className="text-white mx-2">Resources</Link>
          <Link to="/championship" className="text-white mx-2">Championship</Link>
          {user ? (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center text-white">
                <UserCircleIcon className="h-8 w-8 mr-2" />
                <span>{user.username}</span>
              </Menu.Button>
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/dashboard"
                      className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Dashboard
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <>
              <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-md mr-2">Sign Up</Link>
              <Link to="/signin" className="bg-transparent text-white px-4 py-2 rounded-md border border-white">Sign In</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;