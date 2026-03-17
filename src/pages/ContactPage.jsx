import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Globe, Linkedin, Phone, MapPin, Shield, Clock } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact ArdikTrust | Schedule a Security Consultation</title>
        <meta name="description" content="Contact ArdikTrust to schedule a security consultation, request a compliance assessment, or learn more about our cybersecurity services for healthcare organizations." />
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
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold font-poppins text-white mb-6"
          >
            Let's Secure Your<br />
            <span className="text-gradient-green">Organization</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/80 text-xl max-w-2xl mx-auto"
          >
            Talk to a cybersecurity expert. No pressure, no sales pitch — just clear answers about 
            how ArdikTrust can help your organization.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <SectionContainer background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left side info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm"
            >
              <h2 className="text-xl font-bold font-poppins text-gray-900 mb-5">Contact Information</h2>
              <div className="space-y-4">
                <a href="mailto:connect@ardiktrust.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Email Us</div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">connect@ardiktrust.com</div>
                  </div>
                </a>
                <a href="https://www.ardiktrust.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Website</div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">www.ardiktrust.com</div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/ardiktrust/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">LinkedIn</div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-[#0A66C2] transition-colors">ArdikTrust on LinkedIn</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#0E1A2B] to-[#1E5AA8] rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-poppins">Response Time</h3>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  Our team responds to all inquiries within 24 business hours. For urgent security incidents, 
                  please indicate the nature of your situation in your message.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-300 font-semibold">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available 24/7 for Monitoring Clients
                </div>
              </div>
            </motion.div>

            {/* CTA options */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 font-poppins mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { icon: Shield, label: 'Schedule Security Consultation', desc: 'Talk to a cybersecurity expert' },
                  { icon: Globe, label: 'Request Compliance Assessment', desc: 'HIPAA, SOC 2, ISO 27001 readiness' },
                  { icon: Mail, label: 'Request a Proposal', desc: 'Custom pricing for your needs' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                      <item.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                      <div className="text-xs text-gray-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below and our security team will get back to you within 24 hours.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </SectionContainer>

      {/* Trust section */}
      <SectionContainer background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold font-poppins text-gray-900 mb-8">
            Trusted by Healthcare Organizations Across the US
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '200+', label: 'Healthcare Clients' },
              { value: '500+', label: 'Assessments Completed' },
              { value: '99.9%', label: 'Audit Pass Rate' },
              { value: '24/7', label: 'Expert Coverage' },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                <div className="stat-number mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
