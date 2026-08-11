import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Handshake, 
  Building2, 
  Globe2, 
  CreditCard, 
  Smartphone,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Network,
  Users
} from 'lucide-react';

export default function Partners() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MDc1MjQwMnww&ixlib=rb-4.1.0&q=80&w=1080')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Handshake className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-400">Partnership Opportunities</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Partner with Border
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our global network of banks, fintechs, and payment providers
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all text-lg font-semibold"
            >
              Become a Partner <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Categories</h2>
            <p className="text-xl text-gray-400">Multiple ways to collaborate and grow together</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Banking Partners',
                description: 'Collaborate with financial institutions for enhanced services and expanded reach',
                benefits: ['Expanded customer base', 'Co-branded solutions', 'Revenue sharing']
              },
              {
                icon: Network,
                title: 'Fintech Integration',
                description: 'Integrate Border APIs into your platform for seamless financial services',
                benefits: ['API access', 'Technical support', 'White-label options']
              },
              {
                icon: CreditCard,
                title: 'Payment Networks',
                description: 'Join our payment network for global transaction processing',
                benefits: ['Transaction fees', 'Network effects', 'Settlement services']
              },
              {
                icon: Smartphone,
                title: 'Mobile Operators',
                description: 'Partner to offer mobile money and payment solutions',
                benefits: ['Mobile integration', 'USSD support', 'Agent networks']
              },
              {
                icon: Users,
                title: 'Merchants & Retailers',
                description: 'Accept global payments with our merchant solutions',
                benefits: ['POS systems', 'Payment gateway', 'Multi-currency']
              },
              {
                icon: Globe2,
                title: 'Correspondent Banks',
                description: 'Expand your global reach through our settlement network',
                benefits: ['Global corridors', 'Competitive rates', 'Fast settlements']
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all"
              >
                <type.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted Global Partners</h2>
            <p className="text-xl text-gray-400">Working with industry leaders worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {[
              'Circle',
              '9PSB',
              'Visa',
              'Mastercard',
              'SWIFT',
              'NIBSS',
              'Interswitch',
              'Flutterwave',
              'Paystack',
              'Stripe',
              'WorldPay',
              'TransferWise'
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center p-6 bg-zinc-900 border border-white/10 rounded-xl hover:bg-white/5 transition-all"
              >
                <span className="text-lg font-bold text-gray-400">{partner}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500">And 100+ more partners globally</p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why partner with Border?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join Africa's fastest-growing fintech infrastructure platform
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Market Access',
                    description: 'Reach millions of users across 81+ countries'
                  },
                  {
                    title: 'Revenue Growth',
                    description: 'Competitive revenue sharing and partnership models'
                  },
                  {
                    title: 'Technical Excellence',
                    description: 'World-class APIs, SDKs, and developer support'
                  },
                  {
                    title: 'Compliance Support',
                    description: 'Full regulatory compliance and risk management'
                  },
                  {
                    title: 'Brand Association',
                    description: 'Co-marketing opportunities with a trusted brand'
                  },
                  {
                    title: 'Dedicated Support',
                    description: 'Dedicated partner success team'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-zinc-900 border border-white/10 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-8">
                <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Partnership Stats</h3>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  {[
                    { value: '200+', label: 'Active Partners' },
                    { value: '$5B+', label: 'Partner Volume' },
                    { value: '81+', label: 'Countries' },
                    { value: '99.9%', label: 'Uptime SLA' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
                <p className="text-gray-300 mb-6">
                  Fill out our partnership form and our team will reach out within 24 hours
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Process */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-400">Simple steps to becoming a Border partner</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Apply',
                description: 'Submit your partnership application through our online form'
              },
              {
                step: '02',
                title: 'Review',
                description: 'Our team reviews your application and schedules a discovery call'
              },
              {
                step: '03',
                title: 'Integration',
                description: 'Technical onboarding and integration support'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Go live and start serving customers together'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's grow together</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join Border's partner network and expand your global reach
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold"
          >
            Start Partnership Application <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
