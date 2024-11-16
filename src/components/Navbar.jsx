import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-black text-white px-8 md:px-16 lg:px-20">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Rayan</div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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

        <div className="hidden md:flex space-x-6 lg:space-x-10">
          <motion.a
            href="#about"
            className="hover:text-gray-400 hover:underline text-lg"
            whileHover={{ scale: 1.1 }}
          >
            About Me
          </motion.a>
          <motion.a
            href="#service"
            className="hover:text-gray-400 hover:underline text-lg"
            whileHover={{ scale: 1.1 }}
          >
            Services
          </motion.a>
          <motion.a
            href="#project"
            className="hover:text-gray-400 hover:underline text-lg"
            whileHover={{ scale: 1.1 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="hover:text-gray-400 hover:underline text-lg"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </div>
        <motion.button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline lg:px-6 lg:py-2
              transform transition-transform duration-300 hover:scale-105 rounded-full"
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect Me
        </motion.button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute top-14 left-0 right-0 bg-black text-white py-4 flex flex-col items-center space-y-4 md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href="#about"
                className="hover:text-gray-400 text-lg"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                About Me
              </motion.a>
              <motion.a
                href="#service"
                className="hover:text-gray-400 text-lg"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                Services
              </motion.a>
              <motion.a
                href="#project"
                className="hover:text-gray-400 text-lg"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="hover:text-gray-400 text-lg"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                Contact
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
