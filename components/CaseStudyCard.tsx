'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cardHover } from '@/lib/animations';
import type { CaseStudy } from '@/data/case-studies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const difficultyStars = '⚡'.repeat(caseStudy.difficultyRating);

  return (
    <Link href={`/case-studies/${caseStudy.id}`}>
      <motion.div
        className="relative bg-charcoal rounded-lg overflow-hidden border border-electric-indigo/20 hover:border-neon-cyan/50 transition-colors group"
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        custom={index}
      >
        {/* Track Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-electric-indigo/90 backdrop-blur-sm px-3 py-1 rounded-full font-mono text-sm">
            ♫ TRACK {String(caseStudy.track).padStart(2, '0')}
          </div>
        </div>

        {/* Difficulty Rating */}
        <div className="absolute top-4 right-4 z-10">
          <div className="text-amber-gold text-lg">{difficultyStars}</div>
        </div>

        {/* Thumbnail Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-deep-purple/30 to-electric-indigo/30 flex items-center justify-center">
          <div className="text-6xl opacity-30">
            {index === 0 && '🔍'}
            {index === 1 && '📈'}
            {index === 2 && '🌈'}
            {index === 3 && '🎯'}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-2xl mb-2 group-hover:text-neon-cyan transition-colors">
            {caseStudy.title}
          </h3>

          <p className="text-text-secondary mb-4 line-clamp-2">
            {caseStudy.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-midnight text-xs text-text-secondary rounded border border-electric-indigo/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Play Button */}
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-neon-cyan font-medium group-hover:gap-3 transition-all">
              <span>▶ Play Track</span>
            </button>

            <span className="font-mono text-sm text-text-muted">
              +{caseStudy.xpReward} XP
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
