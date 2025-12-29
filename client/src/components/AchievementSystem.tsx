import { useState } from "react";
import { Trophy, Star, Zap, Award } from "lucide-react";

/**
 * Achievement System
 * Gamification to keep adults engaged and motivated
 */

const achievements = [
  {
    id: 1,
    name: "First Steps",
    description: "Complete Phase 1 - Read your first secret message",
    icon: "👣",
    unlocked: true,
    points: 100,
  },
  {
    id: 2,
    name: "Address Detective",
    description: "Complete Phase 2 - Find a chip's I²C address",
    icon: "🔍",
    unlocked: true,
    points: 150,
  },
  {
    id: 3,
    name: "Power Master",
    description: "Complete Phase 3 - Build a power supply",
    icon: "⚡",
    unlocked: false,
    points: 150,
  },
  {
    id: 4,
    name: "Circuit Wizard",
    description: "Complete Phase 4 - Send commands to a chip",
    icon: "🧙",
    unlocked: false,
    points: 200,
  },
  {
    id: 5,
    name: "Salvage Expert",
    description: "Identify 5 different components",
    icon: "🔧",
    unlocked: true,
    points: 75,
  },
  {
    id: 6,
    name: "Safety First",
    description: "Read all safety guidelines",
    icon: "🛡️",
    unlocked: true,
    points: 50,
  },
  {
    id: 7,
    name: "Project Builder",
    description: "Complete your first real project",
    icon: "🚀",
    unlocked: false,
    points: 250,
  },
  {
    id: 8,
    name: "Master Maker",
    description: "Complete all 4 phases and 3 projects",
    icon: "👑",
    unlocked: false,
    points: 500,
  },
];

export default function AchievementSystem() {
  const [selectedAchievement, setSelectedAchievement] = useState<(typeof achievements)[0] | null>(null);

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalPoints = achievements.filter((a) => a.unlocked).reduce((sum, a) => sum + a.points, 0);
  const progressPercentage = (unlockedCount / achievements.length) * 100;

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
          <p className="text-xs text-gray-500 mt-2">{achievements.length - unlockedCount} to go!</p>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {achievements.map((achievement) => (
          <button
            key={achievement.id}
            onClick={() => setSelectedAchievement(achievement)}
            className={`p-4 rounded-xl transition-all transform hover:scale-105 ${
              achievement.unlocked
                ? "bg-gradient-to-br from-amber-200 to-orange-200 border-2 border-orange-400 shadow-lg"
                : "bg-gray-100 border-2 border-gray-300 opacity-50"
            }`}
          >
            <div className="text-4xl mb-2">{achievement.icon}</div>
            <p className="font-bold text-sm text-gray-900 line-clamp-2">{achievement.name}</p>
            {achievement.unlocked && (
              <div className="mt-2 flex items-center justify-center gap-1">
                <Star className="w-3 h-3 text-yellow-600" />
                <span className="text-xs font-bold text-yellow-600">{achievement.points} pts</span>
              </div>
            )}
            {!achievement.unlocked && (
              <p className="text-xs text-gray-500 mt-2">Locked</p>
            )}
          </button>
        ))}
      </div>

      {/* Detail View */}
      {selectedAchievement && (
        <div
          className={`rounded-2xl p-6 text-white ${
            selectedAchievement.unlocked
              ? "bg-gradient-to-br from-amber-400 to-orange-500"
              : "bg-gradient-to-br from-gray-400 to-gray-600"
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-5xl mb-3">{selectedAchievement.icon}</div>
              <h2 className="text-3xl font-bold">{selectedAchievement.name}</h2>
            </div>
            {selectedAchievement.unlocked && (
              <Award className="w-8 h-8 text-yellow-300" />
            )}
          </div>

          <p className="text-white/90 text-lg mb-4">{selectedAchievement.description}</p>

          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="font-bold text-lg">{selectedAchievement.points} Points</span>
          </div>

          {selectedAchievement.unlocked ? (
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-bold text-white mb-2">✨ Congratulations!</p>
              <p className="text-white/90">
                You've unlocked this achievement! Keep going to unlock the remaining achievements and become a true Electronics Master.
              </p>
            </div>
          ) : (
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-bold text-white mb-2">🔒 Locked</p>
              <p className="text-white/90">
                Complete the required tasks to unlock this achievement and earn {selectedAchievement.points} points!
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
            <strong>Your Rank:</strong> Beginner Explorer (Keep learning to rank up!)
          </p>
          <p>
            <strong>Next Milestone:</strong> Unlock 5 achievements to reach "Intermediate Maker"
          </p>
          <p>
            <strong>Estimated Time to Master:</strong> 4-6 weeks of consistent learning
          </p>
        </div>
      </div>
    </div>
  );
}
