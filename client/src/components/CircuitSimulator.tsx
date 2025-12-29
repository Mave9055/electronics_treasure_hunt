import { useState } from "react";
import { Zap, RotateCcw } from "lucide-react";

/**
 * Interactive Circuit Simulator
 * Lets adults visually test basic circuits without any technical knowledge
 */

export default function CircuitSimulator() {
  const [batteryConnected, setBatteryConnected] = useState(false);
  const [ledOn, setLedOn] = useState(false);
  const [wireComplete, setWireComplete] = useState(false);

  const handleConnect = () => {
    setBatteryConnected(true);
    setTimeout(() => {
      setWireComplete(true);
      setLedOn(true);
    }, 500);
  };

  const handleReset = () => {
    setBatteryConnected(false);
    setWireComplete(false);
    setLedOn(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">⚡ Interactive Circuit Simulator</h3>
      <p className="text-gray-600 mb-8">
        Click "Connect Battery" to see how electricity flows through a circuit. This is the foundation of all electronics!
      </p>

      {/* Circuit Visualization */}
      <div className="relative bg-white rounded-2xl p-8 mb-8 border-2 border-gray-200 min-h-96">
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          {/* Battery */}
          <g>
            <rect x="20" y="120" width="40" height="60" fill="#FF6B6B" stroke="#000" strokeWidth="2" />
            <text x="40" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">
              +
            </text>
            <text x="40" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">
              BAT
            </text>
          </g>

          {/* Top Wire */}
          <line
            x1="60"
            y1="130"
            x2="180"
            y2="130"
            stroke={wireComplete ? "#00D084" : "#999"}
            strokeWidth={wireComplete ? 4 : 2}
            strokeDasharray={wireComplete ? "0" : "5,5"}
          />

          {/* LED */}
          <g>
            <circle cx="200" cy="100" r="20" fill={ledOn ? "#FFD700" : "#DDD"} stroke="#000" strokeWidth="2" />
            <circle cx="200" cy="100" r="15" fill={ledOn ? "#FFF700" : "#EEE"} />
            {ledOn && (
              <>
                <circle cx="200" cy="100" r="20" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.5">
                  <animate attributeName="r" from="20" to="35" dur="1s" repeatCount="indefinite" />
                </circle>
                <text x="200" y="145" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFD700">
                  💡 ON!
                </text>
              </>
            )}
            {!ledOn && (
              <text x="200" y="145" textAnchor="middle" fontSize="12" fill="#999">
                LED (off)
              </text>
            )}
          </g>

          {/* Right Wire */}
          <line
            x1="220"
            y1="100"
            x2="320"
            y2="100"
            stroke={wireComplete ? "#00D084" : "#999"}
            strokeWidth={wireComplete ? 4 : 2}
            strokeDasharray={wireComplete ? "0" : "5,5"}
          />

          {/* Bottom Wire */}
          <line
            x1="320"
            y1="100"
            x2="320"
            y2="180"
            stroke={wireComplete ? "#00D084" : "#999"}
            strokeWidth={wireComplete ? 4 : 2}
            strokeDasharray={wireComplete ? "0" : "5,5"}
          />

          {/* Return to Battery */}
          <line
            x1="320"
            y1="180"
            x2="60"
            y2="180"
            stroke={wireComplete ? "#00D084" : "#999"}
            strokeWidth={wireComplete ? 4 : 2}
            strokeDasharray={wireComplete ? "0" : "5,5"}
          />

          {/* Electron Flow Animation */}
          {wireComplete && (
            <>
              <circle cx="100" cy="130" r="4" fill="#FF00FF" opacity="0.8">
                <animate attributeName="cx" from="60" to="320" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="100" r="4" fill="#FF00FF" opacity="0.8">
                <animate attributeName="cx" from="180" to="320" dur="3s" repeatCount="indefinite" />
              </circle>
            </>
          )}

          {/* Labels */}
          <text x="40" y="220" fontSize="12" fontWeight="bold" fill="#333">
            Battery (Power)
          </text>
          <text x="170" y="60" fontSize="12" fontWeight="bold" fill="#333">
            LED (Light)
          </text>
          <text x="330" y="140" fontSize="12" fontWeight="bold" fill="#333">
            Wire (Path)
          </text>
        </svg>
      </div>

      {/* Status Display */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className={`p-4 rounded-xl text-center font-semibold ${batteryConnected ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
          🔋 Battery
          <p className="text-sm">{batteryConnected ? "Connected ✓" : "Waiting..."}</p>
        </div>
        <div className={`p-4 rounded-xl text-center font-semibold ${wireComplete ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
          🧵 Circuit
          <p className="text-sm">{wireComplete ? "Complete ✓" : "Incomplete"}</p>
        </div>
        <div className={`p-4 rounded-xl text-center font-semibold ${ledOn ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-600"}`}>
          💡 LED
          <p className="text-sm">{ledOn ? "Glowing! ✨" : "Dark"}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={handleConnect}
          disabled={batteryConnected}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Zap className="w-5 h-5" />
          Connect Battery
        </button>
        <button
          onClick={handleReset}
          className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-300 transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          Reset
        </button>
      </div>

      {/* Explanation */}
      <div className="mt-8 p-4 bg-blue-100 rounded-xl border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-900 mb-2">💡 What Just Happened?</h4>
        <p className="text-blue-800 text-sm leading-relaxed">
          When you connected the battery, electricity flowed through the circuit (shown as a glowing path). The LED received power and lit up! 
          This is exactly how every electronic device works—electricity flows from the battery, through components, and back. The only difference 
          in real electronics is that we use more complex paths and smarter components to do amazing things.
        </p>
      </div>
    </div>
  );
}
