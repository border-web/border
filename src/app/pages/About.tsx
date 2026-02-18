import { motion } from 'motion/react';
import { Target, Heart, Globe, TrendingUp, Shield, Zap, Link2, Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Border</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Border is a next-generation financial technology platform built to connect the world financially by making cross-border payments, digital banking, and business transactions seamless, fast, and accessible for Africans and the global community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl"
            >
              <Target className="w-12 h-12 text-blue-400 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-xl text-gray-300">
                To connect the world financially.
              </p>
              <p className="text-lg text-gray-400 mt-4">
                We envision a future where borders no longer limit financial access — where anyone, anywhere, can send, receive, store, and use money freely across countries, currencies, and platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-xl"
            >
              <Heart className="w-12 h-12 text-purple-400 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300">
                To build secure, compliant, and scalable financial infrastructure that:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>• Empowers Africans to participate in the global economy</li>
                <li>• Enables businesses to operate internationally with ease</li>
                <li>• Reduces friction in cross-border payments</li>
                <li>• Unlocks financial inclusion through technology</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Border is a next-generation financial technology platform built to connect the world financially by making cross-border payments, digital banking, and global financial access seamless, fast, and inclusive for Africans and the global community.
            </p>
            <p>
              Founded in 2021 by Michael Alfred Ogisi, Border was created to solve one of Africa's biggest challenges — financial fragmentation. Across the continent, individuals and businesses struggle with slow transfers, high fees, limited access to global financial services, and disconnected payment systems. Border exists to eliminate these barriers.
            </p>
            <p>
              Michael Alfred Ogisi serves as the Founder, CEO, and Lead Engineer, leading the platform's vision, product strategy, system architecture, backend infrastructure, and frontend development — ensuring Border is built as a true financial infrastructure platform, not just a consumer app.
            </p>
            <p>
              We are building a unified financial infrastructure that enables:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Local and international money transfers</li>
              <li>Digital banking services</li>
              <li>Multi-currency wallets</li>
              <li>Currency conversion</li>
              <li>Virtual and physical payment cards</li>
              <li>POS and merchant payment systems</li>
              <li>Global settlement for businesses</li>
              <li>Cross-border trade enablement</li>
            </ul>
            <p>
              Border is owned and operated by Ikpoki-Anyu Limited, a Nigerian-registered fintech company focused on building scalable financial infrastructure for Africa and emerging markets.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Access',
                description: 'We believe financial services should not be limited by geography.'
              },
              {
                icon: Shield,
                title: 'Trust & Security',
                description: 'Compliance, transparency, and data protection are at the core of everything we build.'
              },
              {
                icon: Zap,
                title: 'Speed & Efficiency',
                description: 'Fast settlements, instant transfers, and frictionless transactions.'
              },
              {
                icon: Link2,
                title: 'Interoperability',
                description: 'Connecting banks, fintechs, blockchains, wallets, POS systems, and payment rails into one ecosystem.'
              },
              {
                icon: Rocket,
                title: 'Innovation',
                description: 'We build for the future of finance, not the past.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl"
              >
                <value.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-400">Building the future of global finance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael Alfred Ogisi',
                role: 'CEO, Founder, Lead Engineer',
                bio: 'Leading platform vision, product strategy, system architecture, backend infrastructure, and frontend development.'
              },
              {
                name: 'Meshach Thomas',
                role: 'Co-Founder & Growth Lead',
                bio: 'Driving growth strategy and market expansion across global markets.'
              },
              {
                name: 'Lilian Ibibo',
                role: 'Design Manager',
                bio: 'Crafting intuitive user experiences for seamless financial interactions.'
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-blue-400 mb-2">{leader.role}</p>
                <p className="text-sm text-gray-400">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Milestones</h2>
          <div className="space-y-8">
            {[
              { year: '2021', event: 'Border founded by Michael Alfred Ogisi' },
              { year: '2022', event: 'Launched multi-currency wallet and local transfers' },
              { year: '2023', event: 'Expanded cross-border payment corridors across Africa' },
              { year: '2024', event: 'Launched Virtual POS and merchant payment systems' },
              { year: '2025', event: 'Enterprise solutions and API platform launch' },
              { year: '2026', event: 'Global expansion with unified financial infrastructure' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-24 text-2xl font-bold text-blue-400">
                  {milestone.year}
                </div>
                <div className="flex-1 p-4 bg-zinc-900 border border-white/10 rounded-lg">
                  <p className="text-lg text-gray-300">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Corporate Governance</h2>
          <p className="text-xl text-gray-300 mb-8">
            Border is owned and operated by Ikpoki-Anyu Limited, a Nigerian-registered fintech company. We operate under strict corporate governance principles, with oversight from experienced board members, regulatory compliance, and transparent reporting structures.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Board of Directors</h3>
              <p className="text-sm text-gray-400">Independent oversight and strategic guidance</p>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-sm text-gray-400">Full compliance with local and international regulations</p>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Audit Committee</h3>
              <p className="text-sm text-gray-400">Regular audits and financial transparency</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}