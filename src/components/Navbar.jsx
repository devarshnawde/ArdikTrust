import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ShieldCheck } from 'lucide-react';
import { navLinks } from '../data/siteData';

const serviceDropdown = [
  { label: 'Healthcare Compliance & Assurance', path: '/services/compliance' },
  { label: 'Penetration Testing', path: '/services/penetration-testing' },
  { label: 'Identity & Access Security', path: '/services/identity-access' },
  { label: 'Security Auditing', path: '/services/security-audits' },
  { label: 'Security Monitoring', path: '/services/security-monitoring' },
  { label: 'Active Directory Services', path: '/services/active-directory' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E5AA8"/>
                    <stop offset="50%" stopColor="#1E5AA8"/>
                    <stop offset="50%" stopColor="#2FA36B"/>
                    <stop offset="100%" stopColor="#2FA36B"/>
                  </linearGradient>
                </defs>
                <path d="M50 5 L90 20 L90 55 C90 75 72 90 50 97 C28 90 10 75 10 55 L10 20 Z" fill="url(#logoGrad)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <text x="50" y="52" textAnchor="middle" fill="white" fontSize="28" fontWeight="800" fontFamily="Poppins,sans-serif">AT</text>
                <path d="M28 65 L44 80 L72 48" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`text-xl font-bold font-poppins transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                <span style={{ color: '#1E5AA8' }} className={scrolled ? '' : '!text-white'}>Ardik</span>
                <span style={{ color: scrolled ? '#2FA36B' : '#7dd3b0' }}>Trust</span>
              </span>
              <span className={`text-xs font-medium tracking-wide transition-colors ${scrolled ? 'text-gray-500' : 'text-blue-200'}`}>
                Where Security Meets Assurance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.label === 'Services' ? (
                <div key={link.label} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive('/services')
                        ? 'text-green-500'
                        : scrolled
                        ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-72 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {serviceDropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:bg-green-500 transition-colors flex-shrink-0" />
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-green-50 border-t border-gray-100">
                          <Link to="/services" className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1">
                            View All Services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? scrolled ? 'text-green-600' : 'text-green-400'
                      : scrolled
                      ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary text-sm py-2.5 px-5"
            >
              <ShieldCheck className="w-4 h-4" />
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      isActive(link.path)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.label === 'Services' && (
                    <div className="ml-4 mt-1 space-y-1">
                      {serviceDropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        >
                          <div className="w-1 h-1 rounded-full bg-blue-400" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
