'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Tone = 'system' | 'cyan' | 'danger' | 'success' | 'sponsor';

interface SystemMessageProps {
  tone?: Tone;
  prefix?: string;
  children: ReactNode;
  flicker?: boolean;
  className?: string;
}

const toneStyles: Record<Tone, { panel: string; text: string; prefix: string }> = {
  system: {
    panel: 'panel-system',
    text: 'text-system',
    prefix: 'text-system-glow',
  },
  cyan: {
    panel: 'panel-cyan',
    text: 'text-cyan-terminal',
    prefix: 'text-cyan-glow',
  },
  danger: {
    panel: 'panel-danger',
    text: 'text-danger',
    prefix: 'text-danger',
  },
  success: {
    panel: 'panel-system',
    text: 'text-success',
    prefix: 'text-success',
  },
  sponsor: {
    panel: 'panel-system',
    text: 'text-sponsor',
    prefix: 'text-sponsor',
  },
};

/**
 * DCC-style system message callout. Renders as a HUD panel with a tonal
 * prefix (e.g. "[System]:") followed by the message body.
 */
export default function SystemMessage({
  tone = 'system',
  prefix = '[System]:',
  children,
  flicker = false,
  className = '',
}: SystemMessageProps) {
  const styles = toneStyles[tone];

  return (
    <motion.div
      className={`${styles.panel} ${className} font-mono text-sm md:text-base px-4 py-3 ${flicker ? 'animate-system-flicker' : ''}`}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <span className={`${styles.prefix} font-semibold mr-2 select-none`}>{prefix}</span>
      <span className={styles.text}>{children}</span>
    </motion.div>
  );
}
