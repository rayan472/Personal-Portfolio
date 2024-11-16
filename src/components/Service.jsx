import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Service = () => {
  return (
    <motion.div
      className="bg-black text-white py-20"
      id="service"
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
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: service.id * 0.2 }}
            >
              {/* Service ID */}
              <motion.div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: service.id * 0.3 }}
              >
                {service.id}
              </motion.div>

              {/* Service Title */}
              <motion.h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: service.id * 0.3 }}
              >
                {service.title}
              </motion.h3>

              {/* Service Description */}
              <motion.p
                className="mt-2 text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: service.id * 0.4 }}
              >
                {service.description}
              </motion.p>

              {/* Read More Link */}
              <motion.a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Read More
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
