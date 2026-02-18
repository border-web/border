import { Link } from 'react-router';
import { motion } from 'motion/react';
import { BookOpen, Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Future of Cross-Border Payments in Africa',
      excerpt: 'Exploring how technology is transforming financial inclusion and global money movement across the African continent.',
      author: 'Sarah Okonkwo',
      date: 'February 10, 2026',
      category: 'Industry Insights',
      image: 'https://images.unsplash.com/photo-1688302529084-767fbc296565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc3MDgwNDg1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 min read'
    },
    {
      title: 'Building Secure Financial Infrastructure: Lessons Learned',
      excerpt: 'A deep dive into the security practices and compliance frameworks that power modern fintech platforms.',
      author: 'Michael Chen',
      date: 'February 8, 2026',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1740477959006-798042a324aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwc2VjdXJpdHklMjBkaWdpdGFsJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NzA4MjU3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 min read'
    },
    {
      title: 'How Businesses Can Save 40% on International Transfers',
      excerpt: 'Practical tips and strategies for businesses to reduce costs on cross-border transactions.',
      author: 'Amara Williams',
      date: 'February 5, 2026',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDgwMDE3OHww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min read'
    },
    {
      title: 'Understanding FX Rates: A Guide for Businesses',
      excerpt: 'Everything you need to know about foreign exchange rates and how they affect your international transactions.',
      author: 'David Okafor',
      date: 'February 2, 2026',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwY29ubmVjdGlvbnMlMjB3b3JsZCUyMG1hcHxlbnwxfHx8fDE3NzA4MjU3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '7 min read'
    },
    {
      title: 'API Integration Best Practices for Payment Platforms',
      excerpt: 'Technical guide for developers integrating payment APIs into their applications.',
      author: 'James Eze',
      date: 'January 30, 2026',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBwcm9ncmFtbWluZyUyMGFwaXxlbnwxfHx8fDE3NzA4MjU3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '10 min read'
    },
    {
      title: 'Regulatory Compliance in Fintech: What You Need to Know',
      excerpt: 'Navigating the complex landscape of financial regulations across different jurisdictions.',
      author: 'Grace Adebayo',
      date: 'January 27, 2026',
      category: 'Compliance',
      image: 'https://images.unsplash.com/photo-1728044849242-516700295875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwdHJhbnNhY3Rpb24lMjBzbWFydHBob25lfGVufDF8fHx8MTc3MDgyNTc1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Industry Insights', 'Technology', 'Business', 'Education', 'Development', 'Compliance'];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Industry insights, technical guides, and the latest news from Border
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black border-b border-white/10 sticky top-16 z-40 backdrop-blur-xl bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-blue-500 text-white'
                    : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div 
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url('${blogPosts[0].image}')` }}
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-400 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay updated</h2>
          <p className="text-xl text-gray-200 mb-8">
            Get the latest insights, guides, and news delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
            />
            <button className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
