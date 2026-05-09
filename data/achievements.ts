/**
 * Achievements - "loot" the Crawler can unlock through engagement.
 * Wired through ProgressiveDisclosureProvider.addAchievement(id, xp).
 *
 * Note: not currently surfaced in the DCC main page UI (Crawl Log shows its
 * own loot per level). Reserved for future use, e.g. a hidden achievements
 * panel or a `/floor/secret` easter-egg page.
 */

export interface Achievement {
  id: string;
  name: string;
  description: string;
  xpReward: number;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 'first-floor-cleared',
    name: 'First Floor Cleared',
    description: 'Scrolled past the Crawler Profile',
    xpReward: 500,
    icon: '🪜',
  },
  {
    id: 'power-sheet-inspected',
    name: 'Stat-Hunter',
    description: 'Viewed the full Power Sheet',
    xpReward: 1000,
    icon: '📊',
  },
  {
    id: 'crawl-log-read',
    name: 'Lore Master',
    description: 'Read the full Crawl Log from Lv 01 to current',
    xpReward: 2000,
    icon: '📜',
  },
  {
    id: 'audience-requested',
    name: 'Diplomat',
    description: 'Sent a transmission via the contact page',
    xpReward: 5000,
    icon: '✉',
  },
  {
    id: 'dispatches-opened',
    name: 'Subscribed',
    description: 'Followed the Crawler\'s dispatches on Substack',
    xpReward: 1500,
    icon: '🚪',
  },
  {
    id: 'resume-claimed',
    name: 'Stat Sheet Acquired',
    description: 'Downloaded the resume',
    xpReward: 1500,
    icon: '📄',
  },
  {
    id: 'completionist',
    name: 'Surface Cleared',
    description: 'Visited every floor of the dungeon',
    xpReward: 10000,
    icon: '🏆',
  },
];

export function getAchievement(id: string): Achievement | undefined {
  return achievements.find((a) => a.id === id);
}
