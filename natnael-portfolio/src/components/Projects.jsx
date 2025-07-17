import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Load projects from localStorage or use default data
    const savedProjects = localStorage.getItem('portfolio_projects');
    const defaultProjects = [
      {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform built with React and Node.js',
        longDescription: 'A comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern technologies and best practices.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        category: 'Full Stack'
      },
      {
        id: '2',
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates',
        longDescription: 'A modern task management application with drag-and-drop functionality, real-time collaboration, team management, and detailed analytics dashboard.',
        image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'JavaScript', 'Socket.io', 'PostgreSQL'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        category: 'Frontend'
      },
      {
        id: '3',
        title: 'Weather Dashboard',
        description: 'A beautiful weather dashboard with location-based forecasts',
        longDescription: 'An intuitive weather dashboard providing detailed forecasts, historical data, and weather maps. Features geolocation support and customizable widgets.',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Vue.js', 'Chart.js', 'Weather API'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        category: 'Frontend'
      }
    ];

    const projectsData = savedProjects ? JSON.parse(savedProjects) : defaultProjects;
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  const filters = ['All', 'Frontend', 'Full Stack', 'Backend'];

  const filterProjects = (filter) => {
    setSelectedFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            innovative solutions
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => filterProjects(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
              }`}
            >
              <Filter className="h-4 w-4" />
              <span>{filter}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;