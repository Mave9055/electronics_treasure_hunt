/**
 * Badge Management Utilities
 * Handles badge unlocking, tracking, and persistence with localStorage
 */

export interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
  points: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: string; // ISO timestamp
}

// Badge database
export const BADGE_DATABASE: Record<number, Omit<Badge, 'unlockedAt'>> = {
  1: {
    id: 1,
    name: 'Component Scout',
    description: 'Identify your first 3 components',
    icon: '🔍',
    points: 50,
    rarity: 'common',
  },
  2: {
    id: 2,
    name: 'First Steps',
    description: 'Complete Phase 1 - Read your first secret message',
    icon: '👣',
    points: 100,
    rarity: 'uncommon',
  },
  3: {
    id: 3,
    name: 'Address Detective',
    description: 'Complete Phase 2 - Find a chip\'s I²C address',
    icon: '🔍',
    points: 150,
    rarity: 'uncommon',
  },
  4: {
    id: 4,
    name: 'Power Master',
    description: 'Complete Phase 3 - Build a power supply',
    icon: '⚡',
    points: 150,
    rarity: 'rare',
  },
  5: {
    id: 5,
    name: 'Circuit Wizard',
    description: 'Complete Phase 4 - Send commands to a chip',
    icon: '🧙',
    points: 200,
    rarity: 'rare',
  },
  6: {
    id: 6,
    name: 'Salvage Expert',
    description: 'Identify 5 different components',
    icon: '🔧',
    points: 75,
    rarity: 'uncommon',
  },
  7: {
    id: 7,
    name: 'Safety First',
    description: 'Read all safety guidelines',
    icon: '🛡️',
    points: 50,
    rarity: 'common',
  },
  8: {
    id: 8,
    name: 'Project Builder',
    description: 'Complete your first real project',
    icon: '🚀',
    points: 250,
    rarity: 'epic',
  },
  9: {
    id: 9,
    name: 'Master Maker',
    description: 'Complete all 4 phases and 3 projects',
    icon: '👑',
    points: 500,
    rarity: 'legendary',
  },
  10: {
    id: 10,
    name: 'Quick Learner',
    description: 'Complete the 10-minute challenge',
    icon: '⚡',
    points: 25,
    rarity: 'common',
  },
};

// Get all badges with unlock status
export const getAllBadges = (): (Badge & { unlocked: boolean })[] => {
  const unlockedIds = getUnlockedBadgeIds();
  return Object.values(BADGE_DATABASE).map((badge) => ({
    ...badge,
    unlockedAt: getUnlockedBadgeTimestamp(badge.id),
    unlocked: unlockedIds.includes(badge.id),
  }));
};

// Get unlocked badge IDs from localStorage
export const getUnlockedBadgeIds = (): number[] => {
  const stored = localStorage.getItem('unlocked_badges');
  return stored ? JSON.parse(stored) : [];
};

// Get timestamp when badge was unlocked
export const getUnlockedBadgeTimestamp = (badgeId: number): string | undefined => {
  const stored = localStorage.getItem(`badge_unlocked_${badgeId}`);
  return stored || undefined;
};

// Award a badge
export const awardBadge = (badgeId: number): boolean => {
  const unlockedIds = getUnlockedBadgeIds();
  
  // Check if already unlocked
  if (unlockedIds.includes(badgeId)) {
    return false; // Already unlocked
  }

  // Add to unlocked list
  unlockedIds.push(badgeId);
  localStorage.setItem('unlocked_badges', JSON.stringify(unlockedIds));
  
  // Store unlock timestamp
  localStorage.setItem(`badge_unlocked_${badgeId}`, new Date().toISOString());
  
  // Update total points
  const badge = BADGE_DATABASE[badgeId];
  if (badge) {
    const currentPoints = getTotalPoints();
    localStorage.setItem('total_points', (currentPoints + badge.points).toString());
  }

  return true; // Successfully unlocked
};

// Check if badge is unlocked
export const isBadgeUnlocked = (badgeId: number): boolean => {
  return getUnlockedBadgeIds().includes(badgeId);
};

// Get badge details
export const getBadge = (badgeId: number): (Badge & { unlocked: boolean }) | null => {
  const badge = BADGE_DATABASE[badgeId];
  if (!badge) return null;

  return {
    ...badge,
    unlockedAt: getUnlockedBadgeTimestamp(badgeId),
    unlocked: isBadgeUnlocked(badgeId),
  };
};

// Get total points
export const getTotalPoints = (): number => {
  const stored = localStorage.getItem('total_points');
  return stored ? parseInt(stored, 10) : 0;
};

// Reset all badges (for testing)
export const resetAllBadges = (): void => {
  localStorage.removeItem('unlocked_badges');
  localStorage.removeItem('total_points');
  Object.keys(BADGE_DATABASE).forEach((id) => {
    localStorage.removeItem(`badge_unlocked_${id}`);
  });
};

// Get badge rarity color
export const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case 'common':
      return 'from-gray-200 to-gray-300';
    case 'uncommon':
      return 'from-green-200 to-green-300';
    case 'rare':
      return 'from-blue-200 to-blue-300';
    case 'epic':
      return 'from-purple-200 to-purple-300';
    case 'legendary':
      return 'from-yellow-200 to-yellow-300';
    default:
      return 'from-gray-200 to-gray-300';
  }
};

// Get badge rarity text color
export const getRarityTextColor = (rarity: string): string => {
  switch (rarity) {
    case 'common':
      return 'text-gray-800';
    case 'uncommon':
      return 'text-green-800';
    case 'rare':
      return 'text-blue-800';
    case 'epic':
      return 'text-purple-800';
    case 'legendary':
      return 'text-yellow-800';
    default:
      return 'text-gray-800';
  }
};
