import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load blog post from localStorage
    const savedPosts = localStorage.getItem('portfolio_blog_posts');
    if (savedPosts) {
      const posts = JSON.parse(savedPosts);
      const foundPost = posts.find(p => p.slug === slug);
      setPost(foundPost || null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                code: ({ children, className }) => {
                  const isBlock = className?.includes('language-');
                  if (isBlock) {
                    return (
                      <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto mb-4">
                        <code className="text-sm text-gray-800 dark:text-gray-200">
                          {children}
                        </code>
                      </pre>
                    );
                  }
                  return (
                    <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">
                      {children}
                    </code>
                  );
                },
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                    {children}
                  </ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;