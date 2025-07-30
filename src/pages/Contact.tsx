import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Linkedin,
  Instagram,
  Twitter,
  CheckCircle,
  Facebook
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // In a real app, you would send this to your backend or email service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const services = [
    'Creative Writing',
    'Ghostwriting',
    'Content Writing',
    'CV/Resume Writing',
    'Business Writing',
    'Academic Writing',
    'Other'
  ];

  const budgetRanges = [
    'Under 50,000 NGN',
    '50,000 - 100,000 NGN',
    '100,000 - 250,000 NGN',
    '250,000 - 500,000 NGN',
    '500,000+ NGN',
    'Let\'s discuss'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'pietyndubuisi33@gmail.com',
      description: 'Send me a message anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+234 813 505  9946',
      description: 'Available Mon-Fri, 9AM-6PM WST'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Anambra, Nigeria',
      description: 'Available for remote work globally'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'Usually much faster!'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/phoe_nixwrytes1?igsh=NDc3cDh0c3J1eGwy', label: 'Instagram' },
    { icon: Facebook, href: 'https://web.facebook.com/ndubuisi.piety.chichetaram', label: 'Facebook' }
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
                Let's Create
              </span>
              <br />
              <span className="text-white">Something Amazing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your ideas into powerful words? I'd love to hear about your project 
              and discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:space-x-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-2/3 mb-12 lg:mb-0"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gold-400/20">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">
                  Start Your Project
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Service Needed *
                        </label>
                        <select
                          {...register('service', { required: 'Please select a service' })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          {...register('budget')}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        {...register('message', { required: 'Please describe your project' })}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-orange-500/25"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:w-1/3"
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-gold-400 font-medium mb-1">{info.details}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gold-400/20">
                  <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2">
                                      
                   <a
                    href="mailto:phoenix@email.com?subject=Schedule%20a%20Call&body=Hi%20Phoenix%2C%20I%20would%20like%20to%20schedule%20a%20call%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time."
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule a Call</span>
                    </a>
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2">
                    <a
                      href="https://wa.me/2348135059946" // replace with Phoenix's actual number
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Frequently Asked <span className="text-gold-400">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope and complexity. A resume typically takes 3-5 days, while a full book project might take 2-3 months. I always provide realistic timelines upfront.'
              },
              {
                question: 'Do you offer revisions?',
                answer: 'Yes! I include 2-3 rounds of revisions with every project to ensure you\'re completely satisfied with the final result.'
              },
              {
                question: 'What information do you need to get started?',
                answer: 'This depends on the project type. I\'ll send you a detailed questionnaire after our initial consultation to gather all necessary information.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Absolutely! I work with clients worldwide and am experienced in adapting content for different markets and cultural contexts.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gold-400/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;