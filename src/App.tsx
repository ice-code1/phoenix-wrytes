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
            <h3 className="text-2xl font-serif font-bold text-white mb-4">phoenixwrytes</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into powerful words. From creative storytelling to professional 
              documentation, every piece is crafted with precision and passion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/phoe_nixwrytes1?igsh=NDc3cDh0c3J1eGwy" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.291L6.45 14.36c.548.548 1.297.878 2.11.878 1.65 0 2.993-1.343 2.993-2.993S10.21 9.252 8.56 9.252s-2.993 1.343-2.993 2.993c0 .813.33 1.562.878 2.11l-1.337 1.329c-.801-.88-1.291-2.031-1.291-3.328 0-2.706 2.198-4.904 4.904-4.904s4.904 2.198 4.904 4.904-2.198 4.904-4.904 4.904z"/>
                </svg>
              </a>
              <a href="https://web.facebook.com/ndubuisi.piety.chichetaram" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.098 2.797.142v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z"/>
                </svg>
              </a>

              <a href="https://www.tiktok.com/search?q=phoenixwrytes6&t=1753887740357" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.31 0h3.545c.088 2.064 1.335 3.786 3.458 4.328v3.623c-1.25-.131-2.457-.51-3.545-1.13v7.904c0 3.659-2.34 6.29-5.642 6.29-3.134 0-5.63-2.496-5.63-5.63 0-2.995 2.263-5.453 5.23-5.613v3.658a2.048 2.048 0 0 0-1.862 2.018 2.05 2.05 0 0 0 2.051 2.052 2.046 2.046 0 0 0 2.047-2.045V0z"/>
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
            </ul><li><a href="/admin-phoenix-panel" className="hover:text-gold-400 transition-colors">*</a></li>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 phoenixwrytes. All rights reserved. Rising from words, transforming through stories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;