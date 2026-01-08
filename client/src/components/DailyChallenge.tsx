import { useState } from "react";
import { Flame, CheckCircle, XCircle, Gift } from "lucide-react";

interface DailyQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  date: string;
  bonusPoints: number;
}

const dailyChallenges: DailyQuestion[] = [
  {
    id: "daily-1",
    question: "What is the SI unit of electrical current?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    correctAnswer: 1,
    explanation: "The Ampere (A) is the SI unit of electric current. Named after André-Marie Ampère.",
    date: "2025-01-07",
    bonusPoints: 50
  },
  {
    id: "daily-2",
    question: "Which component stores electrical energy?",
    options: ["Resistor", "Transistor", "Capacitor", "Diode"],
    correctAnswer: 2,
    explanation: "Capacitors store electrical energy in an electric field between two plates.",
    date: "2025-01-06",
    bonusPoints: 50
  },
  {
    id: "daily-3",
    question: "What does LED stand for?",
    options: ["Light Emitting Device", "Light Emitting Diode", "Low Energy Device", "Light Electronic Display"],
    correctAnswer: 1,
    explanation: "LED stands for Light Emitting Diode - a semiconductor that emits light when current flows.",
    date: "2025-01-05",
    bonusPoints: 50
  }
];

export default function DailyChallenge() {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [longestStreak, setLongestStreak] = useState(15);
  const [totalBonusPoints, setTotalBonusPoints] = useState(350);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);

  const todayChallenge = dailyChallenges[0];

  const handleAnswer = (index: number) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
      const isCorrect = index === todayChallenge.correctAnswer;
      setCorrect(isCorrect);
      
      if (isCorrect) {
        setCurrentStreak(currentStreak + 1);
        setTotalBonusPoints(totalBonusPoints + todayChallenge.bonusPoints);
        if (currentStreak + 1 > longestStreak) {
          setLongestStreak(currentStreak + 1);
        }
      }
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Streak Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl p-6 border-2 border-red-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-red-600">Current Streak</p>
              <p className="text-4xl font-bold text-red-900 mt-2">{currentStreak}</p>
              <p className="text-xs text-red-700 mt-1">days in a row</p>
            </div>
            <Flame className="w-16 h-16 text-red-500 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-purple-600">Longest Streak</p>
              <p className="text-4xl font-bold text-purple-900 mt-2">{longestStreak}</p>
              <p className="text-xs text-purple-700 mt-1">personal record</p>
            </div>
            <div className="text-5xl">🔥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl p-6 border-2 border-yellow-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-yellow-600">Bonus Points</p>
              <p className="text-4xl font-bold text-yellow-900 mt-2">{totalBonusPoints}</p>
              <p className="text-xs text-yellow-700 mt-1">from daily challenges</p>
            </div>
            <Gift className="w-16 h-16 text-yellow-500 opacity-50" />
          </div>
        </div>
      </div>

      {/* Today's Challenge */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">⭐</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Today's Challenge</h3>
            <p className="text-sm text-gray-600">Answer correctly to maintain your streak and earn bonus points!</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 mb-6 border-2 border-blue-200">
          <p className="text-lg font-semibold text-gray-900 mb-6">{todayChallenge.question}</p>

          <div className="space-y-3 mb-6">
            {todayChallenge.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`w-full p-4 text-left rounded-lg border-2 font-semibold transition-all ${
                  selectedAnswer === index
                    ? index === todayChallenge.correctAnswer
                      ? "bg-green-100 border-green-500 text-green-900"
                      : "bg-red-100 border-red-500 text-red-900"
                    : answered && index === todayChallenge.correctAnswer
                    ? "bg-green-100 border-green-500 text-green-900"
                    : "bg-white border-gray-300 text-gray-900 hover:border-blue-500 hover:bg-blue-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                    {selectedAnswer === index && (
                      index === todayChallenge.correctAnswer ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <XCircle className="w-5 h-5" />
                      )
                    )}
                    {answered && index === todayChallenge.correctAnswer && selectedAnswer !== index && (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>

          {answered && (
            <div className={`rounded-lg p-4 ${correct ? "bg-green-50 border-l-4 border-green-500" : "bg-orange-50 border-l-4 border-orange-500"}`}>
              <p className={`font-semibold ${correct ? "text-green-900" : "text-orange-900"}`}>
                {correct ? "✅ Correct!" : "❌ Not quite right"}
              </p>
              <p className={`text-sm mt-2 ${correct ? "text-green-800" : "text-orange-800"}`}>
                {todayChallenge.explanation}
              </p>
              {correct && (
                <p className="text-sm font-bold text-green-700 mt-2">
                  🎁 +{todayChallenge.bonusPoints} bonus points!
                </p>
              )}
            </div>
          )}
        </div>

        {answered && (
          <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <strong>💡 Pro Tip:</strong> Come back tomorrow for a new daily challenge! 
              Maintain your streak to unlock special badges and earn extra points.
            </p>
          </div>
        )}
      </div>

      {/* Challenge History */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📅 Recent Challenges</h3>

        <div className="space-y-3">
          {dailyChallenges.map((challenge, index) => (
            <div key={challenge.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{challenge.question}</p>
                  <p className="text-sm text-gray-600 mt-1">{new Date(challenge.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl">
                    {index === 0 ? "⭐" : "✅"}
                  </div>
                  <p className="text-sm font-semibold text-blue-600 mt-1">+{challenge.bonusPoints} pts</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Streak Rewards */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Streak Rewards</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { streak: 3, reward: "Bronze Badge", icon: "🥉" },
            { streak: 7, reward: "Silver Badge", icon: "🥈" },
            { streak: 14, reward: "Gold Badge", icon: "🥇" },
            { streak: 30, reward: "Platinum Badge", icon: "💎" }
          ].map(item => (
            <div 
              key={item.streak}
              className={`rounded-lg p-4 text-center border-2 ${
                currentStreak >= item.streak 
                  ? "bg-white border-green-500" 
                  : "bg-gray-100 border-gray-300 opacity-60"
              }`}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-bold text-sm text-gray-900">{item.reward}</p>
              <p className="text-xs text-gray-600 mt-1">{item.streak} day streak</p>
              {currentStreak >= item.streak && (
                <p className="text-xs text-green-600 font-bold mt-2">✓ Unlocked</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
