import { useState } from "react";
import { ChevronLeft, CheckCircle, AlertCircle, Zap, Code, Lightbulb } from "lucide-react";
import { Link } from "wouter";

interface TaskItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export default function Phase1Enhanced() {
  const [questActive, setQuestActive] = useState(false);
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: "1", title: "Find a scavenged circuit board", description: "Look for old electronics with exposed circuit boards (routers, modems, etc.)", completed: false },
    { id: "2", title: "Locate the debug pads", description: "Search for 3-4 small gold circles labeled TX, RX, VCC, GND", completed: false },
    { id: "3", title: "Get a USB-to-TTL adapter", description: "Find or purchase a cheap USB serial adapter (~$3-10)", completed: false },
    { id: "4", title: "Connect the adapter", description: "Wire TX→RX, RX→TX, GND→GND, VCC→VCC", completed: false },
    { id: "5", title: "Open serial terminal", description: "Use PuTTY, Arduino IDE, or Web Serial to connect at 115200 baud", completed: false },
    { id: "6", title: "Watch the boot messages", description: "Power on the board and capture the secret UART messages", completed: false },
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progress = (completedCount / tasks.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-20 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/fundamentals">
            <button className="text-blue-600 hover:text-blue-700 border-0 cursor-pointer bg-transparent">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">🔍 Phase 1: The Secret Message Spy Tool</h1>
        </div>
      </header>

      <main className="container py-12">
        {/* Quest Activation */}
        {!questActive ? (
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-12 border-2 border-blue-300 mb-8 text-center">
            <div className="text-6xl mb-6">🗺️</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Quest?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Phase 1 is all about finding and reading the "secret messages" that electronics send when they boot up. 
              This is called UART logging—the simplest way hardware communicates.
            </p>
            <button
              onClick={() => setQuestActive(true)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all text-lg border-0 cursor-pointer"
            >
              🚀 Activate Quest
            </button>
          </div>
        ) : (
          <>
            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">📖 What You'll Learn</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <div className="text-4xl mb-3">🔌</div>
                  <h3 className="font-bold text-gray-900 mb-2">UART Basics</h3>
                  <p className="text-gray-700 text-sm">
                    UART is how chips talk to each other serially. It's the foundation of debugging.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                  <div className="text-4xl mb-3">🔍</div>
                  <h3 className="font-bold text-gray-900 mb-2">Debug Pad Location</h3>
                  <p className="text-gray-700 text-sm">
                    Learn to identify TX, RX, VCC, and GND pads on any circuit board.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <div className="text-4xl mb-3">📊</div>
                  <h3 className="font-bold text-gray-900 mb-2">Boot Logs</h3>
                  <p className="text-gray-700 text-sm">
                    Capture and decode the secret messages chips send during startup.
                  </p>
                </div>
              </div>

              {/* Key Concepts */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">🎯 Key Concepts</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">TX (Transmit)</p>
                      <p className="text-sm text-gray-700">The pin that sends data FROM the chip</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">RX (Receive)</p>
                      <p className="text-sm text-gray-700">The pin that receives data TO the chip</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">VCC (Power)</p>
                      <p className="text-sm text-gray-700">The positive voltage supply (usually 3.3V or 5V)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">GND (Ground)</p>
                      <p className="text-sm text-gray-700">The negative reference (0V)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hands-On Tasks */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">✅ Your Quest Tasks</h2>
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-900">Progress: {completedCount}/{tasks.length}</p>
                  <p className="text-sm text-gray-600">{Math.round(progress)}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Task List */}
              <div className="space-y-4">
                {tasks.map((task, idx) => (
                  <div
                    key={task.id}
                    className={`rounded-lg p-6 border-2 transition-all cursor-pointer ${
                      task.completed
                        ? "bg-green-50 border-green-300"
                        : "bg-gray-50 border-gray-300 hover:border-blue-400"
                    }`}
                    onClick={() => toggleTask(task.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        {task.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-400"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg ${task.completed ? "text-green-900 line-through" : "text-gray-900"}`}>
                          {idx + 1}. {task.title}
                        </h3>
                        <p className="text-gray-700 mt-2">{task.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Deep Dive */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🔧 Technical Deep Dive</h2>

              {/* Finding Debug Pads */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                  How to Find Debug Pads
                </h3>
                <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-yellow-700">1.</span>
                      <span className="text-gray-700">Look for 3-4 small gold circles in a row (usually near the edge)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-yellow-700">2.</span>
                      <span className="text-gray-700">They're often labeled with tiny text: TX, RX, VCC, GND</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-yellow-700">3.</span>
                      <span className="text-gray-700">If not labeled, look for a silk-screen outline or "J1", "P1" label</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-yellow-700">4.</span>
                      <span className="text-gray-700">Use a magnifying glass if needed—they're tiny!</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Wiring Diagram */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Code className="w-6 h-6 text-blue-600" />
                  Wiring Your USB-to-TTL Adapter
                </h3>
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600 font-mono text-sm">
                  <p className="mb-4">Connect your USB adapter to the debug pads:</p>
                  <div className="space-y-2 text-gray-900">
                    <p>Circuit Board → USB Adapter</p>
                    <p>────────────────────────</p>
                    <p>TX → RX (cross over!)</p>
                    <p>RX → TX (cross over!)</p>
                    <p>GND → GND</p>
                    <p>VCC → 3.3V or 5V</p>
                    <p className="mt-4 text-red-700 font-bold">⚠️ IMPORTANT: Cross over TX and RX!</p>
                  </div>
                </div>
              </div>

              {/* Serial Terminal Settings */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Code className="w-6 h-6 text-purple-600" />
                  Serial Terminal Settings
                </h3>
                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600 font-mono text-sm">
                  <p className="mb-4">Use these settings in PuTTY or Arduino IDE:</p>
                  <div className="space-y-2 text-gray-900">
                    <p><strong>Baud Rate:</strong> 115200 (most common)</p>
                    <p><strong>Data Bits:</strong> 8</p>
                    <p><strong>Stop Bits:</strong> 1</p>
                    <p><strong>Parity:</strong> None</p>
                    <p><strong>Flow Control:</strong> None</p>
                    <p className="mt-4">If you see garbage text, try: 9600, 57600, or 115200</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Warning */}
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300 mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                ⚠️ Safety Rules
              </h2>
              <ul className="space-y-3 text-red-900">
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Never puncture batteries:</strong> Li-ion cells can catch fire if damaged</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Avoid high voltage:</strong> CRT monitors and power supplies can kill you</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Discharge capacitors:</strong> Large capacitors hold dangerous charges</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Use proper tools:</strong> Soldering irons, wire strippers, and multimeters</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Wear protection:</strong> Safety glasses and gloves when handling old electronics</span>
                </li>
              </ul>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 border-2 border-green-300">
              <h2 className="text-3xl font-bold text-green-900 mb-4">🎯 Next Steps</h2>
              <p className="text-green-900 mb-6">
                Once you've captured your first UART boot logs, you're ready for Phase 2: The Address Book Finder (I²C Monitoring).
              </p>
              <Link href="/phase2">
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all border-0 cursor-pointer">
                  Continue to Phase 2 →
                </button>
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
