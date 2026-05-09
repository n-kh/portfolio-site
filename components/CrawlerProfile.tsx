'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SystemMessage from './SystemMessage';
import { CURRENT_LEVEL } from '@/data/levels';

/**
 * CrawlerProfile - the hero panel. Replaces the prior Hero+About combo.
 * Populated from Nimit Khurana's resume (May 2026 snapshot).
 */
export default function CrawlerProfile() {
  const handlePressStart = () => {
    document
      .getElementById('power-sheet')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
      <div className="max-w-5xl w-full">
        {/* Top status line — DCC-style HUD readout */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs sm:text-sm text-system-glow mb-6 tracking-widest uppercase"
        >
          [ Crawler Manual v9.0 // Surface Dungeon: Bangalore // Active ]
        </motion.div>

        <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
          {/* Avatar slot - placeholder DCC-style portrait frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-40 h-40 md:w-56 md:h-56 mx-auto md:mx-0"
          >
            <div className="absolute inset-0 panel-system rounded-sm flex items-center justify-center overflow-hidden">
              {/* TODO(user): replace with real avatar image at /public/crawler-avatar.png */}
              <span className="text-7xl md:text-8xl select-none" aria-hidden>
                🧙
              </span>
            </div>
            {/* Corner brackets — DCC HUD frame */}
            <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-system" />
            <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-system" />
            <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-system" />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-system" />
          </motion.div>

          {/* Identity block */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-cyan-glow text-sm md:text-base mb-2"
            >
              CRAWLER DESIGNATION
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl text-parchment mb-3 leading-tight"
              style={{ textShadow: '0 0 12px rgba(245, 185, 74, 0.4)' }}
            >
              NIMIT KHURANA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-sm md:text-base text-system mb-1"
            >
              CLASS: Senior Product Manager
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-mono text-xs md:text-sm text-parchment-dim mb-5"
            >
              SUBCLASS: Knowledge &amp; AI Grounding · Service Cloud @ Salesforce
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <span className="font-mono text-xs px-3 py-1 panel-system text-system">
                LEVEL {String(CURRENT_LEVEL).padStart(2, '0')}
              </span>
              <span className="font-mono text-xs px-3 py-1 panel-cyan text-cyan-terminal">
                14+ YEARS XP
              </span>
              <span className="font-mono text-xs px-3 py-1 panel-system text-success">
                🟢 ACTIVE
              </span>
              <span className="font-mono text-xs px-3 py-1 panel-system text-xp">
                📍 Bangalore, IN
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              <p className="text-parchment text-base md:text-lg leading-relaxed max-w-2xl">
                14+ years building products across automotive, consulting,
                marketplaces, e-commerce, and SaaS. Currently leading{' '}
                <span className="text-cyan-terminal">
                  Knowledge Base Management
                </span>{' '}
                for Salesforce Service Cloud — shipped Enterprise Knowledge,
                Unified Knowledge, AI grounding, and self-generated knowledge
                from cases (+
                <span className="text-xp">$5M AOV</span> and 5 net-new customers
                worth ~$2M each).
              </p>
              <p className="text-parchment-dim text-sm md:text-base leading-relaxed max-w-2xl">
                Previously: Senior PM at <span className="text-system">Amazon</span>{' '}
                (Brand Experience, +$50M OPS, GenAI review summarization, A/B
                bar-raiser), VP Product at{' '}
                <span className="text-system">NestAway</span> (30-eng team, ML
                rent predictor, Zero Deposit), Principal Consultant at{' '}
                <span className="text-system">PwC</span>, and Product Manager at{' '}
                <span className="text-system">TATA Motors</span> (Indica Vista,
                Safari Storme, Indica EV).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={handlePressStart}
                className="font-display text-xs sm:text-sm px-6 py-4 bg-system text-stone-deep hover:bg-xp transition-colors animate-pulse-glow"
              >
                ▶ PRESS START
              </button>
              <Link
                href="/contact"
                className="font-display text-xs sm:text-sm px-6 py-4 panel-cyan text-cyan-terminal hover:bg-cyan-terminal hover:text-stone-deep transition-colors"
              >
                ⚔ HAIL THE CRAWLER
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <SystemMessage tone="system" prefix="[AI]:" flicker>
            Crawler &lsquo;NIMIT KHURANA&rsquo; located on the surface dungeon.
            Class: Senior PM. Specialty: Knowledge &amp; AI grounding. Loot
            history extensive. Recruiters and dungeon masters welcome.
          </SystemMessage>
        </motion.div>
      </div>
    </section>
  );
}
