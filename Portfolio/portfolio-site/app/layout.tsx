import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nimit Khurana - AI Product Manager',
  description: 'Product Manager specializing in AI/ML products, recommendation systems, and intelligent user experiences. Led products serving 10M+ users.',
  keywords: [
    'Product Manager',
    'AI Product Manager',
    'ML Product Manager',
    'AI/ML',
    'Recommendation Systems',
    'Machine Learning',
    'Product Management',
    'Nimit Khurana',
  ],
  authors: [{ name: 'Nimit Khurana' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nimitekhurana.com',
    title: 'Nimit Khurana - AI Product Manager',
    description: 'Product Manager specializing in AI/ML products, recommendation systems, and intelligent user experiences.',
    siteName: 'Nimit Khurana Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nimit Khurana - AI Product Manager',
    description: 'Product Manager specializing in AI/ML products, recommendation systems, and intelligent user experiences.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
