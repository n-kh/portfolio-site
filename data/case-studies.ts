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

// Will populate content in next task
export const caseStudiesData: CaseStudy[] = [];
