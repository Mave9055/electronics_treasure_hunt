import { ChevronLeft, AlertCircle, Zap, Music, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function MicrophonePreamp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="sticky top-20 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/phone-mic-salvage">
            <button className="text-blue-600 hover:text-blue-700 border-0 cursor-pointer bg-transparent">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">🎙️ DIY Preamp & Audio Interface</h1>
        </div>
      </header>

      <main className="container py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-12 border-2 border-blue-300 mb-8">
          <div className="text-6xl mb-6">📊</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Amplify Your Microphone Signal</h2>
          <p className="text-xl text-gray-700 mb-6">
            Phone microphones output very weak signals (millivolts). To record professional-quality audio, you need a preamp to boost the signal before it reaches your computer's audio interface.
          </p>
        </div>

        {/* Why You Need a Preamp */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔊 Why a Preamp?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Without Preamp</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Very quiet signal</li>
                <li>• Lots of background noise</li>
                <li>• Distorted when boosted</li>
                <li>• Unusable for recording</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">⚙️ With Simple Preamp</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 20-40dB gain</li>
                <li>• Clean signal</li>
                <li>• Reduced noise</li>
                <li>• Good for vocals</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h3 className="font-bold text-gray-900 mb-2">✅ With Good Preamp</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 40-60dB gain</li>
                <li>• Professional quality</li>
                <li>• Low noise floor</li>
                <li>• Studio-grade recording</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Simple Preamp Circuit */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-600" />
            Simple Op-Amp Preamp (Easiest)
          </h2>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Components Needed (~$5)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900">Active Components</p>
                <ul className="space-y-1 text-gray-700 text-sm mt-2">
                  <li>• 1x LM358 Op-Amp (or TL072)</li>
                  <li>• 1x 9V battery (or USB power)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Passive Components</p>
                <ul className="space-y-1 text-gray-700 text-sm mt-2">
                  <li>• 2x 10kΩ resistors</li>
                  <li>• 1x 100kΩ resistor (gain control)</li>
                  <li>• 2x 10µF capacitors</li>
                  <li>• 1x 0.1µF capacitor</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm mb-8">
            <p className="font-bold text-gray-900 mb-4">Circuit Diagram (Text Format):</p>
            <pre className="text-gray-700 overflow-x-auto text-xs leading-relaxed">
{`
Microphone Input
    |
    +--[10µF Cap]--+
                   |
              [10kΩ Resistor]
                   |
    +--[100kΩ Pot]--+
    |              |
    +--[LM358 Op-Amp]--+--[10µF Cap]--+
    |              |                   |
   GND            GND              Output to Audio Interface
    |
   9V Battery (or USB +5V)
`}
            </pre>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
            <h3 className="font-bold text-gray-900 mb-4">Assembly Steps</h3>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Prepare the breadboard:</strong> Place the LM358 op-amp in the center</li>
              <li><strong>2. Wire power:</strong> Connect +9V to pin 8, GND to pin 4</li>
              <li><strong>3. Input stage:</strong> Connect microphone to the non-inverting input (pin 3) through a 10µF capacitor</li>
              <li><strong>4. Feedback network:</strong> Connect 100kΩ potentiometer between output and inverting input for gain control</li>
              <li><strong>5. Output:</strong> Connect output (pin 1) through 10µF capacitor to your audio interface</li>
              <li><strong>6. Test:</strong> Adjust potentiometer and listen for clean amplified signal</li>
            </ol>
          </div>
        </div>

        {/* Audio Interface Options */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎚️ Connect to Your Computer</h2>

          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="font-bold text-gray-900 mb-3">Option 1: USB Audio Interface ($20-50)</h3>
              <p className="text-gray-700 mb-3">
                Cheapest professional option. Plug your preamp output into the line-in of a USB audio interface.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Behringer U-Phoria UMC202HD</li>
                <li>✓ Focusrite Scarlett Solo</li>
                <li>✓ Generic USB audio card (~$15)</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-3">Option 2: Computer Line-In Jack (Free)</h3>
              <p className="text-gray-700 mb-3">
                If your computer has a line-in jack, connect directly. Quality depends on your computer's audio hardware.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>⚠️ Most laptops don't have line-in anymore</li>
                <li>✓ Desktop computers often have it</li>
                <li>✓ Use a USB audio adapter as backup</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h3 className="font-bold text-gray-900 mb-3">Option 3: XLR Microphone Interface ($30-100)</h3>
              <p className="text-gray-700 mb-3">
                Professional setup. Add an XLR connector to your preamp output for studio-grade recording.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Behringer Xenyx mixer with USB</li>
                <li>✓ Audio-Technica AT2020 interface</li>
                <li>✓ Professional XLR cables</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recording Settings */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Music className="w-8 h-8 text-pink-600" />
            Recording Settings for Best Quality
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
              <h3 className="font-bold text-gray-900 mb-4">Audio Settings</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Sample Rate:</strong> 44.1kHz or 48kHz</li>
                <li><strong>Bit Depth:</strong> 24-bit (if available)</li>
                <li><strong>Channels:</strong> Mono (for single mic)</li>
                <li><strong>Buffer:</strong> 256 samples (low latency)</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
              <h3 className="font-bold text-gray-900 mb-4">Recording Tips</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Set levels to -12dB to -6dB (not too hot)</li>
                <li>• Use noise gate to reduce background noise</li>
                <li>• Record in a quiet room</li>
                <li>• Use pop filter for vocals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lightbulb className="w-8 h-8 text-yellow-600" />
            Troubleshooting
          </h2>

          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ No Signal</h3>
              <p className="text-gray-700 text-sm">
                Check connections, verify power supply, test microphone with multimeter. Try adjusting gain potentiometer.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">🔊 Distorted Audio</h3>
              <p className="text-gray-700 text-sm">
                Reduce gain on preamp, lower input level in recording software, check for clipping in audio interface.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">🎵 Lots of Noise</h3>
              <p className="text-gray-700 text-sm">
                Shield cables with foil tape, move away from power lines, use ferrite cores on cables, add noise gate in software.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">📉 Very Quiet Signal</h3>
              <p className="text-gray-700 text-sm">
                Increase gain potentiometer, check microphone connections, verify op-amp is working (test with multimeter).
              </p>
            </div>
          </div>
        </div>

        {/* Safety Warning */}
        <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            ⚠️ Safety Notes
          </h2>
          <ul className="space-y-3 text-red-900">
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Use safe voltages:</strong> Keep to 9V or USB 5V. Never use mains power.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Avoid ground loops:</strong> Use balanced cables or ground lift switches to prevent hum.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Protect your ears:</strong> Start with low volume, gradually increase. Loud signals can damage hearing.</span>
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-8 border-2 border-blue-300">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">🎸 Next: Set Up Your Mic</h2>
          <p className="text-blue-900 mb-6">
            Now that you have a working preamp, learn how to mount and position your microphone for guitar and vocal recording.
          </p>
          <Link href="/guitar-mic-setup">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all border-0 cursor-pointer">
              Guitar Microphone Setup →
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
