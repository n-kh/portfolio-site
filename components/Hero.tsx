'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { loadProgress, saveProgress } from '@/lib/progressiveState';
import { DISCLOSURE_STATES } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Track when hero leaves viewport to update disclosure state
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !hasScrolled) {
          setHasScrolled(true);

          // Update progressive disclosure state to SCROLLING
          const progress = loadProgress();
          if (progress.state === DISCLOSURE_STATES.LANDING) {
            const updatedProgress = {
              ...progress,
              state: DISCLOSURE_STATES.SCROLLING,
            };
            saveProgress(updatedProgress);

            // Update body class for visual changes
            document.body.classList.remove('disclosure-state-0');
            document.body.classList.add('disclosure-state-1');
          }
        }
      },
      {
        threshold: 0,
        rootMargin: '0px',
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [hasScrolled]);

  const handlePressStart = () => {
    // Scroll to the next section after hero
    const heroElement = heroRef.current;
    if (heroElement) {
      const nextSection = heroElement.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--midnight-base) 0%, var(--deep-space) 50%, var(--charcoal) 100%)',
      }}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--electric-indigo) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--deep-purple) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Name with gradient */}
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, var(--electric-indigo) 0%, var(--deep-purple) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Nimit Khurana
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-4xl font-light mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Listening Transforms Everything
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            AI Product Manager crafting intelligent experiences through deep listening
            and progressive revelation
          </motion.p>

          {/* Press Start Button */}
          <motion.div variants={fadeInUp}>
            <motion.button
              onClick={handlePressStart}
              className="group relative px-12 py-5 text-xl font-bold rounded-lg overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--electric-indigo) 0%, var(--deep-purple) 100%)',
                color: 'var(--text-primary)',
                boxShadow: '0 0 30px rgba(91, 33, 182, 0.5)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(91, 33, 182, 0.8)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, var(--neon-cyan) 0%, var(--electric-indigo) 100%)',
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <span className="relative z-10 flex items-center gap-2 justify-center">
                PRESS START
              </span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="mt-20"
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              style={{ color: 'var(--text-secondary)' }}
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-sm font-medium tracking-wide uppercase">Scroll to explore</span>
              <HiChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--electric-indigo) 1px, transparent 1px),
            linear-gradient(90deg, var(--electric-indigo) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </section>
  );
}
