import React from 'react';
import { motion } from 'framer-motion'; 
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      className="bg-black text-white py-20"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Contact Me
        </motion.h2>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info */}
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-green-400 to-blue-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:rayanaly000@gmail.com" className="hover:underline">
                rayanaly000@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+9401082012</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span className="cursor-pointer">Gilgit-Baltistan Gilgit</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1 w-full"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <form className="space-y-4">
              {/* Name Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
