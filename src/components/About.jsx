import React, { useState, useEffect, useRef } from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);       
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (startCounting) {
      const experienceInterval = setInterval(() => {
        setExperience((prev) => (prev < 3 ? prev + 1 : 3));
      }, 100);

      const projectsInterval = setInterval(() => {
        setProjects((prev) => (prev < 50 ? prev + 1 : 50));
      }, 20);

      const clientsInterval = setInterval(() => {
        setClients((prev) => (prev < 10 ? prev + 1 : 10));
      }, 150);

      return () => {
        clearInterval(experienceInterval);
        clearInterval(projectsInterval);
        clearInterval(clientsInterval);
      };
    }
  }, [startCounting]);

  return (
    <div className="bg-black text-white py-20" id="about" ref={aboutRef}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                  {experience}+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                  {projects}+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                  {clients}+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
