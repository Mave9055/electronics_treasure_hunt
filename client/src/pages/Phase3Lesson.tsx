import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

/**
 * Phase 3 Lesson: Free Power! (Power Supply)
 * Design Philosophy: Educational, playful, with real component images
 */

export default function Phase3Lesson() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              <ChevronLeft className="w-5 h-5" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Phase 3: Free Power</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="phase-badge" style={{ background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)" }}>
              ⚡
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Free Power! (Power Supply)
            </h2>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Every electronic project needs power! The good news is you can get safe, free power from old gadgets. No need to buy expensive batteries - we'll salvage them from the trash!
          </p>
        </div>

        {/* What You'll Learn */}
        <section className="mb-12 treasure-card">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">📚 What You'll Learn</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to safely extract batteries from old gadgets</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>What voltage regulators do and why they're important</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to build a safe power supply from salvaged parts</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to use USB power as a backup option</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to test your power supply safely</span>
            </li>
          </ul>
        </section>

        {/* Understanding Power */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">⚡ Understanding Power and Voltage</h3>
          <div className="treasure-card mb-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Power is like water flowing through a pipe. Voltage is the pressure, and current is how much water flows. Every chip needs a specific voltage to work safely.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-800 font-semibold mb-3">💡 Common Voltages:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>3.3V:</strong> Most modern chips (including camera sensors)</li>
                <li>• <strong>5V:</strong> Arduino boards and older chips</li>
                <li>• <strong>3.7V:</strong> Lithium batteries (phone, Bluetooth speaker)</li>
                <li>• <strong>12V:</strong> Some motors and power supplies</li>
              </ul>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              If you give a chip the wrong voltage, it can break! That's why we use voltage regulators to change the power to exactly what the chip needs.
            </p>
          </div>
        </section>

        {/* Option 1: Battery Power */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔋 Option 1: Battery Power (The Portable Way)</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            This is the best option because your project can run anywhere without being plugged in!
          </p>

          <div className="space-y-6">
            {/* Find the Battery */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 1: Find an 18650 Battery</h4>
              <p className="text-gray-700 mb-4">
                Look for a large cylindrical battery in old Bluetooth speakers, power banks, or flashlights. It's usually about the size of your pinky finger.
              </p>
              <img
                src="/images/tp4056-18650.jpg"
                alt="18650 battery with TP4056 charging module"
                className="w-full rounded-lg border-2 border-blue-200 mb-4"
              />
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-800 font-semibold mb-2">⚠️ Important: Battery Safety</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Never short-circuit a battery</strong> (don't touch both ends with metal)</li>
                  <li>• <strong>Don't puncture or crush the battery</strong></li>
                  <li>• <strong>Always ask a grown-up for help</strong> when handling batteries</li>
                  <li>• <strong>Wear safety glasses</strong> - batteries can explode if damaged</li>
                </ul>
              </div>
            </div>

            {/* Find the Charging Module */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 2: Find the TP4056 Charging Module</h4>
              <p className="text-gray-700 mb-4">
                Usually in the same device as the battery, you'll find a small blue circuit board called a TP4056. This is a charging controller that keeps the battery safe.
              </p>
              <img
                src="/images/tp4056-module.jpg"
                alt="TP4056 charging module"
                className="w-full rounded-lg border-2 border-blue-200 mb-4"
              />
              <p className="text-gray-700">
                This module has connections for:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-3 space-y-2">
                <p className="text-gray-800"><strong>Input:</strong> Where you charge it (USB)</p>
                <p className="text-gray-800"><strong>Output:</strong> Where power comes out (to your project)</p>
                <p className="text-gray-800"><strong>Battery:</strong> Where the battery connects</p>
              </div>
            </div>

            {/* Add Voltage Regulator */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 3: Add the Voltage Regulator (AMS1117-3.3)</h4>
              <p className="text-gray-700 mb-4">
                The battery gives you 3.7V, but your camera chip needs exactly 3.3V. You need a tiny chip called an AMS1117-3.3 to convert the power safely.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                <p className="text-gray-800 font-semibold mb-2">Where to find it:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Old USB hubs</li>
                  <li>• WiFi routers</li>
                  <li>• Broken power supplies</li>
                  <li>• Old computer motherboards</li>
                </ul>
              </div>
              <p className="text-gray-700">
                It's a tiny black chip with 3 pins. Connect it like this:
              </p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 mt-3">
                <pre>{`TP4056 Output + → AMS1117 Input
TP4056 Output - → AMS1117 Ground
AMS1117 Output → Your Camera Chip (3.3V)`}</pre>
              </div>
            </div>

            {/* Final Setup */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 4: Connect Everything Together</h4>
              <p className="text-gray-700 mb-4">
                Here's the complete power chain:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-2">
                <p className="text-gray-800"><strong>Battery</strong> → TP4056 Module → AMS1117 Regulator → Camera Chip</p>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-800 font-semibold mb-2">✓ Pro Tip</p>
                <p className="text-gray-700">
                  Add a switch between the battery and TP4056 so you can turn your project on and off!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Option 2: USB Power */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔌 Option 2: USB Power (The Easy Way)</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            If you don't have a battery, you can use power from a USB cable! This is perfect for testing because you can plug it into any computer or USB charger.
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 1: Find an Old USB Cable</h4>
              <p className="text-gray-700 mb-4">
                Look for any USB cable you don't need anymore. It doesn't matter if it's broken - you just need the wires inside!
              </p>
            </div>

            {/* Step 2 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 2: Cut and Strip the Cable</h4>
              <p className="text-gray-700 mb-4">
                Ask a grown-up to carefully cut the USB cable and strip about 1 inch of the outer plastic. Inside, you'll find 4 wires:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-2">
                <p className="text-gray-800"><strong>Red:</strong> Power (+5V) - This is what you need!</p>
                <p className="text-gray-800"><strong>Black:</strong> Ground (GND) - Reference wire</p>
                <p className="text-gray-800"><strong>White & Green:</strong> Data wires - You don't need these</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 3: Add the Voltage Regulator</h4>
              <p className="text-gray-700 mb-4">
                USB gives you 5V, but your camera chip needs 3.3V. Connect the AMS1117-3.3 regulator:
              </p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400">
                <pre>{`USB Red (5V) → AMS1117 Input
USB Black (GND) → AMS1117 Ground
AMS1117 Output → Your Camera Chip (3.3V)`}</pre>
              </div>
            </div>

            {/* Step 4 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 4: Plug It In!</h4>
              <p className="text-gray-700">
                Plug the USB cable into a computer or USB charger, and your camera chip has power! This is perfect for testing and development.
              </p>
            </div>
          </div>
        </section>

        {/* Testing Your Power Supply */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🧪 Testing Your Power Supply</h3>
          <div className="treasure-card">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Before connecting your power supply to the camera chip, test it to make sure it's safe!
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-700 mb-2">✓ Visual Inspection</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• Check for loose wires</li>
                  <li>• Make sure nothing is burned or melted</li>
                  <li>• Verify all connections are tight</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h5 className="font-bold text-green-700 mb-2">✓ Multimeter Test</h5>
                <p className="text-gray-700">
                  If you have a multimeter, set it to DC voltage and measure the output. It should show approximately 3.3V.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h5 className="font-bold text-yellow-700 mb-2">✓ The Smoke Test</h5>
                <p className="text-gray-700">
                  Turn on your power supply and wait 30 seconds. If nothing smells like burning plastic, you're probably good!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Rules */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Safety Rules for Phase 3</h3>
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300">
            <ul className="space-y-3 text-red-800 text-lg">
              <li className="flex gap-3">
                <span className="font-bold">1.</span>
                <span><strong>Never touch both ends of a battery</strong> with metal - it can short-circuit</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">2.</span>
                <span><strong>Always ask a grown-up</strong> when working with batteries and power</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">3.</span>
                <span><strong>Wear safety glasses</strong> - batteries can explode if damaged</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">4.</span>
                <span><strong>Never leave your power supply unattended</strong> while testing</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">5.</span>
                <span><strong>Keep water away</strong> from batteries and electronics</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">6.</span>
                <span><strong>If something smells like burning plastic, turn it off immediately!</strong></span>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Your Challenge</h3>
          <div className="treasure-card">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Can You Complete This Phase?</h4>
            <ol className="space-y-3 text-gray-700 text-lg">
              <li className="flex gap-3">
                <span className="font-bold">1.</span>
                <span>Choose Option 1 (battery) or Option 2 (USB)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">2.</span>
                <span>Gather all the parts you need</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">3.</span>
                <span>Build your power supply carefully</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">4.</span>
                <span>Test it to make sure it outputs 3.3V</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">5.</span>
                <span>Connect it to your camera chip</span>
              </li>
            </ol>
            <p className="text-gray-600 mt-6 italic">
              Once you complete this phase, you're ready for Phase 4: Sending commands to control the camera!
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 justify-center mt-12">
          <Link href="/phase2">
            <a className="adventure-button">← Back to Phase 2</a>
          </Link>
          <Link href="/">
            <a className="adventure-button">Home</a>
          </Link>
          <Link href="/phase4">
            <a className="adventure-button">Next: Phase 4 →</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
