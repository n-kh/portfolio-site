import type { Metadata } from 'next';
import { Righteous, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ProgressiveDisclosureProvider } from '@/components/ProgressiveDisclosureProvider';
import GeometricBackground from '@/components/GeometricBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const righteous = Righteous({
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
  title: 'Nimit Khurana | AI Product Manager & UX Visionary',
  description: 'AI Product Manager who turns customer insights into transformative products. 78% adoption, $50M+ impact, multi-modal AI expertise.',
  keywords: ['AI Product Manager', 'ML Product Management', 'AI UX Design', 'Customer-Centric AI'],
  openGraph: {
    title: 'Nimit Khurana | AI Product Manager',
    description: 'Listening Transforms Everything - AI PM building products that adapt to humans',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nimit Khurana | AI Product Manager',
    description: 'Building AI products through deep customer understanding',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${righteous.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body">
        <ProgressiveDisclosureProvider>
          <GeometricBackground />
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
