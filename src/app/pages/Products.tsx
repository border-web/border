import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { 
  Globe, 
  CreditCard, 
  Building, 
  Smartphone, 
  Wallet, 
  ArrowRight,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function Products() {
  const { openGetStarted } = useApp();
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Border Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete financial infrastructure for individuals and businesses
          </p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Transfers',
                description: 'Send money to 81+ countries with transparent fees and real-time exchange rates',
                link: '/products/global-transfers',
                features: [
                  'Bank transfers',
                  'Wallet transfers',
                  'Cash pickup',
                  'Mobile money'
                ]
              },
              {
                icon: Smartphone,
                title: 'Virtual POS',
                description: 'Accept payments anywhere with NFC, QR codes, and virtual terminals',
                link: '/products/virtual-pos',
                features: [
                  'NFC payments',
                  'QR codes',
                  'Device-free POS',
                  'Instant settlement'
                ]
              },
              {
                icon: Building,
                title: 'Business Solutions',
                description: 'Enterprise-grade treasury, payroll, and payment infrastructure',
                link: '/products/business-solutions',
                features: [
                  'Treasury management',
                  'Global payroll',
                  'API access',
                  'Custom solutions'
                ]
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                <product.icon className="w-16 h-16 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                <p className="text-gray-400 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={product.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">More Products & Services</h2>
            <p className="text-xl text-gray-400">Comprehensive financial tools for every need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wallet,
                title: 'Multi-Currency Wallet',
                description: 'Hold, convert, and manage multiple currencies in one secure wallet'
              },
              {
                icon: CreditCard,
                title: 'Virtual & Physical Cards',
                description: 'USD and NGN debit cards for global and local spending'
              },
              {
                icon: Zap,
                title: 'Instant FX Conversion',
                description: 'Convert between currencies at competitive real-time rates'
              },
              {
                icon: Building,
                title: 'Merchant Collections',
                description: 'Accept payments from customers globally'
              },
              {
                icon: TrendingUp,
                title: 'Utility Payments',
                description: 'Pay bills, airtime, and utilities across multiple countries'
              },
              {
                icon: Shield,
                title: 'Stablecoin Settlement',
                description: 'Backend infrastructure for stable, fast settlements'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:bg-zinc-800 transition-all"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Border</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Security',
                description: 'Bank-level encryption, multi-factor authentication, and 24/7 fraud monitoring'
              },
              {
                title: 'Transparent Pricing',
                description: 'No hidden fees. Real-time exchange rates. Clear pricing on every transaction'
              },
              {
                title: 'Global Coverage',
                description: '81+ countries, multiple currencies, and growing payment corridors'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to explore our products?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Get started with Border today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openGetStarted}
              className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold"
            >
              Get Started
            </button>
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
