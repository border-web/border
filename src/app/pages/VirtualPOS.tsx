import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Smartphone, QrCode, Zap, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

export default function VirtualPOS() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Virtual POS</h1>
              <p className="text-xl text-gray-300 mb-8">
                Accept payments anywhere with NFC, QR codes, and virtual terminals. No physical device required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-semibold text-center"
                >
                  Start Accepting Payments
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
              <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-purple-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Multiple Payment Methods</h2>
            <p className="text-xl text-gray-400">Accept payments however your customers prefer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'NFC Payments',
                description: 'Tap-to-pay with contactless cards and mobile wallets',
                features: [
                  'Apple Pay',
                  'Google Pay',
                  'Contactless cards',
                  'Instant processing'
                ]
              },
              {
                icon: QrCode,
                title: 'QR Code Payments',
                description: 'Generate dynamic QR codes for quick customer payments',
                features: [
                  'Dynamic QR codes',
                  'Static QR for fixed amounts',
                  'Instant confirmation',
                  'No app required'
                ]
              },
              {
                icon: ShoppingBag,
                title: 'Virtual Terminal',
                description: 'Process card payments manually through our web interface',
                features: [
                  'Card-not-present',
                  'Phone orders',
                  'Manual entry',
                  'Receipt generation'
                ]
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl"
              >
                <method.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Device-free payment acceptance</h2>
              <p className="text-xl text-gray-300 mb-8">
                Turn any smartphone into a payment terminal. No additional hardware needed.
              </p>
              <ul className="space-y-4">
                {[
                  'Accept payments with just your phone',
                  'No expensive POS hardware required',
                  'Instant settlement to your account',
                  'Real-time transaction notifications',
                  'Detailed analytics and reporting',
                  'Multi-currency support',
                  'Offline mode for poor connectivity',
                  'Built-in fraud protection'
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">1% fee</h3>
                <p className="text-gray-400">Competitive merchant fees on all transactions</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-white/10 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">Instant</h3>
                <p className="text-gray-400">Real-time payment processing and confirmation</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-gray-400">Accept payments anytime, anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-gray-400">Ideal for businesses of all sizes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Retail Stores',
                description: 'Accept payments at checkout with NFC or QR codes'
              },
              {
                title: 'Food & Beverage',
                description: 'Quick tableside payments and takeout orders'
              },
              {
                title: 'Service Providers',
                description: 'On-site payments for repairs, deliveries, and services'
              },
              {
                title: 'Small Businesses',
                description: 'Cost-effective payment solution for SMEs'
              },
              {
                title: 'Market Vendors',
                description: 'Mobile payments for markets and pop-ups'
              },
              {
                title: 'Professional Services',
                description: 'Accept payments during consultations'
              },
              {
                title: 'Events',
                description: 'Fast payment processing at events and exhibitions'
              },
              {
                title: 'Delivery Services',
                description: 'Accept payment on delivery'
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:bg-zinc-800 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Easy Integration</h2>
            <p className="text-xl text-gray-400">Get started in minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sign Up',
                description: 'Create your merchant account and complete verification'
              },
              {
                step: '02',
                title: 'Configure',
                description: 'Set up your payment preferences and branding'
              },
              {
                step: '03',
                title: 'Start Accepting',
                description: 'Begin accepting payments immediately via app or web'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gray-800 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start accepting payments today</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of merchants using Border Virtual POS
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold"
          >
            Become a Merchant <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
