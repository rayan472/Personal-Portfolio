import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 right-0 left-0 z-50 bg-black text-white px-8 md:px-16 lg:px-25'>
      <div className='container py-2 flex justify-around items-center'>
        <div className='text-2xl font-bold'>Rayan</div>
        <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className='hidden md:flex space-x-6'>
          <a href="#about" className='hover:text-gray-400 hover:underline'>About Me</a>
          <a href="#service" className='hover:text-gray-400 hover:underline'>Services</a>
          <a href="#project" className='hover:text-gray-400 hover:underline'>Projects</a>
          <a href="#contact" className='hover:text-gray-400 hover:underline'>Contact</a>
        </div>
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          onClick={() => navigate('/contact')}
        >
          Connect Me
        </button>

        {menuOpen && (
          <div className='absolute top-14 left-0 right-0 bg-black text-white py-4 flex flex-col items-center space-y-4 md:hidden'>
            <a href="#about" className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>About Me</a>
            <a href="#service" className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#project" className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>Contact</a>
            <button
              className='bg-gradient-to-r from-green-400 to-blue-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
              onClick={() => { navigate('/contact'); setMenuOpen(false); }}
            >
              Connect Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
