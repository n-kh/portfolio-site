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

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
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
    <div className="pt-24 pb-20 min-h-screen bg-background-light">
      <div className="container-custom max-w-5xl">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Interested in working together, discussing AI product strategy, or just
            want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact methods */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-text mb-6">
                Contact Methods
              </h2>

              {/* Email */}
              <a
                href="mailto:nimit.khurana@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-background-light transition-colors group mb-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <FaEnvelope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text mb-1">Email</div>
                  <div className="text-sm text-text-secondary">
                    nimit.khurana@gmail.com
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/nimitkhurana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-background-light transition-colors group mb-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <FaLinkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text mb-1">LinkedIn</div>
                  <div className="text-sm text-text-secondary">
                    Connect on LinkedIn
                  </div>
                </div>
              </a>

              {/* Calendar */}
              <a
                href="https://calendly.com/nimit-khurana/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-background-light transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <FaCalendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text mb-1">
                    Schedule a Call
                  </div>
                  <div className="text-sm text-text-secondary">
                    Book a 30-min chat
                  </div>
                </div>
              </a>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Current Status</h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
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
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-text mb-6">
                Send a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <HiCheckCircle className="w-20 h-20 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-text-secondary">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-text mb-2"
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
                      className="w-full px-4 py-3 border border-background-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text mb-2"
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
                      className="w-full px-4 py-3 border border-background-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-text mb-2"
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
                      className="w-full px-4 py-3 border border-background-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-text mb-2"
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
                      className="w-full px-4 py-3 border border-background-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell me more..."
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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
