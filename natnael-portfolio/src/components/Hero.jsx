import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import resume from "../assets/natnael-yonas-cv.pdf";
import profileImg from "../assets/natii-profile.JPG";

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Glowing floating blobs */}
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-purple-500 opacity-20 rounded-full filter blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-3xl animate-pulse z-0"></div>

      <ParticleBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Motion.img
            src={profileImg}
            alt="Natnael Yonas"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 shadow-xl object-cover border-4 border-white dark:border-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          />

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <Motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Natnael Yonas
            </Motion.span>
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
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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

          <a
            href={resume}
            download
            className="group bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </a>
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
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 hover:animate-bounce transition-all duration-300"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/natnael-yonas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 hover:animate-bounce transition-all duration-300"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </Motion.div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 animate-bounce flex justify-center items-center text-gray-500 dark:text-gray-300">
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
