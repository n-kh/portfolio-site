// Progressive Disclosure State Constants

export const DISCLOSURE_STATES = {
  LANDING: 0,
  SCROLLING: 1,
  FIRST_QUEST: 2,
  DEEP_ENGAGEMENT: 3,
  COMPLETION: 4,
} as const;

export type DisclosureState = typeof DISCLOSURE_STATES[keyof typeof DISCLOSURE_STATES];

// Triggers retained for the progressive-disclosure engine. With the case-study
// route gone, "quests" maps to in-page floor markers (e.g. scrolling past the
// CrawlLog or PowerSheet) rather than per-case-study clicks.
export const DISCLOSURE_TRIGGERS = {
  SCROLL_THRESHOLD: 0.5,
  QUESTS_FOR_DEEP: 2,
  TOTAL_QUESTS: 4,
};

export const STORAGE_KEYS = {
  PROGRESS: 'portfolio_progress',
  QUESTS_COMPLETED: 'quests_completed',
  ACHIEVEMENTS: 'achievements_unlocked',
};

// Crawler external links and contact handles.
// Pulled from resume (May 2026). TODO(user): confirm Substack / LinkedIn /
// GitHub handles below — emailed and phone are from resume.
export const SUBSTACK_URL = 'https://substack.com/@nimitkhurana'; // TODO(user): confirm handle
export const LINKEDIN_URL = 'https://linkedin.com/in/nimitkhurana'; // TODO(user): confirm
export const GITHUB_URL = 'https://github.com/n-kh'; // TODO(user): confirm handle
export const EMAIL = 'nimit.khurana@gmail.com';
export const PHONE = '+91 8452821222';
export const LOCATION = 'Bangalore, India';
export const CALENDLY_URL = ''; // TODO(user): paste Calendly link
export const RESUME_PATH = '/resume.pdf';

export const NAV_LINKS = [
  { href: '/', label: 'Profile' },
  { href: '/case-studies', label: 'Dispatches' },
  { href: '/contact', label: 'Audience' },
] as const;
