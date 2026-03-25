'use client';

import { motion } from 'framer-motion';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudiesData } from '@/data/case-studies';
import { staggerContainer, staggerItem } from '@/lib/animations';

export default function CaseStudiesAlbum() {
  return (
    <section className="py-20 bg-midnight-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            THE ALBUM: "User&lt;&gt;AI"
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Four tracks on listening, adapting, and transforming products
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {caseStudiesData.map((caseStudy, index) => (
            <motion.div key={caseStudy.id} variants={staggerItem}>
              <CaseStudyCard caseStudy={caseStudy} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
