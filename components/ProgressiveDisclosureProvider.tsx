'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  loadProgress,
  saveProgress,
  markQuestViewed,
  unlockAchievement,
  calculateDisclosureState,
  getStateClassName,
  type ProgressData,
} from '@/lib/progressiveState';
import { DISCLOSURE_STATES, type DisclosureState } from '@/lib/constants';

interface ProgressiveDisclosureContextType {
  progress: ProgressData;
  state: DisclosureState;
  viewQuest: (questId: string) => void;
  openSkillTree: () => void;
  reachContact: () => void;
  addAchievement: (achievementId: string, xpReward: number) => void;
  setScrollState: (scrolled: boolean) => void;
  stateClassName: string;
}

const ProgressiveDisclosureContext = createContext<ProgressiveDisclosureContextType | undefined>(
  undefined
);

export function ProgressiveDisclosureProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressData>(() => loadProgress());
  const [hasScrolled, setHasScrolled] = useState(false);

  // Calculate current state
  const state = hasScrolled && progress.state === DISCLOSURE_STATES.LANDING
    ? DISCLOSURE_STATES.SCROLLING
    : progress.state;

  const stateClassName = getStateClassName(state);

  // Save progress whenever it changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const viewQuest = useCallback((questId: string) => {
    setProgress((prev) => {
      const updated = markQuestViewed(questId, prev);
      return updated;
    });
  }, []);

  const openSkillTree = useCallback(() => {
    setProgress((prev) => {
      const updated = { ...prev, skillTreeOpened: true };
      updated.state = calculateDisclosureState(updated);
      return updated;
    });
  }, []);

  const reachContact = useCallback(() => {
    setProgress((prev) => {
      const updated = { ...prev, contactReached: true };
      updated.state = calculateDisclosureState(updated);
      return updated;
    });
  }, []);

  const addAchievement = useCallback((achievementId: string, xpReward: number) => {
    setProgress((prev) => unlockAchievement(achievementId, xpReward, prev));
  }, []);

  const setScrollState = useCallback((scrolled: boolean) => {
    setHasScrolled(scrolled);
  }, []);

  return (
    <ProgressiveDisclosureContext.Provider
      value={{
        progress,
        state,
        viewQuest,
        openSkillTree,
        reachContact,
        addAchievement,
        setScrollState,
        stateClassName,
      }}
    >
      {children}
    </ProgressiveDisclosureContext.Provider>
  );
}

export function useProgressiveDisclosure() {
  const context = useContext(ProgressiveDisclosureContext);
  if (context === undefined) {
    throw new Error('useProgressiveDisclosure must be used within ProgressiveDisclosureProvider');
  }
  return context;
}
