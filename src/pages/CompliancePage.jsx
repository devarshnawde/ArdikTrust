import ServiceDetailPage from './ServiceDetailPage';
import { services } from '../data/siteData';

const service = services.find((s) => s.id === 'compliance');

export default function CompliancePage() {
  return (
    <ServiceDetailPage
      meta={{
        title: 'Healthcare Compliance & Assurance | HIPAA, SOC 2, ISO 27001 | ArdikTrust',
        description: 'Expert HIPAA compliance consulting, SOC 2 readiness, ISO 27001 advisory, risk assessments, and audit preparation for healthcare organizations and regulated enterprises.',
      }}
      service={service}
      intro="We help healthcare organizations, HealthTech platforms, and regulated enterprises establish, validate, and maintain the compliance programs required to satisfy regulators, protect patient data, and build trust with partners."
      sections={[
        {
          icon: 'ShieldCheck',
          tag: 'HIPAA Compliance',
          title: 'HIPAA Compliance Consulting',
          description: 'Comprehensive HIPAA compliance programs covering the Privacy Rule, Security Rule, and Breach Notification Rule. We assess your current compliance posture, identify gaps, and build a structured remediation program.',
          points: [
            'HIPAA Risk Analysis and Risk Management programs',
            'Privacy Rule policy development and training',
            'Security Rule technical and physical safeguard implementation',
            'Business Associate Agreement (BAA) review and management',
            'Breach Notification procedures and incident response planning',
            'Workforce training on HIPAA requirements',
          ],
          visual: 'HIPAA Security & Privacy Rule Compliance',
        },
        {
          icon: 'Award',
          tag: 'SOC 2',
          title: 'SOC 2 Readiness & Audit Preparation',
          description: 'From initial gap analysis to audit-day readiness, we guide HealthTech and SaaS companies through every stage of the SOC 2 process — Type I and Type II.',
          points: [
            'Trust Services Criteria (TSC) gap analysis',
            'Control design and evidence collection program setup',
            'Evidence gathering templates and process documentation',
            'Pre-audit readiness assessment and mock audit',
            'Auditor selection and coordination support',
            'Remediation support for identified control gaps',
          ],
          visual: 'SOC 2 Type I & Type II Audit Readiness',
        },
        {
          icon: 'Globe',
          tag: 'ISO 27001',
          title: 'ISO 27001 Advisory',
          description: 'Establish an Information Security Management System (ISMS) compliant with ISO 27001 — demonstrating security maturity to enterprise customers and regulators.',
          points: [
            'ISO 27001 scoping and context analysis',
            'ISMS design and documentation',
            'Annex A control implementation guidance',
            'Internal audit support and management review',
            'Certification body liaison and audit preparation',
            'Continuous improvement program design',
          ],
          visual: 'ISO 27001 ISMS Certification Path',
        },
        {
          icon: 'BarChart2',
          tag: 'Risk Management',
          title: 'Risk Assessments & Gap Analysis',
          description: 'Rigorous risk assessments and compliance gap analyses that give you a clear picture of your exposure and a prioritized action plan.',
          points: [
            'Enterprise risk assessments aligned to HIPAA, NIST, and ISO frameworks',
            'Gap analysis against your target compliance framework',
            'Risk scoring and prioritized remediation roadmaps',
            'Board-ready risk reporting and executive dashboards',
            'Third-party and vendor risk assessments',
            'Annual risk program reviews',
          ],
          visual: 'Risk Assessment & Gap Analysis Reporting',
        },
      ]}
      benefits={{
        title: 'Why ArdikTrust for',
        highlight: 'Compliance',
        description: 'Our compliance programs are designed to satisfy auditors and protect your organization — not just check boxes.',
        items: [
          { icon: 'ShieldCheck', title: 'Healthcare-Specific Expertise', description: 'Deep knowledge of HIPAA nuances, healthcare workflows, and the specific challenges facing health organizations.' },
          { icon: 'FileText', title: 'Audit-Ready Documentation', description: 'Every deliverable is formatted for auditor review — organized, comprehensive, and defensible.' },
          { icon: 'TrendingUp', title: 'Continuous Compliance', description: 'We build programs that maintain compliance year-round, not just at audit time.' },
        ],
      }}
      faq={[
        {
          q: 'How long does a HIPAA compliance assessment take?',
          a: 'A comprehensive HIPAA risk analysis typically takes 4–8 weeks depending on organization size and complexity. We provide a detailed timeline during our initial consultation.',
        },
        {
          q: 'What is the difference between SOC 2 Type I and Type II?',
          a: 'SOC 2 Type I attests that your controls are properly designed at a point in time. Type II attests that those controls operated effectively over a period (usually 6–12 months). Most enterprise customers require Type II.',
        },
        {
          q: 'Do you help with HIPAA remediation after a breach?',
          a: 'Yes. We provide post-breach HIPAA assessment services, including documentation for HHS investigation response and remediation plans to address identified deficiencies.',
        },
      ]}
    />
  );
}
