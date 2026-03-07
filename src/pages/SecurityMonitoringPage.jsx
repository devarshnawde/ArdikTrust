import ServiceDetailPage from './ServiceDetailPage';
import { services } from '../data/siteData';

const service = services.find((s) => s.id === 'monitoring');

export default function SecurityMonitoringPage() {
  return (
    <ServiceDetailPage
      meta={{
        title: 'Security Monitoring & SecureOps | 24/7 Threat Detection | ArdikTrust',
        description: '24/7 security monitoring, continuous threat detection, security posture monitoring, vendor risk monitoring, and compliance monitoring for healthcare organizations.',
      }}
      service={service}
      intro="ArdikTrust SecureOps & Vigilance provides round-the-clock security monitoring and continuous threat detection, ensuring your healthcare organization's systems, data, and compliance posture are protected 24 hours a day, 7 days a week."
      sections={[
        {
          icon: 'Activity',
          tag: '24/7 Monitoring',
          title: '24x7 Security Monitoring',
          description: 'Continuous security event monitoring across your environment — network, endpoints, cloud, and applications — with expert analyst review and rapid response.',
          points: [
            'SIEM-based security event correlation and analysis',
            'Log management and aggregation across all sources',
            'Real-time alerting with analyst triage',
            '24/7 security operations center (SOC) coverage',
            'Escalation procedures for critical security events',
            'Monthly security posture reporting',
          ],
          visual: '24/7 Security Operations Center',
        },
        {
          icon: 'AlertTriangle',
          tag: 'Threat Detection',
          title: 'Threat Detection & Response',
          description: 'Advanced threat detection using behavioral analytics, threat intelligence, and healthcare-specific detection content to identify threats early and respond decisively.',
          points: [
            'Behavioral analytics and anomaly detection',
            'Healthcare-specific threat intelligence integration',
            'Ransomware detection and early warning',
            'Insider threat detection and monitoring',
            'Malware and command-and-control detection',
            'Incident response coordination and support',
          ],
          visual: 'Threat Intelligence & Detection',
        },
        {
          icon: 'TrendingUp',
          tag: 'Posture Monitoring',
          title: 'Security Posture Monitoring',
          description: 'Continuous visibility into your security posture — tracking control effectiveness, vulnerability exposure, and compliance status in real time.',
          points: [
            'Continuous control effectiveness monitoring',
            'Vulnerability exposure tracking and trending',
            'Configuration drift detection',
            'Security posture scoring and benchmarking',
            'Executive dashboards and board-ready reporting',
            'Trend analysis and improvement tracking',
          ],
          visual: 'Security Posture Dashboard & Scoring',
        },
        {
          icon: 'Users',
          tag: 'Vendor Risk Monitoring',
          title: 'Vendor Risk Monitoring',
          description: 'Continuous monitoring of your third-party vendor ecosystem to detect security events, compliance changes, and breach disclosures that could affect your organization.',
          points: [
            'Vendor security rating monitoring (BitSight, SecurityScorecard)',
            'Business Associate (BA) security posture tracking',
            'Dark web monitoring for vendor credential exposure',
            'Vendor breach disclosure monitoring and notification',
            'Automated vendor risk scoring and alerting',
            'BAA compliance verification support',
          ],
          visual: 'Third-Party Risk Intelligence',
        },
      ]}
      benefits={{
        title: 'Always-On',
        highlight: 'Security Vigilance',
        description: 'Continuous monitoring ensures threats are detected early, before they become costly incidents.',
        items: [
          { icon: 'Clock', title: '24/7 Expert Coverage', description: 'Human analysts monitoring your environment around the clock — not just automated alerts.' },
          { icon: 'Zap', title: 'Rapid Response', description: 'Faster detection and response means less damage from security incidents and breaches.' },
          { icon: 'FileCheck', title: 'Compliance Evidence', description: 'Monitoring logs and reports serve as continuous compliance evidence for HIPAA and SOC 2.' },
        ],
      }}
      faq={[
        {
          q: 'Do you replace our existing security tools?',
          a: 'No — we integrate with your existing security stack. We can work with your current SIEM, endpoint protection, and other tools, or help you build out a monitoring infrastructure if you\'re starting fresh.',
        },
        {
          q: 'How quickly do you respond to security incidents?',
          a: 'Our team provides immediate notification for critical events, with a target response time of under 15 minutes for high-severity alerts. We work alongside your team to contain and remediate incidents.',
        },
        {
          q: 'Does monitoring satisfy HIPAA\'s audit control requirements?',
          a: 'Yes. HIPAA requires healthcare organizations to implement audit controls and regularly review audit logs. Our monitoring service directly satisfies these requirements and generates the documentation needed for audits.',
        },
      ]}
    />
  );
}
