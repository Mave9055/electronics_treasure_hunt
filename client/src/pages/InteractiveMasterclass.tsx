import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import CircuitSimulator from "@/components/CircuitSimulator";
import ChipIdentifier from "@/components/ChipIdentifier";
import AchievementSystem from "@/components/AchievementSystem";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import ProjectShowcase from "@/components/ProjectShowcase";

/**
 * Interactive Masterclass Page
 * The heart of the adult-friendly, interactive learning experience
 */

export default function InteractiveMasterclass() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
              <ChevronLeft className="w-5 h-5" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-white">Interactive Masterclass</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">
                Learn Electronics the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Interactive Way</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Hands-on tools and real projects. No boring theory. Just practical skills you can use immediately.
              </p>
            </div>
            <div>
              <img src="/images/DC1uqVTTJUj6.jpg" alt="Professional electronics hands-on learning" className="rounded-2xl shadow-2xl w-full object-cover h-80" />
            </div>
          </div>
        </div>

        {/* Section 1: Circuit Simulator */}
        <section className="mb-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">⚡ Section 1: Circuit Simulator</h3>
            <p className="text-slate-300">
              Understand the foundation of all electronics. See how electricity flows through a circuit and powers devices.
            </p>
          </div>
          <CircuitSimulator />
        </section>

        {/* Section 2: Chip Identifier */}
        <section className="mb-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">🔍 Section 2: Chip Identifier</h3>
            <p className="text-slate-300">
              Found a mysterious chip? Search our database to learn what it does, where it's used, and why it matters.
            </p>
          </div>
          <ChipIdentifier />
        </section>

        {/* Section 3: Achievement System */}
        <section className="mb-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">🏆 Section 3: Your Progress</h3>
            <p className="text-slate-300">
              Unlock achievements as you learn. Earn points, track your progress, and see how far you've come!
            </p>
          </div>
          <AchievementSystem />
        </section>

        {/* Section 4: Interactive Quiz */}
        <section className="mb-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">🧠 Section 4: Test Your Knowledge</h3>
            <p className="text-slate-300">
              Take fun quizzes to test what you've learned. No pressure - these are just for fun!
            </p>
          </div>
          <InteractiveQuiz />
        </section>

        {/* Section 5: Project Showcase */}
        <section className="mb-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">🚀 Section 5: Real Projects</h3>
            <p className="text-slate-300">
              See what real people have built. Get inspired and find your next project!
            </p>
          </div>
          <ProjectShowcase />
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">📚 Your Learning Path</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                phase: "Phase 1",
                title: "Secret Messages",
                description: "Learn to read what chips are saying",
                icon: "🔍",
                status: "completed",
              },
              {
                phase: "Phase 2",
                title: "Address Finder",
                description: "Find a chip's communication address",
                icon: "📞",
                status: "completed",
              },
              {
                phase: "Phase 3",
                title: "Free Power",
                description: "Build safe power supplies",
                icon: "⚡",
                status: "in-progress",
              },
              {
                phase: "Phase 4",
                title: "Control",
                description: "Send commands to chips",
                icon: "🎮",
                status: "locked",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all ${
                  item.status === "completed"
                    ? "bg-gradient-to-br from-green-900 to-emerald-900 border-green-500 shadow-lg"
                    : item.status === "in-progress"
                    ? "bg-gradient-to-br from-blue-900 to-indigo-900 border-blue-500 shadow-lg"
                    : "bg-slate-700 border-slate-600 opacity-60"
                }`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-xs font-bold text-slate-300 mb-1">{item.phase}</p>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-300 mb-4">{item.description}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-slate-300">
                    {item.status === "completed" ? "✓ Completed" : item.status === "in-progress" ? "In Progress" : "Locked"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips & Tricks */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">💡 Pro Tips for Adults</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-6 border-2 border-purple-500">
              <h4 className="text-xl font-bold text-white mb-3">🧠 Think Like an Engineer</h4>
              <p className="text-slate-300 leading-relaxed">
                Electronics is just organized electricity. Every device is just a clever way to control where electricity goes and what it does.
                Once you understand this, everything makes sense.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl p-6 border-2 border-cyan-500">
              <h4 className="text-xl font-bold text-white mb-3">🔧 Start Simple, Build Complex</h4>
              <p className="text-slate-300 leading-relaxed">
                Don't jump to advanced projects. Master the basics first. A simple LED circuit teaches you more than a complex robot.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-6 border-2 border-orange-500">
              <h4 className="text-xl font-bold text-white mb-3">⚠️ Safety First, Always</h4>
              <p className="text-slate-300 leading-relaxed">
                Respect electricity. It's powerful and can be dangerous. Always double-check connections before powering anything on.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-900 to-green-900 rounded-2xl p-6 border-2 border-emerald-500">
              <h4 className="text-xl font-bold text-white mb-3">🎯 Learn by Doing</h4>
              <p className="text-slate-300 leading-relaxed">
                Reading about electronics is one thing. Building something is completely different. Get your hands dirty and experiment!
              </p>
            </div>
          </div>
        </section>

        {/* Real Projects */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">🚀 Real Projects You Can Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "DIY Security Camera",
                description: "Build a camera that records video and stores it on an SD card",
                difficulty: "Intermediate",
                time: "4-6 hours",
                icon: "📷",
              },
              {
                title: "WiFi Temperature Monitor",
                description: "Create a sensor that sends temperature data to your phone",
                difficulty: "Intermediate",
                time: "3-4 hours",
                icon: "🌡️",
              },
              {
                title: "Smart Light Controller",
                description: "Control LED lights from your phone or voice commands",
                difficulty: "Advanced",
                time: "6-8 hours",
                icon: "💡",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border-2 border-slate-600 hover:border-amber-400 transition-all"
              >
                <div className="text-4xl mb-3">{project.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    {project.time}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg transition-all">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl p-12 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to Master Electronics?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              You've got the tools, the knowledge, and the interactive lessons. Now it's time to build something amazing!
            </p>
            <Link href="/phase1">
              <a className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all text-lg">
                Start Your First Project 🚀
              </a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
