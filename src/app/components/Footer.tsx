import { Link } from 'react-router';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/global-transfers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Global Transfers
                </Link>
              </li>
              <li>
                <Link to="/products/virtual-pos" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Virtual POS
                </Link>
              </li>
              <li>
                <Link to="/products/business-solutions" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About Border
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Media & Press
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/developers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  SDKs
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sandbox
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Security */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Trust & Security</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/security" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/trust-center" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Trust Center
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/partners" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Partner Network
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Border
            </span>
            <span className="text-sm text-gray-500">
              Connecting the world financially
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:admin@border.com.ng" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2026 Border. All rights reserved. African-rooted, globally trusted.</p>
        </div>
      </div>
    </footer>
  );
}