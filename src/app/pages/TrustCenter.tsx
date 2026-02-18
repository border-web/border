import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Shield, 
  FileText, 
  Award, 
  CheckCircle, 
  Download,
  AlertCircle,
  Lock,
  FileCheck,
  Scale,
  Globe
} from 'lucide-react';

export default function TrustCenter() {
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
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Trust Center
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transparency, compliance, and security documentation in one place
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Documents */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance & Documentation</h2>
            <p className="text-xl text-gray-400">Access our compliance policies and certifications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: 'Privacy Policy',
                description: 'How we collect, use, and protect your personal information',
                updated: 'Updated Feb 2026',
                link: '/legal'
              },
              {
                icon: FileCheck,
                title: 'Terms of Service',
                description: 'Legal terms governing the use of Border services',
                updated: 'Updated Jan 2026',
                link: '/legal'
              },
              {
                icon: Shield,
                title: 'Security Policy',
                description: 'Our approach to protecting your data and transactions',
                updated: 'Updated Feb 2026',
                link: '/security'
              },
              {
                icon: Scale,
                title: 'AML/KYC Policy',
                description: 'Anti-money laundering and customer verification procedures',
                updated: 'Updated Dec 2025',
                link: '#'
              },
              {
                icon: Award,
                title: 'Compliance Certifications',
                description: 'ISO 27001, SOC 2, PCI DSS and other certifications',
                updated: 'Verified 2026',
                link: '#'
              },
              {
                icon: Globe,
                title: 'Regulatory Licenses',
                description: 'Financial licenses and regulatory approvals',
                updated: 'Active',
                link: '#'
              }
            ].map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                <doc.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{doc.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{doc.updated}</span>
                  <Link 
                    to={doc.link}
                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <Download className="w-4 h-4" />
                    View
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Security Framework</h2>
              <p className="text-xl text-gray-400 mb-8">
                Our comprehensive approach to security and risk management
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Infrastructure Security',
                    items: [
                      'Enterprise-grade cloud hosting',
                      'Multi-region redundancy',
                      'DDoS protection',
                      'Regular security audits'
                    ]
                  },
                  {
                    title: 'Data Protection',
                    items: [
                      'End-to-end encryption',
                      'Encrypted databases',
                      'Secure key management',
                      'Data retention policies'
                    ]
                  },
                  {
                    title: 'Access Control',
                    items: [
                      'Multi-factor authentication',
                      'Role-based permissions',
                      'Session management',
                      'Audit logging'
                    ]
                  },
                  {
                    title: 'Incident Response',
                    items: [
                      '24/7 security monitoring',
                      'Rapid response team',
                      'Breach notification procedures',
                      'Recovery protocols'
                    ]
                  }
                ].map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-zinc-900 border border-white/10 rounded-xl"
                  >
                    <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Certifications & Audits</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'ISO 27001',
                      description: 'Information security management',
                      status: 'Certified 2025',
                      verified: true
                    },
                    {
                      title: 'SOC 2 Type II',
                      description: 'Security, availability, and confidentiality',
                      status: 'Compliant 2025',
                      verified: true
                    },
                    {
                      title: 'PCI DSS Level 1',
                      description: 'Payment card industry standards',
                      status: 'Certified 2025',
                      verified: true
                    },
                    {
                      title: 'NDPR Compliance',
                      description: 'Nigeria data protection regulation',
                      status: 'Compliant 2026',
                      verified: true
                    }
                  ].map((cert, index) => (
                    <div key={index} className="flex gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${cert.verified ? 'bg-green-500/10' : 'bg-gray-500/10'} flex items-center justify-center`}>
                        <Award className={`w-6 h-6 ${cert.verified ? 'text-green-400' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{cert.title}</h4>
                          {cert.verified && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mb-1">{cert.description}</p>
                        <p className="text-xs text-gray-500">{cert.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8">
                <Lock className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
                <p className="text-gray-300 text-sm mb-4">
                  We conduct regular third-party penetration testing and vulnerability assessments 
                  to ensure the highest level of security.
                </p>
                <p className="text-xs text-gray-500">Last tested: January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Reports */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparency Reports</h2>
            <p className="text-xl text-gray-400">Regular reporting on our security and compliance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Q4 2025 Security Report',
                date: 'Published Jan 15, 2026',
                metrics: ['99.99% Uptime', '0 Security Breaches', '24/7 Monitoring']
              },
              {
                title: 'Q3 2025 Compliance Report',
                date: 'Published Oct 15, 2025',
                metrics: ['100% KYC Compliance', '5000+ Verifications', '0 Violations']
              }
            ].map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{report.date}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {report.metrics.map((metric, i) => (
                    <span key={i} className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400">
                      {metric}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm">
                  <Download className="w-4 h-4" />
                  Download Report
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 border border-white/10 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Incident Response</h2>
                <p className="text-gray-400">
                  In the unlikely event of a security incident, we have comprehensive procedures 
                  to respond quickly and transparently.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Immediate Response</h4>
                  <p className="text-sm text-gray-400">24/7 security team activates within minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">User Notification</h4>
                  <p className="text-sm text-gray-400">Affected users notified within required timeframes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Regulatory Reporting</h4>
                  <p className="text-sm text-gray-400">Full compliance with reporting obligations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions about our security?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Our security and compliance team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:admin@border.com.ng" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all text-lg font-semibold"
            >
              Contact Security Team
            </a>
            <Link 
              to="/security" 
              className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold"
            >
              View Security Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}