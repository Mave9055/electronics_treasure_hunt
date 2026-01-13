import { useState, useEffect } from "react";
import { Trophy, Star, Zap, Award } from "lucide-react";
import { getAllBadges, getTotalPoints, getRarityColor, getRarityTextColor } from "@/lib/badgeUtils";

/**
 * Achievement System
 * Gamification to keep adults engaged and motivated
 * Now reads from localStorage via badgeUtils
 */

export default function AchievementSystem() {
  const [badges, setBadges] = useState<any[]>([]);
  const [selectedBadge, setSelectedBadge] = useState<any | null>(null);
  const [totalPoints, setTotalPoints] = useState(0);

  // Load badges from localStorage on mount
  useEffect(() => {
    const allBadges = getAllBadges();
    setBadges(allBadges);
    setTotalPoints(getTotalPoints());
  }, []);

  const unlockedCount = badges.filter((b) => b.unlocked).length;
  const progressPercentage = badges.length > 0 ? (unlockedCount / badges.length) * 100 : 0;

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-amber-600" />
          <h3 className="text-2xl font-bold text-gray-900">Your Achievement Journey</h3>
        </div>
        <p className="text-gray-600">
          Unlock achievements as you progress through the masterclass. Each achievement earns you points and bragging rights!
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 border-2 border-amber-200">
          <div className="text-3xl font-bold text-amber-600">{unlockedCount}</div>
          <p className="text-gray-600 text-sm">Achievements Unlocked</p>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full transition-all"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border-2 border-amber-200">
          <div className="text-3xl font-bold text-orange-600">{totalPoints}</div>
          <p className="text-gray-600 text-sm">Total Points Earned</p>
          <p className="text-xs text-gray-500 mt-2">Keep learning to earn more!</p>
        </div>

        <div className="bg-white rounded-xl p-4 border-2 border-amber-200">
          <div className="text-3xl font-bold text-yellow-600">{Math.floor(progressPercentage)}%</div>
          <p className="text-gray-600 text-sm">Completion Rate</p>
          <p className="text-xs text-gray-500 mt-2">{badges.length - unlockedCount} to go!</p>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {badges.map((badge) => (
          <button
            key={badge.id}
            onClick={() => setSelectedBadge(badge)}
            className={`p-4 rounded-xl transition-all transform hover:scale-105 border-2 ${
              badge.unlocked
                ? `bg-gradient-to-br ${getRarityColor(badge.rarity)} border-yellow-400 shadow-lg`
                : "bg-gray-100 border-gray-300 opacity-50"
            }`}
          >
            <div className="text-4xl mb-2">{badge.icon}</div>
            <p className="font-bold text-sm text-gray-900 line-clamp-2">{badge.name}</p>
            {badge.unlocked && (
              <div className="mt-2 flex items-center justify-center gap-1">
                <Star className="w-3 h-3 text-yellow-600" />
                <span className="text-xs font-bold text-yellow-600">{badge.points} pts</span>
              </div>
            )}
            {!badge.unlocked && <p className="text-xs text-gray-500 mt-2">Locked</p>}
          </button>
        ))}
      </div>

      {/* Detail View */}
      {selectedBadge && (
        <div
          className={`rounded-2xl p-6 text-white ${
            selectedBadge.unlocked
              ? `bg-gradient-to-br ${getRarityColor(selectedBadge.rarity)}`
              : "bg-gradient-to-br from-gray-400 to-gray-600"
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-5xl mb-3">{selectedBadge.icon}</div>
              <h2 className="text-3xl font-bold">{selectedBadge.name}</h2>
            </div>
            {selectedBadge.unlocked && <Award className="w-8 h-8 text-yellow-300" />}
          </div>

          <p className="text-white/90 text-lg mb-4">{selectedBadge.description}</p>

          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="font-bold text-lg">{selectedBadge.points} Points</span>
          </div>

          {selectedBadge.rarity && (
            <div className="mb-4 inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
              {selectedBadge.rarity.charAt(0).toUpperCase() + selectedBadge.rarity.slice(1)} Rarity
            </div>
          )}

          {selectedBadge.unlocked ? (
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-bold text-white mb-2">✨ Congratulations!</p>
              <p className="text-white/90">
                You've unlocked this achievement! Keep going to unlock the remaining achievements and become a true Electronics Master.
              </p>
              {selectedBadge.unlockedAt && (
                <p className="text-white/70 text-sm mt-2">
                  Unlocked on {new Date(selectedBadge.unlockedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          ) : (
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-bold text-white mb-2">🔒 Locked</p>
              <p className="text-white/90">
                Complete the required tasks to unlock this achievement and earn {selectedBadge.points} points!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Leaderboard Teaser */}
      <div className="mt-8 bg-white rounded-xl p-6 border-2 border-amber-200">
        <h4 className="font-bold text-gray-900 mb-3">🏆 Quick Stats</h4>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Your Rank:</strong>{" "}
            {unlockedCount === 0
              ? "Beginner Explorer"
              : unlockedCount <= 3
                ? "Novice Maker"
                : unlockedCount <= 6
                  ? "Intermediate Maker"
                  : "Advanced Explorer"}
            {unlockedCount > 0 && " (Keep learning to rank up!)"}
          </p>
          <p>
            <strong>Next Milestone:</strong> Unlock{" "}
            {unlockedCount < 5 ? `${5 - unlockedCount} more` : "all"} achievements to reach "Master Maker"
          </p>
          <p>
            <strong>Estimated Time to Master:</strong> 4-6 weeks of consistent learning
          </p>
        </div>
      </div>
    </div>
  );
}
