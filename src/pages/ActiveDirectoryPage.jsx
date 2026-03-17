import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Network,
  ShieldCheck,
  Lock,
  Users,
  Settings,
  KeyRound,
  Activity,
  CheckCircle,
  ArrowRight,
  Server,
  AlertTriangle,
} from 'lucide-react';
import { SectionContainer, SectionHeader, AnimatedGrid, itemVariants } from '../components/SectionContainer';
import CTASection from '../components/CTASection';

// ─── Capability card data ───────────────────────────────────────────────────
const capabilities = [
  {
    icon: Server,
    title: 'AD Architecture & Deployment',
    description:
      'Design and deploy a secure, scalable Active Directory environment aligned with your organizational structure and least-privilege principles from day one.',
    color: { bg: 'bg-teal-50', icon: 'text-teal-600', hover: 'group-hover:bg-teal-100', accent: 'from-teal-500 to-teal-600' },
  },
  {
    icon: ShieldCheck,
    title: 'Active Directory Security Assessment',
    description:
      'Comprehensive evaluation of your AD environment — identifying misconfigurations, privilege escalation paths, stale accounts, and exposure to known AD attack techniques.',
    color: { bg: 'bg-blue-50', icon: 'text-blue-600', hover: 'group-hover:bg-blue-100', accent: 'from-blue-500 to-blue-600' },
  },
  {
    icon: Lock,
    title: 'Active Directory Hardening',
    description:
      'Apply CIS and Microsoft-recommended hardening benchmarks to reduce your AD attack surface, including Kerberos settings, SMB signing, LDAP security, and legacy protocol controls.',
    color: { bg: 'bg-green-50', icon: 'text-green-600', hover: 'group-hover:bg-green-100', accent: 'from-green-500 to-green-600' },
  },
  {
    icon: Users,
    title: 'User & Access Management',
    description:
      'Establish structured user lifecycle management, enforce naming conventions, automate provisioning and deprovisioning workflows, and govern group membership to prevent access sprawl.',
    color: { bg: 'bg-purple-50', icon: 'text-purple-600', hover: 'group-hover:bg-purple-100', accent: 'from-purple-500 to-purple-600' },
  },
  {
    icon: Settings,
    title: 'Group Policy Management',
    description:
      'Design, audit, and enforce Group Policy Objects (GPOs) to consistently apply security baselines — including password policies, audit logging, firewall rules, and software restrictions.',
    color: { bg: 'bg-orange-50', icon: 'text-orange-600', hover: 'group-hover:bg-orange-100', accent: 'from-orange-500 to-orange-600' },
  },
  {
    icon: KeyRound,
    title: 'Privileged Access Security',
    description:
      'Identify and protect privileged accounts including Domain Admins, Enterprise Admins, and service accounts. Implement tiered admin models and just-in-time access controls.',
    color: { bg: 'bg-red-50', icon: 'text-red-600', hover: 'group-hover:bg-red-100', accent: 'from-red-500 to-red-600' },
  },
  {
    icon: Activity,
    title: 'AD Monitoring & Maintenance',
    description:
      'Continuous monitoring of AD events, health checks, replication status, and anomalous authentication activity — with alerting for suspicious changes to privileged groups and GPOs.',
    color: { bg: 'bg-teal-50', icon: 'text-teal-600', hover: 'group-hover:bg-teal-100', accent: 'from-teal-500 to-teal-600' },
  },
];

// ─── Why AD security matters ────────────────────────────────────────────────
const benefits = [
  {
    icon: ShieldCheck,
    title: 'Centralized Access Control',
    description:
      'A properly secured AD becomes a true security control plane — enforcing who can access what across every domain-joined system, application, and resource.',
  },
  {
    icon: Lock,
    title: 'Stronger Authentication Security',
    description:
      'Hardened Kerberos settings, disabled legacy protocols, and enforced MFA integration reduce the risk of credential attacks such as Pass-the-Hash and Kerberoasting.',
  },
  {
    icon: Users,
    title: 'Reduced Insider Risk',
    description:
      'Least-privilege group structures, regular access reviews, and privileged account segmentation limit the damage any single compromised account can cause.',
  },
  {
    icon: CheckCircle,
    title: 'Improved Compliance Posture',
    description:
      'AD hardening and audit logging directly satisfy access control, audit control, and account management requirements across HIPAA, SOC 2, ISO 27001, and NIST CSF.',
  },
  {
    icon: Network,
    title: 'Better Infrastructure Governance',
    description:
      'Clean, well-documented AD structures with enforced GPOs give IT and security teams full visibility and control over the authentication backbone of the organization.',
  },
];

// ─── Attack threat highlights ───────────────────────────────────────────────
const adThreats = [
  { label: 'Pass-the-Hash', desc: 'Credential relay attacks exploiting NTLM authentication weaknesses.' },
  { label: 'Kerberoasting', desc: 'Offline cracking of service account Kerberos ticket hashes.' },
  { label: 'DCSync Attacks', desc: 'Replication protocol abuse to extract password hashes from domain controllers.' },
  { label: 'Golden Ticket', desc: 'Forged Kerberos tickets granting persistent domain-level access.' },
  { label: 'Lateral Movement', desc: 'Abuse of AD trusts and over-provisioned accounts to move through networks.' },
  { label: 'Privilege Escalation', desc: 'Exploiting misconfigured ACLs and delegations to gain Domain Admin access.' },
];

export default function ActiveDirectoryPage() {
  return (
    <>
      <Helmet>
        <title>Active Directory Services | Security, Hardening & Management | ArdikTrust</title>
        <meta
          name="description"
          content="ArdikTrust provides Active Directory architecture, security assessment, hardening, user management, Group Policy governance, and 24/7 AD monitoring for enterprise environments."
        />
        <meta
          name="keywords"
          content="Active Directory security, AD hardening, AD assessment, Group Policy, privileged access, Active Directory management, ArdikTrust"
        />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative hero-gradient pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-teal-300 border border-teal-400/30 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Architecture • Security • Management
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white leading-tight mb-5"
            >
              Active Directory{' '}
              <span className="text-gradient-green">Services</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-200 font-semibold text-lg mb-5 tracking-wide"
            >
              Secure and manage enterprise identity infrastructure with centralized authentication and access control.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-blue-100/80 text-lg leading-relaxed mb-10 max-w-2xl"
            >
              Modern organizations rely on centralized identity infrastructure to securely manage users, systems,
              and access across their IT environments. ArdikTrust provides Active Directory design, security, and
              management services to help organizations maintain a secure, well-governed identity backbone.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn-primary text-base py-3.5 px-8">
                <ShieldCheck className="w-5 h-5" />
                Request Security Assessment
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link to="/contact" className="btn-secondary text-base py-3.5 px-8">
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Capabilities sticky strip ────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 py-5 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 rounded-full px-4 py-1.5 border border-gray-200"
              >
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                {c.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What is AD / overview ────────────────────────────────────────── */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag tag-blue mb-4">Why It Matters</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-gray-900 mb-6 leading-tight">
              The Backbone of{' '}
              <span className="text-gradient-brand">Enterprise Identity</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              Microsoft Active Directory is the backbone of identity and access management for the majority of
              enterprise IT environments. It enables organizations to centrally manage users, computers,
              permissions, and authentication across their networks.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              Yet Active Directory is also one of the most frequently targeted components in modern cyberattacks.
              Attackers routinely exploit AD misconfigurations to gain Domain Admin access, move laterally, and
              establish persistent footholds — often within hours of initial compromise.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              ArdikTrust helps organizations implement, audit, and strengthen Active Directory environments to
              protect against identity-based threats and maintain secure, compliant access control.
            </p>
          </motion.div>

          {/* Threat highlights panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0E1A2B] to-[#1a3a6b] rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-poppins">Common AD Attack Vectors</h3>
                  <p className="text-blue-300 text-xs">That target unsecured environments</p>
                </div>
              </div>
              <ul className="space-y-4">
                {adThreats.map((threat) => (
                  <li key={threat.label} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-white text-sm font-semibold">{threat.label}</span>
                      <p className="text-blue-300 text-xs mt-0.5">{threat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-teal-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                ArdikTrust assesses and mitigates all of the above
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* ── Capability cards ─────────────────────────────────────────────── */}
      <SectionContainer background="gray">
        <SectionHeader
          badge="Capabilities"
          title="Our Active Directory"
          highlight="Services"
          description="End-to-end Active Directory consulting covering architecture, security assessment, hardening, governance, and continuous monitoring."
        />

        <AnimatedGrid cols={3}>
          {capabilities.map((cap) => (
            <motion.div key={cap.title} variants={itemVariants} className="group">
              <div
                className={`h-full bg-white rounded-2xl border border-gray-100 hover:border-teal-200 p-7 card-hover transition-all duration-300 relative overflow-hidden`}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cap.color.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${cap.color.bg} ${cap.color.hover} flex items-center justify-center mb-5 transition-colors duration-300`}
                >
                  <cap.icon className={`w-7 h-7 ${cap.color.icon}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3 group-hover:text-teal-700 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatedGrid>
      </SectionContainer>

      {/* ── Why AD security matters ──────────────────────────────────────── */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag tag-green mb-4">Why AD Security Matters</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-gray-900 mb-6 leading-tight">
              Active Directory Controls{' '}
              <span className="text-gradient-brand">Access to Everything</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Active Directory controls authentication and access to enterprise systems and must be properly
              secured to prevent unauthorized access, identity attacks, and privilege escalation. A compromised
              AD environment effectively gives an attacker the keys to your entire organization.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Organizations with well-governed, hardened AD environments experience significantly fewer
              successful breaches, recover faster from incidents, and demonstrate stronger security posture
              to auditors and regulators.
            </p>
            <Link to="/contact" className="btn-primary">
              Request AD Security Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="flex items-start gap-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center flex-shrink-0 transition-colors">
                  <b.icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 font-poppins mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionContainer>

      {/* ── Engagement process strip ─────────────────────────────────────── */}
      <SectionContainer background="gray">
        <SectionHeader
          badge="How We Engage"
          title="Our AD Security"
          highlight="Process"
          description="A structured, four-phase engagement that delivers a secure and well-governed Active Directory environment."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Discovery & Assessment',
              description:
                'We enumerate your AD environment, map privilege paths, identify misconfigurations, and produce a risk-rated findings report.',
            },
            {
              step: '02',
              title: 'Hardening Plan',
              description:
                'We develop a prioritized remediation roadmap covering GPOs, account cleanup, Kerberos settings, and privilege segmentation.',
            },
            {
              step: '03',
              title: 'Implementation',
              description:
                'Our engineers work alongside your team to apply hardening controls, clean up legacy accounts, and set up audit logging.',
            },
            {
              step: '04',
              title: 'Ongoing Monitoring',
              description:
                'Continuous monitoring of AD events, privileged group changes, and authentication anomalies with regular health reviews.',
            },
          ].map((phase, i) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-2xl p-7 card-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-5xl font-extrabold font-poppins text-gradient-brand mb-4">{phase.step}</div>
              <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3">{phase.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* ── Custom CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0E1A2B] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-teal-500/15 text-teal-300 border border-teal-500/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Active Directory Security Experts
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-white mb-6 leading-tight">
              Secure Your Identity Infrastructure
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-10">
              Ensure your Active Directory environment is properly configured, monitored, and protected against
              identity-based cyber threats. Talk to our AD security specialists today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base py-4 px-10">
                <ShieldCheck className="w-5 h-5" />
                Request Security Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="text-base py-4 px-10 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 hover:border-white/60"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-blue-300">
              {[
                'AD Security Specialists',
                'HIPAA-Aligned Controls',
                'Response Within 24 Hours',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
