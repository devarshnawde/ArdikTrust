import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection({ 
  title = 'Ready to Secure Your Organization?',
  description = 'Talk to our cybersecurity experts and get a tailored security consultation for your organization.',
  primaryLabel = 'Schedule Consultation',
  primaryPath = '/contact',
  secondaryLabel = 'Request Compliance Assessment',
  secondaryPath = '/contact',
  variant = 'dark', // 'dark' | 'light' | 'gradient'
}) {
  const isDark = variant !== 'light';

  return (
    <section className={`py-24 relative overflow-hidden ${variant === 'dark' ? 'bg-[#0E1A2B]' : variant === 'gradient' ? 'bg-gradient-to-r from-[#1E5AA8] to-[#0E1A2B]' : 'bg-[#F5F7FA]'}`}>
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 ${isDark ? 'bg-white/10 text-green-300 border border-green-500/30' : 'bg-blue-100 text-blue-700'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            Healthcare Cybersecurity Experts
          </div>

          <h2 className={`text-4xl sm:text-5xl font-extrabold font-poppins mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          <p className={`text-lg leading-relaxed mb-10 ${isDark ? 'text-blue-200' : 'text-gray-600'}`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={primaryPath} className="btn-primary text-base py-4 px-10">
              <Phone className="w-5 h-5" />
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to={secondaryPath} className={`text-base py-4 px-10 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 border ${
              isDark 
                ? 'border-white/30 text-white hover:bg-white/10 hover:border-white/60' 
                : 'border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400'
            }`}>
              {secondaryLabel}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className={`mt-12 flex flex-wrap items-center justify-center gap-8 text-sm ${isDark ? 'text-blue-300' : 'text-gray-500'}`}>
            {['HIPAA Compliant Process', 'No-Commitment Consultation', 'Response Within 24 Hours'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
