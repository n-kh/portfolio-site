/**
 * Career impact metrics for the dashboard
 */

export interface Metric {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export const metricsData: Metric[] = [
  {
    label: 'Users Impacted',
    value: '10M+',
    description: 'Total users across products launched',
    icon: '👥',
  },
  {
    label: 'Products Launched',
    value: '15+',
    description: 'AI/ML features and products shipped to production',
    icon: '🚀',
  },
  {
    label: 'Revenue Impact',
    value: '$50M+',
    description: 'Generated through product initiatives',
    icon: '💰',
  },
  {
    label: 'Teams Led',
    value: '8',
    description: 'Cross-functional teams managed',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    label: 'ML Models Deployed',
    value: '12',
    description: 'Machine learning models taken to production',
    icon: '🤖',
  },
  {
    label: 'Years Experience',
    value: '8+',
    description: 'Years in product management',
    icon: '⏱️',
  },
];
