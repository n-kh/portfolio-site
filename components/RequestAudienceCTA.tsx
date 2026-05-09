'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SystemMessage from './SystemMessage';

/**
 * Final CTA on the main page - sends visitors to /contact.
 * Themed as a DCC AI announcement.
 */
export default function RequestAudienceCTA() {
  return (
    <section className="py-20 md:py-28 px-4 relative">
      <div className="container-custom max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-cyan-glow text-sm mb-3 tracking-widest"
        >
          [ /SYSTEM/CALL_TO_ACTION ]
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl text-parchment mb-6 leading-tight"
          style={{ textShadow: '0 0 12px rgba(245, 185, 74, 0.4)' }}
        >
          REQUEST AUDIENCE WITH THE CRAWLER
        </motion.h2>

        <p className="text-parchment-dim text-base md:text-lg max-w-2xl mx-auto mb-10">
          Hiring? Building something AI-shaped? Want to argue about LLM
          evaluation? The Crawler accepts incoming transmissions.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href="/contact"
            className="font-display text-xs sm:text-sm px-7 py-4 bg-system text-stone-deep hover:bg-xp transition-colors animate-pulse-glow"
          >
            ⚔ HAIL THE CRAWLER
          </Link>
          <a
            href="/resume.pdf"
            download
            className="font-display text-xs sm:text-sm px-7 py-4 panel-cyan text-cyan-terminal hover:bg-cyan-terminal hover:text-stone-deep transition-colors"
          >
            📜 DOWNLOAD STAT SHEET
          </a>
        </motion.div>

        <div className="text-left max-w-3xl mx-auto">
          <SystemMessage tone="success" prefix="[Status]:">
            🟢 Accepting new quests. Response time: usually within 48 hours,
            assuming the dungeon Wi-Fi holds.
          </SystemMessage>
        </div>
      </div>
    </section>
  );
}
