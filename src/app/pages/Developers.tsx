import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Code2, 
  BookOpen, 
  Zap, 
  Terminal, 
  Webhook,
  FileCode,
  Boxes,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Lock,
  TestTube
} from 'lucide-react';

export default function Developers() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBwcm9ncmFtbWluZyUyMGFwaXxlbnwxfHx8fDE3NzA4MjU3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
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
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Code2 className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-400">Developer Platform</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Build with Border
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful APIs, comprehensive SDKs, and world-class documentation for developers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#docs" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all text-lg font-semibold"
              >
                Read the Docs
              </a>
              <a 
                href="#sandbox" 
                className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold"
              >
                Try Sandbox
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Code */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get started in minutes</h2>
            <p className="text-xl text-gray-400">Simple, powerful, and developer-friendly</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-5 h-5 text-blue-400" />
                  <span className="font-mono text-sm text-gray-400">Install the SDK</span>
                </div>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                  <pre>{`npm install @border/sdk

# or

yarn add @border/sdk`}</pre>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-purple-400" />
                  <span className="font-mono text-sm text-gray-400">Initialize the client</span>
                </div>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                  <pre>{`import { Border } from '@border/sdk';

const border = new Border({
  apiKey: process.env.BORDER_API_KEY,
  environment: 'production'
});`}</pre>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span className="font-mono text-sm text-gray-400">Make your first transfer</span>
                </div>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                  <pre>{`const transfer = await border.transfers.create({
  amount: 10000,
  currency: 'USD',
  recipient: {
    accountId: 'acc_xyz789',
    currency: 'NGN'
  }
});

console.log(transfer.status);
// "completed"`}</pre>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">What you get</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: BookOpen,
                    title: 'Comprehensive Documentation',
                    description: 'Clear guides, API references, and code examples for every endpoint'
                  },
                  {
                    icon: Boxes,
                    title: 'Multi-language SDKs',
                    description: 'Official SDKs for Node.js, Python, PHP, Ruby, and more'
                  },
                  {
                    icon: TestTube,
                    title: 'Sandbox Environment',
                    description: 'Test your integration without real money or credentials'
                  },
                  {
                    icon: Webhook,
                    title: 'Real-time Webhooks',
                    description: 'Get instant notifications for transaction events'
                  },
                  {
                    icon: Lock,
                    title: 'Secure Authentication',
                    description: 'API keys, OAuth 2.0, and webhook signature verification'
                  },
                  {
                    icon: PlayCircle,
                    title: 'Interactive API Explorer',
                    description: 'Test API calls directly from your browser'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-zinc-900 border border-white/10 rounded-xl"
                  >
                    <feature.icon className="w-10 h-10 text-blue-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Full-featured API</h2>
            <p className="text-xl text-gray-400">Everything you need to build powerful financial applications</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transfers',
                endpoints: ['Create transfer', 'Get transfer status', 'List transfers', 'Cancel transfer', 'Estimate fees'],
                color: 'blue'
              },
              {
                title: 'Accounts',
                endpoints: ['Create account', 'Get balance', 'List transactions', 'Account details', 'Multi-currency'],
                color: 'purple'
              },
              {
                title: 'FX Exchange',
                endpoints: ['Get rates', 'Convert currency', 'Rate history', 'Lock rate', 'Hedging'],
                color: 'green'
              },
              {
                title: 'Recipients',
                endpoints: ['Add recipient', 'Verify account', 'List recipients', 'Update details', 'Delete recipient'],
                color: 'orange'
              },
              {
                title: 'Payments',
                endpoints: ['Create payment', 'Payment status', 'Refunds', 'Batch payments', 'Recurring'],
                color: 'pink'
              },
              {
                title: 'Webhooks',
                endpoints: ['Configure webhook', 'Event types', 'Retry policy', 'Signature verify', 'Logs'],
                color: 'cyan'
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
                <ul className="space-y-2">
                  {category.endpoints.map((endpoint, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {endpoint}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 bg-black" id="sdks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Official SDKs</h2>
            <p className="text-xl text-gray-400">Write less code, ship faster</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Node.js', version: 'v2.4.0', icon: '🟢' },
              { name: 'Python', version: 'v1.8.3', icon: '🐍' },
              { name: 'PHP', version: 'v3.1.0', icon: '🐘' },
              { name: 'Ruby', version: 'v2.0.5', icon: '💎' },
              { name: 'Java', version: 'v1.5.2', icon: '☕' },
              { name: 'Go', version: 'v0.9.1', icon: '🔷' },
              { name: '.NET', version: 'v2.2.0', icon: '🔵' },
              { name: 'React', version: 'v1.3.0', icon: '⚛️' }
            ].map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl text-center hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{sdk.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{sdk.name}</h3>
                <p className="text-sm text-gray-500">{sdk.version}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Documentation',
                description: 'Comprehensive guides and API references',
                link: '#docs',
                linkText: 'Read the docs'
              },
              {
                icon: TestTube,
                title: 'Sandbox',
                description: 'Test your integration in a safe environment',
                link: '#sandbox',
                linkText: 'Try sandbox'
              },
              {
                icon: FileCode,
                title: 'Code Examples',
                description: 'Sample projects and integration patterns',
                link: '#examples',
                linkText: 'View examples'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-zinc-900 border border-white/10 rounded-xl text-center"
              >
                <resource.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <a href={resource.link} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                  {resource.linkText} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start building?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Get your API keys and start integrating Border today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold"
            >
              Get API Keys
            </Link>
            <a 
              href="#docs" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
