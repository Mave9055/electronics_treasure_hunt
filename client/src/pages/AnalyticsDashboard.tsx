import { useState, useEffect } from "react";
import { BarChart3, TrendingUp, Award, Zap, Clock, Download } from "lucide-react";
import { getAnalyticsSummary, getEventTimeline, exportAnalyticsData } from "@/lib/analyticsUtils";

export default function AnalyticsDashboard() {
  const [summary, setSummary] = useState<any>(null);
  const [timeline, setTimeline] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getAnalyticsSummary();
    setSummary(data);
    setTimeline(getEventTimeline());
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  const handleExport = () => {
    const data = exportAnalyticsData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analytics-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
  };

  const formatTime = (seconds: number): string => {
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Analytics Dashboard</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Track your learning journey and see how the platform is helping you progress
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Quick Start Completion */}
          <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Quick Start</h3>
              <div className="text-3xl">⚡</div>
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {summary.quickStartConversionRate}%
            </div>
            <p className="text-sm text-gray-600">
              {summary.metrics.quickStartCompleted ? "✓ Completed" : "Not started"}
            </p>
            {summary.quickStartTimeSpent > 0 && (
              <p className="text-xs text-gray-500 mt-2">
                Time spent: {formatTime(summary.quickStartTimeSpent)}
              </p>
            )}
          </div>

          {/* Phase 1 Conversion */}
          <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Phase 1</h3>
              <div className="text-3xl">📚</div>
            </div>
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {summary.phase1ConversionRate}%
            </div>
            <p className="text-sm text-gray-600">
              {summary.metrics.phase1Started ? "In progress" : "Not started"}
            </p>
            {summary.phase1TimeSpent > 0 && (
              <p className="text-xs text-gray-500 mt-2">
                Time spent: {formatTime(summary.phase1TimeSpent)}
              </p>
            )}
          </div>

          {/* Conversion Rate */}
          <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Conversion</h3>
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-4xl font-bold text-green-600 mb-2">
              {summary.quickStartToPhase1Rate}%
            </div>
            <p className="text-sm text-gray-600">
              Quick Start → Phase 1
            </p>
          </div>

          {/* Badges & Points */}
          <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Achievements</h3>
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div className="text-4xl font-bold text-amber-600 mb-2">
              {summary.totalBadgesUnlocked}
            </div>
            <p className="text-sm text-gray-600">
              {summary.totalPoints} points earned
            </p>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Journey Timeline */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-bold text-gray-900">Your Journey</h2>
            </div>

            <div className="space-y-4">
              {/* First Visit */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-600 mt-2"></div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">First Visit</p>
                  <p className="text-sm text-gray-600">
                    {formatDate(summary.metrics.firstVisit)}
                  </p>
                </div>
              </div>

              {/* Quick Start Started */}
              {summary.metrics.quickStartStarted && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Quick Start Begun</p>
                    <p className="text-sm text-gray-600">
                      {formatDate(summary.metrics.quickStartStartedAt || 0)}
                    </p>
                  </div>
                </div>
              )}

              {/* Quick Start Completed */}
              {summary.metrics.quickStartCompleted && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-600 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">✓ Quick Start Completed</p>
                    <p className="text-sm text-gray-600">
                      {formatDate(summary.metrics.quickStartCompletedAt || 0)}
                    </p>
                  </div>
                </div>
              )}

              {/* Phase 1 Started */}
              {summary.metrics.phase1Started && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-purple-600 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Phase 1 Begun</p>
                    <p className="text-sm text-gray-600">
                      {formatDate(summary.metrics.phase1StartedAt || 0)}
                    </p>
                  </div>
                </div>
              )}

              {/* Phase 1 Completed */}
              {summary.metrics.phase1Completed && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-600 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">✓ Phase 1 Completed</p>
                    <p className="text-sm text-gray-600">
                      {formatDate(summary.metrics.phase1CompletedAt || 0)}
                    </p>
                  </div>
                </div>
              )}

              {/* Last Visit */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gray-400 mt-2"></div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Last Visit</p>
                  <p className="text-sm text-gray-600">
                    {formatDate(summary.metrics.lastVisit)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Session Stats */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-bold text-gray-900">Session Stats</h2>
            </div>

            <div className="space-y-4">
              {/* Total Visits */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Total Visits</span>
                <span className="text-2xl font-bold text-blue-600">
                  {summary.metrics.totalVisits}
                </span>
              </div>

              {/* Total Events */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Total Events Tracked</span>
                <span className="text-2xl font-bold text-purple-600">
                  {summary.totalEvents}
                </span>
              </div>

              {/* Badges Unlocked */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Badges Unlocked</span>
                <span className="text-2xl font-bold text-amber-600">
                  {summary.totalBadgesUnlocked}
                </span>
              </div>

              {/* Total Points */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700 font-medium">Total Points</span>
                <span className="text-2xl font-bold text-green-600">
                  {summary.totalPoints}
                </span>
              </div>

              {/* Badges List */}
              {summary.totalBadgesUnlocked > 0 && (
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border-2 border-amber-200">
                  <p className="font-semibold text-gray-900 mb-3">Badges Earned</p>
                  <div className="flex flex-wrap gap-2">
                    {summary.metrics.badgesUnlocked.map((badge: string) => (
                      <span
                        key={badge}
                        className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Event Timeline */}
        {timeline.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Event Timeline</h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {timeline.map((event, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <span className="text-xs font-mono text-gray-500">
                    {formatDate(event.timestamp)}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">
                    {event.event}
                  </span>
                  {event.data && (
                    <span className="text-xs text-gray-600">
                      {JSON.stringify(event.data)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Export Button */}
        <div className="flex justify-center">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all shadow-lg border-0 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Export Analytics Data
          </button>
        </div>
      </div>
    </div>
  );
}
