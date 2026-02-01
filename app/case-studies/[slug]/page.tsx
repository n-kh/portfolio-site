import { Metadata } from 'next';
import Link from 'next/link';
import { HiArrowLeft, HiClock, HiUserGroup, HiCode } from 'react-icons/hi';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/data/case-studies';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each case study
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} - Nimit Khurana`,
    description: caseStudy.subtitle,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background-light">
      <div className="container-custom max-w-5xl">
        {/* Back button */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mb-8"
        >
          <HiArrowLeft className="w-5 h-5" />
          Back to Case Studies
        </Link>

        {/* Hero section */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-md mb-8">
          {/* Category badge */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              {caseStudy.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            {caseStudy.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-text-secondary mb-6">
            {caseStudy.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-background-gray text-text-secondary text-sm font-medium rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta information */}
          <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <HiClock className="w-5 h-5" />
              <span>{caseStudy.timeline}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiUserGroup className="w-5 h-5" />
              <span>Team of {caseStudy.teamSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCode className="w-5 h-5" />
              <span>{caseStudy.role}</span>
            </div>
          </div>
        </div>

        {/* Problem section */}
        <section className="bg-white rounded-xl p-8 md:p-12 shadow-md mb-8">
          <h2 className="text-3xl font-bold text-text mb-4 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            The Problem
          </h2>
          <div className="prose prose-lg max-w-none text-text-secondary whitespace-pre-line">
            {caseStudy.problem}
          </div>
        </section>

        {/* Approach section */}
        <section className="bg-white rounded-xl p-8 md:p-12 shadow-md mb-8">
          <h2 className="text-3xl font-bold text-text mb-4 flex items-center gap-3">
            <span className="text-4xl">🔍</span>
            My Approach
          </h2>
          <div className="prose prose-lg max-w-none text-text-secondary whitespace-pre-line">
            {caseStudy.approach}
          </div>
        </section>

        {/* Solution section */}
        <section className="bg-white rounded-xl p-8 md:p-12 shadow-md mb-8">
          <h2 className="text-3xl font-bold text-text mb-4 flex items-center gap-3">
            <span className="text-4xl">💡</span>
            The Solution
          </h2>
          <div className="prose prose-lg max-w-none text-text-secondary whitespace-pre-line mb-8">
            {caseStudy.solution}
          </div>

          {/* Technologies used */}
          <div className="border-t border-background-gray pt-6">
            <h3 className="font-semibold text-text mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Impact section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-8 md:p-12 shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <span className="text-4xl">📈</span>
            Impact & Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.impact.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <div className="text-xl font-semibold mb-2">{item.metric}</div>
                <div className="text-sm opacity-90">{item.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings section */}
        <section className="bg-white rounded-xl p-8 md:p-12 shadow-md mb-8">
          <h2 className="text-3xl font-bold text-text mb-4 flex items-center gap-3">
            <span className="text-4xl">💭</span>
            Key Learnings
          </h2>
          <ul className="space-y-4">
            {caseStudy.learnings.map((learning, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="text-2xl text-accent">•</span>
                <span className="text-lg">{learning}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="bg-background-light rounded-xl p-8 text-center border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-text mb-4">
            Want to Learn More?
          </h3>
          <p className="text-text-secondary mb-6">
            I'd be happy to discuss this project in more detail, share additional
            insights, or answer any questions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </div>
  );
}
