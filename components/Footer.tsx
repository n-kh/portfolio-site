import Link from 'next/link';
import {
  SUBSTACK_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
  PHONE,
  LOCATION,
  NAV_LINKS,
} from '@/lib/constants';

/**
 * DCC system signature - the "credits roll" at the bottom of every page.
 * Server component, no interactivity.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const externalLinks = [
    { label: 'LinkedIn', href: LINKEDIN_URL, icon: '🔗' },
    { label: 'Substack', href: SUBSTACK_URL, icon: '📜' },
    { label: 'GitHub', href: GITHUB_URL, icon: '⌬' },
    { label: 'Email', href: `mailto:${EMAIL}`, icon: '✉' },
  ];

  return (
    <footer className="relative z-10 border-t border-system/25 bg-stone-deep/70 mt-12">
      <div className="container-custom py-12">
        {/* System signature */}
        <div className="font-mono text-xs text-cyan-terminal mb-6 tracking-wider">
          <span className="text-cyan-glow">[/SYSTEM/SIGNATURE]</span>
          {' '}— end of crawler readout
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Identity panel */}
          <div className="panel-system p-5">
            <div className="font-display text-base text-system mb-3">
              CRAWLER NK
            </div>
            <p className="font-mono text-xs text-parchment-dim leading-relaxed mb-4">
              Nimit Khurana — Senior PM @ Salesforce. Lv 09. 14+ years.
              Active on the surface dungeon. Accepting transmissions.
            </p>
            <div className="flex flex-wrap gap-2">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs px-2.5 py-1 panel-cyan text-cyan-terminal hover:bg-cyan-terminal hover:text-stone-deep transition-colors"
                  aria-label={link.label}
                >
                  <span className="mr-1" aria-hidden>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div className="panel-system p-5">
            <div className="font-display text-base text-system mb-3">
              QUICK ROUTES
            </div>
            <ul className="space-y-2 font-mono text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-parchment-dim hover:text-system transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parchment-dim hover:text-system transition-colors"
                >
                  → Substack (external)
                </a>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div className="panel-system p-5">
            <div className="font-display text-base text-system mb-3">
              STATUS
            </div>
            <ul className="space-y-2 font-mono text-xs text-parchment-dim">
              <li>🟢 Accepting new quests</li>
              <li>📡 Response window: ~48h</li>
              <li>📍 {LOCATION}</li>
              <li>📱 {PHONE}</li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-cyan-terminal hover:text-cyan-glow transition-colors break-all"
                >
                  ✉ {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-6 border-t border-system/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 font-mono text-xs text-parchment-muted">
          <p>
            © {currentYear} Nimit Khurana. All loot rights reserved.
          </p>
          <p>
            Built in the dungeon with Next.js, Framer Motion, and an
            unreasonable amount of caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
}
