export interface Achievement {
  id: string;
  name: string;
  description: string;
  xpReward: number;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 'the-listener',
    name: 'The Listener',
    description: 'Turned customer feedback into product gold',
    xpReward: 5000,
    icon: '🎧',
  },
  {
    id: 'multi-dimensional',
    name: 'Multi-Dimensional',
    description: 'Mastered multi-modal AI interactions',
    xpReward: 4000,
    icon: '🌈',
  },
  {
    id: 'segmentation-master',
    name: 'Segmentation Master',
    description: 'Every user gets their own universe',
    xpReward: 4500,
    icon: '🎯',
  },
  {
    id: 'strategic-thinker',
    name: 'Strategic Thinker',
    description: 'Identified what users need vs. what they asked for',
    xpReward: 3500,
    icon: '🧠',
  },
  {
    id: 'explorer',
    name: 'The Explorer',
    description: 'Viewed all case studies',
    xpReward: 2000,
    icon: '🗺️',
  },
  {
    id: 'character-study',
    name: 'Character Study',
    description: 'Opened the full skill tree',
    xpReward: 1000,
    icon: '⚔️',
  },
  {
    id: 'quest-complete',
    name: 'Album Complete',
    description: 'Listened to all four tracks',
    xpReward: 10000,
    icon: '💿',
  },
];

export function getAchievement(id: string): Achievement | undefined {
  return achievements.find(a => a.id === id);
}
