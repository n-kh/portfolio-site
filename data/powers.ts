/**
 * Powers - the recruiter-aligned skills the Crawler has acquired.
 * Each power has a current rank (1-10) shown as pip indicators.
 *
 * TODO(user): adjust currentRank values to your actual self-assessment.
 */

export type PowerCategory = 'technical' | 'leadership' | 'craft' | 'communication';

export interface Power {
  id: string;
  name: string;
  recruiterTagline: string;
  category: PowerCategory;
  icon: string;
  currentRank: number;
  description: string;
}

export const MAX_RANK = 10;

export const powers: Power[] = [
  {
    id: 'ai-proficiency',
    name: 'AI Proficiency',
    recruiterTagline: 'AI/ML product strategy, LLMs, model evaluation',
    category: 'technical',
    icon: '🤖',
    currentRank: 9,
    description:
      'Knows when to use ML vs rules vs LLMs. Speaks fluent data-scientist. Has shipped models to production and lived to tell.',
  },
  {
    id: 'product-strategy',
    name: 'Product Strategy',
    recruiterTagline: 'Vision, roadmapping, prioritization, OKRs',
    category: 'leadership',
    icon: '🎯',
    currentRank: 9,
    description:
      'Translates messy reality into a roadmap a CEO can read in 30 seconds. RICE, JTBD, North Star — uses them, doesn\'t worship them.',
  },
  {
    id: 'team-management',
    name: 'Team Management',
    recruiterTagline: 'Leading cross-functional teams, mentoring, hiring',
    category: 'leadership',
    icon: '👥',
    currentRank: 8,
    description:
      'Has unblocked engineers at 11pm and given hard feedback at 11am. Believes a calm Slack message beats a panicked meeting.',
  },
  {
    id: 'ux-design',
    name: 'UX Design',
    recruiterTagline: 'User research, prototyping, design partnership',
    category: 'craft',
    icon: '🎨',
    currentRank: 8,
    description:
      'Will draw the wireframe themselves if it ships the meeting faster. Knows when to defer to a real designer (often).',
  },
  {
    id: 'stakeholder-comms',
    name: 'Stakeholder Communication',
    recruiterTagline: 'Exec narratives, executive presence, alignment',
    category: 'communication',
    icon: '🗣️',
    currentRank: 9,
    description:
      'Can turn a 40-slide deck into one paragraph. Can also turn that paragraph back into a 40-slide deck if your VP demands it.',
  },
  {
    id: 'data-literacy',
    name: 'Data Literacy',
    recruiterTagline: 'SQL, A/B testing, analytics, ML metrics',
    category: 'technical',
    icon: '📊',
    currentRank: 8,
    description:
      'Writes their own SQL. Reads their own dashboards. Asks the data scientist hard questions before the EM does.',
  },
  {
    id: 'technical-collab',
    name: 'Technical Collaboration',
    recruiterTagline: 'API design, system thinking, eng partnership',
    category: 'technical',
    icon: '🤝',
    currentRank: 8,
    description:
      'Reads PRs, draws sequence diagrams, and never says "just add a button" without checking what\'s underneath.',
  },
  {
    id: 'customer-empathy',
    name: 'Customer Empathy',
    recruiterTagline: 'User research, customer interviews, voice of customer',
    category: 'craft',
    icon: '💜',
    currentRank: 9,
    description:
      'Has sat through 200+ user calls without flinching. Believes "the customer is always right" is wrong, but listening to them never is.',
  },
];

export const powersById: Record<string, Power> = Object.fromEntries(
  powers.map((p) => [p.id, p]),
);

export const categoryLabel: Record<PowerCategory, string> = {
  technical: 'Technical',
  leadership: 'Leadership',
  craft: 'Craft',
  communication: 'Communication',
};
