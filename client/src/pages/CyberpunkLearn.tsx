import { useState } from "react";
import { BookOpen, Zap, Radio, Cpu, Battery } from "lucide-react";

const phases = [
  {
    id: 1,
    title: "UART Logging",
    icon: Zap,
    color: "cyan",
    description: "Find secret messages on circuit boards using serial communication",
    lessons: [
      "Understanding UART Protocol",
      "Serial Communication Basics",
      "Reading Serial Data",
      "Debugging with Serial Monitor",
    ],
    duration: "2-3 hours",
  },
  {
    id: 2,
    title: "I²C Monitoring",
    icon: Radio,
    color: "magenta",
    description: "Learn inter-chip communication protocols",
    lessons: [
      "I²C Protocol Overview",
      "Master-Slave Communication",
      "Addressing Schemes",
      "Troubleshooting I²C",
    ],
    duration: "3-4 hours",
  },
  {
    id: 3,
    title: "Power Supply Design",
    icon: Battery,
    color: "purple",
    description: "Build and test power circuits",
    lessons: [
      "Voltage Regulation",
      "Current Limiting",
      "Power Dissipation",
      "Circuit Protection",
    ],
    duration: "3-4 hours",
  },
  {
    id: 4,
    title: "I²C Control",
    icon: Cpu,
    color: "green",
    description: "Practical device control via I²C",
    lessons: [
      "Device Control Basics",
      "Sensor Integration",
      "Real-time Monitoring",
      "Advanced Protocols",
    ],
    duration: "4-5 hours",
  },
];

export default function CyberpunkLearn() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = phases[activePhase];
  const Icon = phase.icon;

  const colorClasses = {
    cyan: {
      border: "border-cyan-500/50",
      text: "text-cyan-400",
      bg: "bg-cyan-500/10",
      button: "bg-cyan-500 hover:bg-cyan-600 text-black",
    },
    magenta: {
      border: "border-magenta-500/50",
      text: "text-magenta-400",
      bg: "bg-magenta-500/10",
      button: "bg-magenta-500 hover:bg-magenta-600 text-black",
    },
    purple: {
      border: "border-purple-500/50",
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      button: "bg-purple-500 hover:bg-purple-600 text-black",
    },
    green: {
      border: "border-green-500/50",
      text: "text-green-400",
      bg: "bg-green-500/10",
      button: "bg-green-500 hover:bg-green-600 text-black",
    },
  };

  const colors = colorClasses[phase.color as keyof typeof colorClasses];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-magenta-500/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl font-orbitron font-black">
              <span className="text-cyan-400">LEARNING</span> <span className="text-magenta-400">PATH</span>
            </h1>
          </div>
          <p className="text-xl text-cyan-300/70">Master electronics through 4 progressive phases</p>
        </div>

        {/* Phase Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {phases.map((p, i) => {
            const PhaseIcon = p.icon;
            const isActive = i === activePhase;
            const phaseColors = colorClasses[p.color as keyof typeof colorClasses];

            return (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`glass-card border-2 transition-all cursor-pointer ${
                  isActive
                    ? `${phaseColors.border} ${phaseColors.bg} shadow-lg`
                    : "border-cyan-500/20 hover:border-cyan-500/50"
                }`}
              >
                <PhaseIcon className={`w-6 h-6 mb-3 ${isActive ? phaseColors.text : "text-cyan-300/50"}`} />
                <p className={`font-orbitron font-bold text-sm ${isActive ? phaseColors.text : "text-cyan-300/70"}`}>
                  PHASE {p.id}
                </p>
                <p className="text-xs text-cyan-300/50 mt-1">{p.title}</p>
              </button>
            );
          })}
        </div>

        {/* Phase Content */}
        <div className={`glass-card border-2 ${colors.border} ${colors.bg} animate-fade-in`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Phase Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                  <h2 className={`text-3xl font-orbitron font-black ${colors.text}`}>PHASE {phase.id}</h2>
                </div>
                <h3 className="text-2xl font-orbitron text-white mb-4">{phase.title}</h3>
                <p className="text-cyan-300/70 leading-relaxed">{phase.description}</p>
              </div>

              <div className="space-y-3 pt-6 border-t border-cyan-500/20">
                <div>
                  <p className="text-xs text-cyan-300/50 uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-lg font-mono text-cyan-400">{phase.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-cyan-300/50 uppercase tracking-wider mb-1">Difficulty</p>
                  <div className="flex gap-1">
                    {[...Array(phase.id)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${colors.bg}`}></div>
                    ))}
                  </div>
                </div>
              </div>

              <button className={`w-full py-3 rounded-lg font-orbitron font-bold uppercase tracking-wider transition-all ${colors.button} shadow-lg`}>
                Start Phase {phase.id}
              </button>
            </div>

            {/* Right - Lessons */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-orbitron text-cyan-400 mb-6 uppercase tracking-wider">Lessons</h4>
              <div className="space-y-3">
                {phase.lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-pointer group"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-bold ${colors.bg} ${colors.text}`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-cyan-300 group-hover:text-cyan-200 transition">{lesson}</p>
                    </div>
                    <div className="text-cyan-300/30 group-hover:text-cyan-300/70 transition">→</div>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-8 pt-6 border-t border-cyan-500/20">
                <p className="text-xs text-cyan-300/50 uppercase tracking-wider mb-3">Your Progress</p>
                <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-${phase.color}-400 to-${phase.color}-600 w-0`}></div>
                </div>
                <p className="text-sm text-cyan-300/70 mt-2">Start this phase to track your progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass-card cyan-accent">
            <p className="text-xs text-cyan-300/50 uppercase tracking-wider mb-2">Total Duration</p>
            <p className="text-3xl font-orbitron text-cyan-400">12-16h</p>
          </div>
          <div className="glass-card magenta-accent">
            <p className="text-xs text-magenta-300/50 uppercase tracking-wider mb-2">Difficulty</p>
            <p className="text-3xl font-orbitron text-magenta-400">BEGINNER</p>
          </div>
          <div className="glass-card purple-accent">
            <p className="text-xs text-purple-300/50 uppercase tracking-wider mb-2">Total XP</p>
            <p className="text-3xl font-orbitron text-purple-400">500+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
