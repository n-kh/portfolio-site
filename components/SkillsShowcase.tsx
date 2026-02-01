'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillsData, frameworks, tools } from '@/data/skills';

export default function SkillsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            AI/ML PM Skills
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive expertise in building and scaling AI-powered products
          </p>
        </motion.div>

        {/* Skills categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background-light rounded-xl p-6 hover:shadow-lg transition-all"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-text">
                  {category.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ x: 5 }}
                    className="bg-white rounded-lg p-4 border border-background-gray hover:border-primary/30 transition-all cursor-default"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-text">
                        {skill.name}
                      </h4>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          skill.level === 'Expert'
                            ? 'bg-accent/20 text-accent'
                            : skill.level === 'Advanced'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-background-gray text-text-secondary'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frameworks section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-text mb-6 text-center">
            PM Frameworks & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {frameworks.map((framework, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium border border-primary/20"
              >
                {framework}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-text mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(tools).map(([category, toolList], idx) => (
              <div key={idx} className="bg-background-light rounded-lg p-4">
                <h4 className="font-semibold text-text mb-3 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="space-y-2">
                  {toolList.map((tool, toolIdx) => (
                    <div
                      key={toolIdx}
                      className="text-sm text-text-secondary flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
