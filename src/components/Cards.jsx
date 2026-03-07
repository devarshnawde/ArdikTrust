import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { itemVariants } from './SectionContainer';

const colorConfig = {
  blue: {
    iconBg: 'bg-blue-50 group-hover:bg-blue-100',
    iconColor: 'text-blue-600',
    accent: 'from-blue-500 to-blue-600',
    border: 'hover:border-blue-200',
    tagBg: 'bg-blue-50 text-blue-700',
    dot: 'bg-blue-500',
  },
  green: {
    iconBg: 'bg-green-50 group-hover:bg-green-100',
    iconColor: 'text-green-600',
    accent: 'from-green-500 to-green-600',
    border: 'hover:border-green-200',
    tagBg: 'bg-green-50 text-green-700',
    dot: 'bg-green-500',
  },
  red: {
    iconBg: 'bg-red-50 group-hover:bg-red-100',
    iconColor: 'text-red-600',
    accent: 'from-red-500 to-red-600',
    border: 'hover:border-red-200',
    tagBg: 'bg-red-50 text-red-700',
    dot: 'bg-red-500',
  },
  orange: {
    iconBg: 'bg-orange-50 group-hover:bg-orange-100',
    iconColor: 'text-orange-600',
    accent: 'from-orange-500 to-orange-600',
    border: 'hover:border-orange-200',
    tagBg: 'bg-orange-50 text-orange-700',
    dot: 'bg-orange-500',
  },
  purple: {
    iconBg: 'bg-purple-50 group-hover:bg-purple-100',
    iconColor: 'text-purple-600',
    accent: 'from-purple-500 to-purple-600',
    border: 'hover:border-purple-200',
    tagBg: 'bg-purple-50 text-purple-700',
    dot: 'bg-purple-500',
  },
  navy: {
    iconBg: 'bg-blue-900/10 group-hover:bg-blue-900/20',
    iconColor: 'text-blue-900',
    accent: 'from-blue-900 to-blue-800',
    border: 'hover:border-blue-900/20',
    tagBg: 'bg-blue-900/10 text-blue-900',
    dot: 'bg-blue-900',
  },
  teal: {
    iconBg: 'bg-teal-50 group-hover:bg-teal-100',
    iconColor: 'text-teal-600',
    accent: 'from-teal-500 to-teal-600',
    border: 'hover:border-teal-200',
    tagBg: 'bg-teal-50 text-teal-700',
    dot: 'bg-teal-500',
  },
};

export function ServiceCard({ service }) {
  const Icon = LucideIcons[service.icon] || LucideIcons.Shield;
  const colors = colorConfig[service.color] || colorConfig.blue;

  return (
    <motion.div variants={itemVariants} className="group">
      <Link to={service.slug} className="block h-full">
        <div className={`h-full bg-white rounded-2xl border border-gray-100 ${colors.border} p-7 card-hover transition-all duration-300 relative overflow-hidden`}>
          {/* Accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-5 transition-colors duration-300`}>
            <Icon className={`w-7 h-7 ${colors.iconColor}`} />
          </div>

          {/* Tag */}
          <span className={`tag text-[10px] mb-3 ${colors.tagBg}`}>
            {service.tagline}
          </span>

          <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-blue-700 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Features list */}
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0`} />
                {feature}
              </li>
            ))}
          </ul>

          <div className={`flex items-center gap-1.5 text-sm font-semibold ${colors.iconColor} group-hover:gap-3 transition-all`}>
            Learn More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeatureCard({ icon, title, description, color = 'blue' }) {
  const Icon = LucideIcons[icon] || LucideIcons.Check;
  const colors = colorConfig[color] || colorConfig.blue;

  return (
    <motion.div variants={itemVariants} className="group">
      <div className={`bg-white rounded-2xl border border-gray-100 ${colors.border} p-7 card-hover h-full transition-all duration-300`}>
        <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-5 transition-colors`}>
          <Icon className={`w-6 h-6 ${colors.iconColor}`} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 font-poppins">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function IndustryCard({ industry }) {
  const Icon = LucideIcons[industry.icon] || LucideIcons.Building2;
  const colors = colorConfig[industry.color] || colorConfig.blue;

  return (
    <motion.div variants={itemVariants} className="group">
      <Link to={industry.slug}>
        <div className={`bg-white rounded-2xl border border-gray-100 ${colors.border} p-7 card-hover h-full transition-all duration-300 relative overflow-hidden`}>
          <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300`}>
            <Icon className={`w-7 h-7 ${colors.iconColor}`} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{industry.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">{industry.description}</p>
          <div className={`flex items-center gap-1.5 text-sm font-semibold ${colors.iconColor}`}>
            Learn More <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function BlogCard({ post }) {
  const categoryColors = {
    'HIPAA Compliance': 'bg-blue-50 text-blue-700',
    'SOC 2': 'bg-green-50 text-green-700',
    'Threat Intelligence': 'bg-red-50 text-red-700',
    'Identity Security': 'bg-purple-50 text-purple-700',
    'Penetration Testing': 'bg-orange-50 text-orange-700',
    'Cloud Security': 'bg-teal-50 text-teal-700',
    'Risk Management': 'bg-yellow-50 text-yellow-700',
    'Compliance': 'bg-blue-50 text-blue-700',
  };
  const tagColor = categoryColors[post.category] || 'bg-gray-50 text-gray-700';

  return (
    <motion.div variants={itemVariants} className="group">
      <div className="bg-white rounded-2xl border border-gray-100 hover:border-blue-200 card-hover h-full overflow-hidden transition-all duration-300">
        {/* Placeholder image */}
        <div className="h-44 bg-gradient-to-br from-[#0E1A2B] to-[#1E5AA8] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative text-center px-6">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
              <LucideIcons.FileText className="w-5 h-5 text-white" />
            </div>
            <span className={`tag text-[10px] ${tagColor}`}>{post.category}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors font-poppins">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag tag-blue text-[10px]">{tag}</span>
            ))}
          </div>
          <Link
            to={`/insights/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group-hover:gap-2.5"
          >
            Read Article <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
