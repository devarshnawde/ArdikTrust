import { Link } from 'react-router-dom';
import { Mail, Globe, Linkedin, Shield, ChevronRight } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About ArdikTrust', path: '/about' },
      { label: 'Our Mission', path: '/about#mission' },
      { label: 'Core Principles', path: '/about#principles' },
      { label: 'Brand Architecture', path: '/about#brands' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Compliance & Assurance', path: '/services/compliance' },
      { label: 'Penetration Testing', path: '/services/penetration-testing' },
      { label: 'Identity & Access Security', path: '/services/identity-access' },
      { label: 'Security Auditing', path: '/services/security-audits' },
      { label: 'Security Monitoring', path: '/services/security-monitoring' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare Providers', path: '/industries#healthcare' },
      { label: 'HealthTech SaaS', path: '/industries#healthtech' },
      { label: 'RCM Companies', path: '/industries#rcm' },
      { label: 'Regulated Enterprises', path: '/industries#enterprise' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights Blog', path: '/insights' },
      { label: 'Security Checklists', path: '/resources' },
      { label: 'Compliance Guides', path: '/resources' },
      { label: 'Whitepapers', path: '/resources' },
      { label: 'Security Templates', path: '/resources' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E1A2B] text-white">
      {/* Top CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-2">
                Ready to Secure Your Organization?
              </h3>
              <p className="text-blue-200 text-sm">
                Talk to a cybersecurity expert. No pressure, no jargon — just clear answers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary whitespace-nowrap">
                Schedule Consultation
              </Link>
              <Link to="/contact" className="btn-secondary whitespace-nowrap border-white/30">
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 100 100" className="w-12 h-12">
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E5AA8"/>
                    <stop offset="50%" stopColor="#1E5AA8"/>
                    <stop offset="50%" stopColor="#2FA36B"/>
                    <stop offset="100%" stopColor="#2FA36B"/>
                  </linearGradient>
                </defs>
                <path d="M50 5 L90 20 L90 55 C90 75 72 90 50 97 C28 90 10 75 10 55 L10 20 Z" fill="url(#footerLogoGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                <text x="50" y="52" textAnchor="middle" fill="white" fontSize="28" fontWeight="800" fontFamily="Poppins,sans-serif">AT</text>
                <path d="M28 65 L44 80 L72 48" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
              </svg>
              <div>
                <div className="text-2xl font-bold font-poppins">
                  <span className="text-white">Ardik</span>
                  <span style={{ color: '#2FA36B' }}>Trust</span>
                </div>
                <div className="text-xs text-blue-300 tracking-wide">Where Security Meets Assurance</div>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              ArdikTrust is a cybersecurity and compliance firm protecting healthcare organizations, 
              healthtech platforms, and regulated enterprises with expert security consulting, 
              penetration testing, and continuous compliance monitoring.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:security@ardiktrust.com" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                security@ardiktrust.com
              </a>
              <a href="https://www.ardiktrust.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                www.ardiktrust.com
              </a>
            </div>
            {/* Social */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2]/30 hover:bg-[#0A66C2]/60 transition-colors text-sm font-medium text-blue-200 hover:text-white border border-[#0A66C2]/40"
            >
              <Linkedin className="w-4 h-4 fill-current" />
              Follow on LinkedIn
            </a>
          </div>

          {/* Nav Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-1.5 text-blue-200 hover:text-white text-sm transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 text-blue-400 group-hover:text-green-400 transition-colors flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm">
            <Shield className="w-4 h-4" />
            <span>© 2026 ArdikTrust. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-blue-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center gap-1.5 text-blue-400 text-xs">
              <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
