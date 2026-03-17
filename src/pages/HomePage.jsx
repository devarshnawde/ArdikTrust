import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle, Shield, Eye, Lock } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { SectionContainer, SectionHeader, AnimatedGrid, itemVariants } from '../components/SectionContainer';
import { ServiceCard, FeatureCard, IndustryCard } from '../components/Cards';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import NewsletterSection from '../components/NewsletterSection';
import { services, industries, stats, whyArdikTrust, brandArchitecture } from '../data/siteData';

const brandColors = {
  blue: { bg: 'bg-blue-600/10', icon: 'text-blue-400', border: 'border-blue-500/20' },
  green: { bg: 'bg-green-600/10', icon: 'text-green-400', border: 'border-green-500/20' },
  navy: { bg: 'bg-white/5', icon: 'text-blue-300', border: 'border-white/10' },
};

const lucideMap = {
  ShieldCheck,
  Bug: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0v18M3 12h18" />
    </svg>
  ),
  Eye,
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Cybersecurity & HIPAA Compliance Services | ArdikTrust</title>
        <meta name="description" content="ArdikTrust is a cybersecurity and compliance firm protecting healthcare organizations, healthtech platforms, and regulated enterprises. HIPAA, SOC 2, penetration testing, and 24/7 security monitoring." />
        <meta name="keywords" content="healthcare cybersecurity, HIPAA compliance, SOC 2, penetration testing, security monitoring, ArdikTrust" />
      </Helmet>

      {/* Hero */}
      <HeroSection
        badge="Healthcare & Regulated Industries"
        headline={<>Where Security<br />Meets <span className="text-gradient-green">Assurance</span></>}
        subheadline="Cybersecurity • Compliance • Vigilance for Healthcare & Regulated Industries"
        description="ArdikTrust is a cybersecurity and compliance firm helping healthcare organizations, healthtech platforms, revenue cycle management companies, and regulated enterprises protect critical systems, validate security controls, and maintain continuous regulatory compliance."
        primaryCTA={{ label: 'Schedule Security Consultation', path: '/contact', icon: ShieldCheck }}
        secondaryCTA={{ label: 'Request Compliance Assessment', path: '/contact' }}
        stats={stats}
      />

      {/* Who We Are */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag tag-blue mb-4">Who We Are</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins mb-6 text-gray-900 leading-tight">
              A Cybersecurity Partner Built for{' '}
              <span className="text-gradient-brand">Healthcare</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              ArdikTrust was founded with a single mission: to bridge the gap between cybersecurity complexity 
              and healthcare compliance reality. We understand the unique challenges — HIPAA requirements, 
              legacy systems, third-party integrations, and ever-evolving threats — that healthcare organizations face daily.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Our team of certified security and compliance experts brings deep healthcare domain knowledge 
              to every engagement, delivering practical, audit-defensible programs that actually protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="btn-primary">
                Learn About ArdikTrust <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900 transition-colors py-3">
                View Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right side - mission pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { icon: Shield, title: 'Security by Design', desc: 'We build security thinking into every process, not as an afterthought.', color: 'text-blue-600', bg: 'bg-blue-50' },
              { icon: CheckCircle, title: 'Compliance with Clarity', desc: 'We translate complex regulations into clear, actionable programs.', color: 'text-green-600', bg: 'bg-green-50' },
              { icon: Eye, title: 'Preventive Vigilance', desc: 'Proactive identification of threats before they become incidents.', color: 'text-purple-600', bg: 'bg-purple-50' },
              { icon: Lock, title: 'Audit-Defensible Security', desc: 'Every recommendation comes with documentation that stands up to scrutiny.', color: 'text-orange-600', bg: 'bg-orange-50' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 card-hover">
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionContainer>

      {/* Core Services */}
      <SectionContainer background="gray">
        <SectionHeader
          badge="Core Services"
          title="Cybersecurity & Compliance"
          highlight="Services"
          description="From HIPAA compliance programs to 24/7 security monitoring, ArdikTrust provides comprehensive security services tailored for healthcare and regulated industries."
        />
        <AnimatedGrid cols={3}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </AnimatedGrid>
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionContainer>

      {/* Industries */}
      <SectionContainer background="white">
        <SectionHeader
          badge="Industries Served"
          title="Built for Healthcare &"
          highlight="Regulated Industries"
          description="We specialize in the compliance and security challenges unique to healthcare providers, healthtech platforms, RCM companies, and regulated enterprises."
        />
        <AnimatedGrid cols={4}>
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </AnimatedGrid>
      </SectionContainer>

      {/* Stats */}
      <StatsSection
        stats={stats}
        badge="By The Numbers"
        title="Trusted by Healthcare Organizations"
        description="Our track record of securing health systems, HealthTech platforms, and regulated enterprises."
        background="navy"
      />

      {/* Why ArdikTrust */}
      <SectionContainer background="white">
        <SectionHeader
          badge="Why ArdikTrust"
          title="The ArdikTrust"
          highlight="Difference"
          description="What sets us apart is our combination of healthcare expertise, compliance depth, and preventive security philosophy."
        />
        <AnimatedGrid cols={3}>
          {whyArdikTrust.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color="blue"
            />
          ))}
        </AnimatedGrid>
      </SectionContainer>

      {/* Brand Architecture */}
      <SectionContainer background="navy">
        <SectionHeader
          badge="Brand Architecture"
          title="Three Pillars of"
          highlight="Security Excellence"
          light
          description="ArdikTrust operates through three specialized brands, each focused on a critical dimension of your security program."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandArchitecture.map((brand, i) => {
            const colors = brandColors[brand.color] || brandColors.blue;
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`glass rounded-2xl p-8 border ${colors.border} relative overflow-hidden group hover:bg-white/10 transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  {brand.icon === 'ShieldCheck' && <ShieldCheck className={`w-7 h-7 ${colors.icon}`} />}
                  {brand.icon === 'Bug' && (
                    <svg className={`w-7 h-7 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6M9 3a3 3 0 00-3 3v1a3 3 0 003 3h6a3 3 0 003-3V6a3 3 0 00-3-3M9 21h6m-6 0a3 3 0 01-3-3V12m12 9a3 3 0 003-3V12M3 9h3m12 0h3M6 12H3m18 0h-3" />
                    </svg>
                  )}
                  {brand.icon === 'Eye' && <Eye className={`w-7 h-7 ${colors.icon}`} />}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-poppins">{brand.name}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{brand.description}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>

      {/* CTA */}
      <CTASection />

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}
