import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Plus, Edit, Trash2, Eye, Save, X } from 'lucide-react';
import toast from 'react-hot-toast';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  const ADMIN_PASSWORD = 'admin123'; // In a real app, this would be properly secured

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    // Load messages
    const savedMessages = localStorage.getItem('portfolio_messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    // Load projects
    const savedProjects = localStorage.getItem('portfolio_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      loadData();
      toast.success('Welcome to admin panel!');
    } else {
      toast.error('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setPassword('');
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('portfolio_messages', JSON.stringify(updatedMessages));
    toast.success('Message deleted');
  };

  const deleteProject = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
    toast.success('Project deleted');
  };

  const saveProject = (projectData) => {
    if (editingProject) {
      // Update existing project
      const updatedProjects = projects.map(p => 
        p.id === editingProject.id ? { ...projectData, id: editingProject.id } : p
      );
      setProjects(updatedProjects);
      localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
      toast.success('Project updated');
    } else {
      // Create new project
      const newProject = { ...projectData, id: Date.now().toString() };
      const updatedProjects = [...projects, newProject];
      setProjects(updatedProjects);
      localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
      toast.success('Project created');
    }
    setEditingProject(null);
    setIsCreatingProject(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Access</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Enter the admin password to access the dashboard
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Access Dashboard
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            {/* Demo password: admin123 */}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'messages'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <Mail className="h-5 w-5 inline mr-2" />
            Messages ({messages.length})
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <Eye className="h-5 w-5 inline mr-2" />
            Projects ({projects.length})
          </button>
        </div>

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            {messages.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No messages yet</p>
              </div>
            ) : (
              messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {message.subject}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        From: {message.name} ({message.email})
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(message.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteMessage(message.id)}
                      className="text-red-600 hover:text-red-700 p-2"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{message.message}</p>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Manage Projects
              </h2>
              <button
                onClick={() => setIsCreatingProject(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingProject(project)}
                        className="text-blue-600 hover:text-blue-700 p-1"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="text-red-600 hover:text-red-700 p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Form Modal */}
            {(editingProject || isCreatingProject) && (
              <ProjectForm
                project={editingProject}
                onSave={saveProject}
                onCancel={() => {
                  setEditingProject(null);
                  setIsCreatingProject(false);
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Project Form Component
const ProjectForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    longDescription: project?.longDescription || '',
    image: project?.image || '',
    technologies: project?.technologies.join(', ') || '',
    githubUrl: project?.githubUrl || '',
    liveUrl: project?.liveUrl || '',
    category: project?.category || 'Frontend'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim())
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project ? 'Edit Project' : 'Create Project'}
            </h3>
            <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Short Description
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Long Description
              </label>
              <textarea
                value={formData.longDescription}
                onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Image URL
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="React, JavaScript, Node.js"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Live URL
                </label>
                <input
                  type="url"
                  value={formData.liveUrl}
                  onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="Frontend">Frontend</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Backend">Backend</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Save className="h-5 w-5" />
                <span>Save Project</span>
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;