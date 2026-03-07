/**
 * Product case studies data (teasers; full content on Substack)
 */

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  thumbnail: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  substackUrl: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'AI-Powered Recommendation Engine',
    subtitle: 'Increasing user engagement by 45% through personalized recommendations',
    category: 'AI/ML',
    tags: ['Recommendation Systems', 'Personalization', 'B2C', 'ML'],
    thumbnail: '/images/case-studies/recommendations-thumb.jpg',
    impact: [
      {
        metric: 'Click-Through Rate',
        value: '+187%',
        description: 'From 2.3% to 6.6% on recommended items',
      },
      {
        metric: 'User Engagement',
        value: '+45%',
        description: 'Average session duration increased from 8 to 11.6 minutes',
      },
      {
        metric: 'Conversion Rate',
        value: '+32%',
        description: 'Users who engaged with recommendations converted at 32% higher rate',
      },
      {
        metric: 'Revenue Impact',
        value: '$12M',
        description: 'Incremental annual revenue from personalized recommendations',
      },
      {
        metric: 'User Satisfaction',
        value: '+28%',
        description: 'NPS score improved from 42 to 54',
      },
    ],
    substackUrl: 'https://substack.com/@nimitkhurana',
  },
  {
    id: 'cs-2',
    title: 'Intelligent Search with NLP',
    subtitle: 'Improving search success rate from 45% to 78% using semantic understanding',
    category: 'AI/ML',
    tags: ['NLP', 'Search', 'Semantic Search', 'ML'],
    thumbnail: '/images/case-studies/search-thumb.jpg',
    impact: [
      {
        metric: 'Search Success Rate',
        value: '+73%',
        description: 'From 45% to 78% of searches resulted in user action',
      },
      {
        metric: 'Zero Results',
        value: '-82%',
        description: 'Reduced from 55% to 10% of searches',
      },
      {
        metric: 'Time to Find',
        value: '-57%',
        description: 'Average search time dropped from 4.2 to 1.8 minutes',
      },
      {
        metric: 'Support Tickets',
        value: '-65%',
        description: 'Search-related support requests decreased significantly',
      },
      {
        metric: 'Revenue',
        value: '+$8M',
        description: 'Annual impact from improved search conversions',
      },
    ],
    substackUrl: 'https://substack.com/@nimitkhurana',
  },
  {
    id: 'cs-3',
    title: 'ML-Powered Document Processing',
    subtitle: 'Automating data extraction from 1M+ documents monthly',
    category: 'B2B SaaS',
    tags: ['NLP', 'OCR', 'Automation', 'Enterprise'],
    thumbnail: '/images/case-studies/document-thumb.jpg',
    impact: [
      {
        metric: 'Processing Time',
        value: '-92%',
        description: 'From 5 minutes to 24 seconds per document',
      },
      {
        metric: 'Accuracy',
        value: '96%',
        description: 'Improved from 88% (manual) to 96% (automated)',
      },
      {
        metric: 'Cost Savings',
        value: '$8M',
        description: 'Saved across customer base in first year',
      },
      {
        metric: 'Volume Handled',
        value: '1M+',
        description: 'Documents processed monthly',
      },
      {
        metric: 'ARR',
        value: '$5M',
        description: 'Product revenue in first 12 months',
      },
    ],
    substackUrl: 'https://substack.com/@nimitkhurana',
  },
];
