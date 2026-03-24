'use client';

import { motion } from 'framer-motion';
import { useProgressiveDisclosure } from './ProgressiveDisclosureProvider';

export default function GeometricBackground() {
  const { state } = useProgressiveDisclosure();

  // Pattern opacity increases with disclosure state
  const opacity = state * 0.1 + 0.1; // 0.1 to 0.5

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient mesh background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 50%, rgba(91, 33, 182, ${opacity * 0.3}) 0%, transparent 50%),
                       radial-gradient(circle at 80% 80%, rgba(107, 33, 168, ${opacity * 0.3}) 0%, transparent 50%),
                       radial-gradient(circle at 40% 80%, rgba(34, 211, 238, ${opacity * 0.2}) 0%, transparent 50%)`,
        }}
        animate={{ opacity }}
        transition={{ duration: 0.8 }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 border border-neon-cyan/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ opacity }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-48 h-48 border border-electric-indigo/20"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ opacity }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-hot-pink/20 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ opacity }}
      />
    </div>
  );
}
