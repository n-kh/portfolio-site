import Hero from '@/components/Hero';
import About from '@/components/About';
import MetricsDashboard from '@/components/MetricsDashboard';
import CaseStudiesAlbum from '@/components/CaseStudiesAlbum';
import SkillsShowcase from '@/components/SkillsShowcase';
import Timeline from '@/components/Timeline';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Album - Case Studies */}
      <CaseStudiesAlbum />

      {/* Metrics Dashboard */}
      <MetricsDashboard />

      {/* Skills Showcase */}
      <SkillsShowcase />

      {/* Experience Timeline */}
      <Timeline />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-indigo to-deep-purple text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            I'm always interested in new opportunities to build AI-powered products
            that make a real impact. Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-neon-cyan text-midnight rounded-lg font-semibold text-lg hover:bg-white transition-colors shadow-lg"
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
