import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

/**
 * Phase 4 Lesson: Control! (If I²C Works)
 * Design Philosophy: Educational, playful, with real component images
 */

export default function Phase4Lesson() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-violet-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold">
              <ChevronLeft className="w-5 h-5" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-purple-600">Phase 4: Control</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="phase-badge" style={{ background: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)" }}>
              🎮
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Control! (If I²C Works)
            </h2>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            This is where the magic happens! You've found the camera chip's address and you have power. Now it's time to send it commands and make it do what you want!
          </p>
        </div>

        {/* What You'll Learn */}
        <section className="mb-12 treasure-card">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">📚 What You'll Learn</h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to write code that sends commands to the camera chip</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to use the I²C address you found in Phase 2</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to read data back from the camera chip</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to troubleshoot when things don't work</span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">✓</span>
              <span>How to build amazing projects with your camera chip!</span>
            </li>
          </ul>
        </section>

        {/* Understanding I²C Communication */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🗣️ How to Talk to the Camera Chip</h3>
          <div className="treasure-card mb-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Now that you know the camera chip's I²C address, you can send it commands. Think of it like texting a friend - you need to know their phone number (address) and what to say (commands).
            </p>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-800 font-semibold mb-3">💡 The I²C Communication Process:</p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li><strong>Start:</strong> Arduino says "I'm starting a message"</li>
                <li><strong>Address:</strong> Arduino sends the camera chip's address (e.g., 0x48)</li>
                <li><strong>Command:</strong> Arduino sends what it wants the chip to do</li>
                <li><strong>Data:</strong> Camera chip sends back information</li>
                <li><strong>Stop:</strong> Arduino says "I'm done"</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Writing Your First Command */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">💻 Writing Your First Command</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Here's a simple Arduino program that reads data from your camera chip:
          </p>

          <div className="treasure-card mb-6">
            <h4 className="text-xl font-bold text-purple-600 mb-3">Basic I²C Read Code</h4>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 overflow-x-auto mb-4">
              <pre>{`#include <Wire.h>

// Replace 0x48 with your camera chip's address!
#define CAMERA_ADDRESS 0x48

void setup() {
  Wire.begin();
  Serial.begin(115200);
  Serial.println("Starting camera control...");
}

void loop() {
  // Request 1 byte of data from the camera
  Wire.requestFrom(CAMERA_ADDRESS, 1);
  
  if (Wire.available()) {
    byte data = Wire.read();
    Serial.print("Received: ");
    Serial.println(data, HEX);
  }
  
  delay(1000); // Wait 1 second before reading again
}`}</pre>
            </div>
            <p className="text-gray-700">
              This code reads data from the camera chip every second. Look at the Serial Monitor to see what it sends!
            </p>
          </div>

          <div className="treasure-card">
            <h4 className="text-xl font-bold text-purple-600 mb-3">Writing Data to the Camera</h4>
            <p className="text-gray-700 mb-4">
              To send commands to the camera, use this code:
            </p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 overflow-x-auto mb-4">
              <pre>{`#include <Wire.h>

#define CAMERA_ADDRESS 0x48

void setup() {
  Wire.begin();
  Serial.begin(115200);
}

void loop() {
  // Send a command to the camera
  Wire.beginTransmission(CAMERA_ADDRESS);
  Wire.write(0x01);  // Command byte
  Wire.write(0xFF);  // Data byte
  Wire.endTransmission();
  
  Serial.println("Command sent!");
  delay(1000);
}`}</pre>
            </div>
            <p className="text-gray-700">
              This sends two bytes to the camera chip. The exact meaning depends on your specific camera chip's datasheet!
            </p>
          </div>
        </section>

        {/* Understanding the Datasheet */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">📖 Reading the Camera Chip's Datasheet</h3>
          <div className="treasure-card">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Every chip has a manual called a "datasheet" that explains what commands it understands. This is like a recipe book for your camera!
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
              <p className="text-gray-800 font-semibold mb-2">How to find the datasheet:</p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Look at the chip's part number (e.g., OV7670, OV2640)</li>
                <li>Search Google for "[part number] datasheet"</li>
                <li>Download the PDF from the manufacturer</li>
                <li>Look for the "I²C Register Map" section</li>
              </ol>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              The datasheet will show you all the commands the chip understands. For example, it might say "Write 0x12 to register 0x00 to enable the camera."
            </p>
          </div>
        </section>

        {/* Common Camera Commands */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🎥 Common Camera Commands</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Most camera chips have similar commands. Here are some common ones (check your datasheet to confirm):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">📸 Take a Picture</h5>
              <p className="text-gray-700 text-sm">
                Usually involves writing to a "capture" register. The exact command depends on your chip.
              </p>
            </div>
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">🔆 Adjust Brightness</h5>
              <p className="text-gray-700 text-sm">
                Most chips have a brightness register (0-255). Higher values = brighter image.
              </p>
            </div>
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">🎨 Change Color Mode</h5>
              <p className="text-gray-700 text-sm">
                You can often switch between color, grayscale, and other modes.
              </p>
            </div>
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">📐 Adjust Resolution</h5>
              <p className="text-gray-700 text-sm">
                Change the image size (VGA, QVGA, QQVGA, etc.)
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔧 Troubleshooting Phase 4</h3>
          <div className="space-y-4">
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-orange-600 mb-2">❌ "No response from camera"</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Double-check the I²C address from Phase 2</li>
                <li>• Make sure the camera chip has power</li>
                <li>• Check that SDA and SCL wires are connected</li>
                <li>• Try adding pull-up resistors (10KΩ) to SDA and SCL</li>
              </ul>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-orange-600 mb-2">❌ "Getting random data"</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Check your wire connections - they might be loose</li>
                <li>• Try a different USB cable or power supply</li>
                <li>• Make sure you're reading the right number of bytes</li>
                <li>• Check for electrical noise (move away from other electronics)</li>
              </ul>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-orange-600 mb-2">❌ "Commands don't work"</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Check the datasheet for the correct command bytes</li>
                <li>• Make sure you're sending data in the right order</li>
                <li>• Try reading the current register value first</li>
                <li>• Add delays between commands</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project Ideas */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Amazing Project Ideas</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Once you can control the camera chip, here are some cool projects you can build:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">📷 DIY Security Camera</h5>
              <p className="text-gray-700">
                Build a camera that takes pictures automatically and stores them on an SD card!
              </p>
            </div>
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">🤖 Motion Detector</h5>
              <p className="text-gray-700">
                Make a camera that takes a picture whenever it detects movement!
              </p>
            </div>
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">📱 WiFi Camera</h5>
              <p className="text-gray-700">
                Connect your camera to WiFi and view the stream from your phone!
              </p>
            </div>
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">🎬 Time-Lapse Video</h5>
              <p className="text-gray-700">
                Take pictures at intervals and combine them into a cool time-lapse video!
              </p>
            </div>
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">🌙 Night Vision</h5>
              <p className="text-gray-700">
                Adjust the camera's settings to capture images in low light!
              </p>
            </div>
            <div className="treasure-card">
              <h5 className="font-bold text-purple-600 mb-2">🎨 Photo Effects</h5>
              <p className="text-gray-700">
                Apply filters and effects to your camera images!
              </p>
            </div>
          </div>
        </section>

        {/* Safety Rules */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Safety Rules for Phase 4</h3>
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300">
            <ul className="space-y-3 text-red-800 text-lg">
              <li className="flex gap-3">
                <span className="font-bold">1.</span>
                <span><strong>Never modify the power supply</strong> while the camera is connected</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">2.</span>
                <span><strong>Disconnect the camera before uploading code</strong> to avoid damage</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">3.</span>
                <span><strong>If something smells like burning plastic, stop immediately!</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">4.</span>
                <span><strong>Always ask a grown-up for help</strong> with electrical work</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Congratulations */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 border-2 border-purple-300">
            <h3 className="text-3xl font-bold text-purple-900 mb-4">🎉 Congratulations!</h3>
            <p className="text-lg text-purple-800 leading-relaxed">
              You've completed all four phases of the Electronics Treasure Hunt! You've learned how to salvage parts, read secret messages, find chip addresses, power your projects, and control electronics. You're now a real electronics explorer!
            </p>
            <p className="text-lg text-purple-800 leading-relaxed mt-4">
              The skills you've learned can be used to build amazing projects. Keep exploring, keep learning, and most importantly - have fun!
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 justify-center mt-12">
          <Link href="/phase3">
            <a className="adventure-button">← Back to Phase 3</a>
          </Link>
          <Link href="/">
            <a className="adventure-button">Back to Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
