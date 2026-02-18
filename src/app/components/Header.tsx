import { Link } from 'react-router';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-border-dark">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-border-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-gradient-border-primary">
              Border
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                Products
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link to="/products" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded">
                    All Products
                  </Link>
                  <Link to="/products/global-transfers" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded">
                    Global Transfers
                  </Link>
                  <Link to="/products/virtual-pos" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded">
                    Virtual POS
                  </Link>
                  <Link to="/products/business-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded">
                    Business Solutions
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/developers" className="text-sm text-gray-300 hover:text-white transition-colors">
              Developers
            </Link>
            <Link to="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/security" className="text-sm text-gray-300 hover:text-white transition-colors">
              Security
            </Link>
            <Link to="/partners" className="text-sm text-gray-300 hover:text-white transition-colors">
              Partners
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <a 
              href="https://app.border.com.ng" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Login
            </a>
            <a 
              href="https://app.border.com.ng" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10"
            >
              <div className="py-4 space-y-3">
                <Link to="/about" className="block px-4 py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link to="/how-it-works" className="block px-4 py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  How It Works
                </Link>
                
                <div>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white"
                  >
                    Products
                    <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {productsOpen && (
                    <div className="ml-4 space-y-2 mt-2">
                      <Link to="/products" className="block px-4 py-2 text-sm text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                        All Products
                      </Link>
                      <Link to="/products/global-transfers" className="block px-4 py-2 text-sm text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                        Global Transfers
                      </Link>
                      <Link to="/products/virtual-pos" className="block px-4 py-2 text-sm text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                        Virtual POS
                      </Link>
                      <Link to="/products/business-solutions" className="block px-4 py-2 text-sm text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                        Business Solutions
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/developers" className="block px-4 py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Developers
                </Link>
                <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </Link>
                <Link to="/security" className="block px-4 py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Security
                </Link>
                <Link to="/partners" className="block px-4 py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Partners
                </Link>
                <Link to="/contact" className="block px-4 py-2 text-sm text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
                <a 
                  href="https://app.border.com.ng" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </a>
                <a 
                  href="https://app.border.com.ng" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mx-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm text-center rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}