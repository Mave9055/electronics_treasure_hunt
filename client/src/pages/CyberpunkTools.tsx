import { useState } from "react";
import { Wrench, Calculator, Zap, Cpu, Radio, AlertCircle } from "lucide-react";

const tools = [
  {
    id: "resistor",
    name: "Resistor Color Code",
    icon: Zap,
    color: "cyan",
    description: "Decode resistor color bands to find resistance values",
  },
  {
    id: "capacitor",
    name: "Capacitor Calculator",
    icon: Calculator,
    color: "magenta",
    description: "Calculate capacitance from color codes or values",
  },
  {
    id: "ohms",
    name: "Ohm's Law",
    icon: Radio,
    color: "purple",
    description: "Calculate voltage, current, or resistance",
  },
  {
    id: "power",
    name: "Power Calculator",
    icon: Cpu,
    color: "green",
    description: "Calculate power dissipation and efficiency",
  },
  {
    id: "simulator",
    name: "Circuit Simulator",
    icon: Wrench,
    color: "cyan",
    description: "Simulate basic circuits and visualize current flow",
  },
  {
    id: "troubleshoot",
    name: "Troubleshooting",
    icon: AlertCircle,
    color: "magenta",
    description: "Find solutions to common electronics problems",
  },
];

export default function CyberpunkTools() {
  const [activeTool, setActiveTool] = useState("resistor");
  const tool = tools.find((t) => t.id === activeTool);

  if (!tool) return null;

  const Icon = tool.icon;
  const colorClasses = {
    cyan: "border-cyan-500/50 text-cyan-400 bg-cyan-500/10",
    magenta: "border-magenta-500/50 text-magenta-400 bg-magenta-500/10",
    purple: "border-purple-500/50 text-purple-400 bg-purple-500/10",
    green: "border-green-500/50 text-green-400 bg-green-500/10",
  };

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
            <Wrench className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl font-orbitron font-black">
              <span className="text-cyan-400">TOOLS</span> <span className="text-magenta-400">&</span> <span className="text-purple-400">UTILITIES</span>
            </h1>
          </div>
          <p className="text-xl text-cyan-300/70">Essential calculators and simulators for electronics</p>
        </div>

        {/* Tool Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {tools.map((t) => {
            const ToolIcon = t.icon;
            const isActive = t.id === activeTool;
            const colors = colorClasses[t.color as keyof typeof colorClasses];

            return (
              <button
                key={t.id}
                onClick={() => setActiveTool(t.id)}
                className={`glass-card border-2 text-left transition-all cursor-pointer ${
                  isActive
                    ? `${colors} shadow-lg`
                    : "border-cyan-500/20 hover:border-cyan-500/50"
                }`}
              >
                <ToolIcon className={`w-6 h-6 mb-3 ${isActive ? "text-inherit" : "text-cyan-300/50"}`} />
                <p className={`font-orbitron font-bold text-sm ${isActive ? "text-inherit" : "text-cyan-300/70"}`}>
                  {t.name}
                </p>
                <p className="text-xs text-cyan-300/50 mt-2">{t.description}</p>
              </button>
            );
          })}
        </div>

        {/* Tool Content */}
        <div className={`glass-card border-2 ${colorClasses[tool.color as keyof typeof colorClasses]} animate-fade-in`}>
          <div className="flex items-center gap-3 mb-8">
            <Icon className="w-8 h-8" />
            <h2 className="text-3xl font-orbitron font-black">{tool.name}</h2>
          </div>

          {/* Tool-specific content */}
          {tool.id === "resistor" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-orbitron text-cyan-400 mb-4">COLOR BANDS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-cyan-300/70 mb-2">FIRST BAND</label>
                    <select className="w-full px-4 py-2 bg-black/30 border border-cyan-500/30 rounded text-cyan-400">
                      <option>Select color...</option>
                      <option>Brown (1)</option>
                      <option>Red (2)</option>
                      <option>Orange (3)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-cyan-300/70 mb-2">SECOND BAND</label>
                    <select className="w-full px-4 py-2 bg-black/30 border border-cyan-500/30 rounded text-cyan-400">
                      <option>Select color...</option>
                      <option>Brown (1)</option>
                      <option>Red (2)</option>
                      <option>Orange (3)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <p className="text-sm text-cyan-300/70 mb-2">RESULT</p>
                <p className="text-3xl font-orbitron text-cyan-400">12 Ω (±5%)</p>
              </div>
            </div>
          )}

          {tool.id === "ohms" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-magenta-300/70 mb-2">VOLTAGE (V)</label>
                  <input type="number" placeholder="5" className="w-full px-4 py-2 bg-black/30 border border-magenta-500/30 rounded text-magenta-400" />
                </div>
                <div>
                  <label className="block text-sm text-magenta-300/70 mb-2">CURRENT (A)</label>
                  <input type="number" placeholder="0.5" className="w-full px-4 py-2 bg-black/30 border border-magenta-500/30 rounded text-magenta-400" />
                </div>
                <div>
                  <label className="block text-sm text-magenta-300/70 mb-2">RESISTANCE (Ω)</label>
                  <input type="number" placeholder="10" className="w-full px-4 py-2 bg-black/30 border border-magenta-500/30 rounded text-magenta-400" />
                </div>
              </div>
              <button className="w-full py-3 bg-magenta-500 hover:bg-magenta-600 text-black font-orbitron font-bold rounded transition-all">
                CALCULATE
              </button>
            </div>
          )}

          {tool.id === "power" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-purple-300/70 mb-2">VOLTAGE (V)</label>
                  <input type="number" placeholder="12" className="w-full px-4 py-2 bg-black/30 border border-purple-500/30 rounded text-purple-400" />
                </div>
                <div>
                  <label className="block text-sm text-purple-300/70 mb-2">CURRENT (A)</label>
                  <input type="number" placeholder="2" className="w-full px-4 py-2 bg-black/30 border border-purple-500/30 rounded text-purple-400" />
                </div>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <p className="text-sm text-purple-300/70 mb-2">POWER DISSIPATION</p>
                <p className="text-3xl font-orbitron text-purple-400">24 W</p>
              </div>
            </div>
          )}

          {tool.id === "simulator" && (
            <div className="space-y-6">
              <div className="p-8 bg-black/30 border border-cyan-500/30 rounded-lg flex items-center justify-center min-h-64">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-cyan-400 font-mono">CIRCUIT SIMULATOR</p>
                  <p className="text-cyan-300/50 text-sm mt-2">Interactive visualization coming soon</p>
                </div>
              </div>
            </div>
          )}

          {tool.id === "troubleshoot" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-magenta-300/70 mb-2">DESCRIBE YOUR PROBLEM</label>
                <textarea
                  placeholder="e.g., LED not lighting up, circuit not responding..."
                  className="w-full px-4 py-3 bg-black/30 border border-magenta-500/30 rounded text-magenta-400 h-32"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-magenta-500 hover:bg-magenta-600 text-black font-orbitron font-bold rounded transition-all">
                FIND SOLUTIONS
              </button>
            </div>
          )}

          {tool.id === "capacitor" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-green-300/70 mb-2">CAPACITANCE (µF)</label>
                  <input type="number" placeholder="10" className="w-full px-4 py-2 bg-black/30 border border-green-500/30 rounded text-green-400" />
                </div>
                <div>
                  <label className="block text-sm text-green-300/70 mb-2">VOLTAGE RATING (V)</label>
                  <input type="number" placeholder="50" className="w-full px-4 py-2 bg-black/30 border border-green-500/30 rounded text-green-400" />
                </div>
              </div>
              <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-black font-orbitron font-bold rounded transition-all">
                CALCULATE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
