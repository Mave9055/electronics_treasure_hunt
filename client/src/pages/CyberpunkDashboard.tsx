import { useState, useEffect } from "react";
import { BarChart3, Zap, Trophy, TrendingUp, Clock, Target } from "lucide-react";
import { getAnalyticsSummary } from "@/lib/analyticsUtils";

export default function CyberpunkDashboard() {
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    const data = getAnalyticsSummary();
    setSummary(data);
  }, []);

  if (!summary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 font-mono">LOADING METRICS...</p>
        </div>
      </div>
    );
  }

  const metrics = [
    {
      label: "Quick Start",
      value: `${summary.quickStartConversionRate}%`,
      icon: Zap,
      color: "cyan",
      status: summary.metrics.quickStartCompleted ? "✓ COMPLETE" : "NOT STARTED",
    },
    {
      label: "Phase 1",
      value: `${summary.phase1ConversionRate}%`,
      icon: Target,
      color: "magenta",
      status: summary.metrics.phase1Completed ? "✓ COMPLETE" : "IN PROGRESS",
    },
    {
      label: "Conversion",
      value: `${summary.quickStartToPhase1Rate}%`,
      icon: TrendingUp,
      color: "purple",
      status: "QS → Phase 1",
    },
    {
      label: "Achievements",
      value: summary.totalBadgesUnlocked,
      icon: Trophy,
      color: "green",
      status: `${summary.totalPoints} XP`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-magenta-500/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl font-orbitron font-black">
              <span className="text-cyan-400">YOUR</span> <span className="text-magenta-400">PROGRESS</span>
            </h1>
          </div>
          <p className="text-xl text-cyan-300/70">Track your learning journey in real-time</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            const colorClass = {
              cyan: "border-cyan-500/50 text-cyan-400",
              magenta: "border-magenta-500/50 text-magenta-400",
              purple: "border-purple-500/50 text-purple-400",
              green: "border-green-500/50 text-green-400",
            }[metric.color];

            return (
              <div
                key={i}
                className={`glass-card border-2 ${colorClass} group hover:shadow-lg transition-all animate-fade-in`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-mono px-2 py-1 bg-black/30 rounded text-cyan-300/60">
                    {metric.status}
                  </span>
                </div>
                <p className="text-sm text-cyan-300/60 uppercase tracking-wider mb-2">{metric.label}</p>
                <div className="text-4xl font-orbitron font-black mb-4">{metric.value}</div>
                <div className="h-1 bg-black/30 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${metric.color}-400 to-${metric.color}-600`}
                    style={{ width: `${Math.min(parseInt(metric.value.toString()) || 0, 100)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="glass-card cyan-accent mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-orbitron text-cyan-400">JOURNEY TIMELINE</h2>
          </div>

          <div className="space-y-4">
            {/* First Visit */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="font-mono text-cyan-400 font-bold">FIRST VISIT</p>
                <p className="text-sm text-cyan-300/60">
                  {new Date(summary.metrics.firstVisit).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            {/* Quick Start */}
            {summary.metrics.quickStartStarted && (
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-magenta-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-mono text-magenta-400 font-bold">QUICK START BEGUN</p>
                  <p className="text-sm text-magenta-300/60">
                    {new Date(summary.metrics.quickStartStartedAt || 0).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            )}

            {/* Quick Start Complete */}
            {summary.metrics.quickStartCompleted && (
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-mono text-green-400 font-bold">✓ QUICK START COMPLETE</p>
                  <p className="text-sm text-green-300/60">
                    {new Date(summary.metrics.quickStartCompletedAt || 0).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            )}

            {/* Phase 1 */}
            {summary.metrics.phase1Started && (
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-mono text-purple-400 font-bold">PHASE 1 BEGUN</p>
                  <p className="text-sm text-purple-300/60">
                    {new Date(summary.metrics.phase1StartedAt || 0).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            )}

            {/* Phase 1 Complete */}
            {summary.metrics.phase1Completed && (
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-mono text-green-400 font-bold">✓ PHASE 1 COMPLETE</p>
                  <p className="text-sm text-green-300/60">
                    {new Date(summary.metrics.phase1CompletedAt || 0).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            )}

            {/* Last Visit */}
            <div className="flex gap-4 items-start">
              <div className="w-3 h-3 rounded-full bg-cyan-300/50 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="font-mono text-cyan-300/70 font-bold">LAST VISIT</p>
                <p className="text-sm text-cyan-300/50">
                  {new Date(summary.metrics.lastVisit).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Session Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="glass-card magenta-accent">
            <h3 className="text-xl font-orbitron text-magenta-400 mb-6">SESSION STATS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-cyan-300/70">Total Visits</span>
                <span className="text-2xl font-orbitron text-cyan-400">{summary.metrics.totalVisits}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-300/70">Events Tracked</span>
                <span className="text-2xl font-orbitron text-magenta-400">{summary.totalEvents}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-300/70">Badges Earned</span>
                <span className="text-2xl font-orbitron text-purple-400">{summary.totalBadgesUnlocked}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-300/70">Total XP</span>
                <span className="text-2xl font-orbitron text-green-400">{summary.totalPoints}</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          {summary.totalBadgesUnlocked > 0 && (
            <div className="glass-card purple-accent">
              <h3 className="text-xl font-orbitron text-purple-400 mb-6">BADGES UNLOCKED</h3>
              <div className="flex flex-wrap gap-3">
                {summary.metrics.badgesUnlocked.map((badge: string, i: number) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-sm font-mono text-purple-300 animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    🏆 {badge}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
