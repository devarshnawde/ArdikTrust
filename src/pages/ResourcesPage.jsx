import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, FileText, CheckSquare, BookOpen, LayoutTemplate, Lock, ArrowRight } from 'lucide-react';
import { SectionContainer, SectionHeader, AnimatedGrid, itemVariants } from '../components/SectionContainer';
import ContactForm from '../components/ContactForm';
import { resources } from '../data/siteData';

const iconMap = {
  CheckSquare, BookOpen, FileText, LayoutTemplate,
};

const colorConfig = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-100', tag: 'tag-blue', btn: 'text-blue-600 hover:text-blue-800' },
  green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-100', tag: 'tag-green', btn: 'text-green-600 hover:text-green-800' },
  navy: { bg: 'bg-blue-900/5', icon: 'text-blue-900', border: 'border-blue-900/10', tag: 'bg-blue-900/10 text-blue-900', btn: 'text-blue-900 hover:text-blue-700' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-100', tag: 'bg-orange-50 text-orange-700', btn: 'text-orange-600 hover:text-orange-800' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-100', tag: 'bg-purple-50 text-purple-700', btn: 'text-purple-600 hover:text-purple-800' },
};

export default function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [downloadForm, setDownloadForm] = useState({ name: '', email: '', company: '' });
  const [downloaded, setDownloaded] = useState(new Set());

  const handleDownload = (resource) => {
    setSelectedResource(resource);
  };

  const handleDownloadSubmit = async (e) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setDownloaded((prev) => new Set([...prev, selectedResource.id]));
    setSelectedResource(null);
    setDownloadForm({ name: '', email: '', company: '' });
  };

  return (
    <>
      <Helmet>
        <title>Security Resources | Checklists, Guides & Whitepapers | ArdikTrust</title>
        <meta name="description" content="Free cybersecurity resources for healthcare organizations: HIPAA checklists, SOC 2 guides, security whitepapers, and policy templates from ArdikTrust experts." />
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
            Free Resources
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold font-poppins text-white mb-6"
          >
            Security Resources &<br />
            <span className="text-gradient-green">Practical Guides</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/80 text-xl max-w-2xl mx-auto"
          >
            Free checklists, compliance guides, whitepapers, and security templates crafted by 
            ArdikTrust experts for healthcare organizations.
          </motion.p>
        </div>
      </section>

      {/* Download Modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedResource(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 font-poppins text-lg">Download Resource</h3>
                <p className="text-gray-500 text-sm">{selectedResource.title}</p>
              </div>
            </div>
            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <input 
                type="text" required placeholder="Full Name" className="form-input"
                value={downloadForm.name} onChange={(e) => setDownloadForm(p => ({...p, name: e.target.value}))} 
              />
              <input 
                type="email" required placeholder="Work Email" className="form-input"
                value={downloadForm.email} onChange={(e) => setDownloadForm(p => ({...p, email: e.target.value}))} 
              />
              <input 
                type="text" required placeholder="Company" className="form-input"
                value={downloadForm.company} onChange={(e) => setDownloadForm(p => ({...p, company: e.target.value}))} 
              />
              <button type="submit" className="btn-primary w-full justify-center">
                <Download className="w-4 h-4" />
                Download Free Resource
              </button>
              <p className="text-xs text-gray-400 text-center">No spam. We respect your privacy.</p>
            </form>
          </motion.div>
        </div>
      )}

      {/* Resources Grid */}
      <SectionContainer background="gray">
        <SectionHeader
          badge="Downloads"
          title="Free Security"
          highlight="Resources"
          description="Practical, professionally crafted resources to help your team strengthen security and compliance. All free to download."
        />
        <AnimatedGrid cols={3}>
          {resources.map((resource) => {
            const Icon = iconMap[resource.icon] || FileText;
            const colors = colorConfig[resource.color] || colorConfig.blue;
            const isDownloaded = downloaded.has(resource.id);

            return (
              <motion.div key={resource.id} variants={itemVariants}>
                <div className={`bg-white rounded-2xl border ${colors.border} p-7 card-hover h-full relative overflow-hidden`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`tag text-[10px] ${colors.tag}`}>{resource.type}</span>
                      <span className="tag tag-blue text-[10px]">{resource.format}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-poppins mb-3 leading-snug">{resource.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{resource.fileSize} {resource.format}</span>
                    {isDownloaded ? (
                      <div className="flex items-center gap-1.5 text-green-600 text-sm font-semibold">
                        <CheckSquare className="w-4 h-4" />
                        Downloaded
                      </div>
                    ) : (
                      <button
                        onClick={() => handleDownload(resource)}
                        className={`flex items-center gap-1.5 text-sm font-semibold ${colors.btn} transition-colors`}
                      >
                        <Download className="w-4 h-4" />
                        Download Free
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatedGrid>
      </SectionContainer>

      {/* Lead Capture / Contact */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="tag tag-blue mb-4">Custom Consultation</span>
            <h2 className="text-4xl font-extrabold font-poppins text-gray-900 mb-6 leading-tight">
              Need a Custom Security<br />
              <span className="text-gradient-brand">Assessment?</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Our free resources are a starting point. For a comprehensive, tailored security assessment 
              specific to your organization's environment and compliance requirements, talk to our experts.
            </p>
            <div className="space-y-4">
              {[
                'Personalized HIPAA risk assessment',
                'SOC 2 gap analysis specific to your platform',
                'Custom penetration testing proposal',
                'Compliance program roadmap',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 font-poppins mb-6">Request a Consultation</h3>
            <ContactForm compact />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
