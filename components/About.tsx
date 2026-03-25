'use client';

import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { value: 'Level 8', label: 'Product Manager', color: 'text-neon-cyan' },
    { value: '10M+', label: 'Users Impacted', color: 'text-amber-gold' },
    { value: '$50M+', label: 'Business Impact', color: 'text-hot-pink' },
  ];

  return (
    <section id="about" className="py-20 bg-midnight">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-center mb-8">
            THE PROTAGONIST
          </h2>

          <p className="text-xl text-text-secondary leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            AI Product Manager who believes that the best AI doesn't announce itself—it listens,
            adapts, and disappears into the experience. I turn customer insights into transformative
            products through deep user understanding and marketing DNA.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-charcoal p-6 rounded-lg text-center border border-electric-indigo/20"
                whileHover={{ y: -4, boxShadow: 'var(--shadow-glow)' }}
              >
                <div className={`font-display text-4xl ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-neon-cyan text-center font-medium">
            "Listening Transforms Everything" isn't just a tagline—it's how I build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
