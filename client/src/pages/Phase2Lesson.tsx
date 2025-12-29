import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

/**
 * Phase 2 Lesson: The Address Book Finder (I²C Monitoring)
 * Design Philosophy: Educational, playful, with real component images
 */

export default function Phase2Lesson() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold">
              <ChevronLeft className="w-5 h-5" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-green-600">Phase 2: Address Finder</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="phase-badge" style={{ background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)" }}>
              📞
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              The Address Book Finder (I²C Monitoring)
            </h2>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Now that you can read secret messages, it's time to find the camera chip's special "phone number" so you can send it commands! This phone number is called an <strong>I²C Address</strong>.
          </p>
        </div>

        {/* What You'll Learn */}
        <section className="mb-12 treasure-card">
          <h3 className="text-2xl font-bold text-green-600 mb-4">📚 What You'll Learn</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>What I²C (Inter-Integrated Circuit) is and how it works</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How every chip has a unique address (like a phone number)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to use an I²C Scanner to find the camera chip's address</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to connect I²C wires (SDA and SCL)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to read the address from your computer screen</span>
            </li>
          </ul>
        </section>

        {/* Understanding I²C */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🗣️ What is I²C? (The Group Chat Language)</h3>
          <div className="treasure-card mb-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Imagine you're in a group chat with your friends. Everyone can send messages, but each person has a unique username so everyone knows who's talking. That's what I²C does for chips!
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <strong>I²C</strong> (pronounced "I-squared-C") stands for "Inter-Integrated Circuit." It's a way for many chips to talk to each other on just TWO wires. Each chip has a special address (like a username) so the other chips know who they're talking to.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-800 font-semibold mb-2">💡 Think of it like a school:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>SDA (Serial Data):</strong> The hallway where messages travel</li>
                <li>• <strong>SCL (Serial Clock):</strong> The bell that says "it's time to listen"</li>
                <li>• <strong>GND (Ground):</strong> The common reference wire</li>
                <li>• <strong>I²C Address:</strong> Your student ID number (unique to each chip)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why I²C Matters */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Why Finding the Address Matters</h3>
          <div className="treasure-card">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Before you can send commands to the camera chip, you need to know its I²C address. It's like knowing someone's phone number before you can call them!
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
              <p className="text-gray-800 font-semibold mb-2">📍 I²C Addresses are written in hexadecimal:</p>
              <p className="text-gray-700 font-mono text-lg">0x48, 0x50, 0x68, 0x70, etc.</p>
              <p className="text-gray-600 text-sm mt-2">Don't worry if this looks confusing - your Arduino will find it automatically!</p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Once you know the address, you can send the chip commands like "take a picture" or "change the brightness." This is the key to controlling the camera!
            </p>
          </div>
        </section>

        {/* The I²C Scanner */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔍 Using the I²C Scanner</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            The I²C Scanner is a special program you upload to your Arduino. It automatically tries every possible address and tells you which ones respond. It's like calling every phone number in a phone book until someone answers!
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 1: Connect the Wires</h4>
              <p className="text-gray-700 mb-4">
                Connect the camera chip to your Arduino using TWO wires (plus ground):
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 space-y-3">
                <div className="flex gap-3">
                  <span className="font-bold text-green-600 min-w-fit">Camera GND →</span>
                  <span className="text-gray-700">Arduino GND</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-green-600 min-w-fit">Camera SCL →</span>
                  <span className="text-gray-700">Arduino A5 (or SCL pin)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-green-600 min-w-fit">Camera SDA →</span>
                  <span className="text-gray-700">Arduino A4 (or SDA pin)</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 italic">
                Note: Different Arduino models have different pin names. Check your Arduino's documentation!
              </p>
            </div>

            {/* Step 2 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 2: Upload the I²C Scanner Code</h4>
              <p className="text-gray-700 mb-4">
                Open the Arduino IDE and paste this code:
              </p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 overflow-x-auto mb-4">
                <pre>{`#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(115200);
  Serial.println("I2C Scanner");
}

void loop() {
  byte error, address;
  int nDevices;
  
  Serial.println("Scanning...");
  nDevices = 0;
  
  for(address = 1; address < 127; address++) {
    Wire.beginTransmission(address);
    error = Wire.endTransmission();
    
    if (error == 0) {
      Serial.print("I2C device found at address 0x");
      if (address < 16) Serial.print("0");
      Serial.println(address, HEX);
      nDevices++;
    }
  }
  
  if (nDevices == 0)
    Serial.println("No I2C devices found");
  else
    Serial.println("Done");
    
  delay(5000);
}`}</pre>
              </div>
              <p className="text-gray-700">
                This code tells Arduino to try every address from 1 to 127 and print the ones that respond!
              </p>
            </div>

            {/* Step 3 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 3: Watch for the Address</h4>
              <p className="text-gray-700 mb-4">
                Open the Serial Monitor in Arduino IDE (Tools → Serial Monitor). Set the baud rate to 115200. You should see something like:
              </p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 mb-4">
                <pre>{`Scanning...
I2C device found at address 0x48
Done`}</pre>
              </div>
              <p className="text-gray-700">
                That <strong>0x48</strong> is the camera chip's I²C address! Write it down - you'll need it in Phase 4!
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Addresses */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔢 Understanding I²C Addresses</h3>
          <div className="treasure-card">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              I²C addresses are written in hexadecimal (base-16), which uses numbers 0-9 and letters A-F. Don't worry - you don't need to understand how it works, just remember the address your scanner found!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                <h5 className="font-bold text-blue-700 mb-2">Common Addresses</h5>
                <ul className="space-y-1 text-gray-700 font-mono text-sm">
                  <li>0x48 - Camera sensors</li>
                  <li>0x50 - Memory chips</li>
                  <li>0x68 - Motion sensors</li>
                  <li>0x70 - Multiplexers</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                <h5 className="font-bold text-green-700 mb-2">💡 Pro Tip</h5>
                <p className="text-gray-700">
                  If your scanner finds multiple addresses, try each one in Phase 4. One of them will be the camera chip!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔧 Troubleshooting</h3>
          <div className="space-y-4">
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-orange-600 mb-2">❌ No devices found?</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Check your wire connections - make sure they're tight!</li>
                <li>• Try swapping the SDA and SCL wires</li>
                <li>• Make sure the camera chip has power</li>
                <li>• Check that you're using the right Arduino pins</li>
              </ul>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-orange-600 mb-2">❌ Too many devices found?</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• You might have multiple chips on the same I²C bus</li>
                <li>• Try disconnecting one wire at a time to find the right chip</li>
                <li>• Look at the chip's datasheet to find its expected address</li>
              </ul>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-orange-600 mb-2">❌ Code won't upload?</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Make sure you selected the right Arduino board type</li>
                <li>• Make sure you selected the right COM port</li>
                <li>• Try a different USB cable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Safety Rules */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Safety Rules for Phase 2</h3>
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300">
            <ul className="space-y-3 text-red-800 text-lg">
              <li className="flex gap-3">
                <span className="font-bold">1.</span>
                <span><strong>Disconnect power</strong> before connecting or disconnecting wires</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">2.</span>
                <span><strong>Double-check your connections</strong> before powering on</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">3.</span>
                <span><strong>Don't force wires</strong> - they should slide in smoothly</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">4.</span>
                <span><strong>Keep liquids away</strong> from your electronics</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Your Challenge</h3>
          <div className="treasure-card">
            <h4 className="text-xl font-bold text-green-600 mb-4">Can You Complete This Phase?</h4>
            <ol className="space-y-3 text-gray-700 text-lg">
              <li className="flex gap-3">
                <span className="font-bold">1.</span>
                <span>Connect your Arduino to the camera chip using SDA and SCL wires</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">2.</span>
                <span>Upload the I²C Scanner code to your Arduino</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">3.</span>
                <span>Open the Serial Monitor and watch for the address</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">4.</span>
                <span>Write down the camera chip's I²C address (e.g., 0x48)</span>
              </li>
            </ol>
            <p className="text-gray-600 mt-6 italic">
              Once you complete this phase, you're ready for Phase 3: Getting free power for your project!
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 justify-center mt-12">
          <Link href="/phase1">
            <a className="adventure-button">← Back to Phase 1</a>
          </Link>
          <Link href="/">
            <a className="adventure-button">Home</a>
          </Link>
          <Link href="/phase3">
            <a className="adventure-button">Next: Phase 3 →</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
