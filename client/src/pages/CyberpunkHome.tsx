import { useLocation } from "wouter";
import { Zap, Code2, Trophy, Users } from "lucide-react";

export default function CyberpunkHome() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-magenta-500/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-cyan-500/20 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-cyan-400" />
              <span className="font-orbitron font-bold text-xl text-cyan-400">ETH</span>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setLocation("/dashboard")} className="px-4 py-2 text-sm font-mono text-cyan-400 hover:text-magenta-400 transition">
                Dashboard
              </button>
              <button onClick={() => setLocation("/learn")} className="px-4 py-2 text-sm font-mono text-cyan-400 hover:text-magenta-400 transition">
                Learn
              </button>
              <button onClick={() => setLocation("/tools")} className="px-4 py-2 text-sm font-mono text-cyan-400 hover:text-magenta-400 transition">
                Tools
              </button>
              <button onClick={() => setLocation("/community")} className="px-4 py-2 text-sm font-mono text-cyan-400 hover:text-magenta-400 transition">
                Community
              </button>
              <button onClick={() => setLocation("/profile")} className="px-4 py-2 text-sm font-mono text-cyan-400 hover:text-magenta-400 transition">
                Profile
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full border border-cyan-500/50 text-cyan-400 text-sm font-mono">
                    // WELCOME TO THE FUTURE
                  </span>
                </div>
                <h1 className="text-6xl font-orbitron font-black leading-tight">
                  MASTER<br />
                  <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">ELECTRONICS</span>
                </h1>
                <p className="text-xl text-cyan-300/80 max-w-lg">
                  Learn practical electronics through interactive quests, real projects, and hands-on challenges. No experience required.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card cyan-accent">
                  <div className="text-2xl font-bold text-cyan-400">12.5K+</div>
                  <div className="text-xs text-cyan-300/60 uppercase tracking-wider">Learners</div>
                </div>
                <div className="glass-card cyan-accent">
                  <div className="text-2xl font-bold text-magenta-400">4.9/5</div>
                  <div className="text-xs text-magenta-300/60 uppercase tracking-wider">Rating</div>
                </div>
                <div className="glass-card cyan-accent">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-xs text-purple-300/60 uppercase tracking-wider">Free</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setLocation("/quick-start")}
                  className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg font-orbitron uppercase tracking-wider transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                >
                  ⚡ Start Challenge
                </button>
                <button
                  onClick={() => setLocation("/learn")}
                  className="px-8 py-4 border-2 border-magenta-500 hover:bg-magenta-500/10 text-magenta-400 font-bold rounded-lg font-orbitron uppercase tracking-wider transition-all"
                >
                  → Full Path
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin" style={{ animationDuration: "20s" }}></div>
                <div className="absolute inset-8 rounded-full border-2 border-magenta-500/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}></div>

                {/* Center Card */}
                <div className="relative glass-card cyan-accent m-8 text-center space-y-4">
                  <div className="text-5xl">⚡</div>
                  <h3 className="text-xl font-orbitron text-cyan-400">READY?</h3>
                  <p className="text-sm text-cyan-300/70">Complete 3 component challenges in 10 minutes</p>
                  <div className="pt-4 border-t border-cyan-500/20">
                    <div className="text-2xl font-bold text-magenta-400">🏆 +50 XP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 border-t border-cyan-500/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-orbitron text-center mb-16">
              <span className="text-cyan-400">WHY</span> <span className="text-magenta-400">CHOOSE</span> <span className="text-purple-400">US</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Code2, title: "Hands-On", desc: "Real projects with actual components" },
                { icon: Trophy, title: "Gamified", desc: "Earn badges and track progress" },
                { icon: Zap, title: "Fast", desc: "Learn at your own pace" },
                { icon: Users, title: "Community", desc: "Join 12,500+ learners" },
              ].map((feature, i) => (
                <div key={i} className="glass-card magenta-accent group hover:cyan-accent transition-all">
                  <feature.icon className="w-8 h-8 text-magenta-400 group-hover:text-cyan-400 mb-4 transition" />
                  <h4 className="font-orbitron text-magenta-400 group-hover:text-cyan-400 mb-2 transition">{feature.title}</h4>
                  <p className="text-sm text-cyan-300/60">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 border-t border-cyan-500/20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-orbitron">
              <span className="text-cyan-400">BEGIN</span> <span className="text-magenta-400">YOUR</span> <span className="text-purple-400">JOURNEY</span>
            </h2>
            <p className="text-xl text-cyan-300/80">
              No experience needed. Start with the 10-minute challenge and unlock your potential.
            </p>
            <button
              onClick={() => setLocation("/quick-start")}
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-black font-bold rounded-lg font-orbitron uppercase tracking-wider transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.6)]"
            >
              ⚡ START NOW
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
