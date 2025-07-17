import React from 'react';
import { motion as Motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
        { name: 'HTML', level: 95, color: 'bg-gray-800' },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 75, color: 'bg-green-500' },
        { name: 'Python', level: 75, color: 'bg-blue-500' },
        { name: 'PostgreSQL', level: 50, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 78, color: 'bg-green-600' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Zap,
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-500' },
        { name: 'odoo', level: 55, color: 'bg-blue-600' },
        { name: 'AWS', level: 65, color: 'bg-orange-400' },
        { name: 'Figma', level: 65, color: 'bg-purple-500' },
      ]
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to 
            bring ideas to life
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <Motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`${skill.color} h-2 rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
                      </Motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'JavaScript', 'Node.js', 'Python', 'MongoDB',
              'Tailwind CSS', 'Express', 'Git', 'AWS'
            ].map((tech, index) => (
              <Motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {tech}
                </div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Skills;