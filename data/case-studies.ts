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
  {
    id: 'from-ghost-town-to-gold',
    track: 2,
    title: 'From Ghost Town to Gold Mine',
    subtitle: 'How customer listening transformed Knowledge adoption from 15% to 78%',
    category: 'Product Strategy',
    tags: ['Knowledge Management', 'Customer Success', 'AI Adoption', 'Salesforce'],
    thumbnail: '/images/case-studies/track-02.jpg',

    context: {
      product: 'Salesforce Knowledge Intelligence',
      company: 'Enterprise SaaS',
      role: 'Product Manager & Strategy Lead',
      timeline: '18 months',
      team: 'Product, Customer Success, Engineering',
      note: 'Led Knowledge Intelligence adoption strategy through comprehensive customer listening program.',
    },

    problem: `Salesforce Knowledge Intelligence was a ghost town—powerful AI capabilities existed, but adoption languished at just 15% of eligible customers. Support teams weren't using it. Sales teams ignored it. Even when customers had the product, they couldn't find basic answers to common questions.

The frustration was palpable: executives saw lost productivity and upsell opportunities. Support teams struggled with repetitive questions. Customers complained about slow response times despite having an AI knowledge tool at their fingertips.

The core issue wasn't the product. It was that nobody understood how to use it, why they should use it, or what problems it actually solved for their day-to-day work.`,

    approach: `Launched a customer-centric discovery program:

**Deep Customer Interviews:** Conducted 40+ interviews across 12 different industries, talking to support managers, agents, and knowledge administrators about their workflows, frustrations, and existing knowledge systems.

**Observational Research:** Shadowed support teams in real environments—watched how they actually handled customer questions, when they got stuck, and what tools they reached for.

**Usage Pattern Analysis:** Deep-dived into product telemetry to understand not just adoption numbers, but how the 15% who *were* using it differed from the 85% who weren't.

**Customer Advisory Councils:** Convened quarterly panels of power users to validate hypotheses and test solutions before broad rollout.

**Competitive Landscape:** Analyzed how customers were solving knowledge problems with alternative tools and why they preferred those solutions.`,

    solution: `Transformed Knowledge Intelligence adoption through three strategic pillars:

**1. Simplify Onboarding:** Created guided workflows that adapted to customer maturity level. Reduced time-to-first-knowledge-use from 3 weeks to 2 days through intelligent prompts and contextual help.

**2. Embed into Workflows:** Integrated Knowledge Intelligence directly into existing support tools (ticketing systems, chat platforms) rather than expecting users to visit a separate interface. Made it impossible not to use.

**3. Measurable ROI:** Built dashboards showing support teams exactly how much time they were saving and how Knowledge Intelligence was improving their metrics. Tied adoption to their KPIs.

**4. Role-Based Enablement:** Customized training and prompts for different personas—support agents needed different help than knowledge administrators needed different help than managers.

**5. Community & Social Proof:** Launched internal community showcasing success stories from early adopters, creating peer-to-peer learning and reducing adoption friction.`,

    impact: [
      {
        metric: 'Adoption Rate',
        value: '15% → 78%',
        description: 'Growth in active Knowledge Intelligence usage among eligible customers',
      },
      {
        metric: 'Support Efficiency',
        value: '+42%',
        description: 'Average reduction in time-to-resolution for common issues',
      },
      {
        metric: 'First-Contact Resolution',
        value: '+31%',
        description: 'Increase in issues resolved on first interaction using AI-powered knowledge',
      },
      {
        metric: 'Customer Satisfaction',
        value: '+27%',
        description: 'Improvement in support satisfaction scores at adopting accounts',
      },
      {
        metric: 'Knowledge Reuse',
        value: '8.3x',
        description: 'Average number of times each knowledge article was consumed',
      },
      {
        metric: 'Onboarding Speed',
        value: '-85%',
        description: 'Time to first knowledge use reduced from 3 weeks to 2 days',
      },
    ],

    learnings: [
      '**Listening reveals the gap between features and outcomes.** We thought adoption was failing because the AI wasn\'t good enough. It was actually failing because customers didn\'t know it existed, didn\'t understand how to use it, and couldn\'t find it in their workflows. No amount of feature work fixes that—only listening does.',
      '**Embed solutions into existing workflows.** People don\'t adopt new tools. They adopt new ways of doing existing tasks. By putting Knowledge Intelligence *into* the support tools customers already used, we eliminated friction and made adoption inevitable.',
      '**Make impact visible and personal.** Support agents care about resolution time and satisfaction scores—not adoption rates or AI capabilities. When we showed them their personal metrics improving, adoption soared. Connect features to what people actually care about.',
      '**Different personas need different approaches.** Support agents needed quick-start simplicity. Administrators needed governance features. Managers needed visibility dashboards. One-size-fits-all enablement doesn\'t work—meet people where they are.',
    ],

    themeConnection: 'Customer listening transformed a powerful but adopted feature into a revenue driver by understanding what customers actually needed to succeed—not what we assumed they needed.',

    difficultyRating: 5,
    xpReward: 5000,
    achievementId: 'the-listener',
  },
];
