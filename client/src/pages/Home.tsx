import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design Philosophy: Playful Adventure Theme
 * - Warm, inviting colors (oranges, greens, blues, yellows)
 * - Gamified learning experience with treasure hunt aesthetic
 * - Playful mascot character and animated rewards
 * - Hand-drawn style elements for a crafted, friendly feel
 */

export default function Home() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const togglePhase = (phase: number) => {
    setExpandedPhase(expandedPhase === phase ? null : phase);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-green-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              🤖
            </div>
            <h1 className="text-2xl font-bold text-orange-600">Electronics Treasure Hunt</h1>
          </div>
          <div className="text-sm text-gray-600 font-medium">Learn • Explore • Build</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Hero Text */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Master <span className="text-orange-600">Electronics</span> at Your Own Pace
                </h2>
                <p className="text-xl text-gray-700">
                  Learn practical skills by building real projects, not theory from textbooks.
                </p>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're curious about how technology works, want to build IoT devices, or just enjoy hands-on learning, this masterclass breaks down electronics into simple, understandable concepts. No prior experience needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/getting-started">
                  <a className="adventure-button">🎓 Getting Started</a>
                </Link>
                <Link href="/interactive-masterclass">
                  <a className="px-6 py-3 rounded-full font-semibold border-2 border-green-500 text-green-600 hover:bg-green-50 transition-all">
                    Interactive Tools
                  </a>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 flex-wrap">
                <Link href="/fundamentals">
                  <a className="text-sm px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all">
                    Fundamentals
                  </a>
                </Link>
                <Link href="/resources">
                  <a className="text-sm px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-all">
                    Resources
                  </a>
                </Link>
                <Link href="/community">
                  <a className="text-sm px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-all">
                    Community
                  </a>
                </Link>
                <Link href="/troubleshooting">
                  <a className="text-sm px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all">
                    Troubleshooting
                  </a>
                </Link>
                <Link href="/compatibility-checker">
                  <a className="text-sm px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-all">
                    Compatibility
                  </a>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <img src="/images/hJBSzOquQM0j.jpg" alt="Professional electronics workshop with adults" className="rounded-2xl shadow-2xl max-w-2xl w-full object-cover h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="container">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">🎯 What You'll Learn</h3>
            <p className="text-lg text-blue-800 leading-relaxed">
              This masterclass teaches you the fundamentals of electronics through hands-on projects. You'll understand how circuits work, learn to read datasheets, program microcontrollers, and build real devices like security cameras, WiFi sensors, and smart controllers. By the end, you'll have the skills to troubleshoot problems, design circuits, and bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Phase Icons Section */}
      <section className="py-12">
        <div className="container">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            📋 The Four Phases of Your Quest
          </h3>
          <div className="flex justify-center mb-8">
            <img
              src="/images/phase-icons.png"
              alt="Four phases: Secret Messages, Address Finder, Free Power, Control"
              className="w-full max-w-4xl drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Treasure Map - What to Look For */}
      <section className="py-12">
        <div className="container">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">🗺️ The Treasure Map: What to Look For</h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Before we start our adventure, we need to know what treasures to hunt for. Here's what we can salvage from old electronics:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Old Laptops */}
            <div className="treasure-card">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">💻 Old Laptops</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-2xl">🔩</span>
                  <span><strong>Tiny Screws:</strong> Perfect for taking apart other things</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">❄️</span>
                  <span><strong>Cooling Fans:</strong> Can power small projects or cool things down</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🔌</span>
                  <span><strong>USB Ports:</strong> Great for connecting to computers</span>
                </li>
              </ul>
            </div>

            {/* Android Devices */}
            <div className="treasure-card">
              <h4 className="text-2xl font-bold text-green-600 mb-4">📱 Old Phones & Tablets</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-2xl">🔋</span>
                  <span><strong>Battery:</strong> Portable power source (ask a grown-up!)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">⚡</span>
                  <span><strong>Charging Board:</strong> Keeps batteries safe while charging</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">📺</span>
                  <span><strong>Screen:</strong> Could display camera output!</span>
                </li>
              </ul>
            </div>

            {/* Bluetooth Speakers */}
            <div className="treasure-card">
              <h4 className="text-2xl font-bold text-blue-600 mb-4">🔊 Bluetooth Speakers</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-2xl">🔋</span>
                  <span><strong>18650 Batteries:</strong> Powerful power source</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">⚙️</span>
                  <span><strong>Charging Circuit:</strong> Converts power to different levels</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🧵</span>
                  <span><strong>Wires & Solder:</strong> Connects everything together</span>
                </li>
              </ul>
            </div>

            {/* Headphones */}
            <div className="treasure-card">
              <h4 className="text-2xl font-bold text-purple-600 mb-4">🎧 Headphones & Earbuds</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-2xl">🧵</span>
                  <span><strong>Fine Wires:</strong> Super thin for delicate connections</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🧲</span>
                  <span><strong>Magnets:</strong> Hold things in place</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">📦</span>
                  <span><strong>Case:</strong> Perfect for your project enclosure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Phases */}
      <section className="py-12">
        <div className="container">
          <h3 className="text-3xl font-bold mb-12 text-gray-900">🚀 The Four Phases Explained</h3>

          {/* Phase 1 */}
          <div className="mb-6">
            <button
              onClick={() => togglePhase(1)}
              className="w-full treasure-card flex items-center justify-between hover:bg-orange-50"
            >
              <div className="flex items-center gap-4">
                <div className="phase-badge">1</div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-orange-600">The Secret Message Spy Tool (UART Logging)</h4>
                  <p className="text-gray-600">Learn to read the secret messages from the camera chip</p>
                </div>
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedPhase === 1 ? "rotate-180" : ""}`}
              />
            </button>
            {expandedPhase === 1 && (
              <div className="mt-4 p-6 bg-orange-50 rounded-2xl border-2 border-orange-200 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Every chip talks to itself and other chips using a secret language. We want to build a "spy tool" that listens to those messages!
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-bold text-gray-900 mb-2">🔍 What You Need:</h5>
                  <p className="text-gray-700">
                    A special chip that can translate the camera chip's secret language into something your computer can understand. Look for chips labeled <strong>FTDI, CH340, CP2102, or PL2303</strong> on old circuit boards.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-bold text-gray-900 mb-2">✨ The Trick:</h5>
                  <p className="text-gray-700">
                    If you can't find one of those chips, you can use an <strong>Arduino</strong> board instead! It can act as a translator between the camera chip and your computer.
                  </p>
                </div>
                <Link href="/phase1">
                  <a className="adventure-button inline-block">Learn Phase 1 →</a>
                </Link>
              </div>
            )}
          </div>

          {/* Phase 2 */}
          <div className="mb-6">
            <button
              onClick={() => togglePhase(2)}
              className="w-full treasure-card flex items-center justify-between hover:bg-green-50"
            >
              <div className="flex items-center gap-4">
                <div className="phase-badge" style={{ background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)" }}>
                  2
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-green-600">The Address Book Finder (I²C Monitoring)</h4>
                  <p className="text-gray-600">Find the chip's special "phone number" so we can send it commands</p>
                </div>
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedPhase === 2 ? "rotate-180" : ""}`}
              />
            </button>
            {expandedPhase === 2 && (
              <div className="mt-4 p-6 bg-green-50 rounded-2xl border-2 border-green-200 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Some chips use a faster, group-chat style of talking called <strong>I²C</strong>. Every chip has a special address (like a phone number).
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-bold text-gray-900 mb-2">📞 What This Does:</h5>
                  <p className="text-gray-700">
                    We'll use an Arduino with a special program called an <strong>I²C Scanner</strong>. It tries every possible "phone number" until it finds the camera chip and tells us its address!
                  </p>
                </div>
                <Link href="/phase2">
                  <a className="adventure-button inline-block">Learn Phase 2 →</a>
                </Link>
              </div>
            )}
          </div>

          {/* Phase 3 */}
          <div className="mb-6">
            <button
              onClick={() => togglePhase(3)}
              className="w-full treasure-card flex items-center justify-between hover:bg-blue-50"
            >
              <div className="flex items-center gap-4">
                <div className="phase-badge" style={{ background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)" }}>
                  3
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-blue-600">Free Power! (Power Supply)</h4>
                  <p className="text-gray-600">Get safe, free power from old gadgets to run our projects</p>
                </div>
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedPhase === 3 ? "rotate-180" : ""}`}
              />
            </button>
            {expandedPhase === 3 && (
              <div className="mt-4 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Every project needs power! The good news is we can get safe, free power from old gadgets.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-bold text-gray-900 mb-2">🔋 Option 1: Battery Power</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Find a <strong>18650 battery</strong> (from Bluetooth speakers)</li>
                    <li>• Find the <strong>TP4056 charging board</strong> (keeps battery safe)</li>
                    <li>• Add an <strong>AMS1117-3.3</strong> chip (changes power to the right level)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <h5 className="font-bold text-gray-900 mb-2">⚡ Option 2: USB Power</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cut an old USB cable (ask a grown-up!)</li>
                    <li>• Find the <strong>Red wire</strong> (+5V power)</li>
                    <li>• Add the <strong>AMS1117-3.3</strong> chip to make it safe</li>
                  </ul>
                </div>
                <Link href="/phase3">
                  <a className="adventure-button inline-block">Learn Phase 3 →</a>
                </Link>
              </div>
            )}
          </div>

          {/* Phase 4 */}
          <div className="mb-6">
            <button
              onClick={() => togglePhase(4)}
              className="w-full treasure-card flex items-center justify-between hover:bg-purple-50"
            >
              <div className="flex items-center gap-4">
                <div className="phase-badge" style={{ background: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)" }}>
                  4
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-purple-600">Control! (If I²C Works)</h4>
                  <p className="text-gray-600">Send commands to the chip and make it do what we want</p>
                </div>
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedPhase === 4 ? "rotate-180" : ""}`}
              />
            </button>
            {expandedPhase === 4 && (
              <div className="mt-4 p-6 bg-purple-50 rounded-2xl border-2 border-purple-200 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Once we know the chip's address and can send it messages, we can control it! This is where the real magic happens.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h5 className="font-bold text-gray-900 mb-2">🎮 What We Can Do:</h5>
                  <p className="text-gray-700">
                    We can use a salvaged microcontroller (like an ESP32 from an old smart bulb) to send commands to the camera chip. We'll program it using the free <strong>Arduino IDE</strong> and start building amazing things!
                  </p>
                </div>
                <Link href="/phase4">
                  <a className="adventure-button inline-block">Learn Phase 4 →</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Action Plan */}
      <section className="py-12 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="container">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">🎯 Your Immediate Action Plan</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="treasure-card">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-xl font-bold text-orange-600 mb-3">Step 1: The Treasure Hunt</h4>
              <p className="text-gray-700 leading-relaxed">
                Go through your old electronics with a grown-up and look for the parts listed above. Take pictures of any circuit boards you find!
              </p>
            </div>

            <div className="treasure-card">
              <div className="text-4xl mb-4">📸</div>
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 2: Document Your Finds</h4>
              <p className="text-gray-700 leading-relaxed">
                Send pictures of the circuit boards and parts you find. We can identify useful chips and help you plan your next moves!
              </p>
            </div>

            <div className="treasure-card">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 3: Build Your Spy Tool</h4>
              <p className="text-gray-700 leading-relaxed">
                Once we identify the parts, we'll build the UART logger from scavenged parts and start reading secret messages!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Safety Notice */}
      <section className="py-12">
        <div className="container">
          <div className="bg-red-50 rounded-3xl p-8 md:p-12 border-2 border-red-300">
            <h3 className="text-2xl font-bold text-red-900 mb-4">⚠️ Important Safety Rules</h3>
            <ul className="space-y-3 text-red-800 text-lg">
              <li className="flex gap-3">
                <span className="font-bold">1.</span>
                <span><strong>Always ask a grown-up</strong> before taking apart any electronics</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">2.</span>
                <span><strong>Be careful with batteries</strong> - they can be dangerous if mishandled</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">3.</span>
                <span><strong>Never touch power sources directly</strong> - always have adult supervision</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">4.</span>
                <span><strong>Wash your hands</strong> after handling old electronics (they can have dust and chemicals)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Your Electronics Adventure?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your treasure hunt today and unlock the secrets of electronics! Remember, every expert started as a curious explorer.
          </p>
          <Link href="/phase1">
            <a className="adventure-button text-lg px-8 py-4">
              Begin Your Quest Now! 🚀
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">About This Guide</h4>
              <p className="text-sm leading-relaxed">
                This guide teaches kids how to salvage electronics parts and learn about how technology works through hands-on exploration.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/phase1"><a className="hover:text-white transition">Start Quest</a></Link></li>
                <li><Link href="/parts-gallery"><a className="hover:text-white transition">Parts Gallery</a></Link></li>
                <li><Link href="/"><a className="hover:text-white transition">Home</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Remember</h4>
              <p className="text-sm leading-relaxed">
                Always ask a grown-up for help, be safe, and have fun learning about electronics! 🤖
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>
              Made with ❤️ for curious young explorers • Electronics Treasure Hunt © 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
