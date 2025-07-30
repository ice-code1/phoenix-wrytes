"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Search,X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['all', 'Creative', 'CV Tips', 'Storytelling', 'Writing Tips', 'Business'];

  
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);

  }

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error.message);
      } else {
        setPosts(data);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-gold-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-white text-lg">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, tips, and inspiration from the world of writing. Discover techniques, 
              trends, and stories that will elevate your craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gold-400/20 group hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={filteredPosts[0].featured_image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="text-gold-400 text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                    {filteredPosts[0].title}
                  </h2>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(filteredPosts[0].created_at)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Phoenix</span>
                      </div>
                    </div>

                    <span
                      className="text-gold-400 font-semibold text-sm cursor-pointer"
                      onClick={() => handlePostClick(filteredPosts[0])}
                    >
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >

                <div className="relative overflow-hidden">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 backdrop-blur-sm text-gold-400 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.created_at)}</span>
                    </div>
                    <span
                      className="text-gold-400 font-semibold text-sm cursor-pointer"
                      onClick={() => handlePostClick(post)} // ✅ Trigger modal here
                    >
                      Read More
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                No articles found
              </h3>
              <p className="text-gray-300">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-[#001f3f] p-6 rounded-2xl shadow-xl max-w-xl w-full border border-gold-400 text-white">
            <h2 className="text-xl font-bold mb-4 text-gold-400">{selectedPost.title}</h2>

            <img
              src={selectedPost.featured_image}
              alt={selectedPost.title}
              className="w-full h-48 object-cover rounded-lg mb-4 border border-gold-400"
            />

            <p className="mb-4 text-sm text-gray-300 leading-relaxed">
              {selectedPost.content}
            </p>

            <div className="flex justify-end">
              <button
                className="bg-gold-400 hover:bg-gold-500 text-white font-semibold py-2 px-6 rounded-lg transition"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}



        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Stay <span className="text-gold-400">Inspired</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to receive writing tips, creative insights, and new articles directly in your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  };

export default Blog;