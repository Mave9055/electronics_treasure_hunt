import { useState } from "react";
import { Heart, Share2, ExternalLink } from "lucide-react";

/**
 * Project Showcase Gallery
 * Real projects built by learners to inspire and motivate
 */

const projects = [
  {
    id: 1,
    title: "Smart Home Temperature Monitor",
    creator: "John D.",
    difficulty: "Intermediate",
    timeToComplete: "4 hours",
    description:
      "Built a WiFi-enabled temperature sensor that sends data to my phone. Now I can monitor my home from anywhere!",
    image: "📡",
    components: ["ESP32", "Temperature Sensor", "WiFi Module"],
    likes: 342,
    featured: true,
  },
  {
    id: 2,
    title: "DIY Security Camera",
    creator: "Sarah M.",
    difficulty: "Advanced",
    timeToComplete: "8 hours",
    description:
      "Created a working security camera that records video and stores it on an SD card. Cost me less than $30!",
    image: "📷",
    components: ["OV7670 Camera", "Arduino", "SD Card Module"],
    likes: 521,
    featured: true,
  },
  {
    id: 3,
    title: "Automated Plant Watering System",
    creator: "Mike T.",
    difficulty: "Beginner",
    timeToComplete: "3 hours",
    description:
      "My plants never die now! This system automatically waters them when the soil gets dry. Perfect for lazy gardeners.",
    image: "🌱",
    components: ["Arduino Nano", "Moisture Sensor", "Water Pump"],
    likes: 287,
    featured: false,
  },
  {
    id: 4,
    title: "LED Light Show Controller",
    creator: "Alex R.",
    difficulty: "Intermediate",
    timeToComplete: "5 hours",
    description:
      "Control hundreds of LED lights with music. The lights dance to the beat of any song playing!",
    image: "💡",
    components: ["ESP32", "WS2812B LEDs", "Audio Module"],
    likes: 612,
    featured: true,
  },
  {
    id: 5,
    title: "Wireless Doorbell",
    creator: "Emma L.",
    difficulty: "Beginner",
    timeToComplete: "2 hours",
    description:
      "Built a wireless doorbell that sends alerts to my phone. No expensive installation needed!",
    image: "🔔",
    components: ["Arduino", "RF Module", "Button"],
    likes: 198,
    featured: false,
  },
  {
    id: 6,
    title: "Air Quality Monitor",
    creator: "David K.",
    difficulty: "Intermediate",
    timeToComplete: "6 hours",
    description:
      "Monitors air quality in real-time and displays it on a web dashboard. Great for understanding indoor air quality!",
    image: "💨",
    components: ["Arduino", "Air Quality Sensor", "WiFi Module"],
    likes: 445,
    featured: false,
  },
];

export default function ProjectShowcase() {
  const [liked, setLiked] = useState<number[]>([]);
  const [filter, setFilter] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.difficulty.toLowerCase() === filter;
  });

  const toggleLike = (id: number) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((l) => l !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border-2 border-rose-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">🚀 Real Projects Built by Our Community</h3>
      <p className="text-gray-600 mb-8">
        Get inspired by real projects built by people like you. See what's possible and find your next build!
      </p>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {["all", "beginner", "intermediate", "advanced"].map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level as any)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              filter === level
                ? "bg-rose-500 text-white shadow-lg"
                : "bg-white text-gray-700 border-2 border-rose-300 hover:border-rose-500"
            }`}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`rounded-2xl overflow-hidden border-2 transition-all hover:shadow-xl ${
              project.featured
                ? "border-rose-400 bg-gradient-to-br from-rose-100 to-pink-100 md:col-span-1 lg:col-span-1"
                : "border-rose-200 bg-white"
            }`}
          >
            {/* Header */}
            <div className={`p-6 text-center ${project.featured ? "bg-gradient-to-r from-rose-400 to-pink-400 text-white" : "bg-gray-50"}`}>
              <div className="text-5xl mb-3">{project.image}</div>
              {project.featured && (
                <div className="inline-block bg-yellow-300 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                  ⭐ Featured
                </div>
              )}
              <h4 className={`text-xl font-bold ${project.featured ? "text-white" : "text-gray-900"}`}>
                {project.title}
              </h4>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

              {/* Meta Info */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">By {project.creator}</span>
                  <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded font-semibold text-xs">
                    {project.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>⏱️ {project.timeToComplete}</span>
                </div>
              </div>

              {/* Components */}
              <div className="mb-4">
                <p className="text-xs font-bold text-gray-700 mb-2">Components Used:</p>
                <div className="flex flex-wrap gap-1">
                  {project.components.map((component, index) => (
                    <span
                      key={index}
                      className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full"
                    >
                      {component}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => toggleLike(project.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition-all ${
                    liked.includes(project.id)
                      ? "bg-rose-500 text-white"
                      : "bg-rose-100 text-rose-600 hover:bg-rose-200"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked.includes(project.id) ? "fill-current" : ""}`} />
                  {project.likes + (liked.includes(project.id) ? 1 : 0)}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">Built Something Amazing?</h3>
        <p className="mb-6 text-white/90">
          Share your project with our community and inspire others! Get featured and earn recognition.
        </p>
        <button className="bg-white text-rose-600 font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto">
          <ExternalLink className="w-5 h-5" />
          Submit Your Project
        </button>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-3xl font-bold text-rose-600">{projects.length}+</div>
          <p className="text-gray-600 text-sm">Projects Shared</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-rose-600">1000+</div>
          <p className="text-gray-600 text-sm">Community Members</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-rose-600">50+</div>
          <p className="text-gray-600 text-sm">Countries</p>
        </div>
      </div>
    </div>
  );
}
