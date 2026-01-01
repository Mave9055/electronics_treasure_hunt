import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Fundamentals() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  const toggleTopic = (topic: number) => {
    setExpandedTopic(expandedTopic === topic ? null : topic);
  };

  const fundamentals = [
    {
      id: 1,
      title: "Voltage, Current & Resistance",
      subtitle: "The Holy Trinity of Electronics",
      icon: "⚡",
      description: "Understanding the three forces that make electronics work",
      content: `
        Think of electricity like water flowing through pipes:
        
        **Voltage (V)** = The pressure pushing the water
        - Measured in Volts (V)
        - Like PSI (pounds per square inch) in water systems
        - Your phone battery: 3.7V, USB: 5V, Wall outlet: 120V (US)
        
        **Current (I)** = How much water is flowing
        - Measured in Amps (A)
        - Like gallons per minute in water systems
        - Your phone charger: 2A, LED: 20mA (0.02A)
        
        **Resistance (R)** = How hard it is for water to flow
        - Measured in Ohms (Ω)
        - Like friction in pipes
        - A resistor might be 1kΩ (1,000 ohms)
        
        **Ohm's Law (the most important formula):**
        V = I × R (Voltage = Current × Resistance)
        
        If you increase voltage, current increases (more pressure = more flow)
        If you increase resistance, current decreases (friction slows flow)
      `
    },
    {
      id: 2,
      title: "Power & Energy",
      subtitle: "How Much Work Can Electricity Do?",
      icon: "🔋",
      description: "Understanding power consumption and battery life",
      content: `
        **Power (P)** = How fast electricity does work
        - Measured in Watts (W)
        - Formula: P = V × I
        - Your LED light: 10W, Phone charger: 18W, Laptop: 65W
        
        **Energy** = Power over time
        - Measured in Watt-hours (Wh)
        - Formula: E = P × Time
        - Your phone battery: 3000mAh at 3.7V = ~11Wh
        - If you use 5W of power, battery lasts: 11Wh ÷ 5W = 2.2 hours
        
        **Why it matters:**
        - Bigger resistors = less current = less power = longer battery life
        - Smaller resistors = more current = more power = hotter, drains battery faster
        - That's why your phone gets hot when charging—it's using lots of power!
      `
    },
    {
      id: 3,
      title: "Circuits & Components",
      subtitle: "Building Blocks of Electronics",
      icon: "🔌",
      description: "How components work together in circuits",
      content: `
        **Series Circuit** = Components in a line
        - Current flows through one component, then the next
        - If one breaks, everything stops (like old Christmas lights)
        - Voltages add up: 5V + 5V = 10V total
        
        **Parallel Circuit** = Components side-by-side
        - Current can flow through multiple paths
        - If one breaks, others still work (like modern Christmas lights)
        - Voltage stays the same across all branches
        
        **Common Components:**
        - **Resistor**: Limits current (like a valve)
        - **Capacitor**: Stores charge temporarily (like a water tank)
        - **Inductor**: Resists changes in current (like inertia)
        - **Diode**: Lets current flow one direction only (like a check valve)
        - **Transistor**: Acts as a switch or amplifier (like a light switch)
        - **Microcontroller**: The brain (like a tiny computer)
      `
    },
    {
      id: 4,
      title: "Digital vs Analog",
      subtitle: "Two Ways to Represent Information",
      icon: "📊",
      description: "Understanding how electronics communicate",
      content: `
        **Analog** = Continuous values
        - Like a volume knob (can be any value from 0-100)
        - Real-world signals: temperature, light, sound
        - Advantage: Smooth, natural
        - Disadvantage: Noisy, hard to transmit far
        
        **Digital** = On/Off only (1 or 0)
        - Like a light switch (either on or off)
        - 0V = 0 (off), 5V = 1 (on)
        - Advantage: Clear, reliable, easy to process
        - Disadvantage: Must convert real-world signals
        
        **Converting Between Them:**
        - **ADC** (Analog-to-Digital Converter): Converts real-world signals to 1s and 0s
        - **DAC** (Digital-to-Analog Converter): Converts 1s and 0s back to real-world signals
        - Your microphone: Analog sound → ADC → Digital data
        - Your speaker: Digital data → DAC → Analog sound
      `
    },
    {
      id: 5,
      title: "Communication Protocols",
      subtitle: "How Chips Talk to Each Other",
      icon: "💬",
      description: "The languages electronics use to communicate",
      content: `
        **UART** (Serial Communication)
        - Simplest protocol, uses 2 wires (TX and RX)
        - One wire sends, one wire receives
        - Used for: Debugging, GPS, old modems
        - Speed: 9600 to 115200 baud (bits per second)
        
        **I²C** (Inter-Integrated Circuit)
        - Uses 2 wires: SDA (data) and SCL (clock)
        - Multiple devices on same 2 wires
        - Used for: Sensors, displays, memory chips
        - Speed: 100kHz to 400kHz
        
        **SPI** (Serial Peripheral Interface)
        - Uses 4 wires: MOSI, MISO, CLK, CS
        - Master talks to multiple slaves
        - Used for: SD cards, displays, sensors
        - Speed: 1MHz to 50MHz
        
        **WiFi/Bluetooth**
        - Wireless communication
        - WiFi: Long range, more power
        - Bluetooth: Short range, less power
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                ⚡
              </div>
              <h1 className="text-xl font-bold text-white">Electronics Fundamentals</h1>
            </a>
          </Link>
          <div className="text-sm text-slate-400">Master the Basics</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Master the <span className="text-orange-400">Fundamentals</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            Before you build anything, you need to understand the basic principles. These five concepts form the foundation of all electronics. Master them, and everything else becomes simple.
          </p>
        </div>

        {/* Fundamentals Grid */}
        <div className="space-y-4">
          {fundamentals.map((topic) => (
            <div key={topic.id}>
              <button
                onClick={() => toggleTopic(topic.id)}
                className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 rounded-xl p-6 border border-slate-600 hover:border-orange-500 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{topic.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-slate-400">{topic.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-400 transition-transform ${expandedTopic === topic.id ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {expandedTopic === topic.id && (
                <div className="mt-4 bg-slate-800 rounded-xl p-8 border border-slate-700 space-y-4">
                  <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-lg">
                    {topic.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="mt-16 bg-gradient-to-r from-orange-900/20 to-amber-900/20 rounded-2xl p-8 border border-orange-500/30">
          <h3 className="text-2xl font-bold text-white mb-6">🎯 Key Takeaways</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-orange-400 font-bold">✓ Voltage = Pressure</p>
              <p className="text-slate-300">Higher voltage = more energy available</p>
            </div>
            <div className="space-y-2">
              <p className="text-orange-400 font-bold">✓ Current = Flow</p>
              <p className="text-slate-300">More current = more power consumption</p>
            </div>
            <div className="space-y-2">
              <p className="text-orange-400 font-bold">✓ Resistance = Opposition</p>
              <p className="text-slate-300">Ohm's Law connects all three: V = I × R</p>
            </div>
            <div className="space-y-2">
              <p className="text-orange-400 font-bold">✓ Circuits = Systems</p>
              <p className="text-slate-300">Series and parallel change how components behave</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Apply These Concepts?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/interactive-masterclass">
              <a className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
                Try Interactive Tools →
              </a>
            </Link>
            <Link href="/getting-started">
              <a className="px-8 py-3 border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 font-bold rounded-lg transition-colors">
                Back to Getting Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
