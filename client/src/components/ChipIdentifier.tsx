import { useState } from "react";
import { Search, AlertCircle } from "lucide-react";

/**
 * Interactive Chip Identifier
 * Helps adults identify electronic components and learn what they do
 */

const chipDatabase = [
  {
    name: "CH340",
    category: "USB-to-Serial Converter",
    emoji: "🔌",
    description: "Translates USB signals to serial communication. Found in Arduino boards and USB adapters.",
    realWorldUse: "Lets your computer talk to microcontrollers and sensors",
    whereToFind: "Old Arduino boards, USB hubs, 3D printer controllers",
    difficulty: "Beginner",
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "FTDI FT232RL",
    category: "USB-to-Serial Converter",
    emoji: "🔌",
    description: "Professional-grade USB-to-Serial chip. More reliable than CH340.",
    realWorldUse: "Used in professional electronics and industrial equipment",
    whereToFind: "Old professional electronics, development boards",
    difficulty: "Intermediate",
    color: "from-red-400 to-red-600",
  },
  {
    name: "Arduino Nano",
    category: "Microcontroller",
    emoji: "🤖",
    description: "Tiny computer that runs your code. Can control lights, motors, sensors, and more.",
    realWorldUse: "The brain of DIY electronics projects and smart devices",
    whereToFind: "Old Arduino projects, maker kits, smart home devices",
    difficulty: "Beginner",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "TP4056",
    category: "Battery Charger",
    emoji: "🔋",
    description: "Safely charges lithium batteries without overcharging them. Protects your battery.",
    realWorldUse: "Powers portable devices like power banks and Bluetooth speakers",
    whereToFind: "Bluetooth speakers, power banks, portable electronics",
    difficulty: "Beginner",
    color: "from-green-400 to-green-600",
  },
  {
    name: "18650 Battery",
    category: "Power Source",
    emoji: "⚡",
    description: "Powerful rechargeable battery. Same type used in power tools and Tesla cars!",
    realWorldUse: "Provides portable power for your projects",
    whereToFind: "Bluetooth speakers, power banks, flashlights, e-cigarettes",
    difficulty: "Beginner",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "AMS1117-3.3",
    category: "Voltage Regulator",
    emoji: "⚙️",
    description: "Converts 5V power to 3.3V. Protects sensitive components from too much power.",
    realWorldUse: "Prevents damage to delicate electronics",
    whereToFind: "Old circuit boards, development kits",
    difficulty: "Intermediate",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "OV7670",
    category: "Camera Module",
    emoji: "📷",
    description: "Tiny camera chip. Can take pictures and send them to your microcontroller.",
    realWorldUse: "Used in security cameras, drones, and smart devices",
    whereToFind: "Old webcams, smartphone cameras, surveillance equipment",
    difficulty: "Advanced",
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "ESP32",
    category: "WiFi Microcontroller",
    emoji: "📡",
    description: "Microcontroller with built-in WiFi and Bluetooth. Can connect to the internet!",
    realWorldUse: "Powers smart home devices, IoT projects, and connected gadgets",
    whereToFind: "Smart bulbs, smart speakers, WiFi-enabled devices",
    difficulty: "Intermediate",
    color: "from-teal-400 to-teal-600",
  },
];

export default function ChipIdentifier() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChip, setSelectedChip] = useState<(typeof chipDatabase)[0] | null>(null);

  const filteredChips = chipDatabase.filter(
    (chip) =>
      chip.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chip.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chip.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-purple-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">🔍 Chip Identifier - Learn What You Found</h3>
      <p className="text-gray-600 mb-6">
        Search for any chip name or component type to learn what it does and where to find it. No technical knowledge needed!
      </p>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a chip (e.g., 'Arduino', 'battery', 'camera')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {filteredChips.map((chip, index) => (
          <button
            key={index}
            onClick={() => setSelectedChip(chip)}
            className={`text-left p-4 rounded-xl border-2 transition-all hover:shadow-lg ${
              selectedChip?.name === chip.name
                ? "border-purple-500 bg-purple-100"
                : "border-gray-200 bg-white hover:border-purple-300"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-3xl">{chip.emoji}</div>
              <span className="text-xs font-bold bg-purple-200 text-purple-700 px-2 py-1 rounded">
                {chip.difficulty}
              </span>
            </div>
            <h4 className="font-bold text-gray-900">{chip.name}</h4>
            <p className="text-sm text-gray-600">{chip.category}</p>
          </button>
        ))}
      </div>

      {/* Detailed View */}
      {selectedChip && (
        <div className={`bg-gradient-to-br ${selectedChip.color} rounded-2xl p-8 text-white`}>
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-5xl mb-4">{selectedChip.emoji}</div>
              <h2 className="text-3xl font-bold">{selectedChip.name}</h2>
              <p className="text-white/80 text-lg">{selectedChip.category}</p>
            </div>
            <span className="text-sm font-bold bg-white/30 px-4 py-2 rounded-full">
              {selectedChip.difficulty}
            </span>
          </div>

          <div className="space-y-6">
            {/* What It Does */}
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2">📖 What It Does</h3>
              <p className="text-white/90 leading-relaxed">{selectedChip.description}</p>
            </div>

            {/* Real World Use */}
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2">🌍 Real-World Use</h3>
              <p className="text-white/90 leading-relaxed">{selectedChip.realWorldUse}</p>
            </div>

            {/* Where to Find */}
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2">🔍 Where to Find It</h3>
              <p className="text-white/90 leading-relaxed">{selectedChip.whereToFind}</p>
            </div>

            {/* Fun Fact */}
            <div className="bg-white/30 rounded-xl p-4 border-2 border-white/50">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">💡 Fun Fact</h3>
                  <p className="text-white/90 text-sm">
                    {selectedChip.name === "18650 Battery"
                      ? "The same batteries used in Tesla cars power your DIY projects! They're incredibly powerful and efficient."
                      : selectedChip.name === "ESP32"
                      ? "The ESP32 costs less than $5 but has more computing power than computers from the 1990s!"
                      : selectedChip.name === "Arduino Nano"
                      ? "Arduino boards are open-source, meaning anyone can make them. That's why they're so cheap and popular!"
                      : selectedChip.name === "OV7670"
                      ? "This tiny camera chip is the same one used in security cameras and smartphone cameras!"
                      : "This component is used in millions of devices around the world. You probably own something with this chip right now!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredChips.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No chips found matching "{searchTerm}". Try searching for "Arduino", "battery", or "camera".
          </p>
        </div>
      )}

      {/* Help Text */}
      {!selectedChip && filteredChips.length > 0 && (
        <div className="text-center text-gray-600 mt-8">
          <p>👆 Click on any chip to learn more about it!</p>
        </div>
      )}
    </div>
  );
}
