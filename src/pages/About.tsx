import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Award, 
  Users, 
  BookOpen,
  Quote,
  Star,
  Flame,
  Target,
  Coffee
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: BookOpen },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Stories Published', icon: Heart }
  ];

  const testimonials = [
    {
      quote: "Phoenix transformed my resume completely. I went from no responses to landing my dream job in tech within two months.",
      author: "Sarah Chen",
      role: "Software Engineer",
      rating: 5
    },
    {
      quote: "The ghostwriting service was exceptional. She captured my voice perfectly and helped me publish my first book.",
      author: "Dr. Michael Torres",
      role: "Author & Physician",
      rating: 5
    },
    {
      quote: "Her content writing increased our website traffic by 300%. Professional, creative, and always on time.",
      author: "Emma Rodriguez",
      role: "Marketing Director",
      rating: 5
    }
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'Every piece of writing reflects the genuine voice and vision of the client.',
      icon: Heart
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering work that exceeds expectations every single time.',
      icon: Target
    },
    {
      title: 'Transformation',
      description: 'Believing in the power of words to create positive change and new opportunities.',
      icon: Flame
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center lg:space-x-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 mb-12 lg:mb-0"
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  About Phoenix
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Hi, I'm Phoenix – a passionate writer who believes in the transformative power of words. 
                Like the mythical phoenix that rises from ashes, I help individuals and businesses emerge 
                stronger through the art of compelling storytelling and professional communication.
              </p>
              
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gold-400/20">
                <Quote className="w-8 h-8 text-gold-400 mb-4" />
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "Every word is a choice, every sentence a brushstroke on the canvas of human experience. 
                  My mission is to help you paint your story in colors that inspire, persuade, and transform."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl transform rotate-3" />
                <img
                  src="images/phonix.jpg"
                  alt="Phoenix - Professional Writer"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-4 shadow-lg">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              My <span className="text-gold-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-300">
              From Corporate Burnout to Creative Renewal
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gold-400/20"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4">The Ashes</h3>
              <p className="text-gray-300 leading-relaxed">
                Five years ago, I was trapped in a corporate job that drained my creativity and passion. 
                Like many, I felt lost, unfulfilled, and disconnected from my true calling. The corporate 
                world had reduced me to ashes – burned out, uninspired, and questioning my purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gold-400/20"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4">The Awakening</h3>
              <p className="text-gray-300 leading-relaxed">
                The turning point came when I helped a friend rewrite their resume. Seeing them land 
                their dream job sparked something within me – the realization that words have power. 
                They can transform lives, open doors, and create opportunities. That's when I knew 
                I had found my calling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gold-400/20"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4">The Rise</h3>
              <p className="text-gray-300 leading-relaxed">
                I chose the phoenix as my symbol because it represents transformation, renewal, and 
                the courage to rise again. Today, I help others through their own transformations – 
                whether it's landing a dream job, publishing their first book, or building a 
                successful business through compelling content.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              My <span className="text-gold-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide every word I write and every relationship I build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Client <span className="text-gold-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real transformations from real people
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-gold-400 mb-4" />
                
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to <span className="text-gold-400">Rise</span> Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's transform your ideas into words that inspire, persuade, and create lasting impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25"
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gold-400 text-gold-400 font-semibold rounded-lg hover:bg-gold-400 hover:text-black transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;