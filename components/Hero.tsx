'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { useProgressiveDisclosure } from './ProgressiveDisclosureProvider';

export default function Hero() {
  const { setScrollState } = useProgressiveDisclosure();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  // Update scroll state when hero leaves view
  useEffect(() => {
    setScrollState(!inView);
  }, [inView, setScrollState]);

  const handlePressStart = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="container-custom text-center z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Name */}
        <motion.h1
          className="font-display text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-electric-indigo to-deep-purple bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          NIMIT KHURANA
        </motion.h1>

        {/* Tagline */}
        <motion.div
          className="space-y-2 mb-12"
          variants={staggerItem}
        >
          <p className="text-xl md:text-2xl text-text-secondary font-medium">
            AI Product Manager • UX Visionary
          </p>
          <p className="text-2xl md:text-3xl text-neon-cyan font-semibold">
            Listening Transforms Everything
          </p>
        </motion.div>

        {/* Press Start Button */}
        <motion.button
          onClick={handlePressStart}
          className="px-12 py-4 bg-electric-indigo text-white font-display text-xl rounded-none border-2 border-electric-indigo hover:bg-deep-purple hover:border-deep-purple transition-colors shadow-glow animate-glow-pulse"
          variants={staggerItem}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          [ PRESS START ]
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-cyan"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
