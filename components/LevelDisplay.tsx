'use client';

import { motion } from 'framer-motion';
import SystemMessage from './SystemMessage';

interface LevelDisplayProps {
  level: number;
  /** XP toward the next level, 0-1. Visual only. */
  xpProgress?: number;
}

/**
 * Big "LEVEL 09" centerpiece with XP bar and a level-up system message.
 */
export default function LevelDisplay({ level, xpProgress = 0.65 }: LevelDisplayProps) {
  const padded = String(level).padStart(2, '0');
  const pct = Math.min(100, Math.max(0, xpProgress * 100));

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-cyan-glow text-sm md:text-base mb-4 tracking-widest"
        >
          [ CURRENT CRAWLER LEVEL ]
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'brightness(2)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'brightness(1)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative inline-block"
        >
          {/* Aura halo */}
          <div
            className="absolute inset-0 -z-10 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(255, 213, 107, 0.45) 0%, transparent 70%)',
            }}
          />

          <div className="font-mono text-system text-xl md:text-2xl mb-2">LEVEL</div>
          <div
            className="font-display text-7xl sm:text-8xl md:text-9xl gradient-text-xp leading-none"
            style={{ textShadow: '0 0 40px rgba(255, 213, 107, 0.5)' }}
          >
            {padded}
          </div>
        </motion.div>

        {/* XP bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="flex justify-between font-mono text-xs text-parchment-dim mb-2">
            <span>XP TO LV {String(level + 1).padStart(2, '0')}</span>
            <span>{Math.round(pct)}%</span>
          </div>
          <div className="relative h-4 bg-stone-deep border border-system/40 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-system to-xp"
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.4 }}
              style={{
                boxShadow: '0 0 12px rgba(255, 213, 107, 0.6)',
              }}
            />
            {/* Pip ticks */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent 0, transparent calc(10% - 1px), rgba(0,0,0,0.4) calc(10% - 1px), rgba(0,0,0,0.4) 10%)',
              }}
            />
          </div>
        </motion.div>

        <div className="mt-10 max-w-2xl mx-auto text-left">
          <SystemMessage tone="success" prefix="[Level Up]:" flicker>
            Crawler has reached Level {padded}. Class advancement available.
            Power Sheet updated. Loot acquired: this portfolio.
          </SystemMessage>
        </div>
      </div>
    </section>
  );
}
