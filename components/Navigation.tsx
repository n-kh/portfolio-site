'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS, RESUME_PATH } from '@/lib/constants';
import { CURRENT_LEVEL } from '@/data/levels';

/**
 * DCC HUD bar - fixed at top of every page.
 * Format: [ Crawler: NK | Lv 09 | XP ●●●●●●●○○○ ]   nav links   ↓ resume
 */
export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // 7 of 10 XP pips filled to evoke "mid-level"
  const filledPips = 7;
  const totalPips = 10;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-deep/85 backdrop-blur-md border-b border-system/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 md:h-16 font-mono">
          {/* HUD readout - left */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
            <span className="text-system text-sm md:text-base">[</span>
            <span className="hidden sm:inline text-parchment text-xs md:text-sm">
              Crawler:
            </span>
            <span className="text-system text-sm md:text-base font-semibold tracking-wider group-hover:text-xp transition-colors">
              NK
            </span>
            <span className="hidden md:inline text-parchment-dim">|</span>
            <span className="hidden md:inline text-cyan-terminal text-xs">
              Lv {String(CURRENT_LEVEL).padStart(2, '0')}
            </span>
            <span className="hidden lg:inline text-parchment-dim">|</span>
            <span
              className="hidden lg:inline text-xs tracking-wider"
              aria-label={`XP ${filledPips} of ${totalPips}`}
            >
              {Array.from({ length: totalPips }).map((_, i) => (
                <span
                  key={i}
                  className={i < filledPips ? 'text-xp' : 'text-parchment-muted'}
                >
                  ●
                </span>
              ))}
            </span>
            <span className="text-system text-sm md:text-base">]</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                    active
                      ? 'text-system'
                      : 'text-parchment-dim hover:text-parchment'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute left-2 right-2 -bottom-0.5 h-px bg-system shadow-glow-system"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href={RESUME_PATH}
              download
              className="ml-3 px-4 py-2 text-xs uppercase tracking-widest panel-system text-system hover:bg-system hover:text-stone-deep transition-colors"
            >
              ↓ Resume
            </a>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-system text-lg leading-none"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? '✕' : '≡'}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-stone-deep/95 border-t border-system/30 backdrop-blur-md"
        >
          <div className="container-custom py-4 space-y-1 font-mono">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-3 text-sm uppercase tracking-widest ${
                    active
                      ? 'panel-system text-system'
                      : 'text-parchment-dim hover:text-parchment'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={RESUME_PATH}
              download
              className="block px-3 py-3 text-sm uppercase tracking-widest panel-cyan text-cyan-terminal text-center"
            >
              ↓ Download Stat Sheet
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
