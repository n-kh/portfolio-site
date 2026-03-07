/**
 * Professional experience timeline data
 */

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  impact: {
    metric: string;
    value: string;
  }[];
}

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company',
    role: 'Senior Product Manager - AI/ML',
    period: '2021 - Present',
    location: 'San Francisco, CA',
    description: 'Leading AI product strategy and development for recommendation systems serving 5M+ users.',
    achievements: [
      'Launched personalized recommendation engine increasing user engagement by 45%',
      'Built ML-powered search functionality improving search success rate by 60%',
      'Led cross-functional team of 12 engineers, data scientists, and designers',
      'Established ML model monitoring framework reducing production incidents by 70%',
      'Drove $20M in incremental revenue through AI-powered personalization',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'AWS Sagemaker',
      'MLflow',
      'SQL',
      'A/B Testing',
      'Looker',
    ],
    impact: [
      { metric: 'User Engagement', value: '+45%' },
      { metric: 'Search Success Rate', value: '+60%' },
      { metric: 'Revenue Impact', value: '$20M' },
    ],
  },
  {
    id: 'exp-2',
    company: 'AI Startup',
    role: 'Product Manager',
    period: '2019 - 2021',
    location: 'New York, NY',
    description: 'Owned end-to-end product development for B2B SaaS platform with intelligent automation.',
    achievements: [
      'Launched 0-1 product achieving $5M ARR in first year',
      'Built intelligent document processing system handling 1M+ documents monthly',
      'Reduced customer onboarding time by 80% through ML-powered automation',
      'Conducted user research with 100+ customers to validate product-market fit',
      'Managed product roadmap and prioritization for team of 8',
    ],
    technologies: [
      'NLP',
      'PyTorch',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
      'React',
      'FastAPI',
    ],
    impact: [
      { metric: 'ARR', value: '$5M' },
      { metric: 'Documents Processed', value: '1M+/mo' },
      { metric: 'Onboarding Time', value: '-80%' },
    ],
  },
  {
    id: 'exp-3',
    company: 'Enterprise Software Co',
    role: 'Associate Product Manager',
    period: '2017 - 2019',
    location: 'Seattle, WA',
    description: 'Contributed to analytics platform development and data visualization features.',
    achievements: [
      'Shipped 6 major features increasing daily active users by 30%',
      'Led A/B testing program resulting in 25% improvement in conversion rates',
      'Collaborated with data science team on predictive analytics features',
      'Created product analytics framework adopted across the organization',
      'Worked with Fortune 500 clients to gather requirements and feedback',
    ],
    technologies: [
      'Tableau',
      'SQL',
      'Google Analytics',
      'Mixpanel',
      'Python',
      'Jira',
    ],
    impact: [
      { metric: 'DAU Growth', value: '+30%' },
      { metric: 'Conversion Rate', value: '+25%' },
      { metric: 'Enterprise Clients', value: '50+' },
    ],
  },
];
