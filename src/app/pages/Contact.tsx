import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Building,
  Users,
  Briefcase,
  FileText
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in touch</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you're looking to partner, integrate, or learn more about Border, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Building,
                title: 'Business Inquiries',
                description: 'Enterprise solutions and partnerships',
                contact: 'admin@border.com.ng',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Partner Relations',
                description: 'Join our partner network',
                contact: 'admin@border.com.ng',
                color: 'purple'
              },
              {
                icon: Briefcase,
                title: 'Investor Relations',
                description: 'Investment opportunities',
                contact: 'admin@border.com.ng',
                color: 'green'
              },
              {
                icon: FileText,
                title: 'Press & Media',
                description: 'Media inquiries and press kit',
                contact: 'admin@border.com.ng',
                color: 'pink'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all"
              >
                <card.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{card.description}</p>
                <a 
                  href={`mailto:${card.contact}`} 
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  {card.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Inquiry Type</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="business">Business Solutions</option>
                    <option value="developer">Developer Support</option>
                    <option value="press">Press & Media</option>
                    <option value="investor">Investor Relations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2 font-semibold"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Office</h2>
              <div className="space-y-6 mb-8">
                <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold">Port Harcourt</h3>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                          Headquarters
                        </span>
                      </div>
                      <p className="text-gray-400 mb-2">Nigeria</p>
                      <p className="text-sm text-gray-500 mb-2">Number 5, Ibis Drive, Romorolu, Port Harcourt</p>
                      <div className="flex items-center gap-2 text-sm text-blue-400">
                        <Phone className="w-4 h-4" />
                        +234 915 606 1396
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Channels */}
              <div className="p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Need immediate help?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a href="mailto:admin@border.com.ng" className="hover:text-blue-400 transition-colors">
                      Email: admin@border.com.ng
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <a href="tel:+2349156061396" className="hover:text-blue-400 transition-colors">
                      Phone: +234 915 606 1396
                    </a>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-sm text-yellow-200">
                    Note: Contact form submissions are currently not active. Please use email or phone to reach us directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}