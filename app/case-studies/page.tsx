import { Metadata } from 'next';
import StubCaseStudies from '@/components/StubCaseStudies';

export const metadata: Metadata = {
  title: 'Dispatches | Crawler NK',
  description:
    'Long-form case studies and field notes from the dungeon. Hosted on Substack.',
};

export default function CaseStudiesPage() {
  return <StubCaseStudies />;
}
