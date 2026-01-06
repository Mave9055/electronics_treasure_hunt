import { Link } from "wouter";
import ComponentCalculators from "@/components/ComponentCalculators";

export default function ToolsCalculators() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                🧮
              </div>
              <h1 className="text-xl font-bold text-white">Tools & Calculators</h1>
            </a>
          </Link>
          <div className="text-sm text-slate-400">Quick Reference Tools</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Electronics <span className="text-orange-400">Tools</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Quick reference calculators and tools to help you identify components and calculate values instantly.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="mb-16">
          <ComponentCalculators />
        </div>

        {/* Quick Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">🔴 Resistor Color Codes</h3>
            <p className="text-slate-300 mb-4">
              Resistors use colored bands to indicate their resistance value. Most resistors have 4 or 5 bands.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">
                <strong className="text-orange-400">Band 1:</strong> First digit (tens)
              </p>
              <p className="text-slate-400">
                <strong className="text-orange-400">Band 2:</strong> Second digit (ones)
              </p>
              <p className="text-slate-400">
                <strong className="text-orange-400">Band 3:</strong> Multiplier (×10, ×100, etc.)
              </p>
              <p className="text-slate-400">
                <strong className="text-orange-400">Band 4:</strong> Tolerance (accuracy)
              </p>
            </div>
            <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
              <p className="text-blue-300 text-sm">
                <strong>Example:</strong> Brown-Black-Red-Gold = 10 × 100 Ω ±5% = 1kΩ ±5%
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">⚪ Capacitor Values</h3>
            <p className="text-slate-300 mb-4">
              Capacitors are measured in Farads. Most electronics use much smaller units.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">
                <strong className="text-orange-400">pF:</strong> Picofarad (10⁻¹² F) - RF circuits
              </p>
              <p className="text-slate-400">
                <strong className="text-orange-400">nF:</strong> Nanofarad (10⁻⁹ F) - Filtering
              </p>
              <p className="text-slate-400">
                <strong className="text-orange-400">µF:</strong> Microfarad (10⁻⁶ F) - Smoothing
              </p>
              <p className="text-slate-400">
                <strong className="text-orange-400">F:</strong> Farad (1 F) - Very rare
              </p>
            </div>
            <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
              <p className="text-blue-300 text-sm">
                <strong>Common:</strong> 0.1µF for decoupling, 10µF for smoothing, 100µF for filtering
              </p>
            </div>
          </div>
        </div>

        {/* More Tools Coming */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/30 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">🔧 More Tools Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="font-bold text-purple-300 mb-1">Voltage Divider Calculator</p>
              <p className="text-sm text-slate-400">Calculate output voltage for voltage divider circuits</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="font-bold text-purple-300 mb-1">Ohm's Law Calculator</p>
              <p className="text-sm text-slate-400">Calculate voltage, current, or resistance instantly</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="font-bold text-purple-300 mb-1">LED Current Limiter</p>
              <p className="text-sm text-slate-400">Calculate resistor value for LED circuits</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <p className="font-bold text-purple-300 mb-1">Frequency Calculator</p>
              <p className="text-sm text-slate-400">Calculate frequency from period or wavelength</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Apply What You've Learned?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/interactive-masterclass">
              <a className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
                Interactive Tools →
              </a>
            </Link>
            <Link href="/compatibility-checker">
              <a className="px-8 py-3 border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 font-bold rounded-lg transition-colors">
                Compatibility Checker
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
