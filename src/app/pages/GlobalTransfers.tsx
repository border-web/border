import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Globe, Zap, DollarSign, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function GlobalTransfers() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Global Transfers</h1>
              <p className="text-xl text-gray-300 mb-8">
                Send money to 150+ countries with transparent fees, real-time exchange rates, and fast settlement
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-semibold text-center"
                >
                  Start Sending Money
                </Link>
                <Link 
                  to="/pricing" 
                  className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-center"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-2xl flex items-center justify-center">
                <Globe className="w-32 h-32 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Transfers',
                description: 'Instant to 3-day delivery depending on corridor'
              },
              {
                icon: DollarSign,
                title: 'Transparent Fees',
                description: 'No hidden charges. See all costs upfront'
              },
              {
                icon: Globe,
                title: '150+ Countries',
                description: 'Send to almost anywhere in the world'
              },
              {
                icon: Shield,
                title: 'Secure & Compliant',
                description: 'Bank-level security and regulatory compliance'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl text-center"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Global Transfers Work</h2>
            <p className="text-xl text-gray-400">Powered by our multi-partner network</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'International Corridors',
                description: 'Border → Circle → Global banks',
                example: 'USD to GBP, EUR, CAD',
                speed: '1-3 business days'
              },
              {
                title: 'African Corridors',
                description: 'Border → 9PSB → Local banks',
                example: 'USD to NGN',
                speed: 'Same day'
              },
              {
                title: 'Wallet Transfers',
                description: 'Internal ledger settlement',
                example: 'Border to Border',
                speed: 'Instant'
              }
            ].map((corridor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{corridor.title}</h3>
                <p className="text-gray-400 mb-4">{corridor.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Example:</span>
                    <span className="text-gray-300">{corridor.example}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Speed:</span>
                    <span className="text-green-400">{corridor.speed}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Countries */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Send Money Anywhere</h2>
            <p className="text-xl text-gray-400">We support transfers to 150+ countries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Nigeria', 'Kenya', 'Ghana', 'South Africa', 'USA', 'UK',
              'Canada', 'France', 'Germany', 'UAE', 'India', 'China',
              'Brazil', 'Mexico', 'Singapore', 'Australia', 'Japan', 'South Korea'
            ].map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="p-4 bg-zinc-900 border border-white/10 rounded-lg text-center hover:bg-zinc-800 transition-all"
              >
                <span className="text-sm text-gray-300">{country}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500">+ 132 more countries</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why choose Border for global transfers?</h2>
              <ul className="space-y-4">
                {[
                  'Real-time exchange rates with no markup',
                  'Transparent fees - see all costs before you send',
                  'Multiple delivery options - bank, wallet, cash pickup',
                  'Track transfers in real-time',
                  'Full regulatory compliance and consumer protection',
                  'Enterprise-grade security and encryption',
                  '24/7 customer support',
                  'Fast settlement - same day to 3 business days'
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">1-3 days</h3>
                <p className="text-gray-400">Average delivery time for international transfers</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">0.5% - 2%</h3>
                <p className="text-gray-400">Competitive transfer fees on most corridors</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-900/20 to-blue-900/20 border border-white/10 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">150+ countries</h3>
                <p className="text-gray-400">Global coverage across all continents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start sending money globally</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join millions using Border for fast, secure international transfers
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold"
          >
            Create Free Account <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
