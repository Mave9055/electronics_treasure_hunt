import { useState } from "react";
import { Plus, Trash2, AlertCircle, CheckCircle } from "lucide-react";

interface Part {
  id: string;
  type: string;
  name: string;
  voltage: number;
  current: number;
  pins: string;
}

export default function CompatibilityChecker() {
  const [selectedParts, setSelectedParts] = useState<Part[]>([]);
  const [powerSupply, setPowerSupply] = useState(5);

  const availableParts: Part[] = [
    {
      id: "arduino-uno",
      type: "Microcontroller",
      name: "Arduino Uno",
      voltage: 5,
      current: 0.05,
      pins: "Digital: 14, Analog: 6, PWM: 6"
    },
    {
      id: "arduino-nano",
      type: "Microcontroller",
      name: "Arduino Nano",
      voltage: 5,
      current: 0.04,
      pins: "Digital: 14, Analog: 8, PWM: 6"
    },
    {
      id: "esp32",
      type: "Microcontroller",
      name: "ESP32 (WiFi)",
      voltage: 3.3,
      current: 0.08,
      pins: "Digital: 34, Analog: 16, PWM: 16"
    },
    {
      id: "led-red",
      type: "Output",
      name: "Red LED",
      voltage: 2,
      current: 0.02,
      pins: "2 pins"
    },
    {
      id: "led-blue",
      type: "Output",
      name: "Blue LED",
      voltage: 3.2,
      current: 0.02,
      pins: "2 pins"
    },
    {
      id: "dht22",
      type: "Sensor",
      name: "DHT22 (Temp/Humidity)",
      voltage: 3.3,
      current: 0.005,
      pins: "I2C or 1-wire"
    },
    {
      id: "bmp280",
      type: "Sensor",
      name: "BMP280 (Pressure)",
      voltage: 3.3,
      current: 0.006,
      pins: "I2C"
    },
    {
      id: "servo",
      type: "Output",
      name: "Servo Motor",
      voltage: 5,
      current: 0.5,
      pins: "Signal + Power"
    },
    {
      id: "relay",
      type: "Output",
      name: "Relay Module",
      voltage: 5,
      current: 0.1,
      pins: "Signal + Power"
    },
    {
      id: "resistor-1k",
      type: "Passive",
      name: "1kΩ Resistor",
      voltage: 5,
      current: 0.005,
      pins: "2 pins"
    },
    {
      id: "capacitor",
      type: "Passive",
      name: "0.1µF Capacitor",
      voltage: 5,
      current: 0,
      pins: "2 pins"
    },
    {
      id: "battery-9v",
      type: "Power",
      name: "9V Battery",
      voltage: 9,
      current: 0.5,
      pins: "Power supply"
    }
  ];

  const addPart = (part: Part) => {
    if (!selectedParts.find(p => p.id === part.id)) {
      setSelectedParts([...selectedParts, part]);
    }
  };

  const removePart = (id: string) => {
    setSelectedParts(selectedParts.filter(p => p.id !== id));
  };

  const checkCompatibility = () => {
    const issues: string[] = [];
    let totalCurrent = 0;

    // Check voltage compatibility
    selectedParts.forEach(part => {
      if (part.voltage > powerSupply) {
        issues.push(`⚠️ ${part.name} needs ${part.voltage}V but you're supplying ${powerSupply}V`);
      }
    });

    // Check total current
    selectedParts.forEach(part => {
      totalCurrent += part.current;
    });

    if (totalCurrent > 1) {
      issues.push(`⚠️ Total current draw is ${totalCurrent.toFixed(2)}A - may exceed power supply capacity`);
    }

    // Check for conflicting protocols
    const i2cParts = selectedParts.filter(p => p.pins.includes("I2C"));
    if (i2cParts.length > 1) {
      issues.push(`✓ ${i2cParts.length} I2C devices detected - they can share the same 2 wires`);
    }

    // Check for PWM conflicts
    const pwmParts = selectedParts.filter(p => p.type === "Output" && p.name.includes("LED"));
    const microcontroller = selectedParts.find(p => p.type === "Microcontroller");
    if (pwmParts.length > 0 && microcontroller) {
      const pwmPins = parseInt(microcontroller.pins.split("PWM: ")[1]);
      if (pwmParts.length > pwmPins) {
        issues.push(`⚠️ You have ${pwmParts.length} PWM devices but only ${pwmPins} PWM pins available`);
      }
    }

    return issues;
  };

  const compatibility = checkCompatibility();
  const hasIssues = compatibility.some(i => i.includes("⚠️"));
  const isCompatible = !hasIssues && selectedParts.length > 0;

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
      <h3 className="text-2xl font-bold text-white mb-6">🔌 Parts Compatibility Checker</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Available Parts */}
        <div>
          <p className="text-sm text-slate-400 mb-4 uppercase tracking-wider">Available Parts</p>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {availableParts.map((part) => (
              <button
                key={part.id}
                onClick={() => addPart(part)}
                disabled={selectedParts.some(p => p.id === part.id)}
                className={`w-full text-left p-3 rounded-lg transition-all border ${
                  selectedParts.some(p => p.id === part.id)
                    ? "bg-slate-900 border-slate-700 opacity-50 cursor-not-allowed"
                    : "bg-slate-900 hover:bg-slate-800 border-slate-700 hover:border-orange-500"
                }`}
              >
                <p className="font-bold text-white text-sm">{part.name}</p>
                <p className="text-xs text-slate-400">{part.type}</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                    {part.voltage}V
                  </span>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded">
                    {(part.current * 1000).toFixed(0)}mA
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Power Supply & Selected Parts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Power Supply */}
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
            <p className="text-sm text-slate-400 mb-3 uppercase tracking-wider">Power Supply</p>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-slate-300 mb-2 block">Voltage: {powerSupply}V</label>
                <input
                  type="range"
                  min="3.3"
                  max="12"
                  step="0.1"
                  value={powerSupply}
                  onChange={(e) => setPowerSupply(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="bg-blue-900/20 rounded p-3 border border-blue-500/30">
                <p className="text-xs text-blue-300">
                  Common voltages: 3.3V (ESP32), 5V (Arduino), 9V (Battery)
                </p>
              </div>
            </div>
          </div>

          {/* Selected Parts */}
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
            <p className="text-sm text-slate-400 mb-3 uppercase tracking-wider">Your Circuit</p>
            {selectedParts.length === 0 ? (
              <p className="text-slate-400 text-sm">Click parts on the left to add them</p>
            ) : (
              <div className="space-y-2">
                {selectedParts.map((part) => (
                  <div
                    key={part.id}
                    className="flex items-center justify-between p-3 bg-slate-800 rounded-lg"
                  >
                    <div>
                      <p className="font-bold text-white text-sm">{part.name}</p>
                      <p className="text-xs text-slate-400">{part.voltage}V, {(part.current * 1000).toFixed(0)}mA</p>
                    </div>
                    <button
                      onClick={() => removePart(part.id)}
                      className="p-2 hover:bg-red-500/20 rounded transition-colors text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Compatibility Report */}
          {selectedParts.length > 0 && (
            <div
              className={`rounded-lg p-6 border ${
                isCompatible
                  ? "bg-green-900/20 border-green-500/30"
                  : "bg-yellow-900/20 border-yellow-500/30"
              }`}
            >
              <div className="flex items-start gap-3">
                {isCompatible ? (
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className={`font-bold mb-2 ${isCompatible ? "text-green-300" : "text-yellow-300"}`}>
                    {isCompatible ? "✓ Compatible!" : "⚠️ Compatibility Issues"}
                  </p>
                  <ul className="space-y-1">
                    {compatibility.map((issue, idx) => (
                      <li key={idx} className="text-sm text-slate-300">
                        {issue}
                      </li>
                    ))}
                  </ul>

                  {/* Additional Stats */}
                  <div className="mt-4 pt-4 border-t border-slate-600">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-slate-400">Total Current</p>
                        <p className="font-bold text-white">
                          {(selectedParts.reduce((sum, p) => sum + p.current, 0) * 1000).toFixed(0)}mA
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400">Parts Count</p>
                        <p className="font-bold text-white">{selectedParts.length}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-6 bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
        <p className="text-blue-300 font-bold mb-2">💡 How It Works:</p>
        <p className="text-sm text-blue-200">
          Add parts to check if they're compatible. The checker verifies voltage levels, current draw, pin availability, and protocol conflicts. Green means go - your parts work together!
        </p>
      </div>
    </div>
  );
}
