import { Button } from "@/components/ui/button";
import { Download, Code, FileText, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  const resources = [
    {
      category: "Datasheets & Specs",
      icon: "📋",
      items: [
        { name: "Arduino Nano Pinout", desc: "Complete pin reference and specifications" },
        { name: "ATmega328P Datasheet", desc: "Full microcontroller specifications (PDF)" },
        { name: "Common Sensor Specs", desc: "DHT22, BMP280, MPU6050 datasheets" },
        { name: "USB Serial Chip Comparison", desc: "CH340 vs CP2102 vs FTDI specs" }
      ]
    },
    {
      category: "Code Examples",
      icon: "💻",
      items: [
        { name: "UART Communication", desc: "Serial read/write examples in C and Python" },
        { name: "I²C Scanner", desc: "Find all I²C devices on your bus" },
        { name: "Sensor Reading", desc: "Temperature, humidity, motion sensor code" },
        { name: "WiFi Connection", desc: "Connect ESP8266 to WiFi and send data" }
      ]
    },
    {
      category: "Project Templates",
      icon: "🚀",
      items: [
        { name: "Weather Station", desc: "Collect and display temperature/humidity" },
        { name: "Home Security", desc: "Motion detection and email alerts" },
        { name: "Plant Monitor", desc: "Soil moisture sensor with automatic watering" },
        { name: "Data Logger", desc: "Record sensor data to SD card" }
      ]
    },
    {
      category: "Tools & Calculators",
      icon: "🔧",
      items: [
        { name: "Resistor Color Code", desc: "Decode resistor values from color bands" },
        { name: "Ohm's Law Calculator", desc: "Calculate V, I, R, and P instantly" },
        { name: "LED Current Limiter", desc: "Calculate resistor for your LED" },
        { name: "Voltage Divider", desc: "Design voltage divider circuits" }
      ]
    }
  ];

  const tutorials = [
    {
      title: "Soldering 101",
      duration: "15 min",
      level: "Beginner",
      desc: "Learn proper soldering technique to avoid cold joints"
    },
    {
      title: "Reading Schematics",
      duration: "20 min",
      level: "Beginner",
      desc: "Understand circuit diagrams and component symbols"
    },
    {
      title: "Breadboarding Basics",
      duration: "10 min",
      level: "Beginner",
      desc: "Build circuits without soldering using breadboards"
    },
    {
      title: "Multimeter Mastery",
      duration: "25 min",
      level: "Intermediate",
      desc: "Measure voltage, current, and resistance like a pro"
    },
    {
      title: "Debugging Circuits",
      duration: "30 min",
      level: "Intermediate",
      desc: "Find and fix problems in your projects"
    },
    {
      title: "PCB Design Basics",
      duration: "45 min",
      level: "Advanced",
      desc: "Design your own circuit boards"
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
                📚
              </div>
              <h1 className="text-xl font-bold text-white">Resources Library</h1>
            </a>
          </Link>
          <div className="text-sm text-slate-400">Everything You Need</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Complete <span className="text-orange-400">Resources Library</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            Everything you need to succeed: datasheets, code examples, project templates, and tools. All in one place.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-orange-500 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{resource.icon}</div>
                <h3 className="text-2xl font-bold text-white">{resource.category}</h3>
              </div>
              <div className="space-y-4">
                {resource.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-slate-900/50 rounded-lg p-4 hover:bg-slate-900 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-white group-hover:text-orange-400 transition-colors">
                          {item.name}
                        </p>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                      <Download className="w-5 h-5 text-slate-500 group-hover:text-orange-400 transition-colors mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Video Tutorials Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">📺 Video Tutorials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/20"
              >
                <div className="bg-slate-900 h-32 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-l-orange-400 border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">{tutorial.title}</h4>
                  <p className="text-sm text-slate-400 mb-4">{tutorial.desc}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{tutorial.duration}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        tutorial.level === "Beginner"
                          ? "bg-green-500/20 text-green-400"
                          : tutorial.level === "Intermediate"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {tutorial.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-orange-900/20 to-amber-900/20 rounded-2xl p-8 border border-orange-500/30 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">🔗 Useful Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="#"
              className="flex items-center gap-3 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Zap className="w-5 h-5 text-orange-400" />
              <div>
                <p className="font-bold text-white">Arduino Official Site</p>
                <p className="text-sm text-slate-400">Official documentation and boards</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Code className="w-5 h-5 text-orange-400" />
              <div>
                <p className="font-bold text-white">GitHub Projects</p>
                <p className="text-sm text-slate-400">Open source electronics projects</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <FileText className="w-5 h-5 text-orange-400" />
              <div>
                <p className="font-bold text-white">Datasheet Search</p>
                <p className="text-sm text-slate-400">Find any component specification</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Zap className="w-5 h-5 text-orange-400" />
              <div>
                <p className="font-bold text-white">Component Suppliers</p>
                <p className="text-sm text-slate-400">Buy parts and tools online</p>
              </div>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Start Building?</h3>
          <Link href="/interactive-masterclass">
            <a className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
              Back to Interactive Tools →
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
