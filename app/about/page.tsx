import { Metadata } from 'next';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'About - Nimit Khurana',
  description: 'Learn more about my background, approach to product management, and passion for building AI-powered products.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-midnight">
      <div className="container-custom max-w-4xl">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-text-primary mb-6">
            ABOUT ME
          </h1>
          <p className="text-xl text-text-secondary">
            My journey in building AI-powered products that users love
          </p>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-charcoal rounded-xl p-8 md:p-12 border border-electric-indigo/20">
            <h2 className="font-display text-3xl text-text-primary mb-6">
              Hi, I'm Nimit 👋
            </h2>
            <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
              <p>
                I'm a Product Manager specializing in AI/ML products with a passion
                for building intelligent systems that solve real user problems. Over
                the past 8+ years, I've led products that have served millions of
                users and generated tens of millions in revenue.
              </p>
              <p>
                What excites me most about product management is the intersection of
                technology, user needs, and business value—especially when it comes
                to AI/ML. I believe the best AI products are those where the
                intelligence is invisible; users just experience something that works
                better, faster, or more intuitively.
              </p>
            </div>
          </section>

          {/* My Approach */}
          <section className="bg-charcoal rounded-xl p-8 md:p-12 border border-electric-indigo/20">
            <h2 className="font-display text-3xl text-text-primary mb-6">
              MY PRODUCT PHILOSOPHY
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  User-Centric AI
                </h3>
                <p className="text-text-secondary">
                  AI should enhance user experiences, not complicate them. I focus
                  on building ML features that genuinely solve user problems rather
                  than adding AI for the sake of it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Data-Driven Decisions
                </h3>
                <p className="text-text-secondary">
                  I combine quantitative metrics with qualitative insights. A/B
                  testing, user research, and analytics inform every product
                  decision, but I never lose sight of the human element.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <span className="text-2xl">🤝</span>
                  Technical Collaboration
                </h3>
                <p className="text-text-secondary">
                  I work closely with data scientists and ML engineers, speaking
                  their language while translating technical complexity into
                  business value for stakeholders. My technical background enables
                  me to contribute meaningfully to architectural discussions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Iterative Execution
                </h3>
                <p className="text-text-secondary">
                  Perfect is the enemy of good. I believe in shipping MVPs quickly,
                  learning from real user behavior, and iterating based on data.
                  Every product I've built has improved significantly after launch
                  through continuous refinement.
                </p>
              </div>
            </div>
          </section>

          {/* Background */}
          <section className="bg-charcoal rounded-xl p-8 md:p-12 border border-electric-indigo/20">
            <h2 className="font-display text-3xl text-text-primary mb-6">BACKGROUND</h2>
            <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
              <p>
                My product management career began after working as a software
                engineer, which gave me deep technical fluency. This background has
                been invaluable in building AI/ML products—I can evaluate model
                performance, understand technical tradeoffs, and work effectively
                with engineering teams.
              </p>
              <p>
                I've had the opportunity to work across different company stages and
                contexts:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-text-primary">Startups:</strong> Built 0-1 products, defined product
                  strategy, wore multiple hats
                </li>
                <li>
                  <strong className="text-text-primary">Growth companies:</strong> Scaled products from thousands
                  to millions of users
                </li>
                <li>
                  <strong className="text-text-primary">Enterprise:</strong> Worked with Fortune 500 clients,
                  navigated complex stakeholder landscapes
                </li>
              </ul>
              <p>
                This diverse experience has taught me how to adapt my approach to
                different organizational contexts while maintaining a consistent
                focus on user value.
              </p>
            </div>
          </section>

          {/* What I'm Looking For */}
          <section className="bg-gradient-to-br from-electric-indigo to-deep-purple text-white rounded-xl p-8 md:p-12">
            <h2 className="font-display text-3xl mb-6">WHAT I'M LOOKING FOR</h2>
            <div className="space-y-4 text-lg">
              <p>
                I'm interested in opportunities where I can leverage my AI/ML
                expertise to build products that make a meaningful impact. Ideal
                roles include:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-90">
                <li>Senior/Lead PM roles focused on AI/ML products</li>
                <li>
                  Technical PM positions working on recommendation systems,
                  personalization, or intelligent automation
                </li>
                <li>
                  Product leadership roles where I can mentor other PMs and shape
                  product strategy
                </li>
                <li>
                  Opportunities to build 0-1 AI products in domains like healthcare,
                  education, or productivity
                </li>
              </ul>
              <p className="mt-6">
                I thrive in environments that value user research, data-driven
                decision making, and close collaboration between product, engineering,
                and design.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-charcoal rounded-xl p-8 md:p-12 border border-electric-indigo/20 text-center">
            <h2 className="font-display text-3xl text-text-primary mb-4">LET'S CONNECT</h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Interested in working together or want to discuss AI product strategy?
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-electric-indigo text-white rounded-lg font-semibold hover:bg-deep-purple transition-colors shadow-md"
              >
                Get In Touch
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-transparent text-neon-cyan rounded-lg font-semibold border-2 border-neon-cyan hover:bg-neon-cyan/10 transition-colors flex items-center gap-2"
              >
                <HiDownload className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
