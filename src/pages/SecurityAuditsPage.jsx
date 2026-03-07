import ServiceDetailPage from './ServiceDetailPage';
import { services } from '../data/siteData';

const service = services.find((s) => s.id === 'audit');

export default function SecurityAuditsPage() {
  return (
    <ServiceDetailPage
      meta={{
        title: 'Security Auditing Services | Control Assessments & Configuration Reviews | ArdikTrust',
        description: 'Independent security audits, control assessments, configuration reviews, system hardening, and exposure management services for healthcare and regulated industries.',
      }}
      service={service}
      intro="Independent, rigorous security audits that give you a clear, objective picture of your security posture — covering controls, configurations, vulnerabilities, and exposure risk across your environment."
      sections={[
        {
          icon: 'ClipboardCheck',
          tag: 'Control Assessments',
          title: 'Security Control Assessments',
          description: 'Comprehensive assessments of your security controls against industry frameworks including NIST CSF, NIST 800-53, CIS Controls, and HIPAA requirements.',
          points: [
            'Framework-aligned control assessment (NIST CSF, CIS Controls)',
            'HIPAA Security Rule control evaluation',
            'Control effectiveness testing (not just documentation review)',
            'Gap identification and risk-rated findings',
            'Control improvement roadmap with prioritization',
            'Board-ready assessment reporting',
          ],
          visual: 'NIST/CIS Framework Control Assessment',
        },
        {
          icon: 'Settings',
          tag: 'Configuration Reviews',
          title: 'Configuration Reviews',
          description: 'Detailed configuration analysis of your critical systems — network devices, servers, databases, cloud services, and more — against security baselines.',
          points: [
            'CIS Benchmark configuration reviews',
            'Firewall and network device configuration analysis',
            'Active Directory and Azure AD configuration review',
            'Database configuration and security assessment',
            'Cloud service configuration review (AWS, Azure, GCP)',
            'EHR and healthcare application configuration assessment',
          ],
          visual: 'System Configuration Baseline Review',
        },
        {
          icon: 'Shield',
          tag: 'System Hardening',
          title: 'System Hardening',
          description: 'Reduce your attack surface by hardening operating systems, applications, and infrastructure to CIS and vendor security benchmarks.',
          points: [
            'OS hardening (Windows Server, Linux) to CIS benchmarks',
            'Application server and web server hardening',
            'Database security hardening',
            'Network device hardening (routers, switches, firewalls)',
            'Healthcare device and IoMT security hardening',
            'Hardening validation and compliance documentation',
          ],
          visual: 'Infrastructure Security Hardening',
        },
        {
          icon: 'AlertTriangle',
          tag: 'Exposure Management',
          title: 'Exposure Management',
          description: 'Continuous exposure management that maintains visibility into your attack surface and prioritizes remediation based on actual exploitability and business impact.',
          points: [
            'Attack surface mapping and inventory',
            'Vulnerability scanning and assessment',
            'Exploitability-based prioritization (CVSS + context)',
            'Patch management program review',
            'Remediation tracking and SLA management',
            'Continuous exposure monitoring cadence',
          ],
          visual: 'Attack Surface & Exposure Monitoring',
        },
      ]}
      benefits={{
        title: 'Audit-Driven',
        highlight: 'Security Improvement',
        description: 'Our security audits go beyond checking boxes — they deliver actionable intelligence that strengthens your security posture.',
        items: [
          { icon: 'Target', title: 'Objective Assessment', description: 'Independent, third-party evaluation that gives you credibility with regulators, auditors, and boards.' },
          { icon: 'TrendingUp', title: 'Prioritized Remediation', description: 'Risk-rated findings help you focus resources where they\'ll have the greatest security impact.' },
          { icon: 'FileCheck', title: 'Compliance Evidence', description: 'Audit reports serve as compliance evidence for HIPAA, SOC 2, and cyber insurance requirements.' },
        ],
      }}
      faq={[
        {
          q: 'How is a security audit different from a penetration test?',
          a: 'A security audit evaluates your controls, policies, and configurations against a standard — it\'s about measuring what you have. A penetration test simulates an active attacker trying to exploit vulnerabilities. Both are complementary and serve different purposes.',
        },
        {
          q: 'How do you prioritize findings in your audit reports?',
          a: 'We use a risk-based approach combining likelihood of exploitation, potential business impact, and regulatory implications — giving you clear guidance on what to fix first, not just a long list of issues.',
        },
      ]}
    />
  );
}
