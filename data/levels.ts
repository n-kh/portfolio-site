/**
 * Crawl Log - the sequence of level-up events that brought the Crawler
 * from Level 01 to the current level.
 *
 * Each entry is a discrete level-up triggered by one of:
 *   - 'career-start' : the very first job
 *   - 'year'         : another year survived in the dungeon
 *   - 'degree'       : a credential earned
 *   - 'job-change'   : new working place
 *   - 'milestone'    : a notable achievement (promotion, big launch, etc.)
 *
 * TODO(user): replace placeholder entries with your real career timeline.
 * The CURRENT_LEVEL should equal the number of entries in levelEvents.
 */

export type LevelTrigger =
  | 'career-start'
  | 'year'
  | 'degree'
  | 'job-change'
  | 'milestone';

export interface LevelUpEvent {
  level: number;
  date: string; // free-form, e.g. "2017", "Jun 2019"
  trigger: LevelTrigger;
  title: string;
  location?: string; // company / school / city
  description: string;
  icon: string;
  powerUnlocked?: { powerId: string; note: string };
  powersUpgraded?: { powerId: string; newRank: number }[];
  loot?: string[];
}

export const CURRENT_LEVEL = 9;

export const triggerLabel: Record<LevelTrigger, string> = {
  'career-start': 'Career Start',
  year: 'Year Survived',
  degree: 'Degree Earned',
  'job-change': 'New Working Place',
  milestone: 'Milestone',
};

export const triggerIcon: Record<LevelTrigger, string> = {
  'career-start': '⚔️',
  year: '🗓️',
  degree: '🎓',
  'job-change': '🏛️',
  milestone: '🏆',
};

export const levelEvents: LevelUpEvent[] = [
  {
    level: 1,
    date: '2017',
    trigger: 'career-start',
    title: 'Entered the Dungeon',
    location: 'First Employer — TODO(user)',
    description:
      'Crawler instantiated. No starting class. Issued a laptop, a Confluence login, and the vague directive to "drive impact."',
    icon: '⚔️',
    powerUnlocked: {
      powerId: 'product-strategy',
      note: 'Product Strategy I — learned what a roadmap is',
    },
    loot: ['Achievement: First Standup Survived'],
  },
  {
    level: 2,
    date: '2018',
    trigger: 'year',
    title: 'Year One Cleared',
    location: 'TODO(user)',
    description:
      'Discovered that "ship it" and "ship it well" are different RPGs. Picked up data literacy as a side quest.',
    icon: '🗓️',
    powerUnlocked: {
      powerId: 'data-literacy',
      note: 'Data Literacy I — learned SQL out of self-defense',
    },
    powersUpgraded: [{ powerId: 'product-strategy', newRank: 2 }],
    loot: ['Achievement: First A/B Test'],
  },
  {
    level: 3,
    date: '2019',
    trigger: 'job-change',
    title: 'Crossed to a New Floor',
    location: 'TODO(user)',
    description:
      'Switched companies. Discovered that every team\'s "best practices" are someone else\'s technical debt.',
    icon: '🏛️',
    powerUnlocked: {
      powerId: 'stakeholder-comms',
      note: 'Stakeholder Comms I — survived first exec review',
    },
    powersUpgraded: [{ powerId: 'data-literacy', newRank: 3 }],
    loot: ['Achievement: Onboarded Without Crying'],
  },
  {
    level: 4,
    date: '2020',
    trigger: 'milestone',
    title: 'Shipped a 0-to-1 Product',
    location: 'TODO(user)',
    description:
      'Took something from "wouldn\'t it be cool if..." to revenue. The dungeon does not reward this with rest. The dungeon rewards this with more roadmap.',
    icon: '🏆',
    powerUnlocked: {
      powerId: 'customer-empathy',
      note: 'Customer Empathy I — did 50 user interviews',
    },
    powersUpgraded: [
      { powerId: 'product-strategy', newRank: 4 },
      { powerId: 'stakeholder-comms', newRank: 3 },
    ],
    loot: ['Achievement: First $1M ARR'],
  },
  {
    level: 5,
    date: '2021',
    trigger: 'degree',
    title: 'Acquired Credential',
    location: 'TODO(user) — degree / certification',
    description:
      'Earned a new piece of paper. The dungeon system has acknowledged it. Recruiters now use a different tier of LinkedIn message.',
    icon: '🎓',
    powerUnlocked: {
      powerId: 'ux-design',
      note: 'UX Design I — finally stopped calling everything "the UI"',
    },
    powersUpgraded: [{ powerId: 'customer-empathy', newRank: 4 }],
    loot: ['Achievement: Diploma Equipped'],
  },
  {
    level: 6,
    date: '2022',
    trigger: 'job-change',
    title: 'Joined an AI-Native Team',
    location: 'TODO(user)',
    description:
      'First job where "the model is part of the product." Learned to ship under uncertainty when the model itself is the variable.',
    icon: '🤖',
    powerUnlocked: {
      powerId: 'ai-proficiency',
      note: 'AI Proficiency I — shipped your first ML feature',
    },
    powersUpgraded: [
      { powerId: 'technical-collab', newRank: 4 },
      { powerId: 'data-literacy', newRank: 5 },
    ],
    loot: ['Achievement: First Model in Production'],
  },
  {
    level: 7,
    date: '2023',
    trigger: 'milestone',
    title: 'Led First Team',
    location: 'TODO(user)',
    description:
      'Got direct reports. Discovered that "managing up" was the easy part. Started writing 1:1 docs. Became insufferable about them.',
    icon: '👥',
    powerUnlocked: {
      powerId: 'team-management',
      note: 'Team Management I — first direct report',
    },
    powersUpgraded: [
      { powerId: 'stakeholder-comms', newRank: 6 },
      { powerId: 'ai-proficiency', newRank: 5 },
    ],
    loot: ['Achievement: First 1:1 Doc Template'],
  },
  {
    level: 8,
    date: '2024',
    trigger: 'milestone',
    title: 'Shipped LLM-Powered Feature',
    location: 'TODO(user)',
    description:
      'The model decides things. The model is wrong sometimes. Learned to design for graceful failure and to instrument everything twice.',
    icon: '✨',
    powersUpgraded: [
      { powerId: 'ai-proficiency', newRank: 7 },
      { powerId: 'ux-design', newRank: 6 },
      { powerId: 'technical-collab', newRank: 6 },
    ],
    loot: ['Achievement: User Said "It Just Works"'],
  },
  {
    level: 9,
    date: '2026',
    trigger: 'milestone',
    title: 'Currently Crawling',
    location: 'TODO(user)',
    description:
      'Active on the surface dungeon. Powers stable. Accepting new quests, audience requests, and good memes. Currently looking for the next floor.',
    icon: '⭐',
    powersUpgraded: [
      { powerId: 'ai-proficiency', newRank: 9 },
      { powerId: 'product-strategy', newRank: 9 },
      { powerId: 'customer-empathy', newRank: 9 },
      { powerId: 'stakeholder-comms', newRank: 9 },
      { powerId: 'team-management', newRank: 8 },
    ],
    loot: ['Achievement: Lv 09 Reached'],
  },
];
