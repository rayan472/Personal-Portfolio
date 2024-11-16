import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroImage from '../assets/hero-image.png';
import About from './About';
import Service from './Service';
import Projects from './Projects';
import Contact from './Contact';
import Resume from '../assets/Rayan.pdf';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='bg-black text-white text-center py-20'>
        {/* Hero Image */}
        <motion.img
          src={HeroImage}
          alt=""
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.1 }}
        />

        {/* Hero Text */}
        <motion.h1
          className='text-4xl font-bold'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          I'm{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Rayan Shah
          </span>
          , Frontend Developer
        </motion.h1>

        <motion.p
          className='mt-4 text-lg text-gray-300'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          I specialize in building modern and responsive web applications.
        </motion.p>

        {/* Buttons */}
        <div className='mt-8 space-x-4'>
          <motion.button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform px-4 py-2 rounded-full'
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact With Me
          </motion.button>

          <motion.a
            href={Resume}
            download="Rayan.pdf"
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform px-4 py-2 rounded-full cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>
      </div>

      {/* Additional Sections */}
      <About />
      <Service />
      <Projects />
      <Contact />
    </>
  );
};

export default Hero;
