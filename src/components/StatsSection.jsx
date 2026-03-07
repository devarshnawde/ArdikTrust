import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader, AnimatedGrid } from './SectionContainer';

export default function StatsSection({ stats, title, badge, description, background = 'navy' }) {
  return (
    <SectionContainer background={background}>
      {(title || badge) && (
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          light={background === 'navy' || background === 'dark'}
        />
      )}
      <AnimatedGrid cols={4}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className={`rounded-2xl p-8 text-center relative overflow-hidden ${
              background === 'navy' || background === 'dark'
                ? 'glass border-white/10'
                : 'bg-white border border-gray-100 shadow-sm'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br opacity-5 ${
              i % 2 === 0 ? 'from-blue-500 to-transparent' : 'from-green-500 to-transparent'
            }`} />
            <div className="relative">
              <div className="stat-number mb-2">{stat.value}</div>
              <div className={`text-sm font-bold mb-1 ${background === 'navy' ? 'text-white' : 'text-gray-800'}`}>
                {stat.label}
              </div>
              <div className={`text-xs ${background === 'navy' ? 'text-blue-300' : 'text-gray-400'}`}>
                {stat.sublabel}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatedGrid>
    </SectionContainer>
  );
}
