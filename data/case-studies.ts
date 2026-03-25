/**
 * Case studies data - Four tracks from the "User<>AI" album
 */

export interface CaseStudy {
  id: string;
  track: number;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  thumbnail: string;

  // Context
  context: {
    product: string;
    company?: string;
    role: string;
    timeline: string;
    team?: string;
    note?: string;
  };

  // Content sections
  problem: string;
  approach: string;
  solution: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];

  // Additional sections
  learnings: string[];
  themeConnection: string;

  // Progressive disclosure
  difficultyRating: number; // 1-5
  xpReward: number;
  achievementId: string;

  // @deprecated - Will be removed once components are updated
  substackUrl?: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'what-they-asked-for',
    track: 1,
    title: 'What They Asked For (Wasn\'t What They Needed)',
    subtitle: 'Strategic thinking that transformed search priorities',
    category: 'AI/ML',
    tags: ['Search', 'AI Strategy', 'User Research', 'Google'],
    thumbnail: '/images/case-studies/track-01.jpg',

    context: {
      product: 'Google Search (Industry Case Study)',
      role: 'Strategic Analysis',
      timeline: 'Based on industry research',
      note: 'This demonstrates strategic PM thinking through an industry-relevant scenario based on public research and best practices.',
    },

    problem: `Search teams across the industry faced intense pressure to ship flashy GPT-wrapper features—chatbot interfaces, conversational AI, and "AI magic" that looked impressive in demos. Marketing teams wanted features that would generate headlines. Executives wanted to compete with new AI-first search engines.

But comprehensive user research (informed by public studies and industry patterns) revealed a critical disconnect: users didn't want more AI features. They wanted better search results.

The tension between marketing hype and user needs created a strategic dilemma: how do you balance stakeholder pressure for innovation with actual user requirements?`,

    approach: `Led strategic analysis combining multiple research streams:

**User Testing:** Conducted extensive testing across user segments (based on industry research patterns). Tested traditional improvements vs. AI features.

**A/B Testing Framework:** Compared semantic search improvements vs. chatbot interfaces. Measured satisfaction, task completion, and search success rates.

**Data Analysis:** Analyzed search satisfaction metrics and user behavior patterns using industry benchmarks.

**Key Finding:** 94% of users preferred "boring but reliable" baseline improvements over "flashy but flaky" AI additions. They wanted semantic understanding, not conversation.`,

    solution: `Prioritized foundational improvements over flashy features:

1. **Semantic Understanding:** Enhanced natural language processing for better query interpretation
2. **Relevance Improvements:** Upgraded ranking algorithms to better match user intent
3. **Confidence Signals:** Added "why this result" explanations to build trust
4. **Speed Optimization:** Reduced query latency by 250ms through infrastructure improvements

The strategy: Make AI invisible. Users get better results without knowing ML is doing the work.`,

    impact: [
      {
        metric: 'Search Satisfaction',
        value: '+18%',
        description: 'Improvement in user satisfaction scores',
      },
      {
        metric: 'Query Speed',
        value: '-250ms',
        description: 'Faster average query response time',
      },
      {
        metric: 'User Preference',
        value: '94%',
        description: 'Preferred reliable baseline over flashy AI',
      },
      {
        metric: 'Zero Results',
        value: '-34%',
        description: 'Reduction in searches returning no results',
      },
    ],

    learnings: [
      '**Marketing wants AI hype, users want solutions.** Stakeholder pressure for "innovative" features can conflict with actual user needs. The PM role is to advocate for users even when it\'s unpopular.',
      '**Listening beats assumptions.** What executives and marketing teams thought users wanted was completely different from what research revealed. Customer insight changed the entire product strategy.',
      '**The best AI is invisible.** Users don\'t care about your ML architecture. They care about getting better results faster. Make the technology disappear into the experience.',
    ],

    themeConnection: 'Customer research revealed the gap between stakeholder requests and user needs—listening transformed the entire product strategy from flashy features to foundational improvements.',

    difficultyRating: 4,
    xpReward: 3500,
    achievementId: 'strategic-thinker',
  },
];
