'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SystemMessage from '@/components/SystemMessage';
import {
  EMAIL,
  LINKEDIN_URL,
  SUBSTACK_URL,
  CALENDLY_URL,
  RESUME_PATH,
} from '@/lib/constants';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO(user): wire to Netlify Forms or other backend before launch.
    await new Promise((r) => setTimeout(r, 1500));

    setSubmitting(false);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3500);
  };

  const inventoryItems = [
    {
      icon: '📅',
      label: 'Schedule Audience',
      sub: CALENDLY_URL ? '30 min · book a slot' : 'TODO(user): paste Calendly link',
      href: CALENDLY_URL || '#',
      disabled: !CALENDLY_URL,
      external: true,
    },
    {
      icon: '✉',
      label: 'Send Scroll (Email)',
      sub: EMAIL,
      href: `mailto:${EMAIL}`,
      external: false,
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      sub: 'Connect on the network',
      href: LINKEDIN_URL,
      external: true,
    },
    {
      icon: '📜',
      label: 'Substack',
      sub: 'Read field reports',
      href: SUBSTACK_URL,
      external: true,
    },
    {
      icon: '📄',
      label: 'Stat Sheet',
      sub: 'Download resume PDF',
      href: RESUME_PATH,
      external: false,
      download: true,
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-mono text-cyan-glow text-sm mb-3 tracking-widest">
            [ /SYSTEM/AUDIENCE_REQUEST ]
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-parchment mb-4"
            style={{ textShadow: '0 0 12px rgba(245, 185, 74, 0.4)' }}
          >
            INCOMING TRANSMISSION
          </motion.h1>
          <p className="font-mono text-sm text-parchment-dim max-w-2xl mx-auto">
            The Crawler accepts incoming transmissions. Pick a channel below
            or send a scroll directly.
          </p>
        </div>

        <div className="mb-8">
          <SystemMessage tone="success" prefix="[Status]:" flicker>
            🟢 ACCEPTING NEW QUESTS · response window approximately 48h
          </SystemMessage>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Inventory column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs text-cyan-glow tracking-widest mb-3">
              [ /INVENTORY/CONTACT_ITEMS ]
            </div>

            {inventoryItems.map((item, i) => {
              const className = `block panel-system p-4 transition-colors hover:shadow-glow-system ${
                item.disabled ? 'opacity-50 pointer-events-none' : 'hover:border-system'
              }`;
              const content = (
                <div className="flex items-start gap-4">
                  <span className="text-2xl select-none" aria-hidden>
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-sm text-parchment leading-tight">
                      {item.label}
                    </div>
                    <div className="font-mono text-xs text-parchment-dim mt-1 break-all">
                      {item.sub}
                    </div>
                  </div>
                </div>
              );

              if (item.disabled) {
                return (
                  <div key={i} className={className}>
                    {content}
                  </div>
                );
              }

              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  download={item.download}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className={className}
                >
                  {content}
                </motion.a>
              );
            })}
          </div>

          {/* Form panel */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs text-cyan-glow tracking-widest mb-3">
              [ /COMPOSE/SCROLL ]
            </div>

            <div className="panel-system p-6 md:p-8">
              {sent ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4 select-none" aria-hidden>
                    🎁
                  </div>
                  <h2 className="font-display text-xl md:text-2xl text-success mb-3">
                    SCROLL DELIVERED
                  </h2>
                  <p className="font-mono text-sm text-parchment-dim">
                    Transmission received. The Crawler will respond when the
                    dungeon Wi-Fi cooperates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field
                    label="Sender Designation"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Return Channel"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Quest Title"
                    name="subject"
                    placeholder="What kind of quest is this?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Scroll Body"
                    name="message"
                    placeholder="Tell the Crawler more..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    multiline
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full font-display text-xs sm:text-sm px-6 py-4 bg-system text-stone-deep hover:bg-xp transition-colors disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-glow"
                  >
                    {submitting ? '... TRANSMITTING ...' : '⚔ DISPATCH SCROLL'}
                  </button>

                  <p className="font-mono text-[11px] text-parchment-muted text-center">
                    TODO(user): wire this form to Netlify Forms (or your backend)
                    before launch.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  multiline,
}: FieldProps) {
  const baseClass =
    'w-full bg-stone-deep/80 border border-system/30 px-4 py-3 font-mono text-sm text-parchment placeholder:text-parchment-muted focus:outline-none focus:border-system focus:shadow-glow-system transition-shadow';

  return (
    <label className="block">
      <span className="block font-mono text-xs text-cyan-terminal mb-2 tracking-widest uppercase">
        {label}
        {required && <span className="text-danger ml-1">*</span>}
      </span>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={6}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      )}
    </label>
  );
}
