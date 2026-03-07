import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({
  badge,
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  children,
  variant = 'default', // 'default' | 'compact'
}) {
  return (
    <section className="relative hero-gradient overflow-hidden min-h-screen flex items-center">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-green-300 border border-green-500/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                {badge}
              </span>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-poppins leading-tight text-white mb-4"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-200 font-semibold text-lg mb-6 tracking-wide"
            >
              {subheadline}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-blue-100/80 text-lg leading-relaxed mb-10 max-w-2xl"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {primaryCTA && (
                <Link to={primaryCTA.path} className="btn-primary text-base py-3.5 px-8">
                  <primaryCTA.icon className="w-5 h-5" />
                  {primaryCTA.label}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryCTA.path} className="btn-secondary text-base py-3.5 px-8">
                  {secondaryCTA.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {/* Stats Row */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold font-poppins text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-blue-200">{stat.label}</div>
                <div className="text-xs text-blue-400 mt-0.5">{stat.sublabel}</div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Custom children */}
        {children}
      </div>
    </section>
  );
}
