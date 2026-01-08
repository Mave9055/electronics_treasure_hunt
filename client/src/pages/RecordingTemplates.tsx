import { ChevronLeft, Download, Settings, Zap, Volume2, Music } from "lucide-react";
import { Link } from "wouter";

export default function RecordingTemplates() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-20 z-40 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/vocal-mic-setup">
            <button className="text-indigo-600 hover:text-indigo-700 border-0 cursor-pointer bg-transparent">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">🎙️ Recording Project Templates</h1>
        </div>
      </header>

      <main className="container py-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-12 border-2 border-indigo-300 mb-8">
          <div className="text-6xl mb-6">🎵</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pre-Configured Recording Templates</h2>
          <p className="text-xl text-gray-700 mb-6">
            Ready-to-use project templates for Audacity and GarageBand optimized for DIY phone microphones. Import these settings and start recording professional-quality audio immediately.
          </p>
        </div>

        {/* Audacity Template */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Music className="w-8 h-8 text-blue-600" />
            Audacity Template (Free & Open Source)
          </h2>

          <div className="space-y-6">
            {/* Why Audacity */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-3">Why Audacity for DIY Mics?</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ <strong>Free & Open Source</strong> - No subscription needed</li>
                <li>✓ <strong>Powerful Noise Reduction</strong> - Perfect for phone mics</li>
                <li>✓ <strong>Built-in Effects</strong> - EQ, compression, normalization</li>
                <li>✓ <strong>Easy to Use</strong> - Beginner-friendly interface</li>
              </ul>
            </div>

            {/* Audacity Settings */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Optimal Audacity Settings for DIY Mics
              </h3>

              <div className="space-y-4">
                {/* Recording Settings */}
                <div className="bg-gray-50 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">🎙️ Recording Settings</p>
                  <div className="bg-white rounded p-3 font-mono text-sm text-gray-700 space-y-1">
                    <p><strong>Sample Rate:</strong> 44100 Hz (CD quality)</p>
                    <p><strong>Bit Depth:</strong> 16-bit (standard quality)</p>
                    <p><strong>Channels:</strong> Mono (single mic)</p>
                    <p><strong>Input Level:</strong> -12dB to -6dB (peaks)</p>
                  </div>
                </div>

                {/* Noise Reduction */}
                <div className="bg-gray-50 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">🔇 Noise Reduction (Essential!)</p>
                  <div className="bg-white rounded p-3 text-sm text-gray-700 space-y-2">
                    <p><strong>Step 1:</strong> Select 1-2 seconds of silence/noise at start of recording</p>
                    <p><strong>Step 2:</strong> Go to Effect → Noise Reduction</p>
                    <p><strong>Step 3:</strong> Set these values:</p>
                    <div className="font-mono text-xs bg-gray-100 p-2 rounded mt-2">
                      • Noise Reduction: 12 dB<br/>
                      • Sensitivity: 0.0<br/>
                      • Frequency Smoothing: 150 Hz
                    </div>
                  </div>
                </div>

                {/* EQ Settings */}
                <div className="bg-gray-50 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">🎚️ EQ (Equalization) - DIY Mic Boost</p>
                  <div className="bg-white rounded p-3 text-sm text-gray-700 space-y-2">
                    <p><strong>Purpose:</strong> Reduce muddiness, add clarity</p>
                    <p><strong>Steps:</strong> Select all audio → Effect → Equalization</p>
                    <div className="font-mono text-xs bg-gray-100 p-2 rounded mt-2">
                      • High Pass Filter: 80 Hz (removes rumble)<br/>
                      • Boost 2-4 kHz: +3dB (adds clarity)<br/>
                      • Reduce 200-500 Hz: -2dB (removes muddiness)
                    </div>
                  </div>
                </div>

                {/* Compression */}
                <div className="bg-gray-50 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">📊 Compression - Even Out Levels</p>
                  <div className="bg-white rounded p-3 text-sm text-gray-700 space-y-2">
                    <p><strong>Purpose:</strong> Make quiet parts louder, loud parts quieter</p>
                    <p><strong>Steps:</strong> Select all audio → Effect → Compressor</p>
                    <div className="font-mono text-xs bg-gray-100 p-2 rounded mt-2">
                      • Threshold: -20 dB<br/>
                      • Ratio: 4:1<br/>
                      • Attack Time: 0.1 seconds<br/>
                      • Release Time: 1.0 seconds
                    </div>
                  </div>
                </div>

                {/* Normalization */}
                <div className="bg-gray-50 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">📈 Normalization - Maximize Volume</p>
                  <div className="bg-white rounded p-3 text-sm text-gray-700 space-y-2">
                    <p><strong>Purpose:</strong> Boost overall volume without distortion</p>
                    <p><strong>Steps:</strong> Select all audio → Effect → Normalize</p>
                    <div className="font-mono text-xs bg-gray-100 p-2 rounded mt-2">
                      • Remove DC offset: ✓ (checked)<br/>
                      • Normalize peak amplitude: -1.0 dB<br/>
                      • Normalize stereo channels independently: (if stereo)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audacity Workflow */}
            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
              <h3 className="font-bold text-gray-900 mb-4">📋 Complete Audacity Workflow</h3>
              <ol className="space-y-3 text-gray-700 text-sm">
                <li><strong>1. Record:</strong> Set input level to -12dB, record your audio</li>
                <li><strong>2. Noise Reduce:</strong> Select silence, apply noise reduction</li>
                <li><strong>3. EQ:</strong> Select all, apply EQ curve for clarity</li>
                <li><strong>4. Compress:</strong> Select all, apply compression for consistency</li>
                <li><strong>5. Normalize:</strong> Select all, normalize to -1.0 dB</li>
                <li><strong>6. Export:</strong> File → Export → WAV (best quality) or MP3</li>
              </ol>
            </div>
          </div>
        </div>

        {/* GarageBand Template */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="w-8 h-8 text-orange-600" />
            GarageBand Template (Mac & iOS)
          </h2>

          <div className="space-y-6">
            {/* Why GarageBand */}
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
              <h3 className="font-bold text-gray-900 mb-3">Why GarageBand for DIY Mics?</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ <strong>Built-in on Mac/iPad</strong> - No download needed</li>
                <li>✓ <strong>Professional Effects</strong> - Reverb, compression, EQ</li>
                <li>✓ <strong>Easy Mixing</strong> - Visual faders and controls</li>
                <li>✓ <strong>Loops & Instruments</strong> - Add backing tracks</li>
              </ul>
            </div>

            {/* GarageBand Settings */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Optimal GarageBand Settings for DIY Mics
              </h3>

              <div className="space-y-4">
                {/* Project Setup */}
                <div className="bg-gray-50 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">🎵 New Project Setup</p>
                  <div className="bg-white rounded p-3 text-sm text-gray-700 space-y-2">
                    <p><strong>Project Type:</strong> Voice or Podcast</p>
                    <p><strong>Sample Rate:</strong> 44.1 kHz</p>
                    <p><strong>Bit Depth:</strong> 16-bit</p>
                    <p><strong>Tempo:</strong> 120 BPM (adjustable)</p>
                  </div>
                </div>

                {/* Track Setup */}
                <div className="bg-gray-50 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">🎙️ Audio Track Setup</p>
                  <div className="bg-white rounded p-3 text-sm text-gray-700 space-y-2">
                    <p><strong>Track Type:</strong> Real Instrument</p>
                    <p><strong>Input:</strong> Your USB audio interface</p>
                    <p><strong>Monitoring:</strong> OFF (to avoid feedback)</p>
                    <p><strong>Volume:</strong> -12dB to -6dB (peaks)</p>
                  </div>
                </div>

                {/* Effects Chain */}
                <div className="bg-gray-50 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">🎚️ Effects Chain (Left to Right)</p>
                  <div className="bg-white rounded p-3 text-sm text-gray-700 space-y-3">
                    <div className="font-mono text-xs bg-gray-100 p-2 rounded">
                      <p className="font-bold mb-1">1. NOISE GATE (Remove background noise)</p>
                      <p>Threshold: -40 dB</p>
                      <p>Hysteresis: 10 dB</p>
                    </div>
                    <div className="font-mono text-xs bg-gray-100 p-2 rounded">
                      <p className="font-bold mb-1">2. COMPRESSOR (Even out levels)</p>
                      <p>Threshold: -20 dB</p>
                      <p>Ratio: 4:1</p>
                      <p>Attack: 10 ms</p>
                      <p>Release: 100 ms</p>
                    </div>
                    <div className="font-mono text-xs bg-gray-100 p-2 rounded">
                      <p className="font-bold mb-1">3. EQ (Add clarity)</p>
                      <p>High Pass: 80 Hz (remove rumble)</p>
                      <p>Presence Peak: +3 dB at 3 kHz</p>
                      <p>Reduce Mud: -2 dB at 300 Hz</p>
                    </div>
                    <div className="font-mono text-xs bg-gray-100 p-2 rounded">
                      <p className="font-bold mb-1">4. REVERB (Add space - optional)</p>
                      <p>Reverb Type: Small Room</p>
                      <p>Wet/Dry: 15-20% (subtle)</p>
                    </div>
                  </div>
                </div>

                {/* Mixing Tips */}
                <div className="bg-gray-50 rounded p-4">
                  <p className="font-bold text-gray-900 mb-3">🎛️ Mixing Tips</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Level:</strong> Keep peaks at -6dB to -3dB</li>
                    <li>• <strong>Pan:</strong> Center (0) for vocals</li>
                    <li>• <strong>Automation:</strong> Use volume automation for dynamic parts</li>
                    <li>• <strong>Reference:</strong> Compare to professional recordings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GarageBand Workflow */}
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
              <h3 className="font-bold text-gray-900 mb-4">📋 Complete GarageBand Workflow</h3>
              <ol className="space-y-3 text-gray-700 text-sm">
                <li><strong>1. Create:</strong> New project → Voice/Podcast</li>
                <li><strong>2. Record:</strong> Set input level, record your audio</li>
                <li><strong>3. Add Effects:</strong> Click track → Edit → Add Noise Gate</li>
                <li><strong>4. Compress:</strong> Add Compressor effect</li>
                <li><strong>5. EQ:</strong> Add EQ effect with settings above</li>
                <li><strong>6. Adjust Levels:</strong> Use faders to balance</li>
                <li><strong>7. Export:</strong> Share → Export Song to Disk (WAV or MP3)</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Audacity vs GarageBand</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="p-4 text-left font-bold text-gray-900">Feature</th>
                  <th className="p-4 text-left font-bold text-gray-900">Audacity</th>
                  <th className="p-4 text-left font-bold text-gray-900">GarageBand</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold text-gray-900">Cost</td>
                  <td className="p-4 text-gray-700">Free</td>
                  <td className="p-4 text-gray-700">Free (Mac/iOS)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold text-gray-900">Platform</td>
                  <td className="p-4 text-gray-700">Windows, Mac, Linux</td>
                  <td className="p-4 text-gray-700">Mac, iPad, iPhone</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold text-gray-900">Noise Reduction</td>
                  <td className="p-4 text-gray-700">Excellent</td>
                  <td className="p-4 text-gray-700">Good (via Noise Gate)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold text-gray-900">Ease of Use</td>
                  <td className="p-4 text-gray-700">Moderate</td>
                  <td className="p-4 text-gray-700">Easy</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold text-gray-900">Effects</td>
                  <td className="p-4 text-gray-700">Good</td>
                  <td className="p-4 text-gray-700">Excellent</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Best For</td>
                  <td className="p-4 text-gray-700">Vocals, Podcasts</td>
                  <td className="p-4 text-gray-700">Music, Mixing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Volume2 className="w-8 h-8 text-purple-600" />
            Pro Tips for DIY Mic Recording
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="font-bold text-gray-900 mb-3">🎙️ Before Recording</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Test levels (aim for -12dB to -6dB)</li>
                <li>✓ Record 5-10 seconds of silence for noise profile</li>
                <li>✓ Do a test take and listen back</li>
                <li>✓ Warm up your voice (if vocal)</li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
              <h3 className="font-bold text-gray-900 mb-3">🎚️ After Recording</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Apply noise reduction first</li>
                <li>✓ Then EQ, then compression</li>
                <li>✓ Always normalize last</li>
                <li>✓ Export at 44.1 kHz, 16-bit WAV</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 border-2 border-indigo-300">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">🎊 Ready to Record!</h2>
          <p className="text-indigo-900 mb-6">
            You now have professional-grade templates for both Audacity and GarageBand. Start recording with these settings and adjust based on your microphone and environment. Remember: good recording technique beats expensive equipment!
          </p>
          <Link href="/">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all border-0 cursor-pointer">
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
