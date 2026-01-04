import { Link } from "wouter";
import CompatibilityChecker from "@/components/CompatibilityChecker";

export default function CompatibilityCheckerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                🔌
              </div>
              <h1 className="text-xl font-bold text-white">Compatibility Checker</h1>
            </a>
          </Link>
          <div className="text-sm text-slate-400">Verify Your Parts Work Together</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Parts <span className="text-orange-400">Compatibility</span> Checker
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Before you build, verify that all your components work together. Check voltage levels, current draw, pin availability, and protocol compatibility instantly.
          </p>
        </div>

        {/* Main Tool */}
        <div className="mb-16">
          <CompatibilityChecker />
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 What We Check</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">✓</span>
                <div>
                  <p className="font-bold text-white">Voltage Compatibility</p>
                  <p className="text-sm text-slate-400">Ensures all parts can handle your power supply voltage</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">✓</span>
                <div>
                  <p className="font-bold text-white">Current Draw</p>
                  <p className="text-sm text-slate-400">Calculates total current to prevent overload</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">✓</span>
                <div>
                  <p className="font-bold text-white">Pin Availability</p>
                  <p className="text-sm text-slate-400">Verifies you have enough pins for all components</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">✓</span>
                <div>
                  <p className="font-bold text-white">Protocol Conflicts</p>
                  <p className="text-sm text-slate-400">Checks I2C, SPI, and other communication protocols</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">💡 Common Scenarios</h3>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-1">Scenario 1: LED + Arduino + Battery</p>
                <p className="text-sm text-slate-300">
                  Add Arduino Uno, Red LED, 1kΩ Resistor, and 9V Battery. Checker confirms compatibility.
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-1">Scenario 2: Multiple Sensors</p>
                <p className="text-sm text-slate-300">
                  Add ESP32, DHT22, and BMP280 sensors. Checker verifies I2C sharing and power requirements.
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-1">Scenario 3: Power-Hungry Project</p>
                <p className="text-sm text-slate-300">
                  Add servo, relay, and multiple LEDs. Checker warns if total current exceeds supply.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-500/30 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">🚀 Pro Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-green-300 font-bold mb-2">Voltage Levels Matter</p>
              <p className="text-slate-300 text-sm">
                3.3V parts (ESP32, sensors) can't handle 5V. Always check before connecting. Use a voltage divider if needed.
              </p>
            </div>
            <div>
              <p className="text-green-300 font-bold mb-2">Current Draw Adds Up</p>
              <p className="text-slate-300 text-sm">
                Each component draws current. Servos and motors use a lot. Make sure your power supply can handle the total.
              </p>
            </div>
            <div>
              <p className="text-green-300 font-bold mb-2">I2C Sharing is Powerful</p>
              <p className="text-slate-300 text-sm">
                Multiple I2C sensors can share just 2 wires (SDA & SCL). Each needs a unique address though.
              </p>
            </div>
            <div>
              <p className="text-green-300 font-bold mb-2">PWM Pins Are Limited</p>
              <p className="text-slate-300 text-sm">
                Arduino Uno has only 6 PWM pins. If you need to control multiple LEDs, plan ahead.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Build Your Circuit?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/interactive-masterclass">
              <a className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
                Interactive Tools →
              </a>
            </Link>
            <Link href="/troubleshooting">
              <a className="px-8 py-3 border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 font-bold rounded-lg transition-colors">
                Troubleshooting Guide
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
