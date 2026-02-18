import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Building2, 
  Globe2, 
  Wallet, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  DollarSign,
  CreditCard,
  BarChart3
} from 'lucide-react';

export default function BusinessSolutions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDgwMDE3OHww&ixlib=rb-4.1.0&q=80&w=1080')`,
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
              <Building2 className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-400">Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Business Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enterprise-grade financial infrastructure for global businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all text-lg font-semibold"
              >
                Request Demo
              </Link>
              <Link 
                to="/pricing" 
                className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete financial infrastructure</h2>
            <p className="text-xl text-gray-400">Everything your business needs to operate globally</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wallet,
                title: 'Treasury Management',
                description: 'Centralized multi-currency accounts with real-time visibility and control over global funds',
                features: ['Multi-currency accounts', 'Real-time reporting', 'Cash flow forecasting']
              },
              {
                icon: Users,
                title: 'Global Payroll',
                description: 'Pay employees and contractors worldwide in their local currency with competitive FX rates',
                features: ['Multi-country payroll', 'Compliance automation', 'Tax optimization']
              },
              {
                icon: Globe2,
                title: 'Cross-border Payments',
                description: 'Send and receive payments to suppliers and partners in 150+ countries',
                features: ['Instant settlements', 'Transparent fees', 'Batch processing']
              },
              {
                icon: CreditCard,
                title: 'Merchant Collections',
                description: 'Accept payments from customers globally with local payment methods',
                features: ['Multiple payment methods', 'Auto-reconciliation', 'Chargeback protection']
              },
              {
                icon: BarChart3,
                title: 'Trade Finance',
                description: 'Import and export payment solutions with competitive rates and fast processing',
                features: ['Letters of credit', 'Trade documentation', 'FX hedging']
              },
              {
                icon: Shield,
                title: 'Risk & Compliance',
                description: 'Built-in compliance tools for KYC, AML, and transaction monitoring',
                features: ['Automated screening', 'Audit trails', 'Regulatory reporting']
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Integration */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Powerful API integration</h2>
              <p className="text-xl text-gray-400 mb-8">
                Integrate Border's financial infrastructure directly into your systems with our comprehensive APIs
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'RESTful API with comprehensive documentation',
                  'Webhooks for real-time notifications',
                  'SDKs for multiple programming languages',
                  'Sandbox environment for testing',
                  'Dedicated technical support',
                  'High availability and uptime SLA'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/developers" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                View API Documentation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                <pre>{`{
  "transaction": {
    "id": "txn_abc123",
    "amount": 10000,
    "currency": "USD",
    "status": "completed",
    "recipient": {
      "account": "NGN_9876543210",
      "currency": "NGN"
    },
    "settled_amount": 16500000,
    "fx_rate": 1650,
    "fees": 100,
    "timestamp": "2026-02-11T10:30:00Z"
  }
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for your industry</h2>
            <p className="text-xl text-gray-400">Trusted by businesses across sectors</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce & Retail',
                description: 'Accept global payments, manage multi-currency pricing, and handle cross-border transactions seamlessly',
                stats: '40% reduction in payment processing costs'
              },
              {
                title: 'Import/Export',
                description: 'Streamline international trade payments with competitive FX rates and fast settlements',
                stats: '3x faster settlement times'
              },
              {
                title: 'Technology & SaaS',
                description: 'Bill customers globally, pay remote teams, and manage subscriptions in multiple currencies',
                stats: '99.9% payment success rate'
              },
              {
                title: 'Professional Services',
                description: 'Invoice international clients, receive payments, and manage project-based cash flow',
                stats: '50% faster international invoicing'
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-zinc-900 border border-white/10 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="inline-flex px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm text-green-400">{useCase.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale globally?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join leading businesses using Border for their global financial operations
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold"
          >
            Schedule a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
