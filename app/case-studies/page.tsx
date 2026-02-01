import { Metadata } from 'next';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudiesData } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies - Nimit Khurana',
  description: 'Explore detailed case studies of AI/ML products I\'ve built, including recommendation systems, intelligent search, and document processing.',
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background-light">
      <div className="container-custom">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Detailed breakdowns of AI/ML products I've shipped. Each case study
            follows the PM storytelling framework: Problem → Approach → Solution →
            Impact → Learnings.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy, idx) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={idx} />
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md border border-background-gray">
            <h3 className="text-2xl font-bold text-text mb-4">
              Want to Discuss These Projects?
            </h3>
            <p className="text-text-secondary mb-6">
              I'm happy to go deeper into the technical details, decision-making
              process, and learnings from any of these projects.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
