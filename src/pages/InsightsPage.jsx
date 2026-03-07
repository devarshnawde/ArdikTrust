import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { SectionContainer, SectionHeader, AnimatedGrid } from '../components/SectionContainer';
import { BlogCard } from '../components/Cards';
import NewsletterSection from '../components/NewsletterSection';
import { blogPosts } from '../data/siteData';

const categories = ['All', 'HIPAA Compliance', 'SOC 2', 'Threat Intelligence', 'Identity Security', 'Penetration Testing', 'Cloud Security', 'Risk Management', 'Compliance'];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Cybersecurity Insights & Blog | Healthcare Security | ArdikTrust</title>
        <meta name="description" content="Healthcare cybersecurity insights, HIPAA compliance guides, penetration testing resources, and security monitoring best practices from ArdikTrust experts." />
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
            Insights & Research
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-extrabold font-poppins text-white mb-6"
          >
            Healthcare Cybersecurity <span className="text-gradient-green">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/80 text-xl max-w-2xl mx-auto mb-10"
          >
            Expert analysis, HIPAA guidance, threat intelligence, and practical security resources 
            from the ArdikTrust research team.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-12 text-base py-4 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-100 py-5 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <SectionContainer background="gray">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No articles found. Try a different search or category.</p>
          </div>
        ) : (
          <>
            <div className="mb-8 flex items-center justify-between">
              <p className="text-gray-500 text-sm">
                Showing <span className="font-semibold text-gray-900">{filtered.length}</span> article{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'All' && ` in "${activeCategory}"`}
              </p>
            </div>
            <AnimatedGrid cols={3}>
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </AnimatedGrid>
          </>
        )}
      </SectionContainer>

      {/* More Topics */}
      <SectionContainer background="white">
        <SectionHeader
          badge="More Topics"
          title="Explore Security"
          highlight="Topics"
          description="We cover a broad range of cybersecurity and compliance topics relevant to healthcare organizations."
        />
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            'HIPAA Risk Analysis', 'SOC 2 Type II', 'Healthcare Ransomware', 'Zero Trust', 'Penetration Testing',
            'Cloud Security', 'Vendor Risk', 'Identity Access Management', 'ISO 27001', 'NIST CSF',
            'Security Monitoring', 'Incident Response', 'Phishing Defense', 'Medical Device Security',
            'HealthTech Security', 'RCM Compliance', 'Data Breach Prevention', 'Endpoint Security',
            'Security Awareness Training', 'Executive Security Reporting',
          ].map((topic) => (
            <span key={topic} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors">
              {topic}
            </span>
          ))}
        </div>
      </SectionContainer>

      <NewsletterSection />
    </>
  );
}
