/**
 * PM Skills data with AI/ML focus
 */

export interface Skill {
  category: string;
  icon: string;
  skills: {
    name: string;
    description: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
  }[];
}

export const skillsData: Skill[] = [
  {
    category: 'AI Product Strategy',
    icon: '🎯',
    skills: [
      {
        name: 'AI Use Case Identification',
        description: 'Identifying high-impact opportunities for AI/ML applications',
        level: 'Expert',
      },
      {
        name: 'Feasibility Analysis',
        description: 'Evaluating technical feasibility vs business value of ML solutions',
        level: 'Expert',
      },
      {
        name: 'ROI Modeling',
        description: 'Building business cases and calculating expected ROI for AI investments',
        level: 'Advanced',
      },
      {
        name: 'AI Roadmapping',
        description: 'Strategic planning for AI product development and rollout',
        level: 'Expert',
      },
    ],
  },
  {
    category: 'ML Product Lifecycle',
    icon: '🔄',
    skills: [
      {
        name: 'Problem Definition',
        description: 'Translating business needs into ML problems with clear success metrics',
        level: 'Expert',
      },
      {
        name: 'Data Strategy',
        description: 'Planning data collection, labeling, and pipeline requirements',
        level: 'Advanced',
      },
      {
        name: 'Model Development Collaboration',
        description: 'Working with data scientists through experimentation and iteration',
        level: 'Expert',
      },
      {
        name: 'Production Deployment',
        description: 'Taking ML models from prototype to production at scale',
        level: 'Advanced',
      },
      {
        name: 'Model Monitoring',
        description: 'Setting up alerts and dashboards for model performance tracking',
        level: 'Advanced',
      },
    ],
  },
  {
    category: 'User-Facing AI Features',
    icon: '✨',
    skills: [
      {
        name: 'Recommendation Systems',
        description: 'Building personalized recommendation experiences',
        level: 'Expert',
      },
      {
        name: 'Personalization',
        description: 'Creating adaptive user experiences powered by ML',
        level: 'Expert',
      },
      {
        name: 'Smart Search',
        description: 'Implementing intelligent search with semantic understanding',
        level: 'Advanced',
      },
      {
        name: 'Predictive Features',
        description: 'Forecasting and predictive analytics for user workflows',
        level: 'Advanced',
      },
    ],
  },
  {
    category: 'Data & Analytics',
    icon: '📊',
    skills: [
      {
        name: 'SQL & Data Analysis',
        description: 'Advanced SQL for product analytics and data exploration',
        level: 'Expert',
      },
      {
        name: 'Python for PMs',
        description: 'Python scripting for data analysis and automation',
        level: 'Advanced',
      },
      {
        name: 'A/B Testing',
        description: 'Designing and analyzing experiments with statistical rigor',
        level: 'Expert',
      },
      {
        name: 'ML Metrics',
        description: 'Understanding precision, recall, F1, AUC-ROC, and business metrics',
        level: 'Advanced',
      },
      {
        name: 'Model Evaluation',
        description: 'Assessing model performance and selecting best approaches',
        level: 'Advanced',
      },
    ],
  },
  {
    category: 'Technical Collaboration',
    icon: '🤝',
    skills: [
      {
        name: 'Working with Data Scientists',
        description: 'Effective collaboration with ML engineering teams',
        level: 'Expert',
      },
      {
        name: 'Understanding Model Architecture',
        description: 'Grasping technical concepts to make informed product decisions',
        level: 'Advanced',
      },
      {
        name: 'API Integration',
        description: 'Designing and implementing ML model APIs',
        level: 'Advanced',
      },
      {
        name: 'MLOps Awareness',
        description: 'Understanding ML infrastructure and deployment pipelines',
        level: 'Intermediate',
      },
    ],
  },
  {
    category: 'AI Ethics & Governance',
    icon: '⚖️',
    skills: [
      {
        name: 'Bias Detection',
        description: 'Identifying and mitigating algorithmic bias',
        level: 'Advanced',
      },
      {
        name: 'Fairness',
        description: 'Ensuring equitable outcomes across user segments',
        level: 'Advanced',
      },
      {
        name: 'Privacy & Security',
        description: 'Handling sensitive data in ML systems responsibly',
        level: 'Advanced',
      },
      {
        name: 'Explainability',
        description: 'Making ML decisions transparent and interpretable',
        level: 'Intermediate',
      },
    ],
  },
  {
    category: 'Stakeholder Management',
    icon: '💼',
    skills: [
      {
        name: 'Translating ML to Business Value',
        description: 'Communicating technical concepts to non-technical stakeholders',
        level: 'Expert',
      },
      {
        name: 'Setting Realistic AI Expectations',
        description: 'Managing stakeholder expectations around ML capabilities',
        level: 'Expert',
      },
      {
        name: 'Cross-functional Leadership',
        description: 'Leading teams across engineering, design, and business',
        level: 'Expert',
      },
    ],
  },
];

/**
 * PM Frameworks used
 */
export const frameworks = [
  'RICE Prioritization',
  'Jobs to be Done (JTBD)',
  'North Star Metric',
  'OKRs',
  'User Story Mapping',
  'Lean Canvas',
  'AI Opportunity Canvas',
  'ML Feasibility Matrix',
  'Model vs Rules Decision Tree',
  'Kano Model',
];

/**
 * Tools & Technologies
 */
export const tools = {
  analytics: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Looker', 'Tableau'],
  dataScience: ['Python', 'SQL', 'Jupyter', 'pandas', 'scikit-learn'],
  productManagement: ['Jira', 'Confluence', 'Figma', 'Miro', 'ProductBoard'],
  aiMl: ['TensorFlow', 'PyTorch', 'MLflow', 'Sagemaker', 'Vertex AI'],
  collaboration: ['Slack', 'Notion', 'Linear', 'GitHub'],
};
