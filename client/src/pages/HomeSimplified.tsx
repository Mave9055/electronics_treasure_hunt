import { Link } from "wouter";
import { BookOpen, Zap, Users, Trophy, Settings, HelpCircle, ArrowRight } from "lucide-react";

export default function HomeSimplified() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Electronics <span className="text-blue-600">the Easy Way</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Master practical electronics skills through interactive lessons, real projects, and hands-on tools. No experience needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/getting-started">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 border-0 cursor-pointer">
                  🚀 Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/interactive-masterclass">
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg transition-all flex items-center justify-center gap-2 border-0 cursor-pointer bg-transparent">
                  🛠️ Try Interactive Tools
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span><strong>12,500+</strong> learners</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span><strong>4.9/5</strong> rating</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8 flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="text-8xl mb-4">⚡</div>
                  <p className="text-gray-600 font-semibold">Electronics Learning Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Learning Paths */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <p className="text-xl text-gray-600 mb-12">Choose your path and start learning today</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Path 1 */}
            <Link href="/fundamentals">
              <button className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-300 hover:shadow-lg transition-all text-left border-0 cursor-pointer w-full">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fundamentals</h3>
                <p className="text-gray-700 mb-4">Learn the core concepts: voltage, current, resistance, and how circuits work.</p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  Start Learning <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </Link>

            {/* Path 2 */}
            <Link href="/interactive-masterclass">
              <button className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-300 hover:shadow-lg transition-all text-left border-0 cursor-pointer w-full">
                <div className="text-5xl mb-4">🛠️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Interactive Tools</h3>
                <p className="text-gray-700 mb-4">Use simulators, calculators, and breadboard designer to practice hands-on.</p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  Explore Tools <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </Link>

            {/* Path 3 */}
            <Link href="/gamification">
              <button className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-300 hover:shadow-lg transition-all text-left border-0 cursor-pointer w-full">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quizzes & Badges</h3>
                <p className="text-gray-700 mb-4">Test your knowledge, earn badges, and track your progress with daily challenges.</p>
                <div className="flex items-center gap-2 text-orange-600 font-semibold">
                  Start Quizzes <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Helpful Tools</h2>
          <p className="text-xl text-gray-600 mb-12">Quick access to troubleshooting, calculators, and guides</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🔧", label: "Troubleshooting", path: "/troubleshooting", desc: "Fix common problems" },
              { icon: "⚡", label: "Compatibility", path: "/compatibility-checker", desc: "Check parts work together" },
              { icon: "🧮", label: "Calculators", path: "/tools-calculators", desc: "Component tools" },
              { icon: "❌", label: "Error Codes", path: "/error-codes", desc: "Arduino errors explained" },
              { icon: "🎤", label: "DIY Microphones", path: "/phone-mic-salvage", desc: "Build recording mics" },
            ].map(tool => (
              <Link key={tool.path} href={tool.path}>
                <button className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all text-left border-0 cursor-pointer w-full">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{tool.label}</h3>
                  <p className="text-sm text-gray-600">{tool.desc}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Resources */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Community */}
            <Link href="/community">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-xl p-8 text-left border-2 border-white/30 transition-all border-0 cursor-pointer w-full">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-2">Community</h3>
                <p className="text-white/80 mb-4">See success stories from 12,500+ learners who've mastered electronics.</p>
                <span className="flex items-center gap-2 font-semibold">View Stories <ArrowRight className="w-4 h-4" /></span>
              </button>
            </Link>

            {/* Resources */}
            <Link href="/resources">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-xl p-8 text-left border-2 border-white/30 transition-all border-0 cursor-pointer w-full">
                <div className="text-5xl mb-4">📖</div>
                <h3 className="text-2xl font-bold mb-2">Resources</h3>
                <p className="text-white/80 mb-4">Datasheets, code examples, video tutorials, and project templates.</p>
                <span className="flex items-center gap-2 font-semibold">Access Resources <ArrowRight className="w-4 h-4" /></span>
              </button>
            </Link>

            {/* Profile */}
            <Link href="/profile">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-xl p-8 text-left border-2 border-white/30 transition-all border-0 cursor-pointer w-full">
                <div className="text-5xl mb-4">👤</div>
                <h3 className="text-2xl font-bold mb-2">My Profile</h3>
                <p className="text-white/80 mb-4">Track your progress, earn certificates, and manage your referrals.</p>
                <span className="flex items-center gap-2 font-semibold">View Profile <ArrowRight className="w-4 h-4" /></span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Common Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: "Do I need experience?", a: "No! This masterclass is designed for complete beginners. We start with the basics." },
              { q: "How long does it take?", a: "Learn at your own pace. Most people spend 2-4 hours per week and complete in 8-12 weeks." },
              { q: "Can I get a certificate?", a: "Yes! Complete all quizzes in a category to earn a downloadable certificate." },
              { q: "Is there support?", a: "Yes! Access our troubleshooting guides, community, and error code reference." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Master Electronics?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of learners and start your electronics journey today.</p>
          <Link href="/getting-started">
            <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-bold rounded-lg transition-all flex items-center justify-center gap-2 border-0 cursor-pointer mx-auto">
              🚀 Start Learning Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
