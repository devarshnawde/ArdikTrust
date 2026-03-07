import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, BookOpen, Users, ArrowRight } from 'lucide-react';
import { SectionContainer, SectionHeader, AnimatedGrid, itemVariants } from '../components/SectionContainer';
import { FeatureCard } from '../components/Cards';
import CTASection from '../components/CTASection';
import { brandArchitecture } from '../data/siteData';

const principles = [
  {
    icon: 'Shield',
    title: 'Security by Design',
    description: 'We believe security must be embedded into systems and processes from day one, not bolted on as an afterthought. Every recommendation we deliver integrates security thinking into the architecture of your organization.',
    color: 'blue',
  },
  {
    icon: 'BookOpen',
    title: 'Compliance with Clarity',
    description: 'Regulatory frameworks like HIPAA, SOC 2, and ISO 27001 can feel overwhelming. We translate complex requirements into plain language, practical programs, and clear roadmaps your team can actually follow.',
    color: 'green',
  },
  {
    icon: 'Eye',
    title: 'Preventive Vigilance',
    description: 'Reactive security is not enough. We take a proactive stance — continuously monitoring, testing, and identifying vulnerabilities before adversaries can exploit them.',
    color: 'purple',
  },
  {
    icon: 'FileCheck',
    title: 'Audit-Defensible Security',
    description: 'Every control we implement is documented in a way that satisfies regulators, auditors, and board-level scrutiny. We build programs that hold up under the most rigorous examination.',
    color: 'orange',
  },
];

const timeline = [
  {
    year: '2018',
    title: 'Founded',
    description: 'ArdikTrust was founded by healthcare IT and cybersecurity veterans who recognized the critical gap between regulatory compliance and real-world security.',
  },
  {
    year: '2019',
    title: 'Healthcare Focus',
    description: 'We formalized our healthcare-first approach, building specialized assessment frameworks for hospitals, health systems, and HealthTech platforms.',
  },
  {
    year: '2021',
    title: 'Expanded Services',
    description: 'Launched our PenTest & Threat Labs division, adding advanced penetration testing, red team exercises, and cloud security capabilities.',
  },
  {
    year: '2023',
    title: 'SecureOps Division',
    description: 'Introduced ArdikTrust SecureOps & Vigilance — our 24/7 security monitoring and continuous compliance service for healthcare clients.',
  },
  {
    year: '2025',
    title: '200+ Clients Protected',
    description: 'Surpassed 200 healthcare organizations protected, with a 99.9% audit pass rate and zero client breaches due to security controls we implemented.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About ArdikTrust | Healthcare Cybersecurity Experts</title>
        <meta name="description" content="ArdikTrust is a specialized cybersecurity and compliance firm trusted by healthcare providers, HealthTech SaaS platforms, and regulated enterprises. Learn our mission and values." />
      </Helmet>

      {/* Hero */}
      <section className="relative hero-gradient pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-green-300 border border-green-500/30 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              About ArdikTrust
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-extrabold font-poppins text-white leading-tight mb-6"
            >
              Where Security <span className="text-gradient-green">Meets</span> Assurance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-100/80 text-xl leading-relaxed"
            >
              We are a cybersecurity and compliance firm purpose-built for the unique challenges 
              of healthcare organizations, healthtech platforms, and regulated enterprises.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag tag-blue mb-4">Company Overview</span>
            <h2 className="text-4xl font-extrabold font-poppins text-gray-900 mb-6 leading-tight">
              A Different Kind of<br />
              <span className="text-gradient-brand">Cybersecurity Partner</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              ArdikTrust was founded by healthcare IT veterans and cybersecurity professionals who experienced 
              firsthand the complexity of securing patient data, managing compliance requirements, and 
              defending against sophisticated threats — all simultaneously.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              Most cybersecurity firms treat healthcare as just another vertical. We built ArdikTrust 
              specifically for healthcare, with deep expertise in clinical workflows, healthcare regulations, 
              and the unique threat landscape facing health systems and HealthTech companies.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Today, we protect over 200 healthcare organizations across the United States — from 
              regional hospitals to nationwide RCM companies — with a track record of 99.9% audit 
              pass rates and zero client breaches from systems we secured.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#0E1A2B] to-[#1E5AA8] rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-14 h-14">
                      <defs>
                        <linearGradient id="aboutLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E5AA8"/>
                          <stop offset="50%" stopColor="#1E5AA8"/>
                          <stop offset="50%" stopColor="#2FA36B"/>
                          <stop offset="100%" stopColor="#2FA36B"/>
                        </linearGradient>
                      </defs>
                      <path d="M50 5 L90 20 L90 55 C90 75 72 90 50 97 C28 90 10 75 10 55 L10 20 Z" fill="url(#aboutLogoGrad)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      <text x="50" y="52" textAnchor="middle" fill="white" fontSize="28" fontWeight="800" fontFamily="Poppins,sans-serif">AT</text>
                      <path d="M28 65 L44 80 L72 48" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-poppins text-white">ArdikTrust</div>
                    <div className="text-blue-300 text-sm">Where Security Meets Assurance</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '200+', label: 'Clients Protected' },
                    { value: '500+', label: 'Assessments Done' },
                    { value: '99.9%', label: 'Audit Pass Rate' },
                    { value: '24/7', label: 'Vigilance' },
                  ].map((stat) => (
                    <div key={stat.label} className="glass rounded-xl p-4 text-center">
                      <div className="text-2xl font-extrabold text-white font-poppins mb-1">{stat.value}</div>
                      <div className="text-blue-300 text-xs font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Mission & Vision */}
      <SectionContainer background="gray" id="mission">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              To empower healthcare organizations and regulated enterprises with the cybersecurity 
              expertise, compliance programs, and continuous vigilance they need to protect patient data, 
              maintain regulatory standing, and operate with confidence in an increasingly dangerous digital environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-400" />
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              A healthcare system where every organization — from a regional clinic to a national health 
              network — has access to enterprise-grade cybersecurity expertise and can operate freely, 
              knowing their systems, patients, and reputation are protected by the industry's best.
            </p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Core Principles */}
      <SectionContainer background="white" id="principles">
        <SectionHeader
          badge="Core Principles"
          title="The Values That"
          highlight="Define Our Work"
          description="Four core principles guide every engagement, every recommendation, and every relationship we build with our clients."
        />
        <AnimatedGrid cols={2}>
          {principles.map((p) => (
            <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} color={p.color} />
          ))}
        </AnimatedGrid>
      </SectionContainer>

      {/* Timeline */}
      <SectionContainer background="gray">
        <SectionHeader
          badge="Our Journey"
          title="Building a"
          highlight="Track Record"
          description="From a small specialist firm to a trusted partner for hundreds of healthcare organizations."
        />
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-8 mb-10 last:mb-0"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-white font-bold text-sm font-poppins">
                  {item.year}
                </div>
                {i < timeline.length - 1 && (
                  <div className="flex-1 w-0.5 bg-gradient-to-b from-blue-300 to-green-300 mt-3" style={{ minHeight: 40 }} />
                )}
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 flex-1 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg font-poppins mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Brand Architecture */}
      <SectionContainer background="navy" id="brands">
        <SectionHeader
          badge="Brand Architecture"
          title="Three Specialized"
          highlight="Brands"
          light
          description="ArdikTrust operates through three specialized brands, each focused on a critical pillar of your security program."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandArchitecture.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                {brand.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6 text-blue-300" />}
                {brand.icon === 'Eye' && <Eye className="w-6 h-6 text-green-300" />}
                {brand.icon === 'Bug' && <Users className="w-6 h-6 text-purple-300" />}
              </div>
              <h3 className="text-lg font-bold text-white font-poppins mb-3">{brand.name}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{brand.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      <CTASection
        title="Partner With ArdikTrust"
        description="Join 200+ healthcare organizations that trust ArdikTrust to protect their systems, data, and compliance standing."
      />
    </>
  );
}
