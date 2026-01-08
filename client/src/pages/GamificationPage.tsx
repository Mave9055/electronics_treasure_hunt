import { useState } from "react";
import ExpandedQuizSystem from "@/components/ExpandedQuizSystem";
import AdvancedBadgeSystem from "@/components/AdvancedBadgeSystem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GamificationPage() {
  const [activeTab, setActiveTab] = useState("quizzes");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container py-4">
          <h1 className="text-3xl font-bold text-gray-900">
            🎮 Gamification & Achievements
          </h1>
          <p className="text-gray-600 mt-2">
            Test your knowledge, earn badges, and track your progress
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="quizzes" className="text-lg">
              📝 Quizzes
            </TabsTrigger>
            <TabsTrigger value="badges" className="text-lg">
              🏆 Badges & Achievements
            </TabsTrigger>
          </TabsList>

          {/* Quizzes Tab */}
          <TabsContent value="quizzes" className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  📚 Knowledge Quizzes
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Test your understanding of electronics concepts with our comprehensive quiz system. 
                  Each quiz covers different topics from fundamentals to advanced programming. 
                  Pass 70% or higher to earn points and unlock badges!
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-3">💡 How It Works</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ <strong>10 Comprehensive Quizzes</strong> - Covering all major topics</li>
                  <li>✅ <strong>Multiple Difficulty Levels</strong> - Beginner to Advanced</li>
                  <li>✅ <strong>Instant Feedback</strong> - See explanations for each answer</li>
                  <li>✅ <strong>Progress Tracking</strong> - Monitor your learning journey</li>
                  <li>✅ <strong>Earn Points</strong> - 100-150 points per quiz</li>
                </ul>
              </div>

              <ExpandedQuizSystem />
            </div>
          </TabsContent>

          {/* Badges Tab */}
          <TabsContent value="badges" className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  🏆 Achievement System
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Unlock 20+ unique badges as you progress through your electronics learning journey. 
                  Each badge represents a specific achievement or milestone. Collect them all to become 
                  an Electronics Master!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300">
                  <h3 className="font-bold text-green-900 mb-2">🎯 Achievement Categories</h3>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• <strong>Learning Badges</strong> - Complete quizzes and lessons</li>
                    <li>• <strong>Mastery Badges</strong> - Achieve high scores</li>
                    <li>• <strong>Streak Badges</strong> - Consistent daily learning</li>
                    <li>• <strong>Challenge Badges</strong> - Complete special tasks</li>
                    <li>• <strong>Expert Badges</strong> - Master all content</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
                  <h3 className="font-bold text-purple-900 mb-2">✨ Rarity Levels</h3>
                  <ul className="space-y-1 text-sm text-purple-800">
                    <li>🟩 <strong>Common</strong> - Easy to unlock</li>
                    <li>🟩 <strong>Uncommon</strong> - Moderate challenge</li>
                    <li>🟦 <strong>Rare</strong> - Significant effort</li>
                    <li>🟪 <strong>Epic</strong> - Major achievement</li>
                    <li>🟨 <strong>Legendary</strong> - Master level</li>
                  </ul>
                </div>
              </div>

              <AdvancedBadgeSystem />
            </div>
          </TabsContent>
        </Tabs>

        {/* Leaderboard Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🏅 Community Leaderboard
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-orange-300">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Rank</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Learner</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Points</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Badges</th>
                  <th className="text-center py-3 px-4 font-bold text-gray-900">Quizzes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: "Electronics Master", points: 2850, badges: 18, quizzes: 25 },
                  { rank: 2, name: "Circuit Wizard", points: 2650, badges: 16, quizzes: 23 },
                  { rank: 3, name: "Tech Explorer", points: 2450, badges: 14, quizzes: 21 },
                  { rank: 4, name: "You (Current)", points: 650, badges: 5, quizzes: 6 },
                  { rank: 5, name: "Curious Learner", points: 450, badges: 3, quizzes: 4 },
                ].map((entry) => (
                  <tr
                    key={entry.rank}
                    className={`border-b border-gray-200 hover:bg-orange-50 transition-all ${
                      entry.name === "You (Current)" ? "bg-yellow-50 font-bold" : ""
                    }`}
                  >
                    <td className="py-4 px-4">
                      <span className="text-2xl">
                        {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : entry.rank}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900">{entry.name}</td>
                    <td className="py-4 px-4 text-center font-semibold text-orange-600">{entry.points}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                        {entry.badges}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                        {entry.quizzes}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-sm text-blue-800">
              💡 <strong>Pro Tip:</strong> Keep learning and completing quizzes to climb the leaderboard! 
              Earn more points and unlock exclusive badges as you progress.
            </p>
          </div>
        </div>

        {/* Progress Tips */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 border-2 border-green-400">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="font-bold text-green-900 mb-2">Track Progress</h3>
            <p className="text-sm text-green-800">
              Monitor your learning journey with detailed progress statistics and completion percentages.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 border-2 border-blue-400">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-blue-900 mb-2">Set Goals</h3>
            <p className="text-sm text-blue-800">
              Challenge yourself to unlock specific badges and reach new milestones in your electronics education.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-400">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold text-purple-900 mb-2">Compete & Share</h3>
            <p className="text-sm text-purple-800">
              Compare your achievements with other learners and share your progress on social media.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
