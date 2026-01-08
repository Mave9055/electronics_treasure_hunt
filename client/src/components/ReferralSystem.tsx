import { useState } from "react";
import { Copy, Share2, Users, Gift, TrendingUp } from "lucide-react";

interface Referral {
  id: string;
  name: string;
  email: string;
  status: "pending" | "active" | "completed";
  joinDate: string;
  rewardStatus: string;
  pointsEarned: number;
}

export default function ReferralSystem() {
  const [referralCode] = useState("ETH2025JOHN");
  const [copied, setCopied] = useState(false);
  const [referrals, setReferrals] = useState<Referral[]>([
    {
      id: "ref-1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      status: "completed",
      joinDate: "2025-01-05",
      rewardStatus: "Completed 5 quizzes",
      pointsEarned: 200
    },
    {
      id: "ref-2",
      name: "Mike Chen",
      email: "mike@example.com",
      status: "active",
      joinDate: "2025-01-03",
      rewardStatus: "Completed 2 quizzes",
      pointsEarned: 100
    },
    {
      id: "ref-3",
      name: "Emma Wilson",
      email: "emma@example.com",
      status: "pending",
      joinDate: "2025-01-07",
      rewardStatus: "Awaiting first quiz",
      pointsEarned: 0
    }
  ]);

  const totalReferrals = referrals.length;
  const activeReferrals = referrals.filter(r => r.status === "active" || r.status === "completed").length;
  const totalPointsEarned = referrals.reduce((sum, r) => sum + r.pointsEarned, 0);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnSocial = (platform: string) => {
    const message = `Join me on Electronics Treasure Hunt! Use my referral code ${referralCode} to get started. Learn electronics the fun way! 🎓⚡`;
    const encodedMessage = encodeURIComponent(message);
    
    const urls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedMessage}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=https://electronics-masterclass.com&quote=${encodedMessage}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=https://electronics-masterclass.com`,
      email: `mailto:?subject=Join Electronics Treasure Hunt&body=${encodedMessage}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Referral Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 border-2 border-blue-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-600">Total Referrals</p>
              <p className="text-4xl font-bold text-blue-900 mt-2">{totalReferrals}</p>
              <p className="text-xs text-blue-700 mt-1">people invited</p>
            </div>
            <Users className="w-16 h-16 text-blue-500 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 border-2 border-green-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-green-600">Active Referrals</p>
              <p className="text-4xl font-bold text-green-900 mt-2">{activeReferrals}</p>
              <p className="text-xs text-green-700 mt-1">learning now</p>
            </div>
            <TrendingUp className="w-16 h-16 text-green-500 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6 border-2 border-yellow-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-yellow-600">Points Earned</p>
              <p className="text-4xl font-bold text-yellow-900 mt-2">{totalPointsEarned}</p>
              <p className="text-xs text-yellow-700 mt-1">from referrals</p>
            </div>
            <Gift className="w-16 h-16 text-yellow-500 opacity-50" />
          </div>
        </div>
      </div>

      {/* Your Referral Code */}
      <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🎁 Your Referral Code</h3>

        <div className="bg-white rounded-xl p-6 border-2 border-purple-300 mb-6">
          <p className="text-sm text-gray-600 mb-3">Share this code with friends to earn rewards:</p>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
              <p className="text-3xl font-bold text-purple-900 text-center font-mono">{referralCode}</p>
            </div>
            <button
              onClick={copyToClipboard}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center gap-2"
            >
              <Copy className="w-5 h-5" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-4">Share on social media:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => shareOnSocial('twitter')}
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Twitter
            </button>
            <button
              onClick={() => shareOnSocial('facebook')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Facebook
            </button>
            <button
              onClick={() => shareOnSocial('linkedin')}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              LinkedIn
            </button>
            <button
              onClick={() => shareOnSocial('email')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Email
            </button>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
          <p className="text-sm text-purple-900">
            <strong>💡 How It Works:</strong> When someone uses your code to join, you both earn rewards! 
            You get points for every quiz they complete, and they get a bonus welcome package.
          </p>
        </div>
      </div>

      {/* Referral Rewards */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🏆 Referral Rewards</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border-2 border-green-300">
            <p className="font-bold text-gray-900 mb-2">When They Join</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ They get 50 bonus points</li>
              <li>✅ They unlock "Welcome" badge</li>
              <li>✅ You get 25 points</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border-2 border-green-300">
            <p className="font-bold text-gray-900 mb-2">For Each Quiz They Complete</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ They earn normal quiz points</li>
              <li>✅ You earn 10% bonus points</li>
              <li>✅ Both get streak bonuses</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border-2 border-green-300">
          <p className="font-bold text-gray-900 mb-3">Milestone Rewards</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { count: 1, reward: "Bronze Referrer", icon: "🥉" },
              { count: 3, reward: "Silver Referrer", icon: "🥈" },
              { count: 5, reward: "Gold Referrer", icon: "🥇" },
              { count: 10, reward: "Platinum Referrer", icon: "💎" }
            ].map(item => (
              <div 
                key={item.count}
                className={`rounded-lg p-3 text-center border-2 ${
                  activeReferrals >= item.count 
                    ? "bg-green-100 border-green-500" 
                    : "bg-gray-100 border-gray-300 opacity-60"
                }`}
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="font-bold text-xs text-gray-900">{item.reward}</p>
                <p className="text-xs text-gray-600">{item.count} referrals</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your Referrals */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">👥 Your Referrals</h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 font-bold text-gray-900">Name</th>
                <th className="text-left py-3 px-4 font-bold text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-bold text-gray-900">Joined</th>
                <th className="text-left py-3 px-4 font-bold text-gray-900">Progress</th>
                <th className="text-center py-3 px-4 font-bold text-gray-900">Points</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map(ref => (
                <tr key={ref.id} className="border-b border-gray-200 hover:bg-gray-50 transition-all">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-gray-900">{ref.name}</p>
                      <p className="text-xs text-gray-600">{ref.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      ref.status === "completed" ? "bg-green-100 text-green-800" :
                      ref.status === "active" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {ref.status === "completed" ? "✅ Completed" :
                       ref.status === "active" ? "🔄 Active" :
                       "⏳ Pending"}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    {new Date(ref.joinDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">
                    {ref.rewardStatus}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-bold">
                      +{ref.pointsEarned}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {referrals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👥</div>
            <p className="text-gray-600 text-lg">No referrals yet. Share your code to get started!</p>
          </div>
        )}
      </div>

      {/* Referral Tips */}
      <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-300">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Referral Tips</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">🎯</div>
              <div>
                <p className="font-bold text-gray-900">Share with Friends</p>
                <p className="text-sm text-gray-700">Tell friends and colleagues about your learning journey</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">📱</div>
              <div>
                <p className="font-bold text-gray-900">Use Social Media</p>
                <p className="text-sm text-gray-700">Share on Twitter, LinkedIn, and Facebook for maximum reach</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">✉️</div>
              <div>
                <p className="font-bold text-gray-900">Email Your Network</p>
                <p className="text-sm text-gray-700">Send personalized emails to people interested in electronics</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">🤝</div>
              <div>
                <p className="font-bold text-gray-900">Community Groups</p>
                <p className="text-sm text-gray-700">Share in maker communities, Discord, and forums</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
