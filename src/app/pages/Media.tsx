import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Download, 
  ExternalLink, 
  Calendar,
  Newspaper,
  Award,
  TrendingUp,
  Image as ImageIcon
} from 'lucide-react';

export default function Media() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Media & Press</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Press releases, announcements, media kit, and brand assets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest press releases</h2>
            <p className="text-gray-400">Stay updated with Border's latest announcements</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                date: 'February 10, 2026',
                title: 'Border raises $100M Series B to expand global money movement infrastructure',
                excerpt: 'Leading investors join Border\'s mission to connect Africa to the world financially, enabling seamless cross-border payments.',
                category: 'Funding',
                image: 'https://images.unsplash.com/photo-1661333886128-98466117d88b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFubm91bmNlbWVudHxlbnwxfHx8fDE3NzA4MjYzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                date: 'January 15, 2026',
                title: 'Border launches Virtual POS for African merchants',
                excerpt: 'New contactless payment solution enables businesses to accept payments anywhere without traditional hardware.',
                category: 'Product Launch',
                image: 'https://images.unsplash.com/photo-1726064855971-f12e80d59680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBwYXltZW50JTIwZGlnaXRhbHxlbnwxfHx8fDE3NzA4MjU0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                date: 'December 20, 2025',
                title: 'Border partners with Circle to enable stablecoin settlements',
                excerpt: 'Strategic partnership brings USDC settlement capabilities to African businesses and consumers.',
                category: 'Partnership',
                image: 'https://images.unsplash.com/photo-1752159684779-0639174cdfac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzA3Mzk0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              {
                date: 'November 8, 2025',
                title: 'Border surpasses $5 billion in transaction volume',
                excerpt: 'Platform processes record volume as African cross-border commerce accelerates.',
                category: 'Milestone',
                image: 'https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwNzU1NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080'
              }
            ].map((release, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={release.image} 
                    alt={release.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                      {release.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  {release.date}
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {release.title}
                </h3>
                <p className="text-gray-400 mb-4">{release.excerpt}</p>
                <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium">
                  Read full release <ExternalLink className="w-4 h-4" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Media coverage</h2>
            <p className="text-gray-400">Border in the news</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                outlet: 'TechCrunch',
                title: 'African fintech Border is reshaping cross-border payments',
                date: 'February 5, 2026'
              },
              {
                outlet: 'Financial Times',
                title: 'How Border is bridging Africa and global financial markets',
                date: 'January 28, 2026'
              },
              {
                outlet: 'Bloomberg',
                title: 'Border\'s $100M raise signals investor confidence in African fintech',
                date: 'February 10, 2026'
              },
              {
                outlet: 'Forbes',
                title: 'The future of African payments: Inside Border\'s technology',
                date: 'December 15, 2025'
              },
              {
                outlet: 'The Economist',
                title: 'Digital payments transformation in emerging markets',
                date: 'November 20, 2025'
              },
              {
                outlet: 'Reuters',
                title: 'Border partners with major payment networks for expansion',
                date: 'October 30, 2025'
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Newspaper className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold">{article.outlet}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Awards & recognition</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                award: 'Fintech Company of the Year',
                organization: 'African Fintech Awards',
                year: '2025'
              },
              {
                award: 'Best Cross-Border Payment Solution',
                organization: 'Global Payments Innovation',
                year: '2025'
              },
              {
                award: 'Top 10 African Startups',
                organization: 'Forbes Africa',
                year: '2025'
              },
              {
                award: 'Innovation in Financial Inclusion',
                organization: 'World Bank',
                year: '2024'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl text-center"
              >
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.award}</h3>
                <p className="text-sm text-gray-400 mb-1">{item.organization}</p>
                <p className="text-xs text-gray-500">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Media kit & brand assets</h2>
            <p className="text-gray-400">Download official Border logos, brand guidelines, and media resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Brand Guidelines',
                description: 'Complete brand identity and usage guidelines',
                size: '8.2 MB PDF',
                icon: ImageIcon
              },
              {
                title: 'Logo Package',
                description: 'All logo variations (SVG, PNG, EPS)',
                size: '12.5 MB ZIP',
                icon: Download
              },
              {
                title: 'Product Screenshots',
                description: 'High-resolution app and web screenshots',
                size: '45 MB ZIP',
                icon: ImageIcon
              },
              {
                title: 'Executive Photos',
                description: 'Leadership team headshots',
                size: '18 MB ZIP',
                icon: ImageIcon
              },
              {
                title: 'Company Fact Sheet',
                description: 'Key facts, figures, and milestones',
                size: '2.1 MB PDF',
                icon: TrendingUp
              },
              {
                title: 'Press Kit',
                description: 'Complete media and press resources',
                size: '65 MB ZIP',
                icon: Download
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group cursor-pointer"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.size}</span>
                  <Download className="w-5 h-5 text-blue-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Press */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Press inquiries</h2>
          <p className="text-xl text-gray-400 mb-8">
            For all media and press inquiries, please contact our press team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-semibold"
            >
              Contact Press Team
            </Link>
            <a 
              href="mailto:admin@border.com.ng" 
              className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-semibold"
            >
              admin@border.com.ng
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}