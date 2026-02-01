'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import type { CaseStudy } from '@/data/case-studies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export default function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-background-gray"
    >
      {/* Hero Image Placeholder */}
      <div className="relative h-56 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">{caseStudy.tags[0] === 'Recommendation Systems' ? '🎯' : caseStudy.tags[0] === 'NLP' ? '🔍' : '📄'}</div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-sm font-semibold rounded-full">
            {caseStudy.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {caseStudy.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-background-gray text-text-secondary text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
          {caseStudy.title}
        </h3>

        {/* Subtitle */}
        <p className="text-text-secondary mb-4 line-clamp-2">
          {caseStudy.subtitle}
        </p>

        {/* Key metrics preview */}
        <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-t border-b border-background-gray">
          {caseStudy.impact.slice(0, 3).map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg font-bold text-primary">
                {metric.value}
              </div>
              <div className="text-xs text-text-secondary line-clamp-1">
                {metric.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Read more link */}
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Read Full Case Study
          <HiArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
}
