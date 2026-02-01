'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { metricsData } from '@/data/metrics';

export default function MetricsDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-background-light" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Impact & Achievements
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Quantifiable results from shipping AI/ML products at scale
          </p>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {metricsData.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-background-gray"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{metric.icon}</div>

              {/* Value */}
              <div className="text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-xl font-semibold text-text mb-2">
                {metric.label}
              </div>

              {/* Description */}
              <div className="text-sm text-text-secondary">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            These metrics represent the cumulative impact of launching AI-powered
            recommendation systems, intelligent search, document processing
            automation, and personalization features across B2B and B2C products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
