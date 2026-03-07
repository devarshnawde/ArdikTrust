import ServiceDetailPage from './ServiceDetailPage';
import { services } from '../data/siteData';

const service = services.find((s) => s.id === 'identity');

export default function IdentityAccessPage() {
  return (
    <ServiceDetailPage
      meta={{
        title: 'Identity & Access Security | IAM, Zero Trust, PAM | ArdikTrust',
        description: 'Comprehensive identity and access management, zero trust security architecture, privileged access reviews, and access control audits for healthcare organizations.',
      }}
      service={service}
      intro="Identity is the new perimeter. ArdikTrust helps healthcare organizations establish robust identity governance frameworks, implement zero trust architectures, and enforce least-privilege access across their environments."
      sections={[
        {
          icon: 'Users',
          tag: 'Identity & Access Management',
          title: 'Identity & Access Management (IAM)',
          description: 'Comprehensive IAM program design and implementation ensuring the right people have the right access to the right systems — and nothing more.',
          points: [
            'IAM program design and governance framework',
            'Role-based access control (RBAC) implementation',
            'User provisioning and deprovisioning workflows',
            'Identity lifecycle management',
            'Single sign-on (SSO) and federation configuration',
            'Identity governance and administration (IGA) deployment',
          ],
          visual: 'Identity Lifecycle Management',
        },
        {
          icon: 'Shield',
          tag: 'Zero Trust Architecture',
          title: 'Zero Trust Security Architecture',
          description: 'Move beyond perimeter-based security with a Zero Trust model that verifies every user, every device, and every connection — appropriate for PHI-handling environments.',
          points: [
            'Zero Trust maturity assessment',
            'Network micro-segmentation design',
            'Continuous verification and policy engine configuration',
            'Device trust and endpoint security integration',
            'Application access controls and least-privilege enforcement',
            'Zero Trust roadmap and phased implementation plan',
          ],
          visual: 'Zero Trust Network Architecture',
        },
        {
          icon: 'Key',
          tag: 'Privileged Access',
          title: 'Privileged Access Reviews',
          description: 'Privileged accounts represent your highest-risk identities. We help you identify, govern, and continuously monitor privileged access across your environment.',
          points: [
            'Privileged account discovery and inventory',
            'Privileged access management (PAM) tool deployment',
            'Just-in-time (JIT) privileged access implementation',
            'Service account governance',
            'Privileged session monitoring and recording',
            'Emergency access ("break glass") procedures',
          ],
          visual: 'Privileged Access Management',
        },
        {
          icon: 'ClipboardCheck',
          tag: 'Access Control Audits',
          title: 'Access Control Audits',
          description: 'Periodic access control audits to validate that access permissions align with job functions and that no unauthorized access has accumulated over time.',
          points: [
            'Comprehensive access rights review across systems',
            'Segregation of duties (SoD) conflict analysis',
            'Orphaned and dormant account identification',
            'Access certification campaign management',
            'Remediation tracking and verification',
            'HIPAA access control compliance documentation',
          ],
          visual: 'Access Rights Audit & Certification',
        },
      ]}
      benefits={{
        title: 'Secure Your',
        highlight: 'Identity Perimeter',
        description: 'Our IAM and Zero Trust services deliver both security improvements and compliance documentation.',
        items: [
          { icon: 'Lock', title: 'Least Privilege Enforcement', description: 'Limit blast radius of any breach by ensuring no account has more access than it legitimately needs.' },
          { icon: 'Eye', title: 'Continuous Monitoring', description: 'Ongoing visibility into identity and access activity, with alerts for anomalous behavior.' },
          { icon: 'FileCheck', title: 'Audit Documentation', description: 'HIPAA and SOC 2 require documented access reviews. We deliver audit-ready records for every campaign.' },
        ],
      }}
      faq={[
        {
          q: 'How often should we conduct access reviews?',
          a: 'HIPAA and SOC 2 requirements typically mandate quarterly or annual access reviews for high-risk systems. We recommend quarterly reviews for privileged accounts and at least annual for all user access.',
        },
        {
          q: 'What is Zero Trust, and is it right for healthcare?',
          a: 'Zero Trust is a security model that assumes no user, device, or network is inherently trusted — all access must be continuously verified. It\'s particularly suited for healthcare due to distributed workforces, remote access, and sensitive data requirements.',
        },
      ]}
    />
  );
}
