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
  {
    id: 'multi-dimensional',
    track: 3,
    title: 'Multi-Dimensional',
    subtitle: 'AI that works across docs, videos, audio—seamlessly',
    category: 'AI/ML',
    tags: ['Multi-modal AI', 'UX Design', 'Search', 'Salesforce'],
    thumbnail: '/images/case-studies/track-03.jpg',

    context: {
      product: 'Knowledge Intelligence',
      company: 'Salesforce',
      role: 'Senior Product Manager',
      timeline: '2023-2024',
      team: '15 engineers, 3 PMs, ML team collaboration',
      note: 'Metrics are approximate/aggregated for confidentiality',
    },

    problem: `Customers had knowledge scattered across formats—documents, PDFs, videos, audio recordings, images. Manual search across these content types was a nightmare. Traditional search only handled text well.

Users lost context switching between different systems to find information. They'd search docs in one place, videos in another, audio transcripts somewhere else.

The challenge: make AI work across all content types seamlessly, without overwhelming users with mixed-media results.`,

    approach: `**Technical Architecture:**
Built unified ingestion pipeline for all content types with separate processors (OCR, speech-to-text, video frame analysis) feeding into a unified vector space for semantic search.

**Hybrid Search Strategy:**
- Keyword + semantic retrieval across all formats
- Agentic system decides which sources to surface
- Reasoning transparency (explains why results were chosen)

**UX Challenges Solved:**

*1. Mixed-Media Results Display*
- Problem: How to show videos, docs, images together?
- Solution: Contextual result cards that adapt to content type
- Preview capabilities inline (thumbnails, snippets, duration)

*2. Cross-Modal Navigation*
- Problem: User finds video, wants related docs
- Solution: Semantic "related content" across formats
- Not just folder structure—actual content relationships

*3. Format Preferences*
- Problem: Some users prefer text, others video
- Solution: Configurable result weighting
- System learns preferences over time`,

    solution: `**1. Unified Ingestion System**
- All content types flow through single pipeline
- Format-specific processors extract meaning
- Unified vector embeddings for search

**2. Adaptive Result Cards**
- Documents: Show title, snippet, page count
- Videos: Thumbnail, duration, transcript preview
- Audio: Waveform, speaker info, transcript
- Images: Preview with OCR-extracted text

**3. Cross-Modal Recommendations**
"Related content" that actually understands relationships across formats, not just file locations.

**4. User Preference Learning**
System adapts to whether user prefers video walkthroughs vs. written docs.`,

    impact: [
      {
        metric: 'Extraction Accuracy',
        value: '96%',
        description: 'Accuracy on content extraction across all formats',
      },
      {
        metric: 'Processing Speed',
        value: '24 sec',
        description: 'Average processing time (vs. 5 min manual)',
      },
      {
        metric: 'Content Upload',
        value: '+3.2x',
        description: 'More content types uploaded after multi-modal launch',
      },
      {
        metric: 'Support Tickets',
        value: '-47%',
        description: 'Reduction in "can\'t find" support requests',
      },
      {
        metric: 'Monthly Volume',
        value: '1M+',
        description: 'Documents processed monthly across all formats',
      },
    ],

    learnings: [
      '**Multi-modal isn\'t a technology showcase—it\'s meeting users where their content lives.** Don\'t force users to adapt their content to your system. Make your system understand their content.',
      '**Context switching is invisible friction.** Users didn\'t articulate "I hate switching between systems" but usage patterns showed it. Eliminating mode switches drove adoption.',
      '**Preview matters more than you think.** Letting users see video thumbnails and transcript snippets before clicking saved massive time. Small UX details have big impact.',
      '**Let users teach the system.** Format preference learning meant the system got smarter for each user individually. Personalization without explicit configuration.',
    ],

    themeConnection: 'Listened to *how* customers actually stored knowledge—not just text—and designed the system to match their reality instead of forcing them to match ours.',

    difficultyRating: 5,
    xpReward: 4000,
    achievementId: 'multi-dimensional',
  },
  {
    id: 'every-user-their-own-universe',
    track: 4,
    title: 'Every User, Their Own Universe',
    subtitle: 'CEOs wanted automation, Knowledge Managers wanted control—both were right',
    category: 'B2B SaaS',
    tags: ['Segmentation', 'AI Ethics', 'UX', 'Salesforce'],
    thumbnail: '/images/case-studies/track-04.jpg',

    context: {
      product: 'Knowledge Intelligence',
      company: 'Salesforce',
      role: 'Senior Product Manager',
      timeline: '2023-2024',
      team: '15 engineers, 3 PMs',
      note: 'Metrics are approximate/aggregated for confidentiality',
    },

    problem: `Initial product had one-size-fits-all AI automation. This created conflict between stakeholder groups:

**CEOs/Leadership:**
- Wanted "set and forget" automation
- Saw AI as time-saver, wanted maximum autonomy
- Frustrated by manual approval steps

**Knowledge Managers:**
- Wanted oversight and control
- Needed gradual trust-building with AI
- Uncomfortable with black-box decisions

Attempting to please everyone pleased no one. Adoption stalled because different users had fundamentally different trust levels and risk tolerances.`,

    approach: `**Persona Research:**
Identified that the "conflict" wasn't between roles—it was between **progressive trust stages**. Everyone starts skeptical, but some users build trust faster.

**Key Insight:**
User segmentation isn't just demographics. It's risk tolerance, trust levels, and control preferences. Same product, different configuration.

**Strategic Solution:**
Design for persona-specific needs AND trust progression. Let users teach the AI their boundaries.`,

    solution: `**AI Confidence Scoring System**

*1. Confidence Levels*
- AI rates its own confidence on each action (0-100%)
- Based on: data quality, model certainty, historical accuracy

*2. User-Adjustable Thresholds*

**Knowledge Managers (Low Risk Tolerance):**
- Start with high threshold (95%+ for auto-approval)
- Everything else requires human review
- Full control and oversight

**CEOs (High Autonomy Seekers):**
- Start with medium threshold (70%+)
- Faster automation, still safe
- Can adjust lower as trust builds

*3. Progressive Autonomy*
- System tracks accuracy over time
- Suggests threshold adjustments: "Your AI has 97% accuracy—consider lowering threshold?"
- Users gradually increase automation as they build trust
- Honors user agency in trust-building

**Persona-Specific Marketing:**
- To CEOs: "Autonomous AI that saves 78% of your time"
- To Knowledge Managers: "AI assistant with you in complete control"
- Same product, different positioning`,

    impact: [
      {
        metric: 'User Satisfaction',
        value: '91%',
        description: 'Satisfaction (vs. 62% with forced automation)',
      },
      {
        metric: 'Trust Progression',
        value: '85%',
        description: 'Users in "high trust" mode (70%+ auto) after 3 months',
      },
      {
        metric: 'Time Savings',
        value: '78%',
        description: 'Time saved on knowledge management for CEOs',
      },
      {
        metric: 'Trust Incidents',
        value: '0',
        description: 'Zero major AI errors that damaged user confidence',
      },
      {
        metric: 'Retention Boost',
        value: '+2.3x',
        description: 'Users who customized thresholds had higher retention',
      },
    ],

    learnings: [
      '**Segmentation isn\'t who people are—it\'s how they trust.** Risk tolerance and control preferences matter more than job titles or company size.',
      '**Progressive trust > forced automation.** Letting users build confidence gradually (with data to back it up) worked better than forcing them to "just trust the AI."',
      '**Let users teach the system their boundaries.** The configurable threshold approach honored user agency. People don\'t resist AI—they resist loss of control.',
      '**Marketing matters.** Same product, different messaging. CEOs heard "autonomous," Knowledge Managers heard "in control." Both were true, but the frame mattered.',
    ],

    themeConnection: 'Listened to both personas and discovered their "conflict" was actually a trust journey. Designed a system that adapts to user comfort levels—because every user truly does have their own universe.',

    difficultyRating: 4,
    xpReward: 4500,
    achievementId: 'segmentation-master',
  },
];

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudiesData.find(cs => cs.id === id);
}

export function getCaseStudyByTrack(track: number): CaseStudy | undefined {
  return caseStudiesData.find(cs => cs.track === track);
}
