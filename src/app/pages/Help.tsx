import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Search, 
  HelpCircle, 
  Book, 
  MessageCircle,
  Mail,
  Phone,
  ChevronRight,
  CreditCard,
  Shield,
  Globe,
  Users,
  Code,
  Settings
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">How can we help?</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Find answers, guides, and support for all your Border needs
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: CreditCard,
                title: 'Payments & Transfers',
                description: 'Learn about sending and receiving money',
                articles: 24
              },
              {
                icon: Shield,
                title: 'Security & Privacy',
                description: 'Account security and data protection',
                articles: 18
              },
              {
                icon: Globe,
                title: 'Global Transfers',
                description: 'Cross-border payments guide',
                articles: 32
              },
              {
                icon: Users,
                title: 'Account Management',
                description: 'Managing your Border account',
                articles: 21
              },
              {
                icon: Code,
                title: 'Developer Resources',
                description: 'API documentation and guides',
                articles: 45
              },
              {
                icon: Settings,
                title: 'Troubleshooting',
                description: 'Common issues and solutions',
                articles: 28
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group cursor-pointer"
              >
                <category.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-400 mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articles} articles</span>
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Popular articles</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                title: 'How do I send money internationally?',
                category: 'Global Transfers',
                readTime: '5 min read'
              },
              {
                title: 'What are the fees for international transfers?',
                category: 'Pricing',
                readTime: '3 min read'
              },
              {
                title: 'How to verify my account (KYC)',
                category: 'Account Management',
                readTime: '4 min read'
              },
              {
                title: 'Setting up multi-factor authentication',
                category: 'Security',
                readTime: '3 min read'
              },
              {
                title: 'Using the Virtual POS for my business',
                category: 'Business Solutions',
                readTime: '7 min read'
              },
              {
                title: 'How to integrate Border API',
                category: 'Developers',
                readTime: '10 min read'
              },
              {
                title: 'Understanding FX rates and spreads',
                category: 'Payments',
                readTime: '4 min read'
              },
              {
                title: 'What currencies does Border support?',
                category: 'Global Transfers',
                readTime: '2 min read'
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors flex-1">
                    {article.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: 'How long do international transfers take?',
                answer: 'Most international transfers are completed within 1-3 business days. Some corridors offer instant or same-day settlement.'
              },
              {
                question: 'Is Border regulated and licensed?',
                answer: 'Yes, Border operates under full regulatory compliance in all jurisdictions we serve, including licensing from CBN, FCA, and other regulators.'
              },
              {
                question: 'What are the transfer limits?',
                answer: 'Transfer limits vary by account type and verification level. Fully verified accounts can send up to $100,000 per transaction.'
              },
              {
                question: 'How does Border protect my money?',
                answer: 'We use bank-level encryption, multi-factor authentication, fraud detection, and keep customer funds in segregated accounts with tier-1 banking partners.'
              },
              {
                question: 'Can I use Border for business payments?',
                answer: 'Yes! We offer dedicated business solutions including treasury management, bulk payments, APIs, and merchant services.'
              },
              {
                question: 'What currencies can I hold in my wallet?',
                answer: 'Border supports 150+ currencies including USD, EUR, GBP, NGN, KES, ZAR, CAD, and many more.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-gray-400">Our support team is available 24/7 to assist you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: 'Live Chat',
                description: 'Chat with our support team',
                action: 'Start chat',
                available: 'Available 24/7'
              },
              {
                icon: Mail,
                title: 'Email Support',
                description: 'admin@border.com.ng',
                action: 'Send email',
                available: 'Response within 24 hours'
              },
              {
                icon: Phone,
                title: 'Phone Support',
                description: '+234 1 800 BORDER',
                action: 'Call now',
                available: 'Mon-Fri 9AM-6PM WAT'
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl text-center hover:border-blue-500/50 transition-all"
              >
                <contact.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className="text-gray-400 mb-3">{contact.description}</p>
                <p className="text-sm text-gray-500 mb-4">{contact.available}</p>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-medium">
                  {contact.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link 
              to="/developers" 
              className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group text-center"
            >
              <Code className="w-10 h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Developer Docs</h3>
              <p className="text-sm text-gray-400">API reference and integration guides</p>
            </Link>

            <Link 
              to="/blog" 
              className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group text-center"
            >
              <Book className="w-10 h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Blog & Insights</h3>
              <p className="text-sm text-gray-400">Latest updates and industry insights</p>
            </Link>

            <Link 
              to="/how-it-works" 
              className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group text-center"
            >
              <HelpCircle className="w-10 h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">How It Works</h3>
              <p className="text-sm text-gray-400">Learn about Border's platform</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}