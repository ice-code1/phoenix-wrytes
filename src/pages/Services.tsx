import React from 'react';
import { motion } from 'framer-motion';
import { 
  Feather, 
  FileText, 
  Globe, 
  User, 
  Briefcase, 
  GraduationCap,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'creative',
      title: 'Creative Writing',
      icon: Feather,
      description: 'Bring your imagination to life with compelling fiction, poetry, and storytelling that resonates with readers.',
      features: [
        'Short stories and novellas',
        'Poetry collections',
        'Character development',
        'Plot structure and pacing',
        'Creative editing and feedback'
      ],
      price: 'From 50,000 NGN'
    },
    {
      id: 'ghostwriting',
      title: 'Ghostwriting',
      icon: FileText,
      description: 'Your ideas, my words. Professional ghostwriting services for books, speeches, and articles that capture your unique voice.',
      features: [
        'Full-length books and memoirs',
        'Speeches and presentations',
        'Articles and thought pieces',
        'Complete confidentiality',
        'Voice matching and style adaptation'
      ],
      price: 'From 100,000 NGN'
    },
    {
      id: 'content',
      title: 'Content Writing',
      icon: Globe,
      description: 'SEO-optimized blogs, website content, and marketing materials that engage your audience and drive results.',
      features: [
        'SEO blog posts',
        'Website copy',
        'Marketing materials',
        'Social media content',
        'Email campaigns'
      ],
      price: 'From 75,000 NGN'
    },
    {
      id: 'resume',
      title: 'CV/Resume Writing',
      icon: User,
      description: 'Stand out from the crowd with professionally crafted resumes and cover letters that showcase your unique value.',
      features: [
        'ATS-optimized resumes',
        'Custom cover letters',
        'LinkedIn profile optimization',
        'Industry-specific formatting',
        'Interview preparation tips'
      ],
      price: 'From 125,000 NGN'
    },
    {
      id: 'business',
      title: 'Business Writing',
      icon: Briefcase,
      description: 'Professional proposals, reports, and branding content that communicates your business value effectively.',
      features: [
        'Business proposals',
        'Company reports',
        'Branding content',
        'Press releases',
        'Executive communications'
      ],
      price: 'From 150,000 NGN'
    },
    {
      id: 'academic',
      title: 'Academic Writing',
      icon: GraduationCap,
      description: 'Research papers, essays, and academic content that meets the highest scholarly standards.',
      features: [
        'Research papers',
        'Essays and dissertations',
        'Literature reviews',
        'Citation and formatting',
        'Academic editing'
      ],
      price: 'From 80,000 NGN'
    }
  ];

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
                Writing Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your ideas into powerful words. From creative storytelling to professional documentation, 
              I offer comprehensive writing services tailored to your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gold-400 font-semibold text-lg">
                      {service.price}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              My <span className="text-gold-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every project follows a structured approach to ensure exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Planning', desc: 'Creating a detailed project roadmap' },
              { step: '03', title: 'Writing', desc: 'Crafting your content with precision and care' },
              { step: '04', title: 'Refinement', desc: 'Polishing until it exceeds expectations' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to bring your <span className="text-gold-400">vision</span> to life?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create something extraordinary together.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;