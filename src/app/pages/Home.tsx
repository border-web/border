import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Globe, 
  Shield, 
  Zap, 
  CreditCard, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp,
  Lock,
  Smartphone,
  Building,
  Code
} from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D] via-[#071422] to-black">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB3b3JsZCUyMG1hcCUyMG5ldHdvcmslMjBjb25uZWN0aW9ufGVufDF8fHx8MTc3MDgyNTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,78,216,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,78,216,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gradient-border-primary">
              Connecting the world financially
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Global money movement, multi-currency wallets, secure transfers, and enterprise-grade infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="https://app.border.com.ng" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-border-primary text-white rounded-lg hover:shadow-border-premium transition-all text-lg font-semibold"
              >
                Get Started
              </a>
              <a 
                href="https://app.border.com.ng" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-border text-white rounded-lg hover:bg-white/20 transition-all text-lg font-semibold"
              >
                Download App
              </a>
              <Link 
                to="/partners" 
                className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold"
              >
                Partner with Border
              </Link>
            </div>

            {/* Multi-currency showcase */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {['USD', 'NGN', 'GBP', 'EUR', 'CAD', 'ZAR'].map((currency, i) => (
                <div 
                  key={currency}
                  className="px-4 py-2 glass-border rounded-full text-[#E6EDF5] font-medium"
                >
                  {currency}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise-grade financial infrastructure</h2>
            <p className="text-xl text-gray-400">African-rooted, globally trusted</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Transfers',
                description: 'Send money across borders with transparent fees and real-time exchange rates',
                link: '/products/global-transfers'
              },
              {
                icon: Shield,
                title: 'Bank-level Security',
                description: 'Military-grade encryption, KYC/AML compliance, and fraud prevention',
                link: '/security'
              },
              {
                icon: CreditCard,
                title: 'Multi-currency Wallets',
                description: 'Hold, convert, and manage multiple currencies in one secure account',
                link: '/products'
              },
              {
                icon: Smartphone,
                title: 'Virtual POS',
                description: 'Accept payments anywhere with NFC, QR codes, and virtual terminals',
                link: '/products/virtual-pos'
              },
              {
                icon: Building,
                title: 'Business Solutions',
                description: 'Treasury management, payroll, and enterprise-grade APIs',
                link: '/products/business-solutions'
              },
              {
                icon: Code,
                title: 'Developer APIs',
                description: 'Build with our comprehensive APIs, SDKs, and sandbox environment',
                link: '/developers'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Countries supported' },
              { value: '$5B+', label: 'Transaction volume' },
              { value: '1M+', label: 'Active users' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Security & compliance at our core</h2>
              <p className="text-xl text-gray-400 mb-8">
                Built with enterprise-grade security, regulatory compliance, and consumer protection in mind
              </p>
              <div className="space-y-4">
                {[
                  'End-to-end encryption',
                  'KYC/AML compliance',
                  'NDPR & GDPR compliant',
                  'Real-time fraud detection',
                  'Multi-factor authentication',
                  'Regular security audits'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/security" 
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                View Security Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1726064855971-f12e80d59680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBwYXltZW50JTIwZGlnaXRhbHxlbnwxfHx8fDE3NzA4MjU0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Security"
                className="rounded-xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by leading organizations</h2>
            <p className="text-xl text-gray-400">Partnering with banks, fintechs, and payment networks globally</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50">
            {['Circle', '9PSB', 'Visa', 'Mastercard', 'SWIFT', 'NIBSS'].map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all"
              >
                <span className="text-xl font-bold text-gray-400">{partner}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/partners" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              View all partners <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What our users say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Border has transformed how we handle international payments. Fast, secure, and transparent.",
                author: "Sarah Okonkwo",
                role: "CEO, TechStart Africa",
                image: "https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwNzU1NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                quote: "The API integration was seamless. Border's developer experience is world-class.",
                author: "Michael Chen",
                role: "CTO, GlobalPay",
                image: "https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwNzU1NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                quote: "Finally, a fintech platform that understands African and global markets equally well.",
                author: "Amara Williams",
                role: "Finance Director, ExportHub",
                image: "https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwNzU1NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl"
              >
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to go global?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of businesses and individuals moving money across borders with Border
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.border.com.ng" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold"
            >
              Get Started Now
            </a>
            <Link 
              to="/contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}