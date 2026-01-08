import { ChevronLeft, AlertCircle, Lightbulb, Volume2, Music } from "lucide-react";
import { Link } from "wouter";

export default function VocalMicSetup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
      {/* Header */}
      <header className="sticky top-20 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/guitar-mic-setup">
            <button className="text-pink-600 hover:text-pink-700 border-0 cursor-pointer bg-transparent">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">🎤 Vocal Microphone Setup</h1>
        </div>
      </header>

      <main className="container py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-12 border-2 border-pink-300 mb-8">
          <div className="text-6xl mb-6">🎵</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Vocal Recording Setup</h2>
          <p className="text-xl text-gray-700 mb-6">
            Learn how to set up your microphone for crystal-clear vocal recordings. Proper positioning, pop filters, and acoustic treatment make all the difference between amateur and professional-sounding vocals.
          </p>
        </div>

        {/* Pop Filter Guide */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Music className="w-8 h-8 text-pink-600" />
            Pop Filter (Essential for Vocals)
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
              <h3 className="font-bold text-gray-900 mb-3">Why You Need a Pop Filter</h3>
              <p className="text-gray-700 mb-4">
                Pop filters reduce plosives (hard "P" and "B" sounds) and sibilance (harsh "S" sounds). They also protect your microphone from saliva and moisture.
              </p>
              <div className="bg-white rounded p-4 text-sm text-gray-700">
                <p className="mb-2"><strong>Without pop filter:</strong> Harsh pops, boomy bass, inconsistent tone</p>
                <p><strong>With pop filter:</strong> Clean vocals, smooth tone, professional sound</p>
              </div>
            </div>

            <div className="bg-rose-50 rounded-lg p-6 border-l-4 border-rose-600">
              <h3 className="font-bold text-gray-900 mb-4">DIY Pop Filter (Budget Option)</h3>
              <p className="text-gray-700 mb-4">
                Build your own pop filter for $2-5 using common materials:
              </p>
              <div className="bg-white rounded p-4 font-mono text-sm text-gray-700 space-y-2">
                <p><strong>Materials:</strong></p>
                <p>• Embroidery hoop or wire ring (6-8" diameter)</p>
                <p>• Nylon stocking or pantyhose</p>
                <p>• Flexible gooseneck arm</p>
                <p>• Zip ties or tape</p>
              </div>
              <div className="bg-white rounded p-4 text-sm text-gray-700 mt-4">
                <p className="font-bold mb-2">Assembly:</p>
                <ol className="space-y-1">
                  <li>1. Stretch nylon over the embroidery hoop</li>
                  <li>2. Attach hoop to gooseneck with zip ties</li>
                  <li>3. Position 6-8 inches in front of mic</li>
                  <li>4. Angle slightly downward at 45 degrees</li>
                </ol>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
              <h3 className="font-bold text-gray-900 mb-4">Commercial Pop Filters</h3>
              <p className="text-gray-700 mb-4">
                If you prefer to buy one, here are affordable options:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Neewer Pop Filter (~$10) - Good quality, standard size</li>
                <li>• Behringer Pop Filter (~$8) - Budget-friendly, durable</li>
                <li>• Rode PSM1 (~$20) - Professional, premium quality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Microphone Positioning */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📍 Microphone Positioning for Vocals</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-4">Optimal Mic Placement</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">📏 Distance from Mouth</p>
                  <p className="text-gray-700 text-sm">
                    <strong>6-12 inches</strong> is ideal. Closer captures more detail and proximity effect (bass boost), farther sounds more distant.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">📐 Angle to Mouth</p>
                  <p className="text-gray-700 text-sm">
                    <strong>Slightly off-axis</strong> (not directly in front). Aim at the corner of the mouth to reduce plosives while capturing full tone.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">📊 Height Adjustment</p>
                  <p className="text-gray-700 text-sm">
                    <strong>Mouth level or slightly above.</strong> This helps with posture and reduces unwanted reflections from the floor.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-gray-900 mb-2">🎯 Pop Filter Position</p>
                  <p className="text-gray-700 text-sm">
                    <strong>6-8 inches in front of mic.</strong> Angled at 45 degrees downward to catch plosives without affecting tone.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="font-bold text-gray-900 mb-4">Microphone Stand Setup</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Use a boom arm or desk stand for stability</li>
                <li>✓ Add a shock mount to reduce vibrations</li>
                <li>✓ Keep stand away from walls (reduces reflections)</li>
                <li>✓ Position pop filter between you and mic</li>
                <li>✓ Ensure mic is at comfortable singing height</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Acoustic Treatment */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Volume2 className="w-8 h-8 text-indigo-600" />
            Acoustic Treatment for Vocals
          </h2>

          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
              <h3 className="font-bold text-gray-900 mb-4">Why Acoustic Treatment Matters</h3>
              <p className="text-gray-700 mb-4">
                Room reflections create echo and reverb that muddy vocal recordings. Proper treatment absorbs these reflections for clean, dry vocals.
              </p>
              <div className="bg-white rounded p-4 text-sm text-gray-700">
                <p className="mb-2"><strong>Untreated room:</strong> Echoey, boomy, unprofessional sound</p>
                <p><strong>Treated room:</strong> Clean, dry, professional vocals</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h3 className="font-bold text-gray-900 mb-4">DIY Acoustic Treatment (Budget)</h3>
              <p className="text-gray-700 mb-4">
                Create a vocal booth using common materials:
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900 text-sm mb-1">🪑 Closet Vocal Booth (Cheapest)</p>
                  <p className="text-gray-700 text-sm">Record inside a closet with clothes. Clothes absorb sound naturally.</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900 text-sm mb-1">📦 Blanket Fort</p>
                  <p className="text-gray-700 text-sm">Hang blankets or comforters around your mic to absorb reflections.</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900 text-sm mb-1">🧱 Foam Panels ($20-50)</p>
                  <p className="text-gray-700 text-sm">Cheap acoustic foam from Amazon. Mount on walls behind and to sides of mic.</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900 text-sm mb-1">🏠 Bass Traps (Corners)</p>
                  <p className="text-gray-700 text-sm">Place foam or bass traps in room corners to absorb low-frequency reflections.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-4">Professional Acoustic Panels</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Auralex Studiofoam (~$15 per panel)</li>
                <li>• GIK Acoustics Panels (~$50-100)</li>
                <li>• Primacoustic Panels (~$40-80)</li>
                <li>• DIY rockwool panels (~$30 for 4)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recording Technique */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎙️ Vocal Recording Technique</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
              <h3 className="font-bold text-gray-900 mb-4">Before Recording</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Warm up your voice (sing scales)</li>
                <li>✓ Drink water (not cold)</li>
                <li>✓ Clear your throat</li>
                <li>✓ Set levels (-12dB to -6dB)</li>
                <li>✓ Do a test take</li>
              </ul>
            </div>

            <div className="bg-rose-50 rounded-lg p-6 border-l-4 border-rose-600">
              <h3 className="font-bold text-gray-900 mb-4">During Recording</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Maintain consistent distance from mic</li>
                <li>✓ Avoid touching the mic or stand</li>
                <li>✓ Breathe naturally between phrases</li>
                <li>✓ Don't rush or force the performance</li>
                <li>✓ Record multiple takes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Issues */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lightbulb className="w-8 h-8 text-yellow-600" />
            Troubleshooting Vocal Recording
          </h2>

          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Harsh Plosives (P, B Sounds)</h3>
              <p className="text-gray-700 text-sm">
                Use a pop filter, angle mic off-axis, or increase distance slightly. Move pop filter closer if needed.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Sibilance (Harsh S Sounds)</h3>
              <p className="text-gray-700 text-sm">
                Angle mic slightly off to the side, use a de-esser in post-production, or back up slightly from the mic.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Echoey/Reverby Sound</h3>
              <p className="text-gray-700 text-sm">
                Add acoustic treatment (foam, blankets), record in a smaller room, or use software reverb reduction.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Thin/Weak Vocals</h3>
              <p className="text-gray-700 text-sm">
                Move closer to mic (proximity effect adds bass), increase gain, or check microphone connection.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h3 className="font-bold text-gray-900 mb-2">❌ Distorted/Clipping</h3>
              <p className="text-gray-700 text-sm">
                Lower input gain, back away from mic, or check for loose connections causing noise.
              </p>
            </div>
          </div>
        </div>

        {/* Safety & Health */}
        <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            ⚠️ Vocal Health & Safety
          </h2>
          <ul className="space-y-3 text-red-900">
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Don't strain:</strong> Sing in your natural range. Forcing high or low notes damages your voice.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Stay hydrated:</strong> Drink water before, during, and after recording sessions.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Take breaks:</strong> Rest your voice every 30-45 minutes to avoid fatigue.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span><strong>Protect hearing:</strong> Use headphones at reasonable volume. Loud monitoring can damage hearing.</span>
            </li>
          </ul>
        </div>

        {/* Final Tips */}
        <div className="mt-8 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 border-2 border-pink-300">
          <h2 className="text-3xl font-bold text-pink-900 mb-4">🎊 You're Ready to Record!</h2>
          <p className="text-pink-900 mb-6">
            You now have everything you need to record professional-quality vocals and guitar using salvaged phone microphones. Start experimenting with different mic positions and acoustic treatments to find your perfect sound.
          </p>
          <Link href="/">
            <button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg transition-all border-0 cursor-pointer">
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
