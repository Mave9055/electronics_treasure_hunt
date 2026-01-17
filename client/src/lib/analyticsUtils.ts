/**
 * Analytics Tracking Utility
 * Tracks user journey: quick-start completion, Phase 1 progress, badge unlocks
 * All data persisted to localStorage for client-side analytics
 */

export interface AnalyticsEvent {
  timestamp: number;
  event: string;
  data?: Record<string, any>;
}

export interface UserMetrics {
  firstVisit: number;
  lastVisit: number;
  totalVisits: number;
  quickStartStarted: boolean;
  quickStartStartedAt?: number;
  quickStartCompleted: boolean;
  quickStartCompletedAt?: number;
  phase1Started: boolean;
  phase1StartedAt?: number;
  phase1Completed: boolean;
  phase1CompletedAt?: number;
  badgesUnlocked: string[];
  totalPoints: number;
  events: AnalyticsEvent[];
}

const ANALYTICS_KEY = "etd_analytics";

/**
 * Get or initialize user metrics
 */
export function getUserMetrics(): UserMetrics {
  const stored = localStorage.getItem(ANALYTICS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  const metrics: UserMetrics = {
    firstVisit: Date.now(),
    lastVisit: Date.now(),
    totalVisits: 1,
    quickStartStarted: false,
    quickStartCompleted: false,
    phase1Started: false,
    phase1Completed: false,
    badgesUnlocked: [],
    totalPoints: 0,
    events: [],
  };

  saveUserMetrics(metrics);
  return metrics;
}

/**
 * Save user metrics to localStorage
 */
export function saveUserMetrics(metrics: UserMetrics): void {
  metrics.lastVisit = Date.now();
  metrics.totalVisits = (metrics.totalVisits || 0) + 1;
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(metrics));
}

/**
 * Track an event
 */
export function trackEvent(
  event: string,
  data?: Record<string, any>
): void {
  const metrics = getUserMetrics();
  const analyticsEvent: AnalyticsEvent = {
    timestamp: Date.now(),
    event,
    data,
  };

  metrics.events.push(analyticsEvent);
  if (metrics.events.length > 100) {
    metrics.events = metrics.events.slice(-100);
  }

  saveUserMetrics(metrics);
}

/**
 * Track quick-start started
 */
export function trackQuickStartStarted(): void {
  const metrics = getUserMetrics();
  metrics.quickStartStarted = true;
  metrics.quickStartStartedAt = Date.now();
  saveUserMetrics(metrics);
  trackEvent("quick_start_started");
}

/**
 * Track quick-start completed
 */
export function trackQuickStartCompleted(score: number): void {
  const metrics = getUserMetrics();
  metrics.quickStartCompleted = true;
  metrics.quickStartCompletedAt = Date.now();
  saveUserMetrics(metrics);
  trackEvent("quick_start_completed", { score });
}

/**
 * Track Phase 1 started
 */
export function trackPhase1Started(): void {
  const metrics = getUserMetrics();
  metrics.phase1Started = true;
  metrics.phase1StartedAt = Date.now();
  saveUserMetrics(metrics);
  trackEvent("phase1_started");
}

/**
 * Track Phase 1 completed
 */
export function trackPhase1Completed(): void {
  const metrics = getUserMetrics();
  metrics.phase1Completed = true;
  metrics.phase1CompletedAt = Date.now();
  saveUserMetrics(metrics);
  trackEvent("phase1_completed");
}

/**
 * Track badge unlock
 */
export function trackBadgeUnlock(badgeId: string, points: number): void {
  const metrics = getUserMetrics();
  if (!metrics.badgesUnlocked.includes(badgeId)) {
    metrics.badgesUnlocked.push(badgeId);
    metrics.totalPoints += points;
    saveUserMetrics(metrics);
    trackEvent("badge_unlocked", { badgeId, points });
  }
}

/**
 * Get analytics summary
 */
export function getAnalyticsSummary() {
  const metrics = getUserMetrics();

  const quickStartConversionRate = metrics.quickStartCompleted ? 100 : 0;
  const phase1ConversionRate = metrics.phase1Completed ? 100 : 0;
  const quickStartToPhase1Rate = metrics.quickStartCompleted && metrics.phase1Started ? 100 : 0;

  const quickStartTimeSpent = metrics.quickStartCompletedAt && metrics.quickStartStartedAt
    ? Math.round((metrics.quickStartCompletedAt - metrics.quickStartStartedAt) / 1000)
    : 0;

  const phase1TimeSpent = metrics.phase1CompletedAt && metrics.phase1StartedAt
    ? Math.round((metrics.phase1CompletedAt - metrics.phase1StartedAt) / 1000)
    : 0;

  return {
    metrics,
    quickStartConversionRate,
    phase1ConversionRate,
    quickStartToPhase1Rate,
    quickStartTimeSpent,
    phase1TimeSpent,
    totalBadgesUnlocked: metrics.badgesUnlocked.length,
    totalPoints: metrics.totalPoints,
    totalEvents: metrics.events.length,
  };
}

/**
 * Get event timeline
 */
export function getEventTimeline() {
  const metrics = getUserMetrics();
  return metrics.events.sort((a, b) => b.timestamp - a.timestamp);
}

/**
 * Reset analytics (for testing)
 */
export function resetAnalytics(): void {
  localStorage.removeItem(ANALYTICS_KEY);
}

/**
 * Export analytics data as JSON
 */
export function exportAnalyticsData(): string {
  const summary = getAnalyticsSummary();
  return JSON.stringify(summary, null, 2);
}
