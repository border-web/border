import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  TrendingUp,
  Heart,
  Users,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Careers() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1688302529084-767fbc296565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc3MDgwNDg1Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
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
              <Briefcase className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-400">Join Our Team</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Careers at Border
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us connect the world financially. Join a team building the future of global payments.
            </p>
            <a 
              href="#openings" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all text-lg font-semibold"
            >
              View Open Positions <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Border */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why join Border?</h2>
            <p className="text-xl text-gray-400">Be part of something bigger</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Impact',
                description: 'Build products used by millions across 150+ countries'
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                description: 'Fast-growing company with ambitious goals and career advancement'
              },
              {
                icon: Users,
                title: 'Culture',
                description: 'Diverse, inclusive team that values collaboration and innovation'
              },
              {
                icon: Heart,
                title: 'Benefits',
                description: 'Competitive compensation, equity, health insurance, and more'
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
                <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Benefits & Perks</h2>
              <p className="text-xl text-gray-400 mb-8">
                We invest in our people with comprehensive benefits and a supportive work environment
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Competitive salary',
                  'Equity/stock options',
                  'Health insurance',
                  'Dental & vision',
                  'Retirement plans',
                  'Flexible work hours',
                  'Remote work options',
                  'Learning & development',
                  'Paid time off',
                  'Parental leave',
                  'Team events',
                  'Wellness programs'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-8">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Fast-paced Environment</h3>
                <p className="text-gray-400">
                  Work on challenging problems with cutting-edge technology. 
                  Ship code that impacts millions of users worldwide.
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-8">
                <Users className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Diverse Team</h3>
                <p className="text-gray-400">
                  Join a global team from 20+ countries, bringing diverse perspectives 
                  and experiences to solve complex challenges.
                </p>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-8">
                <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Career Growth</h3>
                <p className="text-gray-400">
                  Clear career paths, mentorship programs, and opportunities to take on 
                  new challenges as the company grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-400">Find your next opportunity</p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Senior Backend Engineer',
                department: 'Engineering',
                location: 'Lagos, Nigeria / Remote',
                type: 'Full-time'
              },
              {
                title: 'Product Designer',
                department: 'Design',
                location: 'Remote',
                type: 'Full-time'
              },
              {
                title: 'Compliance Officer',
                department: 'Legal & Compliance',
                location: 'Lagos, Nigeria',
                type: 'Full-time'
              },
              {
                title: 'DevOps Engineer',
                department: 'Engineering',
                location: 'Remote',
                type: 'Full-time'
              },
              {
                title: 'Business Development Manager',
                department: 'Sales',
                location: 'Nairobi, Kenya',
                type: 'Full-time'
              },
              {
                title: 'Customer Success Lead',
                department: 'Support',
                location: 'Lagos, Nigeria / Remote',
                type: 'Full-time'
              },
              {
                title: 'Data Analyst',
                department: 'Data',
                location: 'Remote',
                type: 'Full-time'
              },
              {
                title: 'Marketing Manager',
                department: 'Marketing',
                location: 'Remote',
                type: 'Full-time'
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-center whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Don't see a position that fits?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              Send us your resume <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Customer First',
                description: 'We put our customers at the center of everything we do, building products that solve real problems.'
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our work, from code quality to customer service.'
              },
              {
                title: 'Innovation',
                description: 'We embrace change and constantly seek better ways to serve our customers and partners.'
              },
              {
                title: 'Transparency',
                description: 'We believe in open communication, honest feedback, and transparent operations.'
              },
              {
                title: 'Integrity',
                description: 'We act with integrity, maintaining the highest ethical standards in all our dealings.'
              },
              {
                title: 'Collaboration',
                description: 'We work together across teams and borders, leveraging diverse perspectives.'
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
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to join us?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Help us build the future of global finance
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
