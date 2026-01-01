import { useState } from "react";

export default function MultimeterSimulator() {
  const [mode, setMode] = useState<"voltage" | "current" | "resistance">("voltage");
  const [reading, setReading] = useState(0);
  const [connected, setConnected] = useState(false);

  const modes = [
    { id: "voltage", label: "Voltage (V)", range: "0-20V", color: "text-red-500" },
    { id: "current", label: "Current (A)", range: "0-10A", color: "text-blue-500" },
    { id: "resistance", label: "Resistance (Ω)", range: "0-1kΩ", color: "text-green-500" }
  ];

  const handleConnect = () => {
    setConnected(!connected);
    if (!connected) {
      setReading(Math.random() * 20);
    }
  };

  const handleModeChange = (newMode: "voltage" | "current" | "resistance") => {
    setMode(newMode);
    if (connected) {
      setReading(Math.random() * 20);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
      <h3 className="text-2xl font-bold text-white mb-6">📊 Multimeter Simulator</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Simulator Display */}
        <div className="flex flex-col items-center justify-center bg-slate-900 rounded-xl p-8 border-2 border-slate-600">
          {/* Display Screen */}
          <div className="w-full bg-black rounded-lg p-4 mb-6 text-center">
            <div className="text-4xl font-bold text-green-400 font-mono">
              {connected ? reading.toFixed(2) : "0.00"}
            </div>
            <div className="text-sm text-green-400 mt-2">{mode.toUpperCase()}</div>
          </div>

          {/* Mode Selector */}
          <div className="w-full mb-6">
            <div className="text-sm text-slate-400 mb-2">SELECT MODE</div>
            <div className="flex gap-2">
              {modes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleModeChange(m.id as any)}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all ${
                    mode === m.id
                      ? "bg-orange-500 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {m.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Connection Status */}
          <button
            onClick={handleConnect}
            className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${
              connected
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            {connected ? "🔌 Disconnect" : "🔌 Connect Probes"}
          </button>
        </div>

        {/* Instructions */}
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-sm text-slate-400 mb-2">CURRENT MODE:</p>
            <p className="text-white font-bold">{modes.find(m => m.id === mode)?.label}</p>
            <p className="text-sm text-slate-400 mt-2">Range: {modes.find(m => m.id === mode)?.range}</p>
          </div>

          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
            <p className="text-blue-300 font-bold mb-2">💡 How to Use:</p>
            <ol className="text-sm text-blue-200 space-y-2">
              <li>1. Select the measurement mode (V, A, or Ω)</li>
              <li>2. Click "Connect Probes" to start measuring</li>
              <li>3. The display shows the simulated reading</li>
              <li>4. Switch modes to see different measurements</li>
            </ol>
          </div>

          <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
            <p className="text-green-300 font-bold mb-2">✓ What You're Learning:</p>
            <ul className="text-sm text-green-200 space-y-1">
              <li>• How to read a multimeter display</li>
              <li>• Different measurement modes</li>
              <li>• Typical voltage/current/resistance ranges</li>
              <li>• Real-world measurement values</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
