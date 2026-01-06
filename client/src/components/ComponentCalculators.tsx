import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function ComponentCalculators() {
  const [activeTab, setActiveTab] = useState<"resistor" | "capacitor">("resistor");
  const [copied, setCopied] = useState(false);

  // Resistor Color Code
  const colorCodes: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };

  const multipliers: { [key: string]: number } = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    grey: 100000000,
    white: 1000000000
  };

  const tolerances: { [key: string]: string } = {
    brown: "±1%",
    red: "±2%",
    orange: "±3%",
    yellow: "±4%",
    green: "±0.5%",
    blue: "±0.25%",
    violet: "±0.1%",
    grey: "±0.05%",
    gold: "±5%",
    silver: "±10%"
  };

  const [band1, setBand1] = useState("brown");
  const [band2, setBand2] = useState("black");
  const [multiplier, setMultiplier] = useState("red");
  const [tolerance, setTolerance] = useState("gold");

  const calculateResistor = () => {
    const firstDigit = colorCodes[band1];
    const secondDigit = colorCodes[band2];
    const mult = multipliers[multiplier];
    const baseValue = (firstDigit * 10 + secondDigit) * mult;

    let displayValue: string;
    if (baseValue >= 1000000) {
      displayValue = `${(baseValue / 1000000).toFixed(2)} MΩ`;
    } else if (baseValue >= 1000) {
      displayValue = `${(baseValue / 1000).toFixed(2)} kΩ`;
    } else {
      displayValue = `${baseValue} Ω`;
    }

    return { value: displayValue, tolerance: tolerances[tolerance] };
  };

  const resistorResult = calculateResistor();

  // Capacitor Calculator
  const [capacitance, setCapacitance] = useState(100);
  const [capacitorUnit, setCapacitorUnit] = useState<"pF" | "nF" | "µF">("nF");

  const convertCapacitance = (value: number, from: string, to: string) => {
    const pFValue =
      from === "pF" ? value : from === "nF" ? value * 1000 : value * 1000000;

    if (to === "pF") return pFValue;
    if (to === "nF") return pFValue / 1000;
    return pFValue / 1000000;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
      <h3 className="text-2xl font-bold text-white mb-6">🧮 Component Calculators</h3>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-slate-600">
        <button
          onClick={() => setActiveTab("resistor")}
          className={`px-6 py-3 font-bold transition-colors ${
            activeTab === "resistor"
              ? "text-orange-400 border-b-2 border-orange-400"
              : "text-slate-400 hover:text-slate-300"
          }`}
        >
          🔴 Resistor Color Code
        </button>
        <button
          onClick={() => setActiveTab("capacitor")}
          className={`px-6 py-3 font-bold transition-colors ${
            activeTab === "capacitor"
              ? "text-orange-400 border-b-2 border-orange-400"
              : "text-slate-400 hover:text-slate-300"
          }`}
        >
          ⚪ Capacitor Value
        </button>
      </div>

      {/* Resistor Color Code */}
      {activeTab === "resistor" && (
        <div className="space-y-6">
          <p className="text-slate-300 mb-6">
            Select the color bands on your resistor to find its resistance value and tolerance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Color Band Selectors */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">First Band (Tens Digit)</label>
                <select
                  value={band1}
                  onChange={(e) => setBand1(e.target.value)}
                  className="w-full bg-slate-900 text-white rounded-lg p-3 border border-slate-600"
                >
                  {Object.keys(colorCodes).map((color) => (
                    <option key={color} value={color}>
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">Second Band (Ones Digit)</label>
                <select
                  value={band2}
                  onChange={(e) => setBand2(e.target.value)}
                  className="w-full bg-slate-900 text-white rounded-lg p-3 border border-slate-600"
                >
                  {Object.keys(colorCodes).map((color) => (
                    <option key={color} value={color}>
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">Multiplier Band</label>
                <select
                  value={multiplier}
                  onChange={(e) => setMultiplier(e.target.value)}
                  className="w-full bg-slate-900 text-white rounded-lg p-3 border border-slate-600"
                >
                  {Object.keys(multipliers).map((color) => (
                    <option key={color} value={color}>
                      {color.charAt(0).toUpperCase() + color.slice(1)} (×{multipliers[color]})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">Tolerance Band</label>
                <select
                  value={tolerance}
                  onChange={(e) => setTolerance(e.target.value)}
                  className="w-full bg-slate-900 text-white rounded-lg p-3 border border-slate-600"
                >
                  {Object.keys(tolerances).map((color) => (
                    <option key={color} value={color}>
                      {color.charAt(0).toUpperCase() + color.slice(1)} ({tolerances[color]})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Visual Representation & Result */}
            <div className="space-y-4">
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
                <p className="text-sm text-slate-400 mb-4">Resistor Visualization</p>
                <div className="flex items-center justify-center gap-2 mb-6 h-20">
                  <div
                    className="w-8 h-16 rounded"
                    style={{
                      backgroundColor: band1,
                      border: "1px solid #888"
                    }}
                    title={band1}
                  />
                  <div
                    className="w-8 h-16 rounded"
                    style={{
                      backgroundColor: band2,
                      border: "1px solid #888"
                    }}
                    title={band2}
                  />
                  <div className="w-12 h-8 bg-tan rounded-full border border-gray-400" />
                  <div
                    className="w-8 h-16 rounded"
                    style={{
                      backgroundColor: multiplier,
                      border: "1px solid #888"
                    }}
                    title={multiplier}
                  />
                  <div
                    className="w-8 h-16 rounded"
                    style={{
                      backgroundColor: tolerance,
                      border: "1px solid #888"
                    }}
                    title={tolerance}
                  />
                </div>
              </div>

              <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                <p className="text-sm text-green-400 mb-2">Resistance Value</p>
                <p className="text-4xl font-bold text-green-300 mb-2">{resistorResult.value}</p>
                <p className="text-sm text-green-400">Tolerance: {resistorResult.tolerance}</p>
                <button
                  onClick={() => copyToClipboard(resistorResult.value)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-lg transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy Value"}
                </button>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30 mt-6">
            <p className="text-blue-300 font-bold mb-2">💡 How to Read Resistor Bands:</p>
            <ul className="text-sm text-blue-200 space-y-1">
              <li>• <strong>Band 1:</strong> First digit (tens place)</li>
              <li>• <strong>Band 2:</strong> Second digit (ones place)</li>
              <li>• <strong>Band 3:</strong> Multiplier (how many zeros to add)</li>
              <li>• <strong>Band 4:</strong> Tolerance (accuracy of the resistor)</li>
            </ul>
          </div>
        </div>
      )}

      {/* Capacitor Calculator */}
      {activeTab === "capacitor" && (
        <div className="space-y-6">
          <p className="text-slate-300 mb-6">
            Convert between different capacitance units (pF, nF, µF).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
              <label className="text-sm text-slate-400 mb-3 block">Capacitance Value</label>
              <div className="flex gap-2 mb-4">
                <input
                  type="number"
                  value={capacitance}
                  onChange={(e) => setCapacitance(parseFloat(e.target.value) || 0)}
                  className="flex-1 bg-slate-800 text-white rounded-lg p-3 border border-slate-600"
                />
                <select
                  value={capacitorUnit}
                  onChange={(e) => setCapacitorUnit(e.target.value as "pF" | "nF" | "µF")}
                  className="bg-slate-800 text-white rounded-lg p-3 border border-slate-600"
                >
                  <option value="pF">pF</option>
                  <option value="nF">nF</option>
                  <option value="µF">µF</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                <p className="text-blue-400 text-sm mb-1">Picofarads (pF)</p>
                <p className="text-2xl font-bold text-blue-300">
                  {convertCapacitance(capacitance, capacitorUnit, "pF").toFixed(2)} pF
                </p>
              </div>
              <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                <p className="text-purple-400 text-sm mb-1">Nanofarads (nF)</p>
                <p className="text-2xl font-bold text-purple-300">
                  {convertCapacitance(capacitance, capacitorUnit, "nF").toFixed(2)} nF
                </p>
              </div>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                <p className="text-green-400 text-sm mb-1">Microfarads (µF)</p>
                <p className="text-2xl font-bold text-green-300">
                  {convertCapacitance(capacitance, capacitorUnit, "µF").toFixed(6)} µF
                </p>
              </div>
            </div>
          </div>

          {/* Common Values */}
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
            <p className="text-sm text-slate-400 mb-4">Common Capacitor Values</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                { label: "Decoupling", value: "0.1µF" },
                { label: "Smoothing", value: "10µF" },
                { label: "Filtering", value: "100µF" },
                { label: "Timing", value: "1µF" },
                { label: "High Freq", value: "100nF" },
                { label: "Very High", value: "1nF" }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    const value = parseFloat(item.value);
                    const unit = item.value.includes("µ") ? "µF" : item.value.includes("n") ? "nF" : "pF";
                    setCapacitance(value);
                    setCapacitorUnit(unit);
                  }}
                  className="text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="font-bold text-white">{item.value}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30 mt-6">
            <p className="text-blue-300 font-bold mb-2">💡 Capacitor Units:</p>
            <ul className="text-sm text-blue-200 space-y-1">
              <li>• <strong>pF (Picofarad):</strong> 1 pF = 0.000000000001 Farads (very small)</li>
              <li>• <strong>nF (Nanofarad):</strong> 1 nF = 0.000000001 Farads (small)</li>
              <li>• <strong>µF (Microfarad):</strong> 1 µF = 0.000001 Farads (common)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
