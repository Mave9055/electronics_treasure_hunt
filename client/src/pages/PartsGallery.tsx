import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

/**
 * Parts Gallery: Real Pictures of Recyclable Components
 * Design Philosophy: Educational showcase with real component images
 */

export default function PartsGallery() {
  const parts = [
    {
      name: "CH340 USB-to-Serial Chip",
      category: "Communication",
      image: "/images/ch340-usb-serial.jpg",
      description: "Translates USB to UART serial communication. Perfect for reading secret messages from chips!",
      where: "Old Arduino boards, USB hubs, 3D printer controllers",
      voltage: "5V",
      importance: "⭐⭐⭐⭐⭐ Essential"
    },
    {
      name: "CP2102 Serial Adapter",
      category: "Communication",
      image: "/images/cp2102-serial.jpg",
      description: "Professional-grade USB-to-Serial converter. More reliable than CH340 but harder to find.",
      where: "Broken USB devices, development boards",
      voltage: "5V",
      importance: "⭐⭐⭐⭐ Very Important"
    },
    {
      name: "FTDI FT232RL Chip",
      category: "Communication",
      image: "/images/ftdi-serial.jpg",
      description: "The original and most famous USB-to-Serial chip. Very reliable and widely used.",
      where: "Old electronics, professional USB cables",
      voltage: "5V",
      importance: "⭐⭐⭐⭐⭐ Essential"
    },
    {
      name: "Arduino Nano",
      category: "Microcontroller",
      image: "/images/arduino-nano.jpg",
      description: "Tiny but powerful! Can act as a USB-to-Serial translator or run your own code.",
      where: "Old Arduino projects, maker kits",
      voltage: "5V",
      importance: "⭐⭐⭐⭐⭐ Essential"
    },
    {
      name: "TP4056 Charging Module",
      category: "Power",
      image: "/images/tp4056-module.jpg",
      description: "Safely charges lithium batteries. Prevents overcharging and keeps your battery healthy.",
      where: "Bluetooth speakers, power banks, old electronics",
      voltage: "5V Input, 4.2V Output",
      importance: "⭐⭐⭐⭐ Very Important"
    },
    {
      name: "18650 Battery with TP4056",
      category: "Power",
      image: "/images/tp4056-18650.jpg",
      description: "Powerful rechargeable battery paired with charging module. Perfect for portable projects!",
      where: "Bluetooth speakers, power banks, flashlights",
      voltage: "3.7V",
      importance: "⭐⭐⭐⭐⭐ Essential"
    },
    {
      name: "Laptop Cooling Fan",
      category: "Mechanical",
      image: "/images/laptop-fan.jpg",
      description: "Can be used for cooling, as a motor, or harvested for magnets and bearings.",
      where: "Old laptops, desktop computers",
      voltage: "5V or 12V",
      importance: "⭐⭐⭐ Important"
    },
    {
      name: "Phone Battery (3.7V LiPo)",
      category: "Power",
      image: "/images/phone-battery.jpg",
      description: "Lightweight lithium battery. Great for portable projects but needs careful handling!",
      where: "Old phones, tablets, smartwatches",
      voltage: "3.7V",
      importance: "⭐⭐⭐⭐ Very Important"
    },
    {
      name: "Bluetooth Speaker Components",
      category: "Audio & Power",
      image: "/images/speaker-parts.jpg",
      description: "Speakers, amplifiers, batteries, and charging circuits. Great source of multiple components!",
      where: "Old Bluetooth speakers, portable speakers",
      voltage: "Varies",
      importance: "⭐⭐⭐⭐ Very Important"
    }
  ];

  const categories = ["All", "Communication", "Microcontroller", "Power", "Mechanical", "Audio & Power"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold">
              <ChevronLeft className="w-5 h-5" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-orange-600">Parts Gallery</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🔧 Real Pictures of Recyclable Electronic Parts
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Here are actual photos of the electronic components you can salvage from old gadgets. Each one has a special purpose in your electronics adventure!
          </p>
        </div>

        {/* Parts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parts.map((part, index) => (
            <div key={index} className="treasure-card overflow-hidden hover:shadow-2xl transition-all">
              {/* Image */}
              <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-gray-900">{part.name}</h3>
                  <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-2 py-1 rounded-full whitespace-nowrap">
                    {part.category}
                  </span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {part.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold text-gray-800">📍 Where to find:</p>
                    <p className="text-gray-600">{part.where}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">⚡ Voltage:</p>
                    <p className="text-gray-600">{part.voltage}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">⭐ Importance:</p>
                    <p className="text-orange-600 font-semibold">{part.importance}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Tips */}
        <section className="mt-16 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Safety Tips When Handling These Parts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-orange-600 mb-3">🔋 Battery Safety</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Never short-circuit a battery (don't touch both ends with metal)</li>
                <li>• Don't puncture or crush batteries</li>
                <li>• Wear safety glasses when handling</li>
                <li>• Always ask a grown-up for help</li>
              </ul>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-green-600 mb-3">🔧 Soldering Safety</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Soldering irons get extremely hot!</li>
                <li>• Never touch the tip</li>
                <li>• Wear safety glasses and gloves</li>
                <li>• Have a grown-up supervise</li>
              </ul>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-blue-600 mb-3">💧 Electrical Safety</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Keep water away from electronics</li>
                <li>• Never touch power sources directly</li>
                <li>• Always disconnect power before working</li>
                <li>• If something smells like burning plastic, stop!</li>
              </ul>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-purple-600 mb-3">🧹 Cleanup Safety</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Wash your hands after handling old electronics</li>
                <li>• Old electronics can have dust and chemicals</li>
                <li>• Don't eat while working with electronics</li>
                <li>• Dispose of parts responsibly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Salvaging Tips */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Tips for Salvaging Parts</h3>
          <div className="treasure-card">
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-3xl">1️⃣</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Start with the Easy Stuff</h4>
                  <p className="text-gray-700">
                    Begin by removing parts that aren't soldered - like batteries, fans, and cables. Save the soldering for later!
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">2️⃣</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Use the Right Tools</h4>
                  <p className="text-gray-700">
                    Get a soldering iron, solder sucker, and desoldering braid. These make removing chips much easier!
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">3️⃣</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Be Patient</h4>
                  <p className="text-gray-700">
                    Take your time when desoldering. Rushing can damage the chip or the circuit board.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">4️⃣</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Organize Your Parts</h4>
                  <p className="text-gray-700">
                    Keep salvaged parts in labeled containers. This makes it easy to find what you need!
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">5️⃣</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Take Photos</h4>
                  <p className="text-gray-700">
                    Before you take apart a device, take photos of how it's connected. This helps when reassembling!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where to Find Old Electronics */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔍 Where to Find Old Electronics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-orange-600 mb-2">🏠 At Home</h4>
              <p className="text-gray-700">
                Look in drawers, closets, and the garage for old electronics you don't use anymore.
              </p>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-green-600 mb-2">♻️ Recycling Centers</h4>
              <p className="text-gray-700">
                Ask if you can take old electronics before they get recycled. Many places will let you!
              </p>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-blue-600 mb-2">🛍️ Thrift Stores</h4>
              <p className="text-gray-700">
                Thrift stores often have cheap broken electronics perfect for salvaging parts.
              </p>
            </div>
            <div className="treasure-card">
              <h4 className="text-lg font-bold text-purple-600 mb-2">👨‍👩‍👧‍👦 Friends & Family</h4>
              <p className="text-gray-700">
                Ask your friends and family if they have old electronics they want to throw away!
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Treasure Hunt?</h3>
            <p className="text-lg text-white/90 mb-6">
              Now that you know what parts to look for, it's time to go salvaging! Remember to always ask a grown-up for help.
            </p>
            <Link href="/">
              <a className="adventure-button inline-block">Back to Home</a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
