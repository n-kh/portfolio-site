// Progressive Disclosure State Constants

export const DISCLOSURE_STATES = {
  LANDING: 0,
  SCROLLING: 1,
  FIRST_QUEST: 2,
  DEEP_ENGAGEMENT: 3,
  COMPLETION: 4,
} as const;

export type DisclosureState = typeof DISCLOSURE_STATES[keyof typeof DISCLOSURE_STATES];

export const DISCLOSURE_TRIGGERS = {
  SCROLL_THRESHOLD: 0.5, // 50vh past hero
  QUESTS_FOR_DEEP: 2,    // 2+ case studies viewed
  TOTAL_QUESTS: 4,       // Total number of case studies
};

export const STORAGE_KEYS = {
  PROGRESS: 'portfolio_progress',
  QUESTS_COMPLETED: 'quests_completed',
  ACHIEVEMENTS: 'achievements_unlocked',
};
