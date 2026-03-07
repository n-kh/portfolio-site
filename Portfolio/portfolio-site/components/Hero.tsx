'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight, HiDownload } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background-light to-primary/5 pt-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              AI Product Manager
            </span>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight"
          >
            Building{' '}
            <span className="gradient-text">Intelligent Products</span>
            <br />
            That Users Love
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto"
          >
            Product Manager specializing in AI/ML products, recommendation systems,
            and intelligent user experiences. Led products serving{' '}
            <span className="text-primary font-semibold">10M+ users</span> and
            generated{' '}
            <span className="text-accent font-semibold">$50M+ in revenue</span>.
          </motion.p>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base"
          >
            {[
              '🎯 AI Product Strategy',
              '🤖 ML Lifecycle Management',
              '✨ User-Facing AI Features',
              '📊 Data-Driven Decisions',
            ].map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow-sm border border-background-gray"
              >
                {item}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/case-studies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                View Case Studies
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg border-2 border-primary hover:bg-primary/5 transition-colors flex items-center gap-2"
            >
              <HiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-1.5 bg-text-secondary rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
