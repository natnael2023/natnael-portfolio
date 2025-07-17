import React from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
              {project.title}
            </h2>
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200"
              >
                <Github className="h-5 w-5" />
                <span>View Code</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.longDescription}
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
            <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium">
              {project.category}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;