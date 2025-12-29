import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

/**
 * Phase 1 Lesson: The Secret Message Spy Tool (UART Logging)
 * Design Philosophy: Educational, playful, with real component images
 */

export default function Phase1Lesson() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold">
              <ChevronLeft className="w-5 h-5" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-orange-600">Phase 1: Secret Messages</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="phase-badge text-3xl">🔍</div>
            <h2 className="text-4xl font-bold text-gray-900">
              The Secret Message Spy Tool (UART Logging)
            </h2>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Every chip in your electronics is constantly talking to itself and other chips using a secret language. In this lesson, you'll learn how to build a "spy tool" that listens to these secret messages!
          </p>
        </div>

        {/* What You'll Learn */}
        <section className="mb-12 treasure-card">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">📚 What You'll Learn</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>What UART (Universal Asynchronous Receiver-Transmitter) is and why it matters</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to identify USB-to-Serial chips in old electronics</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to use an Arduino as a translator</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to connect wires safely and correctly</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to read the secret messages on your computer</span>
            </li>
          </ul>
        </section>

        {/* Understanding UART */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🗣️ What is UART? (The Secret Language)</h3>
          <div className="treasure-card mb-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Imagine you and your friend want to send secret messages to each other. You could use a special code that only you two understand. That's what UART is for chips!
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <strong>UART</strong> stands for "Universal Asynchronous Receiver-Transmitter." It's a way for chips to send information one bit at a time, like tapping out Morse code. One wire sends messages OUT (TX), and another wire receives messages IN (RX).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-800 font-semibold mb-2">💡 Think of it like a telephone:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>TX (Transmit):</strong> The speaker - sends messages OUT</li>
                <li>• <strong>RX (Receive):</strong> The microphone - receives messages IN</li>
                <li>• <strong>GND (Ground):</strong> The common wire - makes sure both devices are connected</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Finding USB-to-Serial Chips */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔎 Finding USB-to-Serial Chips</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            The first step is to find a chip that can translate between your computer (which uses USB) and the camera chip (which uses UART). These chips are called "USB-to-Serial" converters. Here are the ones to look for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CH340 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-orange-600 mb-4">CH340 Chip</h4>
              <img
                src="/images/ch340-usb-serial.jpg"
                alt="CH340 USB to Serial chip"
                className="w-full rounded-lg mb-4 border-2 border-orange-200"
              />
              <div className="space-y-2 text-gray-700">
                <p><strong>Where to find it:</strong> Old Arduino boards, USB hubs, 3D printer controllers</p>
                <p><strong>What it looks like:</strong> Small black chip, usually on a blue circuit board</p>
                <p><strong>Why it's cool:</strong> Super common and easy to work with!</p>
              </div>
            </div>

            {/* CP2102 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-green-600 mb-4">CP2102 Chip</h4>
              <img
                src="/images/cp2102-serial.jpg"
                alt="CP2102 USB to Serial chip"
                className="w-full rounded-lg mb-4 border-2 border-green-200"
              />
              <div className="space-y-2 text-gray-700">
                <p><strong>Where to find it:</strong> Broken USB devices, some development boards</p>
                <p><strong>What it looks like:</strong> Tiny black square chip with lots of pins</p>
                <p><strong>Why it's cool:</strong> Very reliable and professional-grade!</p>
              </div>
            </div>

            {/* FTDI */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-4">FTDI FT232RL Chip</h4>
              <img
                src="/images/ftdi-serial.jpg"
                alt="FTDI FT232RL USB to Serial chip"
                className="w-full rounded-lg mb-4 border-2 border-blue-200"
              />
              <div className="space-y-2 text-gray-700">
                <p><strong>Where to find it:</strong> Old electronics, professional USB cables</p>
                <p><strong>What it looks like:</strong> Square chip with 28 pins arranged in a rectangle</p>
                <p><strong>Why it's cool:</strong> The original and most famous USB-to-Serial chip!</p>
              </div>
            </div>

            {/* Arduino Nano */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-purple-600 mb-4">Arduino Nano (The Easy Way!)</h4>
              <img
                src="/images/arduino-nano.jpg"
                alt="Arduino Nano board"
                className="w-full rounded-lg mb-4 border-2 border-purple-200"
              />
              <div className="space-y-2 text-gray-700">
                <p><strong>Where to find it:</strong> Old Arduino projects, maker kits</p>
                <p><strong>What it looks like:</strong> Tiny circuit board with lots of pins</p>
                <p><strong>Why it's cool:</strong> Can act as a USB-to-Serial translator with just code!</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Arduino Method */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🤖 Using an Arduino as Your Spy Tool</h3>
          <div className="treasure-card mb-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If you can't find one of those special chips, don't worry! You can use an Arduino Nano as your translator. Here's how:
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-orange-600 mb-3">Step 1: Find an Arduino Nano</h4>
              <p className="text-gray-700 mb-3">
                Look for an Arduino Nano in old electronics or maker projects. It's a tiny circuit board about the size of your pinky finger.
              </p>
              <img
                src="/images/arduino-nano.jpg"
                alt="Arduino Nano"
                className="w-full max-w-sm rounded-lg border-2 border-orange-200"
              />
            </div>

            {/* Step 2 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 2: Upload the Blank Sketch</h4>
              <p className="text-gray-700 mb-4">
                Connect your Arduino to a computer using a USB cable. Then, use the Arduino IDE (free software) to upload a "blank" program. This tells the Arduino to stop doing its normal job and just act as a translator.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 font-mono text-sm">
                <p className="text-gray-800">void setup() {'{}'}</p>
                <p className="text-gray-800">void loop() {'{}'}</p>
              </div>
              <p className="text-gray-600 text-sm mt-2">This simple code tells Arduino to do nothing - perfect for translation!</p>
            </div>

            {/* Step 3 */}
            <div className="treasure-card">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Step 3: Connect the Wires</h4>
              <p className="text-gray-700 mb-4">
                Now you need to connect the camera chip to the Arduino using three wires:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-3">
                <div className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-fit">Camera GND →</span>
                  <span className="text-gray-700">Arduino GND (Ground - the reference wire)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-fit">Camera TX →</span>
                  <span className="text-gray-700">Arduino RX (Receive - listens to camera messages)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-blue-600 min-w-fit">Camera RX →</span>
                  <span className="text-gray-700">Arduino TX (Transmit - sends messages to camera)</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-800 font-semibold mb-2">⚠️ Important: Voltage Divider</p>
                <p className="text-gray-700">
                  If the camera chip uses 3.3V and Arduino uses 5V, you need a "voltage divider" made of two resistors (1KΩ and 2KΩ) to protect the camera chip. Ask a grown-up for help with this!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reading the Messages */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">💻 Reading the Secret Messages</h3>
          <div className="treasure-card">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Once your spy tool is connected, you need software on your computer to read the messages. Here are the free options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                <h5 className="font-bold text-blue-700 mb-2">Windows</h5>
                <p className="text-gray-700">Use <strong>PuTTY</strong> (free software)</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                <h5 className="font-bold text-green-700 mb-2">Mac</h5>
                <p className="text-gray-700">Use <strong>screen</strong> command (built-in)</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                <h5 className="font-bold text-purple-700 mb-2">Linux</h5>
                <p className="text-gray-700">Use <strong>minicom</strong> or <strong>screen</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Rules */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Safety Rules for Phase 1</h3>
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300">
            <ul className="space-y-3 text-red-800 text-lg">
              <li className="flex gap-3">
                <span className="font-bold">1.</span>
                <span><strong>Always ask a grown-up</strong> before soldering or desoldering chips</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">2.</span>
                <span><strong>Use a soldering iron carefully</strong> - it gets very hot!</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">3.</span>
                <span><strong>Never touch the tip</strong> of a hot soldering iron</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">4.</span>
                <span><strong>Wear safety glasses</strong> when working with electronics</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">5.</span>
                <span><strong>Keep water nearby</strong> in case of accidents</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Your Challenge</h3>
          <div className="treasure-card">
            <h4 className="text-xl font-bold text-orange-600 mb-4">Can You Complete This Phase?</h4>
            <ol className="space-y-3 text-gray-700 text-lg">
              <li className="flex gap-3">
                <span className="font-bold">1.</span>
                <span>Find one of the USB-to-Serial chips OR an Arduino Nano</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">2.</span>
                <span>Connect it to the camera chip with three wires</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">3.</span>
                <span>Download PuTTY (or use screen on Mac/Linux)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">4.</span>
                <span>Read the secret messages from the camera chip!</span>
              </li>
            </ol>
            <p className="text-gray-600 mt-6 italic">
              Once you complete this phase, you'll be ready for Phase 2: Finding the chip's special address!
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 justify-center mt-12">
          <Link href="/">
            <a className="adventure-button">← Back to Home</a>
          </Link>
          <Link href="/phase2">
            <a className="adventure-button">Next: Phase 2 →</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
