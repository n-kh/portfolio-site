import { Metadata } from 'next';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudiesData } from '@/data/case-studies';

const SUBSTACK_BASE_URL = 'https://substack.com/@nimitkhurana';

export const metadata: Metadata = {
  title: 'Case Studies - Nimit Khurana',
  description: 'Explore case studies of AI/ML products I\'ve built. Read the full breakdowns on Substack.',
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-midnight">
      <div className="container-custom">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-text-primary mb-6">
            CASE STUDIES
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-6">
            Detailed breakdowns of AI/ML products I've shipped. Read the full
            case studies on Substack.
          </p>
          <a
            href={SUBSTACK_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-electric-indigo text-white rounded-lg font-semibold hover:bg-deep-purple transition-colors shadow-md"
          >
            Subscribe on Substack
          </a>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy, idx) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={idx} />
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-charcoal rounded-xl border border-electric-indigo/20">
            <h3 className="font-display text-2xl text-text-primary mb-4">
              WANT TO DISCUSS THESE PROJECTS?
            </h3>
            <p className="text-text-secondary mb-6">
              I'm happy to go deeper into the technical details, decision-making
              process, and learnings from any of these projects.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-electric-indigo text-white rounded-lg font-semibold hover:bg-deep-purple transition-colors shadow-md"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
