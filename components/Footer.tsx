'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/nimitkhurana',
      icon: FaLinkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/n-kh',
      icon: FaGithub,
    },
    {
      name: 'Substack',
      href: 'https://substack.com/@nimitkhurana',
      icon: SiSubstack,
    },
    {
      name: 'Email',
      href: 'mailto:nimit.khurana@gmail.com',
      icon: FaEnvelope,
    },
  ];

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-midnight-dark border-t border-electric-indigo/20 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <div className="font-display text-2xl gradient-text mb-4">NK</div>
            <p className="text-text-secondary mb-4">
              Product Manager specializing in AI/ML products and intelligent user
              experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center hover:bg-electric-indigo transition-colors border border-electric-indigo/20"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-neon-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display text-lg mb-4">GET IN TOUCH</h3>
            <div className="space-y-2 text-text-secondary">
              <p>Open to PM opportunities and consulting projects</p>
              <a
                href="mailto:nimit.khurana@gmail.com"
                className="text-neon-cyan hover:text-white transition-colors"
              >
                nimit.khurana@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-electric-indigo/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Nimit Khurana. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
