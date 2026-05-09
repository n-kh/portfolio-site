'use client';

import { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaCalendar } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-midnight">
      <div className="container-custom max-w-5xl">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-text-primary mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Interested in working together, discussing AI product strategy, or just
            want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact methods */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-charcoal rounded-xl p-6 border border-electric-indigo/20">
              <h2 className="font-display text-2xl text-text-primary mb-6">
                CONTACT METHODS
              </h2>

              <a
                href="mailto:nimit.khurana@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-midnight transition-colors group mb-4"
              >
                <div className="w-12 h-12 bg-electric-indigo/10 rounded-lg flex items-center justify-center group-hover:bg-electric-indigo/20 transition-colors flex-shrink-0">
                  <FaEnvelope className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary mb-1">Email</div>
                  <div className="text-sm text-text-secondary">
                    nimit.khurana@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/nimitkhurana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-midnight transition-colors group mb-4"
              >
                <div className="w-12 h-12 bg-electric-indigo/10 rounded-lg flex items-center justify-center group-hover:bg-electric-indigo/20 transition-colors flex-shrink-0">
                  <FaLinkedin className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary mb-1">LinkedIn</div>
                  <div className="text-sm text-text-secondary">
                    Connect on LinkedIn
                  </div>
                </div>
              </a>

              <a
                href="https://calendly.com/nimit-khurana/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-midnight transition-colors group"
              >
                <div className="w-12 h-12 bg-electric-indigo/10 rounded-lg flex items-center justify-center group-hover:bg-electric-indigo/20 transition-colors flex-shrink-0">
                  <FaCalendar className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary mb-1">
                    Schedule a Call
                  </div>
                  <div className="text-sm text-text-secondary">
                    Book a 30-min chat
                  </div>
                </div>
              </a>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-electric-indigo to-deep-purple text-white rounded-xl p-6">
              <h3 className="font-display text-xl mb-3">CURRENT STATUS</h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse" />
                <span className="font-semibold">Open to Opportunities</span>
              </div>
              <p className="text-sm opacity-90">
                Currently exploring PM roles focused on AI/ML products and consulting
                projects.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-charcoal rounded-xl p-8 border border-electric-indigo/20">
              <h2 className="font-display text-2xl text-text-primary mb-6">
                SEND A MESSAGE
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <HiCheckCircle className="w-20 h-20 text-neon-cyan mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-text-primary mb-2">
                    MESSAGE SENT!
                  </h3>
                  <p className="text-text-secondary">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-midnight border border-electric-indigo/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-midnight border border-electric-indigo/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-midnight border border-electric-indigo/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-midnight border border-electric-indigo/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent resize-none"
                      placeholder="Tell me more..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-electric-indigo text-white rounded-lg font-semibold text-lg hover:bg-deep-purple transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed animate-glow-pulse"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
