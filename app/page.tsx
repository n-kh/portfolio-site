import Hero from '@/components/Hero';
import MetricsDashboard from '@/components/MetricsDashboard';
import CaseStudyCard from '@/components/CaseStudyCard';
import SkillsShowcase from '@/components/SkillsShowcase';
import Timeline from '@/components/Timeline';
import { caseStudiesData } from '@/data/case-studies';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

export default function Home() {
  // Show only featured case studies (first 3)
  const featuredCaseStudies = caseStudiesData.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Metrics Dashboard */}
      <MetricsDashboard />

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Deep dives into AI/ML products I've built from 0 to 1
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCaseStudies.map((caseStudy, idx) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={idx} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-xl"
            >
              View All Case Studies
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <SkillsShowcase />

      {/* Experience Timeline */}
      <Timeline />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            I'm always interested in new opportunities to build AI-powered products
            that make a real impact. Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-background-light transition-colors shadow-lg"
            >
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold text-lg border-2 border-white hover:bg-white/10 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
