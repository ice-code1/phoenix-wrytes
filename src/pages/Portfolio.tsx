import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  ExternalLink, 
  Filter,
  BookOpen,
  FileText,
  Globe,
  User,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All Work', icon: Filter },
    { id: 'creative', label: 'Creative', icon: BookOpen },
    { id: 'content', label: 'Content', icon: Globe },
    { id: 'business', label: 'Business', icon: Briefcase },
    { id: 'resume', label: 'Resumes', icon: User },
    { id: 'academic', label: 'Academic', icon: GraduationCap }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'The Last Ember',
      category: 'creative',
      type: 'Short Story',
      description: 'A haunting tale of redemption set in a post-apocalyptic world where hope is the most precious commodity.',
      preview: 'The city burned for three days before the rain came. Sarah watched from her window as the last ember died, carrying with it the dreams of a million souls...',
      image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Fiction', 'Drama', 'Post-Apocalyptic'],
      fullContent: 'Full story content would be displayed here in the lightbox...'
    },
    {
      id: 2,
      title: 'Digital Marketing Strategy Blog',
      category: 'content',
      type: 'Blog Series',
      description: 'A comprehensive 10-part blog series on modern digital marketing strategies for small businesses.',
      preview: '10 Essential Digital Marketing Strategies Every Small Business Needs in 2024. The digital landscape has evolved dramatically...',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Marketing', 'Business'],
      fullContent: 'Full blog series content would be displayed here...'
    },
    {
      id: 3,
      title: 'Executive Resume Transformation',
      category: 'resume',
      type: 'Professional Resume',
      description: 'Complete career transformation for a senior executive transitioning from finance to tech.',
      preview: 'Before: Generic finance resume. After: Compelling tech leadership narrative that landed 3 executive interviews...',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Executive', 'Career Change', 'Leadership'],
      fullContent: 'Resume examples and transformation details...'
    },
    {
      id: 4,
      title: 'Whispers of the Phoenix',
      category: 'creative',
      type: 'Poetry Collection',
      description: 'An intimate collection of poems exploring themes of rebirth, transformation, and personal growth.',
      preview: 'From ashes we rise, not because we must, but because in the burning we discovered who we truly are...',
      image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Poetry', 'Personal Growth', 'Inspiration'],
      fullContent: 'Full poetry collection would be displayed here...'
    },
    {
      id: 5,
      title: 'SaaS Company Proposal',
      category: 'business',
      type: 'Business Proposal',
      description: 'A winning proposal that secured $2M in funding for a emerging SaaS startup.',
      preview: 'The future of customer relationship management lies not in complexity, but in elegant simplicity...',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SaaS', 'Funding', 'Strategy'],
      fullContent: 'Business proposal structure and key elements...'
    },
    {
      id: 6,
      title: 'Climate Change Research Paper',
      category: 'academic',
      type: 'Research Paper',
      description: 'Academic research on the socioeconomic impacts of climate change in coastal communities.',
      preview: 'The intersection of environmental degradation and social inequality creates a complex web of challenges...',
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Climate', 'Research', 'Sociology'],
      fullContent: 'Academic paper abstract and methodology...'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A showcase of transformative writing across genres and industries. Each piece tells a story, 
              solves a problem, or inspires action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveFilter(category.id)}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gold-400 font-semibold">{item.type}</span>
                    <div className="flex space-x-1">
                      {item.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                    <p className="text-gray-400 text-sm italic">
                      "{item.preview}"
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedItem(item)}
                    className="group/btn w-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-white font-semibold py-2 px-4 rounded-lg hover:from-red-500 hover:to-orange-500 hover:border-orange-500 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gold-400/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gold-400 font-semibold">{selectedItem.type}</span>
                <div className="flex space-x-2">
                  {selectedItem.tags.map((tag: string, idx: number) => (
                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                {selectedItem.title}
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Preview</h3>
                <p className="text-gray-300 italic">
                  "{selectedItem.preview}"
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Full Content</h3>
                <p className="text-gray-300">
                  {selectedItem.fullContent}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;