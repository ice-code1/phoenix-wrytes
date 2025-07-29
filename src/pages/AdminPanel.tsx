import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  Eye,
  Calendar,
  User,
  Lock,
  Unlock
} from 'lucide-react';
import { supabase, signIn, signOut, getCurrentUser } from '../lib/supabase';
import type { BlogPost } from '../types';

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'Writing Tips',
    featured_image: ''
  });

  const categories = ['Creative', 'CV Tips', 'Storytelling', 'Writing Tips', 'Business'];

  // Mock posts for demonstration
  const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Art of Storytelling: Crafting Narratives That Captivate',
      content: 'Every great story begins with a spark of curiosity...',
      excerpt: 'Discover the fundamental elements that make stories unforgettable.',
      category: 'Storytelling',
      featured_image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
      created_at: '2024-01-15',
      updated_at: '2024-01-15'
    },
    {
      id: '2',
      title: 'Resume Writing in 2024: What Recruiters Really Want',
      content: 'The job market has evolved, and so should your resume...',
      excerpt: 'Learn the latest trends in resume writing and what recruiters look for.',
      category: 'CV Tips',
      featured_image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
      created_at: '2024-01-12',
      updated_at: '2024-01-12'
    }
  ];

  useEffect(() => {
    checkUser();
    setPosts(mockPosts); // Using mock data for demonstration
    setLoading(false);
  }, []);

  const checkUser = async () => {
    const currentUser = await getCurrentUser();
    setUser(currentUser);
    setShowLogin(!currentUser);
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await signIn(loginData.email, loginData.password);
    
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      setUser(data.user);
      setShowLogin(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    setShowLogin(true);
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPost: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      ...postData,
      created_at: editingPost?.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    if (editingPost) {
      setPosts(posts.map(p => p.id === editingPost.id ? newPost : p));
    } else {
      setPosts([newPost, ...posts]);
    }

    resetEditor();
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setPostData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      category: post.category,
      featured_image: post.featured_image
    });
    setShowEditor(true);
  };

  const handleDeletePost = (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== postId));
    }
  };

  const resetEditor = () => {
    setShowEditor(false);
    setEditingPost(null);
    setPostData({
      title: '',
      content: '',
      excerpt: '',
      category: 'Writing Tips',
      featured_image: ''
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-gold-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-white text-lg">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gold-400/20 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Lock className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Admin Access</h1>
            <p className="text-gray-300">Enter credentials to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                placeholder="admin@phoenixwrites.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Unlock className="w-5 h-5" />
              <span>Sign In</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Website
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
      {/* Header */}
      <div className="bg-black/50 border-b border-gold-400/20 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-serif font-bold text-white">Phoenix Admin</h1>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">Blog Management</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome back, Phoenix</span>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif font-bold text-white">Blog Posts</h2>
          <button
            onClick={() => setShowEditor(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300"
            >
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-gold-400/20 text-gold-400 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(post.created_at).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    title="View Post"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleEditPost(post)}
                    className="p-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
                    title="Edit Post"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    title="Delete Post"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              No posts yet
            </h3>
            <p className="text-gray-300 mb-6">
              Create your first blog post to get started.
            </p>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              <span>Create First Post</span>
            </button>
          </div>
        )}
      </div>

      {/* Editor Modal */}
      {showEditor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gold-400/30"
          >
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-2xl font-serif font-bold text-white">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h3>
            </div>

            <form onSubmit={handleSavePost} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={postData.title}
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                    placeholder="Post title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={postData.category}
                    onChange={(e) => setPostData({...postData, category: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  value={postData.featured_image}
                  onChange={(e) => setPostData({...postData, featured_image: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                  placeholder="https://images.pexels.com/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={postData.excerpt}
                  onChange={(e) => setPostData({...postData, excerpt: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                  placeholder="Brief description of the post"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Content
                </label>
                <textarea
                  value={postData.content}
                  onChange={(e) => setPostData({...postData, content: e.target.value})}
                  rows={12}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                  placeholder="Write your post content here..."
                  required
                />
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
                >
                  <Save className="w-5 h-5" />
                  <span>{editingPost ? 'Update Post' : 'Create Post'}</span>
                </button>

                <button
                  type="button"
                  onClick={resetEditor}
                  className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AdminPanel;