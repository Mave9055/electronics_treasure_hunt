import { ChevronLeft, Lightbulb, Zap, Target } from "lucide-react";
import { Link } from "wouter";

/**
 * Getting Started Guide for Adults
 * Engaging, humorous, and practical introduction to electronics
 */

export default function GettingStarted() {
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
          <h1 className="text-2xl font-bold text-white">Getting Started</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Electronics Adventure</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            You're about to discover that electronics isn't magic—it's just organized electricity. And yes, you can absolutely learn this.
          </p>
        </div>

        {/* The Truth About Electronics */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">💡 The Truth About Electronics</h3>
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 border-2 border-blue-500 mb-6">
            <h4 className="text-2xl font-bold text-white mb-4">Here's the secret nobody tells you:</h4>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Electronics is just electricity following paths. That's it. Seriously. Your phone, your laptop, your smart fridge—they're all just 
              clever ways to control where electricity goes and what it does along the way.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              If you can understand water flowing through pipes, you can understand electronics. The only difference is electricity is invisible 
              and moves really fast. But the principles? Exactly the same.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-900 to-emerald-900 rounded-2xl p-6 border-2 border-green-500">
              <Lightbulb className="w-8 h-8 text-green-400 mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">It's Not Magic</h4>
              <p className="text-slate-300">
                Every "magical" device is just following simple rules. Once you know the rules, you can build anything.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900 to-violet-900 rounded-2xl p-6 border-2 border-purple-500">
              <Zap className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">You Already Know This</h4>
              <p className="text-slate-300">
                You understand how light switches work, right? That's basically electronics. Everything else is just more complex versions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-6 border-2 border-orange-500">
              <Target className="w-8 h-8 text-orange-400 mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">You Can Build Cool Stuff</h4>
              <p className="text-slate-300">
                By the end of this masterclass, you'll build real projects that actually work. Not toys. Real stuff.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">📚 What You'll Actually Learn</h3>
          <div className="space-y-4">
            {[
              {
                title: "How Electricity Actually Works",
                description: "Not the boring physics version. The practical, useful version that helps you build things.",
              },
              {
                title: "How to Read a Circuit",
                description: "Circuits look intimidating, but they're just maps. We'll teach you to read them like a treasure map.",
              },
              {
                title: "How to Identify Components",
                description: "Found a mystery chip? We'll teach you how to figure out what it does and if it's useful.",
              },
              {
                title: "How to Build Real Projects",
                description: "Security cameras, WiFi sensors, smart lights—you'll build real stuff that actually works.",
              },
              {
                title: "How to Troubleshoot When Things Break",
                description: "And they will break. But that's where the real learning happens. We'll teach you how to fix it.",
              },
              {
                title: "How to Think Like an Engineer",
                description: "The most valuable skill. How to approach problems, test solutions, and iterate until it works.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-xl p-6 border-l-4 border-amber-500 hover:bg-slate-600 transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What You Need */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">🛠️ What You Need to Get Started</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border-2 border-slate-600">
              <h4 className="text-2xl font-bold text-white mb-6">Essential Tools</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-2xl">🔌</span>
                  <div>
                    <p className="font-bold text-white">USB Cable</p>
                    <p className="text-sm">Any USB cable you have lying around</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="font-bold text-white">Computer</p>
                    <p className="text-sm">Windows, Mac, or Linux. Doesn't matter.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="font-bold text-white">Arduino (Optional)</p>
                    <p className="text-sm">$10-15. Or salvage one from old electronics!</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border-2 border-slate-600">
              <h4 className="text-2xl font-bold text-white mb-6">Nice to Have</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <p className="font-bold text-white">Soldering Iron</p>
                    <p className="text-sm">$20-50. Makes connecting wires permanent.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <p className="font-bold text-white">Multimeter</p>
                    <p className="text-sm">$15-30. Helps you debug problems.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">📦</span>
                  <div>
                    <p className="font-bold text-white">Component Kit</p>
                    <p className="text-sm">$20-50. LEDs, resistors, buttons, etc.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-amber-900/30 border-2 border-amber-600 rounded-xl p-6">
            <p className="text-amber-200 text-lg">
              <strong>Pro Tip:</strong> You don't need to buy anything to start learning! Use our interactive simulator to practice first. 
              Once you're confident, then invest in real components.
            </p>
          </div>
        </section>

        {/* Your Learning Path */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">🗺️ Your Learning Path</h3>
          <div className="space-y-4">
            {[
              {
                phase: "Week 1-2",
                title: "Fundamentals",
                description: "Understand how electricity works, learn basic components, and play with the circuit simulator.",
                icon: "📖",
              },
              {
                phase: "Week 3-4",
                title: "Build Your First Project",
                description: "Create a simple LED circuit, then a more complex one. Get comfortable with soldering.",
                icon: "🔨",
              },
              {
                phase: "Week 5-6",
                title: "Microcontrollers",
                description: "Learn Arduino, write your first program, and control real hardware with code.",
                icon: "🤖",
              },
              {
                phase: "Week 7-8",
                title: "Real Projects",
                description: "Build a security camera, WiFi sensor, or smart device. Show off your creation!",
                icon: "🚀",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl p-6 border-2 border-slate-600">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      <span className="text-sm font-bold bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full">
                        {item.phase}
                      </span>
                    </div>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Fears (Addressed) */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">😰 Common Fears (Don't Worry!)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 border-2 border-red-600 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-300 mb-2">❌ "I'm not smart enough"</h4>
              <p className="text-slate-300">
                If you can understand how a light switch works, you're smart enough. Electronics is logical, not mysterious.
              </p>
            </div>
            <div className="bg-red-900/20 border-2 border-red-600 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-300 mb-2">❌ "I'll break something"</h4>
              <p className="text-slate-300">
                Yes, you will. That's how you learn. We'll teach you how to fix it. Breaking things is part of the process.
              </p>
            </div>
            <div className="bg-red-900/20 border-2 border-red-600 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-300 mb-2">❌ "It's too expensive"</h4>
              <p className="text-slate-300">
                Nope. You can start with $0 (use our simulator). Real components are cheap. A complete project costs $20-50.
              </p>
            </div>
            <div className="bg-red-900/20 border-2 border-red-600 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-300 mb-2">❌ "I don't have time"</h4>
              <p className="text-slate-300">
                Learn at your own pace. 30 minutes a week is enough to make progress. No pressure, no deadlines.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl p-12 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to Start?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              You've got everything you need. The knowledge, the tools, and the confidence. Now let's build something amazing.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/interactive-masterclass">
                <a className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all text-lg">
                  Enter the Masterclass 🎓
                </a>
              </Link>
              <Link href="/phase1">
                <a className="bg-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/30 transition-all text-lg border-2 border-white">
                  Jump to Phase 1 🚀
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section>
          <div className="bg-slate-700 rounded-2xl p-8 border-2 border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 Final Thoughts</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              This isn't just a course. It's a journey. You're going to learn something that will change how you see the world. 
              Every device you see, you'll understand how it works. Every problem, you'll know how to solve it.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Most importantly, you're going to build something with your own hands. Something that actually works. Something you can be proud of.
            </p>
            <p className="text-lg text-amber-400 font-bold mt-6">
              Let's do this. 💪
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
