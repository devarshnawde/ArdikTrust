import ServiceDetailPage from './ServiceDetailPage';
import { services } from '../data/siteData';

const service = services.find((s) => s.id === 'pentest');

export default function PenetrationTestingPage() {
  return (
    <ServiceDetailPage
      meta={{
        title: 'Penetration Testing & Red Team Services | ArdikTrust PenTest Labs',
        description: 'Expert penetration testing for healthcare and regulated industries. Network pen testing, web application security testing, cloud security testing, and red team exercises.',
      }}
      service={service}
      intro="ArdikTrust PenTest & Threat Labs delivers rigorous, real-world penetration testing and red team exercises that expose vulnerabilities in your network, applications, and cloud infrastructure before adversaries can exploit them."
      sections={[
        {
          icon: 'Network',
          tag: 'Network Security',
          title: 'Network Penetration Testing',
          description: 'Comprehensive network penetration tests that simulate real-world attackers attempting to compromise your internal and external network infrastructure.',
          points: [
            'External network reconnaissance and enumeration',
            'Exploitation of discovered vulnerabilities',
            'Internal network compromise simulation',
            'Lateral movement and privilege escalation testing',
            'Active Directory and domain trust analysis',
            'Clear, prioritized remediation report with proof-of-concept evidence',
          ],
          visual: 'Network Perimeter & Internal Testing',
        },
        {
          icon: 'Globe',
          tag: 'Web Application Security',
          title: 'Web Application Security Testing',
          description: 'Manual and automated web application security testing based on OWASP Top 10 and beyond — including healthcare-specific threats targeting patient portals and EHR interfaces.',
          points: [
            'OWASP Top 10 vulnerability testing',
            'Authentication and session management analysis',
            'API security testing (REST, GraphQL, SOAP)',
            'Business logic vulnerability identification',
            'Healthcare portal and EHR interface testing',
            'Patient data exposure testing',
          ],
          visual: 'Web App & API Security Testing',
        },
        {
          icon: 'Cloud',
          tag: 'Cloud Security',
          title: 'Cloud Security Testing',
          description: 'Cloud configuration review and penetration testing for AWS, Azure, and GCP environments — including healthcare workloads and PHI-handling systems.',
          points: [
            'Cloud configuration review (CIS benchmarks)',
            'IAM privilege escalation testing',
            'S3/Blob storage exposure assessment',
            'Serverless and container security testing',
            'Cloud network security group analysis',
            'Healthcare cloud workload PHI exposure testing',
          ],
          visual: 'AWS, Azure & GCP Security Testing',
        },
        {
          icon: 'Flag',
          tag: 'Red Team Operations',
          title: 'Red Team Exercises',
          description: 'Sophisticated, multi-phase red team operations that simulate advanced persistent threat (APT) actors targeting your organization — testing people, process, and technology.',
          points: [
            'Threat intelligence-driven attack simulation',
            'Social engineering and phishing campaigns',
            'Physical security testing',
            'Command and control (C2) infrastructure deployment',
            'Detection and response capability testing',
            'Purple team collaboration with your security team',
          ],
          visual: 'Advanced Threat Simulation & Red Team',
        },
      ]}
      benefits={{
        title: 'Value of Our',
        highlight: 'Penetration Testing',
        description: 'Our testing engagements are designed to give you actionable intelligence, not just a list of vulnerabilities.',
        items: [
          { icon: 'Target', title: 'Realistic Attack Simulation', description: 'We think and act like real attackers, not automated scanners — delivering findings that matter.' },
          { icon: 'FileText', title: 'Actionable Reports', description: 'Every finding includes severity ratings, business impact context, and step-by-step remediation guidance.' },
          { icon: 'RefreshCw', title: 'Remediation Validation', description: 'We offer re-testing to confirm your fixes are effective before you present results to stakeholders.' },
        ],
      }}
      faq={[
        {
          q: 'How often should we conduct penetration testing?',
          a: 'Most healthcare organizations should conduct annual penetration tests, with additional testing after significant infrastructure changes or new application deployments. HIPAA and many cyber insurance policies increasingly require it.',
        },
        {
          q: 'What is the difference between a vulnerability scan and a penetration test?',
          a: 'A vulnerability scan is automated and identifies potential weaknesses. A penetration test involves skilled testers who manually exploit those weaknesses (and find others) to demonstrate real-world impact — providing far more actionable intelligence.',
        },
        {
          q: 'Will penetration testing disrupt our operations?',
          a: 'We coordinate carefully with your team to minimize disruption. We can conduct testing during off-hours, and we maintain constant communication throughout the engagement to manage any unexpected issues.',
        },
      ]}
    />
  );
}
