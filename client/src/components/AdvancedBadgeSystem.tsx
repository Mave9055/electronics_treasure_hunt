import { Trophy, Star, Zap, Award, Target, BookOpen, Code, Wrench, Shield, Lightbulb } from "lucide-react";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  requirement: string;
  unlocked: boolean;
  progress: number;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
}

const badges: Badge[] = [
  {
    id: "first-quiz",
    name: "Quiz Starter",
    description: "Complete your first quiz",
    icon: "📝",
    color: "bg-blue-100",
    requirement: "Complete 1 quiz",
    unlocked: true,
    progress: 100,
    rarity: "common"
  },
  {
    id: "quiz-master",
    name: "Quiz Master",
    description: "Complete 10 quizzes",
    icon: "🎓",
    color: "bg-purple-100",
    requirement: "Complete 10 quizzes",
    unlocked: false,
    progress: 30,
    rarity: "rare"
  },
  {
    id: "perfect-score",
    name: "Perfect Score",
    description: "Score 100% on any quiz",
    icon: "💯",
    color: "bg-yellow-100",
    requirement: "100% on 1 quiz",
    unlocked: false,
    progress: 75,
    rarity: "rare"
  },
  {
    id: "fundamentals-expert",
    name: "Fundamentals Expert",
    description: "Pass all fundamentals quizzes",
    icon: "🧠",
    color: "bg-green-100",
    requirement: "Pass voltage, current, resistance",
    unlocked: true,
    progress: 100,
    rarity: "uncommon"
  },
  {
    id: "circuit-designer",
    name: "Circuit Designer",
    description: "Complete all circuit quizzes",
    icon: "⚡",
    color: "bg-orange-100",
    requirement: "Pass circuit basics & advanced",
    unlocked: false,
    progress: 50,
    rarity: "uncommon"
  },
  {
    id: "component-identifier",
    name: "Component Identifier",
    description: "Pass component identification quiz",
    icon: "🔍",
    color: "bg-indigo-100",
    requirement: "Pass component quiz",
    unlocked: true,
    progress: 100,
    rarity: "uncommon"
  },
  {
    id: "communication-pro",
    name: "Communication Pro",
    description: "Master UART and I²C protocols",
    icon: "📡",
    color: "bg-cyan-100",
    requirement: "Pass UART & I²C quizzes",
    unlocked: false,
    progress: 50,
    rarity: "rare"
  },
  {
    id: "power-expert",
    name: "Power Expert",
    description: "Master power supplies and batteries",
    icon: "🔋",
    color: "bg-red-100",
    requirement: "Pass power supply quiz",
    unlocked: false,
    progress: 25,
    rarity: "uncommon"
  },
  {
    id: "safety-first",
    name: "Safety First",
    description: "Pass the electronics safety quiz",
    icon: "🛡️",
    color: "bg-pink-100",
    requirement: "Pass safety quiz with 80%+",
    unlocked: true,
    progress: 100,
    rarity: "uncommon"
  },
  {
    id: "solder-master",
    name: "Solder Master",
    description: "Master soldering techniques",
    icon: "🔥",
    color: "bg-amber-100",
    requirement: "Pass soldering quiz",
    unlocked: false,
    progress: 40,
    rarity: "rare"
  },
  {
    id: "arduino-coder",
    name: "Arduino Coder",
    description: "Master Arduino programming basics",
    icon: "💻",
    color: "bg-teal-100",
    requirement: "Pass Arduino quiz",
    unlocked: false,
    progress: 60,
    rarity: "rare"
  },
  {
    id: "quick-learner",
    name: "Quick Learner",
    description: "Complete 3 quizzes in one day",
    icon: "⚡",
    color: "bg-lime-100",
    requirement: "3 quizzes in 24 hours",
    unlocked: false,
    progress: 33,
    rarity: "uncommon"
  },
  {
    id: "dedicated-student",
    name: "Dedicated Student",
    description: "Complete quizzes 7 days in a row",
    icon: "📚",
    color: "bg-violet-100",
    requirement: "7-day streak",
    unlocked: false,
    progress: 14,
    rarity: "epic"
  },
  {
    id: "knowledge-seeker",
    name: "Knowledge Seeker",
    description: "Complete 25 quizzes total",
    icon: "🔬",
    color: "bg-fuchsia-100",
    requirement: "Complete 25 quizzes",
    unlocked: false,
    progress: 12,
    rarity: "epic"
  },
  {
    id: "all-rounder",
    name: "All Rounder",
    description: "Complete quizzes from all categories",
    icon: "🌟",
    color: "bg-rose-100",
    requirement: "All 7 categories",
    unlocked: false,
    progress: 71,
    rarity: "epic"
  },
  {
    id: "perfectionist",
    name: "Perfectionist",
    description: "Score 90%+ on 5 quizzes",
    icon: "✨",
    color: "bg-sky-100",
    requirement: "90%+ on 5 quizzes",
    unlocked: false,
    progress: 20,
    rarity: "rare"
  },
  {
    id: "master-of-all",
    name: "Master of All",
    description: "Unlock 15 badges",
    icon: "👑",
    color: "bg-yellow-200",
    requirement: "Unlock 15 badges",
    unlocked: false,
    progress: 27,
    rarity: "legendary"
  },
  {
    id: "electronics-guru",
    name: "Electronics Guru",
    description: "Complete all quizzes with 80%+",
    icon: "🧙",
    color: "bg-purple-200",
    requirement: "All quizzes 80%+",
    unlocked: false,
    progress: 45,
    rarity: "legendary"
  },
  {
    id: "circuit-wizard",
    name: "Circuit Wizard",
    description: "Use circuit simulator 50+ times",
    icon: "🪄",
    color: "bg-indigo-200",
    requirement: "50 simulator uses",
    unlocked: false,
    progress: 18,
    rarity: "epic"
  },
  {
    id: "troubleshooter",
    name: "Troubleshooter",
    description: "Complete all troubleshooting guides",
    icon: "🔧",
    color: "bg-orange-200",
    requirement: "All guides completed",
    unlocked: false,
    progress: 50,
    rarity: "rare"
  }
];

const rarityColors = {
  common: "border-gray-400 bg-gray-50",
  uncommon: "border-green-400 bg-green-50",
  rare: "border-blue-400 bg-blue-50",
  epic: "border-purple-400 bg-purple-50",
  legendary: "border-yellow-400 bg-yellow-50"
};

const rarityGradients = {
  common: "from-gray-100 to-gray-200",
  uncommon: "from-green-100 to-green-200",
  rare: "from-blue-100 to-blue-200",
  epic: "from-purple-100 to-purple-200",
  legendary: "from-yellow-100 to-yellow-200"
};

export default function AdvancedBadgeSystem() {
  const unlockedCount = badges.filter(b => b.unlocked).length;
  const totalPoints = badges.reduce((sum, b) => sum + (b.unlocked ? 10 : 0), 0);

  return (
    <div className="w-full space-y-8">
      {/* Stats Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 border-2 border-blue-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-600">Badges Unlocked</p>
              <p className="text-3xl font-bold text-blue-900">{unlockedCount}/{badges.length}</p>
            </div>
            <Trophy className="w-12 h-12 text-blue-600 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 border-2 border-purple-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-purple-600">Total Points</p>
              <p className="text-3xl font-bold text-purple-900">{totalPoints}</p>
            </div>
            <Star className="w-12 h-12 text-purple-600 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 border-2 border-orange-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-orange-600">Completion</p>
              <p className="text-3xl font-bold text-orange-900">{Math.round((unlockedCount / badges.length) * 100)}%</p>
            </div>
            <Zap className="w-12 h-12 text-orange-600 opacity-50" />
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievement Badges</h3>

        {/* Unlocked Badges */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">🏆 Unlocked ({unlockedCount})</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {badges.filter(b => b.unlocked).map(badge => (
              <div
                key={badge.id}
                className={`bg-gradient-to-br ${rarityGradients[badge.rarity]} border-2 ${rarityColors[badge.rarity]} rounded-xl p-4 text-center hover:shadow-lg transition-all`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h5 className="font-bold text-sm text-gray-900">{badge.name}</h5>
                <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
                <div className="mt-3 inline-block px-2 py-1 bg-white bg-opacity-70 rounded text-xs font-semibold">
                  {badge.rarity.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locked Badges */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">🔒 Locked ({badges.filter(b => !b.unlocked).length})</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {badges.filter(b => !b.unlocked).map(badge => (
              <div
                key={badge.id}
                className="bg-gray-100 border-2 border-gray-300 rounded-xl p-4 text-center opacity-60 hover:opacity-80 transition-all"
              >
                <div className="text-4xl mb-2 filter grayscale">{badge.icon}</div>
                <h5 className="font-bold text-sm text-gray-700">{badge.name}</h5>
                <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
                <div className="mt-3 w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-gray-600 h-2 rounded-full transition-all"
                    style={{ width: `${badge.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2 font-semibold">{badge.progress}% Complete</p>
                <p className="text-xs text-gray-500 mt-1">{badge.requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badge Info */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
        <h4 className="font-bold text-gray-900 mb-3">📌 Badge Rarities</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-400"></div>
            <span className="text-gray-700">Common</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-400"></div>
            <span className="text-gray-700">Uncommon</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-400"></div>
            <span className="text-gray-700">Rare</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-purple-400"></div>
            <span className="text-gray-700">Epic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-400"></div>
            <span className="text-gray-700">Legendary</span>
          </div>
        </div>
      </div>
    </div>
  );
}
