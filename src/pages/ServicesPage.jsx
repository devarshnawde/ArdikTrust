import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionContainer, SectionHeader, AnimatedGrid } from '../components/SectionContainer';
import { ServiceCard } from '../components/Cards';
import CTASection from '../components/CTASection';
import { services } from '../data/siteData';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services for Healthcare & Regulated Industries | ArdikTrust</title>
        <meta name="description" content="Comprehensive cybersecurity and compliance services: HIPAA compliance, SOC 2 readiness, penetration testing, identity access management, security auditing, and 24/7 monitoring." />
      </Helmet>

      {/* Hero */}
      <section className="relative hero-gradient pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-green-300 border border-green-500/30 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold font-poppins text-white mb-6 max-w-3xl mx-auto leading-tight"
          >
            Cybersecurity & Compliance <span className="text-gradient-green">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-blue-100/80 text-xl max-w-2xl mx-auto"
          >
            End-to-end security and compliance services purpose-built for healthcare organizations and regulated enterprises.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionContainer background="gray">
        <SectionHeader
          badge="All Services"
          title="Comprehensive Security"
          highlight="Solutions"
          description="From foundational compliance programs to advanced threat simulation — we cover the full spectrum of cybersecurity and compliance services your organization needs."
        />
        <AnimatedGrid cols={3}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </AnimatedGrid>
      </SectionContainer>

      {/* Process Section */}
      <SectionContainer background="white">
        <SectionHeader
          badge="Our Approach"
          title="How We"
          highlight="Engage"
          description="Every ArdikTrust engagement follows a proven, structured methodology that delivers clear outcomes and audit-ready documentation."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Assessment', description: 'We conduct a thorough initial assessment of your current security posture, compliance gaps, and risk profile.' },
            { step: '02', title: 'Planning', description: 'We develop a tailored security and compliance roadmap with prioritized actions, timelines, and success metrics.' },
            { step: '03', title: 'Implementation', description: 'Our experts work alongside your team to implement controls, policies, and technical safeguards.' },
            { step: '04', title: 'Validation', description: 'We validate effectiveness through testing, audits, and ongoing monitoring — then document everything for auditors.' },
          ].map((phase, i) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-green-200 z-0" style={{ transform: 'translateX(-24px)', width: 'calc(100% - 24px)' }} />
              )}
              <div className="bg-white border border-gray-100 rounded-2xl p-7 relative z-10 card-hover">
                <div className="text-5xl font-extrabold font-poppins text-gradient-brand mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3">{phase.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
