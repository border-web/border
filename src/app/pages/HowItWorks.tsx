import { motion } from 'motion/react';
import { UserPlus, CreditCard, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function HowItWorks() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">How Border Works</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Moving money globally in four simple steps
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                icon: UserPlus,
                step: '01',
                title: 'Create Your Account',
                description: 'Sign up in minutes with your email or phone number. Complete our secure KYC verification process to unlock all features.',
                features: [
                  'Quick registration',
                  'Secure KYC verification',
                  'Multi-factor authentication',
                  'Instant account activation'
                ]
              },
              {
                icon: CreditCard,
                step: '02',
                title: 'Add Funds',
                description: 'Fund your multi-currency wallet using bank transfers, cards, or other payment methods. Hold multiple currencies in one account.',
                features: [
                  'Multiple funding options',
                  'Instant deposits',
                  'Multi-currency support',
                  'Secure payment processing'
                ]
              },
              {
                icon: Send,
                step: '03',
                title: 'Send Money',
                description: 'Send money to anyone, anywhere. Choose from bank transfers, wallet transfers, or cash pickup. See real-time exchange rates and transparent fees.',
                features: [
                  'Real-time exchange rates',
                  'Transparent pricing',
                  'Multiple delivery methods',
                  'Fast processing'
                ]
              },
              {
                icon: CheckCircle,
                step: '04',
                title: 'Track & Confirm',
                description: 'Monitor your transfer in real-time. Get instant notifications when money is sent and received. Access detailed transaction history.',
                features: [
                  'Real-time tracking',
                  'Instant notifications',
                  'Transaction history',
                  'Receipt generation'
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-gray-800">{item.step}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="text-xl text-gray-300 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-24 h-24 text-blue-400 opacity-50" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Transfers Work */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Transfer Processing</h2>
            <p className="text-xl text-gray-400">Understanding the journey of your money</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Domestic Transfers',
                description: 'Within-country transfers processed through our ledger system or local banking partners.',
                speed: 'Instant',
                example: 'NGN to NGN via 9PSB'
              },
              {
                title: 'International Transfers',
                description: 'Cross-border payments routed through our global network including Circle, SWIFT, and local partners.',
                speed: '1-3 business days',
                example: 'USD to NGN via Circle'
              },
              {
                title: 'Wallet Transfers',
                description: 'Instant transfers between Border wallet holders using our internal ledger.',
                speed: 'Real-time',
                example: 'Border to Border'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-500">Speed:</span>
                  <span className="text-sm font-semibold text-green-400">{item.speed}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-500">Example:</span>
                  <span className="text-sm text-gray-400">{item.example}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join millions moving money with Border
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold"
          >
            Create Your Account <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
