import React from "react";
import { motion } from "framer-motion"; 
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import FullProject from "../assets/fullProject.png";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "Ecommerce Website",
    image: bookMSImage,
    github: "https://github.com/rayan472/travel_websit",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "Full stack Project",
    image: employeeMSImage,
    github: "https://ecommerce-frontend-web-site-iyly0sfe3-rayan472s-projects.vercel.app/",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "Backend Project",
    image: FullProject,
    github: "https://github.com/workationist/workationist-frontend",
  },
];

const Projects = () => {
  return (
    <motion.div
      className="bg-black text-white py-20"
      id="project"
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
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover transform transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Project Name */}
              <motion.h3
                className="text-2xl font-bold mb-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.name}
              </motion.h3>

              {/* Project Description */}
              <motion.p
                className="text-gray-400 mb-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {project.technologies}
              </motion.p>

              {/* GitHub Link */}
              <motion.a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
