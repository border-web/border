import { motion } from 'motion/react';
import { Shield, FileText, Lock, Scale, Eye, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function Legal() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Legal & Policies</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our commitment to transparency, compliance, and protecting your rights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Documents Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: FileText,
                title: 'Terms of Service',
                description: 'Conditions for using Border services',
                updated: 'Updated: February 1, 2026'
              },
              {
                icon: Lock,
                title: 'Privacy Policy',
                description: 'How we collect, use, and protect your data',
                updated: 'Updated: February 1, 2026'
              },
              {
                icon: Shield,
                title: 'Security Policy',
                description: 'Our security measures and protocols',
                updated: 'Updated: January 15, 2026'
              },
              {
                icon: Scale,
                title: 'Acceptable Use Policy',
                description: 'Guidelines for acceptable platform usage',
                updated: 'Updated: January 1, 2026'
              },
              {
                icon: Eye,
                title: 'Cookie Policy',
                description: 'How we use cookies and tracking',
                updated: 'Updated: December 15, 2025'
              },
              {
                icon: AlertCircle,
                title: 'Disclaimer',
                description: 'Important notices and disclaimers',
                updated: 'Updated: January 1, 2026'
              }
            ].map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group cursor-pointer"
              >
                <doc.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">{doc.description}</p>
                <p className="text-xs text-gray-500">{doc.updated}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Regulatory compliance</h2>
            <p className="text-gray-400">Border operates under full regulatory oversight in all jurisdictions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-zinc-900 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Licenses & Registrations</h3>
              <div className="space-y-4">
                {[
                  {
                    jurisdiction: 'Nigeria',
                    regulator: 'Central Bank of Nigeria (CBN)',
                    license: 'Payment Service Provider License',
                    number: 'PSP-2023-001-XXX'
                  },
                  {
                    jurisdiction: 'United Kingdom',
                    regulator: 'Financial Conduct Authority (FCA)',
                    license: 'Electronic Money Institution',
                    number: 'FCA-EMI-2023-XXX'
                  },
                  {
                    jurisdiction: 'Kenya',
                    regulator: 'Central Bank of Kenya',
                    license: 'Payment Service Provider',
                    number: 'CBK-PSP-2024-XXX'
                  },
                  {
                    jurisdiction: 'United States',
                    regulator: 'FinCEN',
                    license: 'Money Services Business (MSB)',
                    number: 'MSB-31000-XXX-XXX'
                  }
                ].map((license, index) => (
                  <div key={index} className="p-4 bg-black/50 rounded-lg border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{license.jurisdiction}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{license.regulator}</p>
                    <p className="text-sm text-gray-500">{license.license}</p>
                    <p className="text-xs text-gray-600 mt-1">License: {license.number}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-zinc-900 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Data Protection Compliance</h3>
              <div className="space-y-4">
                {[
                  {
                    framework: 'GDPR',
                    region: 'European Union',
                    status: 'Fully Compliant',
                    icon: '🇪🇺'
                  },
                  {
                    framework: 'NDPR',
                    region: 'Nigeria',
                    status: 'Fully Compliant',
                    icon: '🇳🇬'
                  },
                  {
                    framework: 'CCPA',
                    region: 'California, USA',
                    status: 'Fully Compliant',
                    icon: '🇺🇸'
                  },
                  {
                    framework: 'POPIA',
                    region: 'South Africa',
                    status: 'Fully Compliant',
                    icon: '🇿🇦'
                  }
                ].map((compliance, index) => (
                  <div key={index} className="p-4 bg-black/50 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{compliance.icon}</span>
                        <div>
                          <span className="font-semibold block">{compliance.framework}</span>
                          <span className="text-sm text-gray-400">{compliance.region}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        {compliance.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Protection */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Consumer protection</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-zinc-900 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Your rights</h3>
              <div className="space-y-4">
                {[
                  'Right to transparent pricing and fee disclosure',
                  'Right to data portability and deletion',
                  'Right to dispute resolution and refunds',
                  'Right to account access and withdrawal',
                  'Right to privacy and data protection',
                  'Right to fair treatment and non-discrimination'
                ].map((right, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-gray-300">{right}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-zinc-900 border border-white/10 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Dispute resolution</h3>
              <p className="text-gray-400 mb-6">
                We are committed to resolving any disputes fairly and efficiently. Our dispute resolution process includes:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Internal resolution',
                    description: 'Contact our support team within 30 days'
                  },
                  {
                    step: '2',
                    title: 'Escalation',
                    description: 'Escalate to our compliance team if unresolved'
                  },
                  {
                    step: '3',
                    title: 'Mediation',
                    description: 'Independent mediation available'
                  },
                  {
                    step: '4',
                    title: 'Regulatory recourse',
                    description: 'File complaint with relevant regulator'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-black/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AML/KYC */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Anti-Money Laundering (AML) & Know Your Customer (KYC)</h2>
            <p className="text-xl text-gray-400 mb-8">
              Border maintains strict AML/KYC policies to prevent financial crime and comply with international regulations.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Identity Verification',
                  points: [
                    'Government-issued ID required',
                    'Proof of address verification',
                    'Biometric verification available',
                    'Enhanced due diligence for high-risk'
                  ]
                },
                {
                  title: 'Transaction Monitoring',
                  points: [
                    'Real-time transaction screening',
                    'Automated suspicious activity detection',
                    'Sanctions list screening',
                    'Regular compliance audits'
                  ]
                },
                {
                  title: 'Risk Management',
                  points: [
                    'Risk-based approach to compliance',
                    'Customer risk profiling',
                    'Geographic risk assessment',
                    'Ongoing monitoring and review'
                  ]
                },
                {
                  title: 'Reporting',
                  points: [
                    'Suspicious Activity Reports (SARs)',
                    'Currency Transaction Reports (CTRs)',
                    'Cooperation with law enforcement',
                    'Regular regulatory reporting'
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400">
                        <span className="text-blue-400 mt-1">•</span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Legal */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Legal inquiries</h2>
          <p className="text-xl text-gray-400 mb-8">
            For legal, compliance, or regulatory questions, contact our legal team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:admin@border.com.ng" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-semibold"
            >
              admin@border.com.ng
            </a>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-semibold"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-12 p-6 bg-zinc-900 border border-white/10 rounded-xl text-left">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Registered Office:</strong><br />
              Border Financial Services Limited<br />
              1 Adeola Odeku Street, Victoria Island, Lagos, Nigeria<br />
              Registration Number: RC-XXXXX<br />
              VAT Number: NG-VAT-XXXXX
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}