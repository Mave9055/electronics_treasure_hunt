import { useState } from "react";
import { CheckCircle2, AlertCircle, Download } from "lucide-react";
import { Link } from "wouter";

interface ProjectTemplate {
  id: string;
  name: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  components: string[];
  skills: string[];
  estimatedTime: string;
  image: string;
}

export default function SafetyAndProjects() {
  const [activeTab, setActiveTab] = useState<"safety" | "projects">("safety");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const safetyItems = [
    {
      id: "safety-1",
      category: "Before You Start",
      items: [
        "Disconnect power before making any changes to your circuit",
        "Check that all components are rated for your voltage",
        "Inspect wires for damage or exposed copper",
        "Ensure breadboard is on a non-conductive surface",
        "Keep liquids away from electronics"
      ]
    },
    {
      id: "safety-2",
      category: "During Assembly",
      items: [
        "Use proper wire strippers - don't use your teeth!",
        "Strip only 1/4 inch of insulation from wires",
        "Don't force components into breadboard holes",
        "Double-check polarity of LEDs and capacitors",
        "Verify all connections before powering on"
      ]
    },
    {
      id: "safety-3",
      category: "Power & Voltage",
      items: [
        "Never exceed component voltage ratings",
        "Use appropriate resistors to limit current",
        "Check power supply polarity (+ and -)",
        "Use current-limiting resistors with LEDs",
        "Never short power directly to ground"
      ]
    },
    {
      id: "safety-4",
      category: "Component Handling",
      items: [
        "Ground yourself before handling sensitive components",
        "Don't touch IC pins directly",
        "Store components in anti-static bags",
        "Avoid static discharge near electronics",
        "Handle hot components with care"
      ]
    },
    {
      id: "safety-5",
      category: "Emergency",
      items: [
        "If something gets hot, disconnect power immediately",
        "Never touch a hot component - let it cool",
        "If smoke appears, turn off power and move away",
        "Keep a fire extinguisher nearby (optional but recommended)",
        "Report any injuries or burns immediately"
      ]
    }
  ];

  const projects: ProjectTemplate[] = [
    {
      id: "project-1",
      name: "LED Blinker",
      difficulty: "Beginner",
      description: "Make an LED blink on and off. Perfect for learning Arduino basics.",
      components: ["Arduino Uno", "Red LED", "220Ω Resistor", "Breadboard", "Jumper Wires"],
      skills: ["digitalWrite()", "delay()", "pinMode()"],
      estimatedTime: "30 minutes",
      image: "💡"
    },
    {
      id: "project-2",
      name: "Temperature Sensor",
      difficulty: "Intermediate",
      description: "Read temperature from a DHT22 sensor and display on Serial Monitor.",
      components: ["Arduino Uno", "DHT22 Sensor", "10kΩ Resistor", "Breadboard", "Jumper Wires"],
      skills: ["I2C Communication", "Serial.print()", "Sensor Reading"],
      estimatedTime: "1 hour",
      image: "🌡️"
    },
    {
      id: "project-3",
      name: "Traffic Light",
      difficulty: "Beginner",
      description: "Control three LEDs (red, yellow, green) to simulate a traffic light.",
      components: ["Arduino Uno", "Red/Yellow/Green LEDs", "3× 220Ω Resistors", "Breadboard", "Jumper Wires"],
      skills: ["digitalWrite()", "delay()", "Logic Control"],
      estimatedTime: "45 minutes",
      image: "🚦"
    },
    {
      id: "project-4",
      name: "Servo Motor Control",
      difficulty: "Intermediate",
      description: "Control a servo motor to rotate to specific angles using PWM.",
      components: ["Arduino Uno", "Servo Motor", "Power Supply", "Breadboard", "Jumper Wires"],
      skills: ["PWM", "Servo Library", "analogWrite()"],
      estimatedTime: "1 hour",
      image: "⚙️"
    },
    {
      id: "project-5",
      name: "Distance Sensor",
      difficulty: "Intermediate",
      description: "Use an ultrasonic sensor to measure distance and display it.",
      components: ["Arduino Uno", "HC-SR04 Sensor", "Breadboard", "Jumper Wires"],
      skills: ["Pulse Reading", "Serial Communication", "Sensor Calibration"],
      estimatedTime: "1.5 hours",
      image: "📏"
    },
    {
      id: "project-6",
      name: "Weather Station",
      difficulty: "Advanced",
      description: "Combine multiple sensors to create a complete weather monitoring system.",
      components: ["Arduino Uno", "DHT22", "BMP280", "LCD Display", "Breadboard", "Jumper Wires"],
      skills: ["Multiple I2C Devices", "LCD Control", "Data Logging"],
      estimatedTime: "3 hours",
      image: "🌤️"
    }
  ];

  const toggleChecked = (id: string) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const downloadChecklist = () => {
    const checklistText = safetyItems
      .map(
        (section) =>
          `${section.category}\n${section.items.map((item) => `☐ ${item}`).join("\n")}\n`
      )
      .join("\n");

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(checklistText)
    );
    element.setAttribute("download", "Electronics-Safety-Checklist.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                🛡️
              </div>
              <h1 className="text-xl font-bold text-white">Safety & Projects</h1>
            </a>
          </Link>
          <div className="text-sm text-slate-400">Build Safe, Build Smart</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Safety <span className="text-orange-400">&</span> Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Learn safe practices and explore beginner-to-advanced project templates to apply your electronics knowledge.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 border-b border-slate-600 max-w-2xl">
          <button
            onClick={() => setActiveTab("safety")}
            className={`px-6 py-3 font-bold transition-colors ${
              activeTab === "safety"
                ? "text-orange-400 border-b-2 border-orange-400"
                : "text-slate-400 hover:text-slate-300"
            }`}
          >
            🛡️ Safety Checklist
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 font-bold transition-colors ${
              activeTab === "projects"
                ? "text-orange-400 border-b-2 border-orange-400"
                : "text-slate-400 hover:text-slate-300"
            }`}
          >
            🚀 Project Templates
          </button>
        </div>

        {/* Safety Checklist */}
        {activeTab === "safety" && (
          <div className="space-y-8">
            <div className="flex justify-end mb-6">
              <button
                onClick={downloadChecklist}
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Checklist
              </button>
            </div>

            {safetyItems.map((section) => (
              <div
                key={section.id}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-orange-400" />
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, idx) => {
                    const itemId = `${section.id}-${idx}`;
                    const isChecked = checkedItems.includes(itemId);
                    return (
                      <label
                        key={itemId}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-900/50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleChecked(itemId)}
                          className="w-5 h-5 mt-0.5 rounded border-slate-600 cursor-pointer"
                        />
                        <span
                          className={`text-sm ${
                            isChecked
                              ? "text-slate-400 line-through"
                              : "text-slate-300"
                          }`}
                        >
                          {item}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Important Warning */}
            <div className="bg-red-900/20 rounded-xl p-8 border border-red-500/30">
              <div className="flex gap-4">
                <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-red-300 mb-2">⚠️ Critical Safety Rules</h4>
                  <ul className="space-y-2 text-red-200 text-sm">
                    <li>• <strong>Never</strong> work on a circuit while it's powered</li>
                    <li>• <strong>Always</strong> double-check connections before powering on</li>
                    <li>• <strong>Never</strong> exceed component voltage ratings</li>
                    <li>• <strong>Always</strong> use proper resistors to limit current</li>
                    <li>• <strong>Never</strong> touch hot components - let them cool first</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Templates */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/20"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="text-4xl mb-3">{project.image}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-bold ${
                          project.difficulty === "Beginner"
                            ? "bg-green-500/20 text-green-300"
                            : project.difficulty === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-red-500/20 text-red-300"
                        }`}
                      >
                        {project.difficulty}
                      </span>
                      <span className="text-xs text-slate-400">⏱️ {project.estimatedTime}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 mb-4">{project.description}</p>

                  {/* Components */}
                  <div className="mb-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Components</p>
                    <div className="flex flex-wrap gap-1">
                      {project.components.map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {project.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
                    View Instructions →
                  </button>
                </div>
              ))}
            </div>

            {/* Tips Section */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">💡 Project Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-300 font-bold mb-2">Start Simple</p>
                  <p className="text-slate-300 text-sm">
                    Begin with beginner projects to understand the basics. Master one concept before moving to the next.
                  </p>
                </div>
                <div>
                  <p className="text-blue-300 font-bold mb-2">Test as You Build</p>
                  <p className="text-slate-300 text-sm">
                    Don't wait until the end to test. Check each connection and component as you add it.
                  </p>
                </div>
                <div>
                  <p className="text-blue-300 font-bold mb-2">Document Your Work</p>
                  <p className="text-slate-300 text-sm">
                    Take photos and notes of your projects. This helps you remember what you did and troubleshoot later.
                  </p>
                </div>
                <div>
                  <p className="text-blue-300 font-bold mb-2">Modify & Experiment</p>
                  <p className="text-slate-300 text-sm">
                    Once you complete a project, try changing it. Add features, use different sensors, or combine projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Build?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compatibility-checker">
              <a className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
                Check Compatibility →
              </a>
            </Link>
            <Link href="/tools-calculators">
              <a className="px-8 py-3 border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 font-bold rounded-lg transition-colors">
                Use Calculators
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
