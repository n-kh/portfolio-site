import { DISCLOSURE_STATES, STORAGE_KEYS, DISCLOSURE_TRIGGERS, type DisclosureState } from './constants';

export interface ProgressData {
  state: DisclosureState;
  questsViewed: string[];
  skillTreeOpened: boolean;
  contactReached: boolean;
  achievementsUnlocked: string[];
  totalXP: number;
}

export const DEFAULT_PROGRESS: ProgressData = {
  state: DISCLOSURE_STATES.LANDING,
  questsViewed: [],
  skillTreeOpened: false,
  contactReached: false,
  achievementsUnlocked: [],
  totalXP: 0,
};

// Load progress from localStorage
export function loadProgress(): ProgressData {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!stored) return DEFAULT_PROGRESS;
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to load progress:', error);
    return DEFAULT_PROGRESS;
  }
}

// Save progress to localStorage
export function saveProgress(progress: ProgressData): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
}

// Calculate disclosure state based on progress
export function calculateDisclosureState(progress: ProgressData): DisclosureState {
  const { questsViewed, skillTreeOpened, contactReached } = progress;

  // State 4: Completion (all quests + contact)
  if (questsViewed.length === DISCLOSURE_TRIGGERS.TOTAL_QUESTS && contactReached) {
    return DISCLOSURE_STATES.COMPLETION;
  }

  // State 3: Deep engagement (2+ quests OR skill tree opened)
  if (questsViewed.length >= DISCLOSURE_TRIGGERS.QUESTS_FOR_DEEP || skillTreeOpened) {
    return DISCLOSURE_STATES.DEEP_ENGAGEMENT;
  }

  // State 2: First quest opened
  if (questsViewed.length > 0) {
    return DISCLOSURE_STATES.FIRST_QUEST;
  }

  // State 1: Scrolling (handled by scroll event)
  // State 0: Landing (default)
  return progress.state;
}

// Mark quest as viewed
export function markQuestViewed(questId: string, currentProgress: ProgressData): ProgressData {
  if (currentProgress.questsViewed.includes(questId)) {
    return currentProgress;
  }

  const newProgress = {
    ...currentProgress,
    questsViewed: [...currentProgress.questsViewed, questId],
  };

  newProgress.state = calculateDisclosureState(newProgress);
  return newProgress;
}

// Unlock achievement
export function unlockAchievement(
  achievementId: string,
  xpReward: number,
  currentProgress: ProgressData
): ProgressData {
  if (currentProgress.achievementsUnlocked.includes(achievementId)) {
    return currentProgress;
  }

  return {
    ...currentProgress,
    achievementsUnlocked: [...currentProgress.achievementsUnlocked, achievementId],
    totalXP: currentProgress.totalXP + xpReward,
  };
}

// Get state class name for CSS
export function getStateClassName(state: DisclosureState): string {
  return `disclosure-state-${state}`;
}
