import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load blog posts from localStorage or use default data
    const savedPosts = localStorage.getItem('portfolio_blog_posts');
    const defaultPosts = [
      {
        id: '1',
        title: 'Building Modern Web Applications with React and JavaScript',
        excerpt: 'Exploring the best practices and patterns for creating scalable React applications with JavaScript.',
        content: `# Building Modern Web Applications with React and JavaScript

## Introduction

React and JavaScript have become the gold standard for building modern web applications. In this post, we'll explore the best practices and patterns that will help you create scalable, maintainable applications.

## Why React?

React brings component-based architecture to JavaScript, providing:
- Better code organization with reusable components
- Improved performance with virtual DOM
- Large ecosystem and community support
- Better collaboration in team environments

## Setting Up Your Project

\`\`\`bash
npx create-react-app my-app
\`\`\`

## Component Architecture

When building React applications, it's important to structure your components properly:

\`\`\`javascript
const Button = ({ variant, onClick, children }) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## Conclusion

By following these patterns and best practices, you'll be able to build robust, scalable React applications that are easy to maintain and extend.`,
        publishDate: '2024-01-15',
        readTime: '5 min read',
        tags: ['React', 'JavaScript', 'Web Development'],
        slug: 'building-modern-web-applications'
      },
      {
        id: '2',
        title: 'The Future of Frontend Development',
        excerpt: 'A look at emerging trends and technologies shaping the future of frontend development.',
        content: `# The Future of Frontend Development

## Introduction

Frontend development is evolving rapidly. Let's explore the trends and technologies that will shape our industry in the coming years.

## Key Trends

1. **Server Components**: React Server Components are changing how we think about rendering
2. **Edge Computing**: Moving computation closer to users
3. **Web Assembly**: Near-native performance in the browser
4. **No-Code/Low-Code**: Democratizing development

## Conclusion

The future of frontend development is exciting and full of opportunities for innovation.`,
        publishDate: '2024-01-10',
        readTime: '8 min read',
        tags: ['Frontend', 'Trends', 'Technology'],
        slug: 'future-of-frontend-development'
      },
      {
        id: '3',
        title: 'Optimizing React Performance',
        excerpt: 'Tips and techniques for improving the performance of your React applications.',
        content: `# Optimizing React Performance

## Introduction

Performance is crucial for user experience. Here are proven techniques to optimize your React applications.

## Key Strategies

1. **Memoization**: Use React.memo, useMemo, and useCallback
2. **Code Splitting**: Implement lazy loading with React.lazy
3. **Virtual Scrolling**: Handle large lists efficiently
4. **Bundle Analysis**: Monitor and optimize bundle size

## Implementation Examples

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item));
  }, [data]);

  return <div>{/* render processedData */}</div>;
});
\`\`\`

## Conclusion

Performance optimization is an ongoing process that requires careful measurement and iteration.`,
        publishDate: '2024-01-05',
        readTime: '6 min read',
        tags: ['React', 'Performance', 'Optimization'],
        slug: 'optimizing-react-performance'
      }
    ];

    const blogPosts = savedPosts ? JSON.parse(savedPosts) : defaultPosts;
    setPosts(blogPosts);
    
    // Save default posts if none exist
    if (!savedPosts) {
      localStorage.setItem('portfolio_blog_posts', JSON.stringify(defaultPosts));
    }
  }, []);

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
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology, and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {posts.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <BookOpen className="h-5 w-5 mr-2" />
              View All Posts
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;