import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Natnael Yonas</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating beautiful, 
              functional web applications that make a difference.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/natnael2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/natnael-yonas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a> */}
              <a
                href="yonasnatnael122@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                yonasnatnael122@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2">yonasnatnael122@gmail.com</p>
            <p className="text-gray-400 mb-4">+251935852364 / + 251915970681</p>
            <p className="text-gray-400">Ethiopia, Addis Abeba</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> Natnael Yonas
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;