import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CertificationGenerator from "@/components/CertificationGenerator";
import DailyChallenge from "@/components/DailyChallenge";
import ReferralSystem from "@/components/ReferralSystem";
import { User, Award, Flame, Users } from "lucide-react";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [userName] = useState("John Doe");
  const [userEmail] = useState("john@example.com");
  const [joinDate] = useState("2024-12-15");
  const [totalPoints] = useState(1250);
  const [totalBadges] = useState(12);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container py-4">
          <h1 className="text-3xl font-bold text-gray-900">👤 My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your certificates, daily challenges, and referrals</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Profile Card */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 border-2 border-blue-300 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-lg">
                👨‍💼
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{userName}</h2>
                <p className="text-gray-700 mt-1">{userEmail}</p>
                <p className="text-sm text-gray-600 mt-2">Member since {new Date(joinDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Level</p>
              <p className="text-4xl font-bold text-purple-600">5</p>
              <p className="text-xs text-gray-600 mt-1">Electronics Expert</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
              <p className="text-sm text-gray-600">Total Points</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">{totalPoints}</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
              <p className="text-sm text-gray-600">Badges</p>
              <p className="text-2xl font-bold text-purple-600 mt-1">{totalBadges}</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
              <p className="text-sm text-gray-600">Quizzes Done</p>
              <p className="text-2xl font-bold text-orange-600 mt-1">18</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-green-300">
              <p className="text-sm text-gray-600">Referrals</p>
              <p className="text-2xl font-bold text-green-600 mt-1">3</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="profile" className="text-lg">
              📋 Profile
            </TabsTrigger>
            <TabsTrigger value="certificates" className="text-lg">
              🎓 Certificates
            </TabsTrigger>
            <TabsTrigger value="daily" className="text-lg">
              ⭐ Daily Challenge
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Your Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Quizzes Completed</span>
                    <span className="font-bold text-lg text-blue-600">18/30</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Average Score</span>
                    <span className="font-bold text-lg text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Learning Streak</span>
                    <span className="font-bold text-lg text-orange-600">7 days 🔥</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Categories Mastered</span>
                    <span className="font-bold text-lg text-purple-600">5/8</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📅 Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <div className="text-2xl">✅</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Completed Arduino Quiz</p>
                      <p className="text-xs text-gray-600">Today at 2:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <div className="text-2xl">🔥</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">7-Day Streak Milestone</p>
                      <p className="text-xs text-gray-600">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <div className="text-2xl">🏆</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Unlocked "Fundamentals Expert" Badge</p>
                      <p className="text-xs text-gray-600">3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">👥</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Referred Sarah Johnson</p>
                      <p className="text-xs text-gray-600">5 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Referral Quick Access */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🎁 Referral Program</h3>
                  <p className="text-gray-700">Invite friends and earn rewards! You've earned 300 points from referrals.</p>
                </div>
                <div className="text-6xl">👥</div>
              </div>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all">
                View Referral Details →
              </button>
            </div>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="space-y-8">
            <CertificationGenerator />
          </TabsContent>

          {/* Daily Challenge Tab */}
          <TabsContent value="daily" className="space-y-8">
            <DailyChallenge />
          </TabsContent>
        </Tabs>

        {/* Referral Section - Always Visible */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🎁 Referral Program</h2>
          <ReferralSystem />
        </div>
      </main>
    </div>
  );
}
