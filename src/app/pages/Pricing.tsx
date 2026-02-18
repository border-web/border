import { Link } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, DollarSign, TrendingUp, Users, Building2 } from 'lucide-react';

export default function Pricing() {
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              No hidden fees. No surprises. Just fair, competitive rates for global money movement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Individual',
                icon: Users,
                price: 'Free',
                description: 'Perfect for personal transfers and freelancers',
                features: [
                  'Multi-currency wallet',
                  'P2P transfers',
                  'International remittance',
                  '1% service fee',
                  'Competitive FX rates',
                  'Mobile app access',
                  'Email support',
                  'Standard processing'
                ],
                cta: 'Get Started',
                popular: false
              },
              {
                name: 'Business',
                icon: TrendingUp,
                price: '$49',
                period: '/month',
                description: 'For growing businesses and SMEs',
                features: [
                  'Everything in Individual',
                  'Business wallet',
                  'API access',
                  '0.75% service fee',
                  'Bulk payments',
                  'Virtual POS',
                  'Priority support',
                  'Fast processing',
                  'Monthly reporting'
                ],
                cta: 'Start Free Trial',
                popular: true
              },
              {
                name: 'Enterprise',
                icon: Building2,
                price: 'Custom',
                description: 'For large organizations with complex needs',
                features: [
                  'Everything in Business',
                  'Custom service fees',
                  'Dedicated account manager',
                  'Advanced API features',
                  'Webhooks',
                  'Custom integrations',
                  '24/7 phone support',
                  'SLA guarantees',
                  'White-label options'
                ],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-900/50 to-purple-900/50 border-2 border-blue-500/50'
                    : 'bg-zinc-900 border border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <plan.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <Link
                  to="/contact"
                  className={`block w-full py-3 rounded-lg text-center font-semibold mb-6 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Breakdown */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fee Structure</h2>
            <p className="text-xl text-gray-400">Clear and transparent pricing across all services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Transfer Fees',
                items: [
                  { service: 'International Transfers', fee: '1% (min $1)' },
                  { service: 'Domestic Transfers (NGN)', fee: '₦50 flat' },
                  { service: 'Same-currency Transfer', fee: 'Free' },
                  { service: 'Express Transfer', fee: '+$5' }
                ]
              },
              {
                title: 'FX Spreads',
                items: [
                  { service: 'USD/NGN', fee: '0.5%' },
                  { service: 'GBP/NGN', fee: '0.6%' },
                  { service: 'EUR/NGN', fee: '0.6%' },
                  { service: 'Other pairs', fee: '0.8%' }
                ]
              },
              {
                title: 'Merchant Fees',
                items: [
                  { service: 'Card Payments', fee: '2.5% + ₦100' },
                  { service: 'Bank Transfer', fee: '1%' },
                  { service: 'Virtual POS', fee: '1.5%' },
                  { service: 'QR Payments', fee: '1%' }
                ]
              },
              {
                title: 'Business Services',
                items: [
                  { service: 'Bulk Payments', fee: '0.5% per txn' },
                  { service: 'API Access', fee: 'Included' },
                  { service: 'Payroll Processing', fee: '1%' },
                  { service: 'Custom Integration', fee: 'Contact us' }
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-400">{item.service}</span>
                      <span className="font-semibold text-blue-400">{item.fee}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Border is better</h2>
            <p className="text-xl text-gray-400">Compare our rates with traditional providers</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Border</th>
                  <th className="text-center py-4 px-4">Traditional Banks</th>
                  <th className="text-center py-4 px-4">Other Fintechs</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Transfer Fee', border: '1%', banks: '3-5%', others: '1.5-3%' },
                  { feature: 'FX Spread', border: '0.5-0.8%', banks: '2-4%', others: '1-2%' },
                  { feature: 'Processing Time', border: 'Minutes', banks: '3-5 days', others: '1-2 days' },
                  { feature: 'API Access', border: '✓', banks: '✗', others: 'Limited' },
                  { feature: 'Multi-currency Wallet', border: '✓', banks: 'Limited', others: '✓' },
                  { feature: 'Transparent Fees', border: '✓', banks: '✗', others: 'Partial' }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-4 px-4 text-center font-semibold text-green-400">{row.border}</td>
                    <td className="py-4 px-4 text-center text-gray-500">{row.banks}</td>
                    <td className="py-4 px-4 text-center text-gray-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get started today</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of businesses and individuals saving on global transfers
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
