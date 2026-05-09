'use client';

import { motion } from 'framer-motion';
import { Power, MAX_RANK, categoryLabel } from '@/data/powers';

interface PowerCardProps {
  power: Power;
  index: number;
}

const categoryAccent: Record<Power['category'], string> = {
  technical: 'text-cyan-terminal border-cyan-terminal/40',
  leadership: 'text-system border-system/40',
  craft: 'text-sponsor border-sponsor/40',
  communication: 'text-success border-success/40',
};

/**
 * Single power tile: icon, name, recruiter tagline, rank pips, description.
 */
export default function PowerCard({ power, index }: PowerCardProps) {
  const accent = categoryAccent[power.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative panel-system p-5 transition-shadow hover:shadow-glow-system flex flex-col`}
    >
      {/* Header: icon + name + category tag */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl select-none" aria-hidden>
            {power.icon}
          </span>
          <div>
            <h3 className="font-display text-sm sm:text-base text-parchment leading-tight">
              {power.name}
            </h3>
            <p className={`font-mono text-[10px] uppercase tracking-wider mt-1 ${accent.split(' ')[0]}`}>
              {categoryLabel[power.category]}
            </p>
          </div>
        </div>
      </div>

      {/* Recruiter-facing tagline */}
      <p className="font-mono text-xs text-cyan-terminal mb-3 opacity-90">
        {'// '}
        {power.recruiterTagline}
      </p>

      {/* Rank pips */}
      <div className="flex items-center gap-1.5 mb-3" aria-label={`Rank ${power.currentRank} of ${MAX_RANK}`}>
        {Array.from({ length: MAX_RANK }).map((_, i) => {
          const filled = i < power.currentRank;
          return (
            <span
              key={i}
              className={`h-2 flex-1 ${
                filled ? 'bg-system shadow-glow-system' : 'bg-stone-light border border-system/20'
              }`}
              style={filled ? { boxShadow: '0 0 4px rgba(245, 185, 74, 0.6)' } : {}}
            />
          );
        })}
        <span className="ml-2 font-mono text-xs text-system tabular-nums">
          {power.currentRank}/{MAX_RANK}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-parchment-dim leading-relaxed flex-1">
        {power.description}
      </p>
    </motion.div>
  );
}
