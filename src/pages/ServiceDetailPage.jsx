import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { SectionContainer, SectionHeader, AnimatedGrid, itemVariants } from '../components/SectionContainer';
import { FeatureCard } from '../components/Cards';
import CTASection from '../components/CTASection';

const colorConfig = {
  blue: { tag: 'tag-blue', gradient: 'from-blue-600 to-blue-400', light: 'bg-blue-50', text: 'text-blue-600', icon: 'bg-blue-100', check: 'text-blue-600', border: 'border-blue-100' },
  green: { tag: 'tag-green', gradient: 'from-green-500 to-green-400', light: 'bg-green-50', text: 'text-green-600', icon: 'bg-green-100', check: 'text-green-600', border: 'border-green-100' },
  red: { tag: 'bg-red-50 text-red-700', gradient: 'from-red-500 to-red-400', light: 'bg-red-50', text: 'text-red-600', icon: 'bg-red-100', check: 'text-red-600', border: 'border-red-100' },
  orange: { tag: 'bg-orange-50 text-orange-700', gradient: 'from-orange-500 to-orange-400', light: 'bg-orange-50', text: 'text-orange-600', icon: 'bg-orange-100', check: 'text-orange-600', border: 'border-orange-100' },
  purple: { tag: 'bg-purple-50 text-purple-700', gradient: 'from-purple-500 to-purple-400', light: 'bg-purple-50', text: 'text-purple-600', icon: 'bg-purple-100', check: 'text-purple-600', border: 'border-purple-100' },
};

export default function ServiceDetailPage({
  meta,
  service,
  intro,
  sections,
  benefits,
  whySection,
  faq,
}) {
  const Icon = LucideIcons[service.icon] || LucideIcons.Shield;
  const colors = colorConfig[service.color] || colorConfig.blue;

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* Hero */}
      <section className="relative hero-gradient pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className={`absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl`} />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 text-green-300 border border-green-500/30 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {service.tagline}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl font-extrabold font-poppins text-white mb-6 leading-tight"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-100/80 text-xl leading-relaxed mb-8"
            >
              {intro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Download Service Brief
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key capabilities summary bar */}
      <div className="bg-white border-b border-gray-100 py-6 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 rounded-full px-4 py-1.5 border border-gray-200">
                <CheckCircle className={`w-3.5 h-3.5 ${colors.check} flex-shrink-0`} />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main sections */}
      {sections.map((s, i) => {
        const SIcon = LucideIcons[s.icon] || LucideIcons.Shield;
        return (
          <SectionContainer key={s.title} background={i % 2 === 0 ? 'white' : 'gray'}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <span className={`tag mb-4 ${colors.tag}`}>{s.tag}</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-gray-900 mb-5 leading-tight">{s.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-3">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle className={`w-5 h-5 ${colors.check} flex-shrink-0 mt-0.5`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={i % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className={`${colors.light} rounded-3xl p-10 border ${colors.border} flex items-center justify-center min-h-64`}>
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-2xl ${colors.icon} flex items-center justify-center mx-auto mb-4`}>
                      <SIcon className={`w-10 h-10 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm max-w-xs">{s.visual || s.tag}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionContainer>
        );
      })}

      {/* Benefits */}
      {benefits && (
        <SectionContainer background="navy">
          <SectionHeader
            badge="Key Benefits"
            title={benefits.title}
            highlight={benefits.highlight}
            light
            description={benefits.description}
          />
          <AnimatedGrid cols={3}>
            {benefits.items.map((b) => (
              <FeatureCard key={b.title} icon={b.icon} title={b.title} description={b.description} color="blue" />
            ))}
          </AnimatedGrid>
        </SectionContainer>
      )}

      {/* FAQ */}
      {faq && (
        <SectionContainer background="white">
          <SectionHeader
            badge="FAQ"
            title="Common"
            highlight="Questions"
            description="Answers to frequently asked questions about our services."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 font-poppins mb-3">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      )}

      <CTASection
        title={`Ready to Get Started with ${service.shortTitle}?`}
        description="Talk to our experts and get a tailored solution for your organization."
      />
    </>
  );
}
