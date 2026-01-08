import { useState } from "react";
import { ChevronLeft, AlertCircle, Zap, Music, Lightbulb, Wrench } from "lucide-react";
import { Link } from "wouter";

interface MicType {
  name: string;
  quality: string;
  frequency: string;
  impedance: string;
  bestFor: string;
  description: string;
}

export default function PhoneMicrophoneSalvage() {
  const [expandedMic, setExpandedMic] = useState<string | null>(null);

  const micTypes: MicType[] = [
    {
      name: "MEMS Microphone (Most Common)",
      quality: "Good (16-20kHz)",
      frequency: "100Hz - 20kHz",
      impedance: "2-10kΩ",
      bestFor: "Vocal recording, podcasts",
      description: "Tiny silicon chip microphones found in 90% of modern phones. Small but surprisingly good quality for voice recording."
    },
    {
      name: "Electret Condenser Mic",
      quality: "Excellent (20Hz - 20kHz)",
      frequency: "20Hz - 20kHz",
      impedance: "2-10kΩ",
      bestFor: "Guitar, vocals, instruments",
      description: "Found in older smartphones and some premium phones. Best quality for music recording. Requires power (2-10V)."
    },
    {
      name: "Dynamic Microphone",
      quality: "Excellent (50Hz - 15kHz)",
      frequency: "50Hz - 15kHz",
      impedance: "200-600Ω",
      bestFor: "Guitar amps, loud sources",
      description: "Rare in phones but found in some models. Extremely durable and great for high-volume sources."
    },
    {
      name: "Omnidirectional MEMS",
      quality: "Good (general purpose)",
      frequency: "100Hz - 20kHz",
      impedance: "2-10kΩ",
      bestFor: "Ambient recording, room mics",
      description: "Picks up sound from all directions. Good for capturing room ambience and background."
    }
  ];

  const extractionSteps = [
    { step: 1, title: "Disassemble the Phone", description: "Remove the back cover (usually held by screws or clips). Use a plastic spudger to avoid damaging components." },
    { step: 2, title: "Locate the Microphone", description: "Look for a small black cylinder or chip near the bottom edge or top of the phone. Check the main board and any daughter boards." },
    { step: 3, title: "Identify the Connections", description: "Use a magnifying glass to see the solder pads. Usually 2-4 pads: VCC (power), GND (ground), and 1-2 signal lines." },
    { step: 4, title: "Desolder Carefully", description: "Use a soldering iron or desoldering pump to remove the microphone. Heat the pads for 3-5 seconds, then gently pull away." },
    { step: 5, title: "Clean the Pads", description: "Use solder wick or a desoldering pump to clean excess solder from the pads and microphone leads." },
    { step: 6, title: "Test Continuity", description: "Use a multimeter to verify the microphone isn't damaged. Check for shorts between pads." },
    { step: 7, title: "Prepare for Use", description: "Solder thin wires (30-32 AWG) to each pad. Use heat shrink tubing to insulate connections." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-20 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <button className="text-purple-600 hover:text-purple-700 border-0 cursor-pointer bg-transparent">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">🎤 Phone Microphone Salvage Guide</h1>
        </div>
      </header>

      <main className="container py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-12 border-2 border-purple-300 mb-8">
          <div className="text-6xl mb-6">🎵</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Turn Old Phones into Studio Microphones</h2>
          <p className="text-xl text-gray-700 mb-6">
            Modern smartphones contain surprisingly high-quality microphones. Learn how to salvage them and build professional-grade recording mics for guitar and vocals—completely free!
          </p>
          <div className="flex gap-4">
            <div className="bg-white rounded-lg p-4 flex-1">
              <p className="text-sm text-gray-600">Cost to Build</p>
              <p className="text-3xl font-bold text-purple-600">$0-20</p>
            </div>
            <div className="bg-white rounded-lg p-4 flex-1">
              <p className="text-sm text-gray-600">Time Required</p>
              <p className="text-3xl font-bold text-purple-600">2-4 hrs</p>
            </div>
            <div className="bg-white rounded-lg p-4 flex-1">
              <p className="text-sm text-gray-600">Audio Quality</p>
              <p className="text-3xl font-bold text-purple-600">Professional</p>
            </div>
          </div>
        </div>

        {/* Microphone Types */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔍 Microphone Types in Phones</h2>
          <p className="text-gray-700 mb-8">Different phones contain different microphone types. Here's what you might find:</p>

          <div className="space-y-4">
            {micTypes.map((mic) => (
              <div
                key={mic.name}
                className="border-2 border-gray-300 rounded-lg p-6 cursor-pointer hover:border-purple-500 transition-all"
                onClick={() => setExpandedMic(expandedMic === mic.name ? null : mic.name)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{mic.name}</h3>
                    <p className="text-gray-700 mt-2">{mic.description}</p>
                  </div>
                  <div className="text-2xl ml-4">
                    {expandedMic === mic.name ? "▼" : "▶"}
                  </div>
                </div>

                {expandedMic === mic.name && (
                  <div className="mt-6 pt-6 border-t-2 border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Quality</p>
                      <p className="font-bold text-gray-900">{mic.quality}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Frequency Range</p>
                      <p className="font-bold text-gray-900">{mic.frequency}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Impedance</p>
                      <p className="font-bold text-gray-900">{mic.impedance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Best For</p>
                      <p className="font-bold text-gray-900">{mic.bestFor}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Extraction Guide */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Wrench className="w-8 h-8 text-blue-600" />
            Step-by-Step Extraction
          </h2>

          <div className="space-y-4">
            {extractionSteps.map((item) => (
              <div key={item.step} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Required */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-600" />
            Tools You'll Need
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-4">Essential Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Soldering iron (25-40W)</li>
                <li>✓ Solder (lead-free, 60/40 or 63/37)</li>
                <li>✓ Desoldering pump or solder wick</li>
                <li>✓ Multimeter (for testing)</li>
                <li>✓ Magnifying glass or jeweler's loupe</li>
                <li>✓ Plastic spudger (non-conductive)</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h3 className="font-bold text-gray-900 mb-4">Optional (Recommended)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Microscope or USB camera</li>
                <li>✓ Heat shrink tubing (assorted sizes)</li>
                <li>✓ Flux pen (for easier soldering)</li>
                <li>✓ Wire strippers (30-32 AWG)</li>
                <li>✓ Helping hands/PCB holder</li>
                <li>✓ Safety glasses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Safety Warning */}
        <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            ⚠️ Safety & Precautions
          </h2>
          <ul className="space-y-3 text-red-900">
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Discharge batteries first:</strong> Remove the battery before disassembling. Let it cool for 30 minutes.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Avoid capacitors:</strong> Large capacitors can hold dangerous charges. Don't touch them.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Use proper ventilation:</strong> Soldering produces fumes. Work in a well-ventilated area or use a fume extractor.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Wear safety gear:</strong> Safety glasses, gloves, and a soldering apron protect you from burns and fumes.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Don't rush:</strong> Take your time. Rushing leads to damaged microphones and injuries.</span>
            </li>
          </ul>
        </div>

        {/* Tips for Success */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 border-2 border-green-300">
          <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-2">
            <Lightbulb className="w-8 h-8" />
            Pro Tips for Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-green-900 mb-3">🎯 Technique Tips</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Use a wet sponge to clean your soldering iron tip</li>
                <li>• Apply flux before soldering for better connections</li>
                <li>• Heat the pad, not the microphone—for 3-5 seconds max</li>
                <li>• Use the smallest soldering iron tip possible</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-green-900 mb-3">🔧 Troubleshooting</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• If no signal: Check for cold solder joints</li>
                <li>• If distorted: Microphone might be damaged</li>
                <li>• If too quiet: Add a preamp (see next page)</li>
                <li>• If noise: Shield wires with foil tape</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-300">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">🎸 Next: Build Your Microphone</h2>
          <p className="text-purple-900 mb-6">
            Once you've extracted your microphone, the next step is building a preamp and audio interface to connect it to your computer for recording.
          </p>
          <Link href="/mic-preamp">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all border-0 cursor-pointer">
              Build Your Preamp & Audio Interface →
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
