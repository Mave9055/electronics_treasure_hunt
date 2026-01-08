import { ChevronLeft, AlertCircle, Music, Lightbulb, Volume2 } from "lucide-react";
import { Link } from "wouter";

export default function GuitarMicSetup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="sticky top-20 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/mic-preamp">
            <button className="text-orange-600 hover:text-orange-700 border-0 cursor-pointer bg-transparent">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">🎸 Guitar Microphone Setup</h1>
        </div>
      </header>

      <main className="container py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-12 border-2 border-orange-300 mb-8">
          <div className="text-6xl mb-6">🎵</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Record Guitar with Your DIY Microphone</h2>
          <p className="text-xl text-gray-700 mb-6">
            Learn professional microphone placement techniques to capture rich, detailed guitar tones. Whether you're recording acoustic or electric guitar amplifiers, proper positioning is everything.
          </p>
        </div>

        {/* Microphone Mounting */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Music className="w-8 h-8 text-orange-600" />
            DIY Microphone Mounting
          </h2>

          <div className="space-y-6">
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
              <h3 className="font-bold text-gray-900 mb-3">Option 1: Mic Clip Mount (Easiest)</h3>
              <p className="text-gray-700 mb-4">
                Use a standard microphone clip (available at music stores for $5-10). This is the quickest setup.
              </p>
              <div className="bg-white rounded p-4 font-mono text-sm text-gray-700">
                <p className="mb-2"><strong>Materials:</strong></p>
                <p>• Microphone clip (standard 5/8")</p>
                <p>• Mic stand or boom arm</p>
                <p>• XLR cable (or 3.5mm if using USB interface)</p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-3">Option 2: DIY Foam Mount (Budget-Friendly)</h3>
              <p className="text-gray-700 mb-4">
                Build a custom mount using foam and zip ties. Great for reducing vibration and handling noise.
              </p>
              <div className="bg-white rounded p-4 font-mono text-sm text-gray-700">
                <p className="mb-2"><strong>Materials:</strong></p>
                <p>• Acoustic foam or rubber padding</p>
                <p>• Zip ties (black, reusable)</p>
                <p>• Gooseneck flexible arm or mic stand</p>
                <p>• Hot glue gun (optional)</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-3">Option 3: Shock Mount (Professional)</h3>
              <p className="text-gray-700 mb-4">
                Isolate the microphone from vibrations using elastic bands or springs. Reduces rumble and footsteps.
              </p>
              <div className="bg-white rounded p-4 font-mono text-sm text-gray-700">
                <p className="mb-2"><strong>Materials:</strong></p>
                <p>• Elastic bands or springs</p>
                <p>• Microphone clip</p>
                <p>• Mic stand or boom arm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Acoustic Guitar Recording */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎸 Acoustic Guitar Recording</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-4">Microphone Placement Techniques</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">📍 Classic Position (12th Fret)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Place mic 6-12 inches away, pointing at the 12th fret (where neck meets body). This captures balanced tone.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Best for:</strong> General recording, balanced sound</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">📍 Bright Position (Soundhole)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Point directly at the soundhole, 8-10 inches away. Captures more treble and brightness.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Best for:</strong> Fingerpicking, detailed recordings</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">📍 Warm Position (Lower Body)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Aim at the lower bout (bottom of guitar), 10-14 inches away. Captures more bass and warmth.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Best for:</strong> Strumming, warm tones</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">📍 Stereo Position (Two Mics)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Place two mics: one at 12th fret, one near soundhole. Pan left/right for stereo width.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Best for:</strong> Professional recordings, spatial depth</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h3 className="font-bold text-gray-900 mb-4">📏 Distance & Angle Guidelines</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>Distance from guitar:</strong> 6-18 inches (closer = more detail, farther = more room)</p>
                <p><strong>Angle:</strong> 45-90 degrees to the guitar body (not directly perpendicular)</p>
                <p><strong>Height:</strong> Level with the 12th fret or slightly above</p>
                <p><strong>Off-axis:</strong> Slightly to the side reduces plosives and harshness</p>
              </div>
            </div>
          </div>
        </div>

        {/* Electric Guitar Amp Recording */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚡ Electric Guitar Amp Recording</h2>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="font-bold text-gray-900 mb-4">Microphone Placement for Amps</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">🎛️ On-Axis (Direct)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Point directly at the speaker cone center, 2-6 inches away. Captures bright, direct tone.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Best for:</strong> Bright tones, clear definition</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">🎛️ Off-Axis (Softer)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Point at the edge of the speaker cone, 4-8 inches away. Captures warmer, smoother tone.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Best for:</strong> Warm tones, reduced harshness</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">🎛️ Room Mic (Ambient)</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Place 2-3 feet away from amp. Captures room reflections and natural ambience.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Best for:</strong> Adding space and depth</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
              <h3 className="font-bold text-gray-900 mb-4">⚠️ Amp Recording Tips</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Keep amp volume low to avoid clipping and feedback</li>
                <li>• Use a mic stand or clip to keep mic stable</li>
                <li>• Avoid pointing mic directly at amp vents (wind noise)</li>
                <li>• Use a pop filter or windscreen to reduce plosives</li>
                <li>• Test levels before recording to avoid distortion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recording Techniques */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Volume2 className="w-8 h-8 text-pink-600" />
            Pro Recording Techniques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
              <h3 className="font-bold text-gray-900 mb-4">🎚️ Level Setting</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Set input to -12dB to -6dB (peaks)</li>
                <li>• Leave 6dB headroom for safety</li>
                <li>• Use gain knob, not volume slider</li>
                <li>• Watch for clipping (red lights)</li>
              </ul>
            </div>

            <div className="bg-rose-50 rounded-lg p-6 border-l-4 border-rose-600">
              <h3 className="font-bold text-gray-900 mb-4">🔊 Monitoring</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Use headphones to monitor signal</li>
                <li>• Listen for noise and distortion</li>
                <li>• Check for phase issues (thin sound)</li>
                <li>• Record a test take first</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lightbulb className="w-8 h-8 text-yellow-600" />
            Troubleshooting Guitar Recording
          </h2>

          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Sound is Too Thin/Bright</h3>
              <p className="text-gray-700 text-sm">
                Move mic off-axis (away from center of speaker), increase distance, or aim lower on the amp.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Sound is Too Muddy/Dark</h3>
              <p className="text-gray-700 text-sm">
                Move mic on-axis (closer to center), decrease distance, or aim higher on the amp.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Lots of Noise/Hum</h3>
              <p className="text-gray-700 text-sm">
                Move away from power cables, use balanced cables, add ferrite cores, or use a noise gate in software.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Distorted/Clipping Sound</h3>
              <p className="text-gray-700 text-sm">
                Lower input gain, move mic farther away, or reduce amp volume.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Warning */}
        <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            ⚠️ Safety & Best Practices
          </h2>
          <ul className="space-y-3 text-red-900">
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Protect your hearing:</strong> Start with low volume, gradually increase. Loud amps can damage hearing.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Mic placement:</strong> Keep mic away from hot amp vents. Use a stand to avoid accidental contact.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Cable management:</strong> Keep cables away from amp vents and speaker cones.</span>
            </li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 border-2 border-orange-300">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">🎤 Next: Vocal Microphone Setup</h2>
          <p className="text-orange-900 mb-6">
            Learn how to set up your microphone for professional vocal recording with pop filters and acoustic treatment.
          </p>
          <Link href="/vocal-mic-setup">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all border-0 cursor-pointer">
              Vocal Microphone Setup →
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
