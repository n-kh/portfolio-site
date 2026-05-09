'use client';

import { motion } from 'framer-motion';
import { useProgressiveDisclosure } from './ProgressiveDisclosureProvider';

export default function DungeonBackground() {
  const { state } = useProgressiveDisclosure();

  // Mist intensifies as the user descends
  const mistOpacity = 0.18 + state * 0.07;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Distant torch glow pools - red/amber radial gradients */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 15% 20%, rgba(232, 69, 60, ${mistOpacity * 0.4}) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 85% 80%, rgba(245, 185, 74, ${mistOpacity * 0.45}) 0%, transparent 55%),
            radial-gradient(ellipse 70% 30% at 50% 100%, rgba(92, 242, 232, ${mistOpacity * 0.25}) 0%, transparent 55%)
          `,
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting fog band */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(60, 50, 45, 0.35) 45%, rgba(60, 50, 45, 0.55) 55%, transparent 100%)',
          opacity: mistOpacity,
        }}
        animate={{ x: ['-8%', '8%', '-8%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid scaffolding - faint tactical-overlay grid for the AI HUD vibe */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 185, 74, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 185, 74, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Floating glyph - amber rune that slowly orbits */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 border border-system/15 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ opacity: mistOpacity * 0.6 }}
      />

      {/* Cyan terminal glyph - circular */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-cyan-terminal/25 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.12, 1],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ opacity: mistOpacity * 0.7 }}
      />
    </div>
  );
}
