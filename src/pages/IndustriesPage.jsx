import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Building2, Cpu, BadgeDollarSign, Globe } from 'lucide-react';
import { SectionContainer, SectionHeader, AnimatedGrid, itemVariants } from '../components/SectionContainer';
import CTASection from '../components/CTASection';
import { industries } from '../data/siteData';

const industryDetails = {
  healthcare: {
    icon: Building2,
    color: 'blue',
    challenges: [
      'HIPAA Privacy & Security Rule compliance',
      'Ransomware and cyber extortion targeting patient records',
      'EHR integration and third-party vendor security',
      'Legacy infrastructure with limited patching capability',
      'Workforce cybersecurity awareness',
      'Medical device and IoMT security',
    ],
    compliance: ['HIPAA Privacy Rule', 'HIPAA Security Rule', 'HITECH Act', 'State Privacy Laws', 'Medicare/Medicaid requirements'],
    solutions: [
      'Comprehensive HIPAA risk analysis and compliance programs',
      '24/7 security monitoring with healthcare threat intelligence',
      'Annual penetration testing of patient-facing systems',
      'Medical device security assessment',
      'Workforce HIPAA training programs',
      'Ransomware preparedness and response planning',
    ],
    gradient: 'from-blue-600 to-blue-800',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-700',
    tagColor: 'tag-blue',
  },
  healthtech: {
    icon: Cpu,
    color: 'green',
    challenges: [
      'SOC 2 certification requirements from enterprise customers',
      'HIPAA compliance for PHI handling',
      'Cloud security configuration in AWS/Azure/GCP',
      'API security and third-party integrations',
      'Rapid development velocity vs. security rigor',
      'Multi-tenant data isolation',
    ],
    compliance: ['SOC 2 Type II', 'HIPAA Business Associate requirements', 'ISO 27001', 'GDPR', 'State data privacy laws'],
    solutions: [
      'SOC 2 Type II readiness and audit support',
      'HIPAA compliance program for BAs',
      'Cloud security assessment and hardening',
      'Penetration testing of APIs and web applications',
      'Security-as-code and DevSecOps integration',
      'Continuous compliance monitoring',
    ],
    gradient: 'from-green-600 to-green-800',
    lightBg: 'bg-green-50',
    textColor: 'text-green-700',
    tagColor: 'tag-green',
  },
  rcm: {
    icon: BadgeDollarSign,
    color: 'orange',
    challenges: [
      'PHI and financial data protection simultaneously',
      'HIPAA and PCI DSS compliance requirements',
      'Claims processing system security',
      'Staff access control across distributed teams',
      'Business associate obligations to covered entities',
      'Billing fraud detection and prevention',
    ],
    compliance: ['HIPAA Security Rule', 'PCI DSS', 'SOC 2', 'State insurance regulations', 'CMS requirements'],
    solutions: [
      'HIPAA risk analysis with RCM-specific controls',
      'Access control reviews for billing staff and systems',
      'Claims processing security assessment',
      'Business Associate compliance program',
      'Security monitoring for financial and PHI data',
      'Workforce security awareness training',
    ],
    gradient: 'from-orange-600 to-orange-800',
    lightBg: 'bg-orange-50',
    textColor: 'text-orange-700',
    tagColor: 'bg-orange-50 text-orange-700',
  },
  enterprise: {
    icon: Globe,
    color: 'purple',
    challenges: [
      'Multi-framework compliance (HIPAA, SOC 2, ISO 27001)',
      'Legacy system security and upgrade complexity',
      'Insider threat management at scale',
      'Regulatory audit preparedness',
      'Third-party and supply chain risk',
      'Board and executive security governance',
    ],
    compliance: ['SOC 2', 'ISO 27001', 'NIST CSF', 'Industry-specific regulations', 'SEC cybersecurity disclosure rules'],
    solutions: [
      'Enterprise security program design and maturity assessment',
      'Multi-framework compliance mapping and gap analysis',
      'Third-party risk management program',
      'Executive and board security reporting',
      '24/7 security monitoring and incident response',
      'Regular penetration testing and red team exercises',
    ],
    gradient: 'from-purple-600 to-purple-800',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-700',
    tagColor: 'bg-purple-50 text-purple-700',
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Helmet>
        <title>Industries Served | Healthcare Cybersecurity | ArdikTrust</title>
        <meta name="description" content="ArdikTrust serves healthcare providers, HealthTech SaaS platforms, revenue cycle management companies, and regulated enterprises with specialized cybersecurity and compliance services." />
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
            Industries Served
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold font-poppins text-white mb-6"
          >
            Built for <span className="text-gradient-green">Healthcare</span> &<br />
            Regulated Industries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/80 text-xl max-w-2xl mx-auto"
          >
            We understand the unique compliance requirements, threat landscapes, and operational challenges 
            facing organizations in regulated industries.
          </motion.p>
        </div>
      </section>

      {/* Industry Detail Sections */}
      {industries.map((industry, i) => {
        const detail = industryDetails[industry.id];
        const Icon = detail.icon;
        const isReverse = i % 2 === 1;

        return (
          <SectionContainer key={industry.id} background={i % 2 === 0 ? 'white' : 'gray'} id={industry.id}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start`}>
              <motion.div
                initial={{ opacity: 0, x: isReverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={isReverse ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${detail.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className={`tag text-xs ${detail.tagColor}`}>{`Industry ${i + 1} of 4`}</span>
                    <h2 className="text-3xl font-extrabold font-poppins text-gray-900 mt-1">{industry.title}</h2>
                  </div>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">{industry.description}</p>

                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Challenges</h3>
                <ul className="space-y-3 mb-8">
                  {detail.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className={`w-5 h-5 rounded-full ${detail.lightBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${detail.gradient}`} />
                      </div>
                      {c}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn-primary">
                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isReverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={isReverse ? 'lg:order-1' : ''}
              >
                {/* Compliance Requirements */}
                <div className="bg-white rounded-2xl border border-gray-100 p-7 mb-5 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 font-poppins mb-4 flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${detail.lightBg} flex items-center justify-center`}>
                      <CheckCircle className={`w-4 h-4 ${detail.textColor}`} />
                    </div>
                    Compliance Requirements
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {detail.compliance.map((c) => (
                      <span key={c} className={`tag text-xs ${detail.tagColor}`}>{c}</span>
                    ))}
                  </div>
                </div>

                {/* How We Help */}
                <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 font-poppins mb-4 flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${detail.lightBg} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${detail.textColor}`} />
                    </div>
                    How ArdikTrust Helps
                  </h3>
                  <ul className="space-y-3">
                    {detail.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className={`w-4 h-4 ${detail.textColor} flex-shrink-0 mt-0.5`} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </SectionContainer>
        );
      })}

      <CTASection
        title="Protect Your Organization"
        description="Every industry we serve faces unique cybersecurity and compliance challenges. Talk to our experts about yours."
      />
    </>
  );
}
