import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Feather, Sparkles } from 'lucide-react';


const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-red-900"
    >
      {/* Elegant Phoenix Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm"
        style={{
          backgroundImage: `url('/images/phoenix-bg.jpg')`,
          zIndex: 0,
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Phoenix */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative"
          >
            {/* Phoenix silhouette using CSS art */}
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-orange-500 to-yellow-400 rounded-full opacity-50 blur-xl" />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Phoenix body */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-48 bg-gradient-to-b from-orange-500 to-red-600 rounded-full opacity-70" />
                {/* Phoenix wings */}
                <div className="absolute top-1/3 left-1/4 w-24 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform -rotate-45 opacity-60" />
                <div className="absolute top-1/3 right-1/4 w-24 h-32 bg-gradient-to-bl from-yellow-400 to-orange-500 rounded-full transform rotate-45 opacity-60" />
                {/* Phoenix head */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full opacity-70" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Flame className="w-8 h-8 text-orange-500" />
              <Feather className="w-8 h-8 text-gold-400" />
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch"
            >   
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Writing that ignites
            </span>
            <br />
            <span className="text-white">transformation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Welcome to phoenixwrytes, where words rise from the ashes to create something extraordinary. 
            From storytelling to professional documents, every piece is crafted with passion and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25"
            >
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 border-2 border-gold-400 text-gold-400 font-semibold rounded-lg hover:bg-gold-400 hover:text-black transition-all duration-300"
            >
              Request a Service
              <Flame className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                y: [null, -20, null],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Words that <span className="text-gold-400">Transform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From creative storytelling to professional documentation, every word is chosen with purpose and crafted with care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Creative Writing", desc: "Stories that captivate and inspire", icon: Feather },
              { title: "Professional Services", desc: "Resumes and business content that gets results", icon: Flame },
              { title: "Content Creation", desc: "Engaging blogs and articles that connect", icon: Sparkles }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="group p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <item.icon className="w-10 h-10 text-gold-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;