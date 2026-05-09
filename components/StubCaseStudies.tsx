'use client';

import { motion } from 'framer-motion';
import SystemMessage from './SystemMessage';
import { SUBSTACK_URL } from '@/lib/constants';

/**
 * StubCaseStudies - the entire body of /case-studies. One large card that
 * sends visitors to the Substack publication where the long-form work lives.
 */
export default function StubCaseStudies() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-3xl w-full">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="font-mono text-cyan-glow text-sm mb-3 tracking-widest">
            [ /CRAWLER/DISPATCHES ]
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-parchment mb-4"
            style={{ textShadow: '0 0 12px rgba(245, 185, 74, 0.4)' }}
          >
            DISPATCHES FROM THE DUNGEON
          </motion.h1>
          <p className="font-mono text-sm text-parchment-dim max-w-xl mx-auto">
            Long-form case studies, post-mortems, and field notes are
            published as Crawler dispatches. Subscribe at the source.
          </p>
        </div>

        {/* The big "Enter the Dungeon" card */}
        <motion.a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="group block panel-system p-8 md:p-12 relative overflow-hidden hover:shadow-glow-system transition-shadow animate-pulse-glow"
        >
          {/* Corner brackets */}
          <span className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-system" />
          <span className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-system" />
          <span className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-system" />
          <span className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-system" />

          <div className="relative text-center">
            <div className="text-7xl md:text-8xl mb-6 select-none" aria-hidden>
              🚪
            </div>

            <p className="font-mono text-xs text-cyan-terminal mb-3 tracking-widest">
              [ EXIT TO EXTERNAL DOMAIN ]
            </p>

            <h2 className="font-display text-2xl md:text-3xl text-system mb-4">
              ENTER THE DUNGEON
            </h2>

            <p className="font-mono text-sm text-parchment-dim mb-8 max-w-md mx-auto">
              Read the dispatches on Substack. New entries appear when the
              Crawler clears a notable floor.
            </p>

            <div className="inline-flex items-center gap-3 font-display text-xs sm:text-sm px-7 py-4 bg-system text-stone-deep group-hover:bg-xp transition-colors">
              <span aria-hidden>⚔</span>
              READ DISPATCHES
              <span aria-hidden className="group-hover:translate-x-1 transition-transform">→</span>
            </div>

            <p className="font-mono text-xs text-parchment-muted mt-6">
              Opens in a new tab · {new URL(SUBSTACK_URL).hostname}
            </p>
          </div>
        </motion.a>

        <div className="mt-10">
          <SystemMessage tone="cyan" prefix="[Note]:">
            Field reports are kept off-site so they can be subscribed to,
            commented on, and shared without the dungeon&apos;s scaffolding
            getting in the way.
          </SystemMessage>
        </div>
      </div>
    </section>
  );
}
