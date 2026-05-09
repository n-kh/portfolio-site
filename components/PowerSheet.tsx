'use client';

import { motion } from 'framer-motion';
import { powers } from '@/data/powers';
import PowerCard from './PowerCard';
import SystemMessage from './SystemMessage';

/**
 * The Power Sheet - a grid of all powers with current ranks. Recruiter
 * tagline and rank pips are surfaced on each card.
 */
export default function PowerSheet() {
  return (
    <section id="power-sheet" className="py-16 md:py-24 px-4 relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-10 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-cyan-glow text-sm mb-3 tracking-widest"
          >
            [ /CHARACTER/POWERS ]
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-parchment mb-4"
            style={{ textShadow: '0 0 12px rgba(245, 185, 74, 0.4)' }}
          >
            POWER SHEET
          </motion.h2>
          <p className="font-mono text-sm text-parchment-dim">
            Skills the Crawler has acquired. Ranks 1–10. The kind of things
            recruiters control-F for.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {powers.map((power, i) => (
            <PowerCard key={power.id} power={power} index={i} />
          ))}
        </div>

        {/* Footer system message */}
        <div className="max-w-3xl">
          <SystemMessage tone="cyan" prefix="[Inventory]:">
            8 powers active. Hover any card for the recruiter-facing tagline.
            Stat sheet exportable on request (it&apos;s called a resume).
          </SystemMessage>
        </div>
      </div>
    </section>
  );
}
