'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { experienceData } from '@/data/experience';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
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
            Experience
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Career journey building AI-powered products
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-8">
            {experienceData.map((exp, idx) => {
              const isExpanded = expandedItems.has(exp.id);

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background-light transform -translate-x-1/2 hidden md:block" />

                  {/* Content card */}
                  <div className="md:ml-20 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-background-gray">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-text mb-1">
                          {exp.role}
                        </h3>
                        <div className="text-lg text-primary font-semibold mb-1">
                          {exp.company}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {exp.period} • {exp.location}
                        </div>
                      </div>

                      <button
                        onClick={() => toggleExpanded(exp.id)}
                        className="p-2 hover:bg-background-gray rounded-lg transition-colors"
                      >
                        {isExpanded ? (
                          <HiChevronUp className="w-6 h-6 text-text-secondary" />
                        ) : (
                          <HiChevronDown className="w-6 h-6 text-text-secondary" />
                        )}
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-4">{exp.description}</p>

                    {/* Impact metrics */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      {exp.impact.map((item, impactIdx) => (
                        <div
                          key={impactIdx}
                          className="px-3 py-2 bg-accent/10 rounded-lg"
                        >
                          <div className="text-sm text-text-secondary">
                            {item.metric}
                          </div>
                          <div className="text-lg font-bold text-accent">
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expandable content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-background-gray">
                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-text mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIdx) => (
                              <li
                                key={achIdx}
                                className="flex items-start gap-2 text-text-secondary"
                              >
                                <span className="text-primary mt-1.5">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-text mb-3">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-3 py-1 bg-background-gray text-text-secondary text-sm font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
