import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function SectionContainer({ children, className = '', id, background = 'white' }) {
  const bgMap = {
    white: 'bg-white',
    gray: 'bg-[#F5F7FA]',
    navy: 'bg-[#0E1A2B]',
    gradient: 'section-gradient',
    dark: 'bg-[#162234]',
  };

  return (
    <section id={id} className={`py-24 ${bgMap[background] || ''} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ badge, title, highlight, description, centered = true, light = false }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <span className={`tag mb-4 ${light ? 'bg-white/15 text-white' : 'tag-blue'}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-4xl sm:text-5xl font-extrabold font-poppins leading-tight mb-5 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}{' '}
        {highlight && <span className="text-gradient-brand">{highlight}</span>}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-blue-200' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function AnimatedGrid({ children, cols = 3, className = '' }) {
  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`grid gap-6 ${colsMap[cols] || ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export { itemVariants, containerVariants };
