import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  ShieldCheck,
  Fingerprint,
  AlertTriangle,
  CheckCircle,
  Server,
  Key,
  UserCheck,
  Activity
} from 'lucide-react';

export default function Security() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1740477959006-798042a324aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwc2VjdXJpdHklMjBkaWdpdGFsJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NzA4MjU3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
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
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm text-green-400">Bank-level Security</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your security is our priority. Enterprise-grade protection for every transaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Multi-layered security</h2>
            <p className="text-xl text-gray-400">Comprehensive protection at every level</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lock,
                title: 'Encryption',
                description: 'End-to-end AES-256 encryption for all data at rest and in transit',
                details: ['TLS 1.3 connections', 'Encrypted databases', 'Secure key management']
              },
              {
                icon: UserCheck,
                title: 'Authentication',
                description: 'Multi-factor authentication and biometric security options',
                details: ['2FA required', 'Biometric login', 'Device verification']
              },
              {
                icon: Activity,
                title: 'Monitoring',
                description: '24/7 real-time transaction monitoring and anomaly detection',
                details: ['AI fraud detection', 'Real-time alerts', 'Continuous monitoring']
              },
              {
                icon: FileCheck,
                title: 'Compliance',
                description: 'Full regulatory compliance across all operating jurisdictions',
                details: ['KYC/AML', 'NDPR compliant', 'Regular audits']
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl text-center"
              >
                <pillar.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.details.map((detail, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-center justify-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">How we protect you</h2>
              <p className="text-xl text-gray-400 mb-8">
                Industry-leading security measures to keep your money and data safe
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Lock,
                    title: 'Data Encryption',
                    description: 'All sensitive data is encrypted using military-grade AES-256 encryption both at rest and in transit.'
                  },
                  {
                    icon: Fingerprint,
                    title: 'Identity Verification',
                    description: 'Robust KYC processes with document verification, liveness checks, and biometric authentication.'
                  },
                  {
                    icon: Eye,
                    title: 'Transaction Monitoring',
                    description: 'AI-powered fraud detection systems monitor every transaction for suspicious activity in real-time.'
                  },
                  {
                    icon: Server,
                    title: 'Infrastructure Security',
                    description: 'Enterprise-grade cloud infrastructure with redundancy, DDoS protection, and regular security audits.'
                  },
                  {
                    icon: Key,
                    title: 'Access Control',
                    description: 'Role-based access controls, API key management, and comprehensive audit logging.'
                  },
                  {
                    icon: AlertTriangle,
                    title: 'Incident Response',
                    description: 'Dedicated security team with 24/7 monitoring and rapid incident response protocols.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-zinc-900 border border-white/10 rounded-xl"
                  >
                    <feature.icon className="w-10 h-10 text-blue-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Security Certifications</h3>
                <div className="space-y-4">
                  {[
                    'PCI DSS Level 1 Compliant',
                    'ISO 27001 Certified',
                    'SOC 2 Type II Compliant',
                    'NDPR Compliant',
                    'Regular Penetration Testing',
                    'Third-party Security Audits'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Compliance Standards</h3>
                <div className="space-y-4">
                  {[
                    'KYC (Know Your Customer)',
                    'AML (Anti-Money Laundering)',
                    'CFT (Counter Financing of Terrorism)',
                    'NDPR (Nigeria Data Protection Regulation)',
                    'CBN Guidelines Compliant',
                    'International Sanctions Screening'
                  ].map((standard, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FileCheck className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Your Money is Safe</h3>
                <p className="text-gray-300 text-sm">
                  Customer funds are held in segregated accounts with licensed financial institutions. 
                  We never use customer funds for operational purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Data Protection */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Privacy & Data Protection</h2>
            <p className="text-xl text-gray-400">We respect your privacy and protect your data</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Minimization',
                description: 'We only collect data that is necessary for providing our services',
                icon: Eye
              },
              {
                title: 'User Control',
                description: 'You have full control over your data with options to export or delete',
                icon: UserCheck
              },
              {
                title: 'Transparency',
                description: 'Clear privacy policies with no hidden data sharing or selling',
                icon: FileCheck
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl text-center"
              >
                <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Security Issues */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Report Security Issues</h2>
          <p className="text-xl text-gray-400 mb-8">
            If you discover a security vulnerability, please report it to our security team immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:admin@border.com.ng" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all text-lg font-semibold"
            >
              Report Security Issue
            </a>
            <Link 
              to="/trust-center" 
              className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold"
            >
              Visit Trust Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}