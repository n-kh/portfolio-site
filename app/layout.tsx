import type { Metadata } from 'next';
import { Press_Start_2P, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ProgressiveDisclosureProvider } from '@/components/ProgressiveDisclosureProvider';
import DungeonBackground from '@/components/DungeonBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nimit Khurana | Sr. Product Manager @ Salesforce — Lv 09',
  description:
    'Senior Product Manager at Salesforce (Knowledge Base Management, Service Cloud). 14+ years across Salesforce, Amazon, NestAway, PwC, and TATA Motors. AI grounding, GenAI, and customer-centric product strategy.',
  keywords: [
    'Nimit Khurana',
    'Senior Product Manager',
    'Salesforce',
    'Service Cloud',
    'Knowledge Base Management',
    'AI Product Manager',
    'Amazon',
    'NestAway',
    'GenAI',
  ],
  openGraph: {
    title: 'Nimit Khurana | Sr. PM @ Salesforce — Lv 09 Crawler',
    description:
      '14+ years shipping products. Currently leading Knowledge Base Management at Salesforce. A Crawler\'s leveling log; audience requests accepted.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nimit Khurana | Sr. PM @ Salesforce — Lv 09',
    description:
      'A Crawler\'s leveling log: Salesforce → Amazon → NestAway → PwC → TATA Motors. Audience requests accepted.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pressStart.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body">
        <ProgressiveDisclosureProvider>
          <DungeonBackground />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </ProgressiveDisclosureProvider>
      </body>
    </html>
  );
}
