import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import InteractivePen from './components/InteractivePen';
import PhoenixTransition from './components/PhoenixTransition';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageTransition = () => {
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Interactive Pen - Only on non-admin pages */}
        <Routes>
          <Route path="/admin-phoenix-panel" element={null} />
          <Route path="*" element={<InteractivePen />} />
        </Routes>

        {/* Phoenix Transition */}
        <PhoenixTransition 
          isTransitioning={isTransitioning} 
          onComplete={handleTransitionComplete} 
        />

        {/* Navigation - Only on non-admin pages */}
        <Routes>
          <Route path="/admin-phoenix-panel" element={null} />
          <Route path="*" element={<Navigation />} />
        </Routes>

        {/* Main Content */}
        <main className="relative">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin-phoenix-panel" element={<AdminPanel />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Footer - Only on non-admin pages */}
        <Routes>
          <Route path="/admin-phoenix-panel" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gold-400/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Phoenix Writes</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into powerful words. From creative storytelling to professional 
              documentation, every piece is crafted with precision and passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.291L6.45 14.36c.548.548 1.297.878 2.11.878 1.65 0 2.993-1.343 2.993-2.993S10.21 9.252 8.56 9.252s-2.993 1.343-2.993 2.993c0 .813.33 1.562.878 2.11l-1.337 1.329c-.801-.88-1.291-2.031-1.291-3.328 0-2.706 2.198-4.904 4.904-4.904s4.904 2.198 4.904 4.904-2.198 4.904-4.904 4.904z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services" className="hover:text-gold-400 transition-colors">Creative Writing</a></li>
              <li><a href="/services" className="hover:text-gold-400 transition-colors">Ghostwriting</a></li>
              <li><a href="/services" className="hover:text-gold-400 transition-colors">Content Writing</a></li>
              <li><a href="/services" className="hover:text-gold-400 transition-colors">Resume Writing</a></li>
              <li><a href="/services" className="hover:text-gold-400 transition-colors">Business Writing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/portfolio" className="hover:text-gold-400 transition-colors">Portfolio</a></li>
              <li><a href="/blog" className="hover:text-gold-400 transition-colors">Blog</a></li>
              <li><a href="/about" className="hover:text-gold-400 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Phoenix Writes. All rights reserved. Rising from words, transforming through stories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;