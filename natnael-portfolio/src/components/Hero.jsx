import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { Download, ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Full Stack Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Natnael Yonas
            </span>
          </h1>

          <div className="h-16 sm:h-20 flex items-center justify-center">
            <h2 className="text-xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications
            that make a difference. Let's build something amazing together.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>View Projects</span>
            <ExternalLink className="h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
          </button>

          <button
            onClick={scrollToContact}
            className="group bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Mail className="h-5 w-5" />
            <span>Contact Me</span>
          </button>

          <button className="group bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
            <a
              href="/resume.pdf"
              download
              className="group bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </a>
          </button>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/natnael2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/natnael-yonas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
