import { useState } from "react";
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Troubleshooting() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const problems = [
    {
      id: "led-not-lighting",
      title: "LED Won't Light Up",
      icon: "💡",
      description: "Your LED isn't glowing when it should be",
      flowchart: [
        {
          question: "Is the LED connected to power?",
          yes: "Check the polarity of the LED. The longer leg (positive) should connect to power.",
          no: "Connect the LED to your power source through a resistor."
        },
        {
          question: "Is the polarity correct? (Long leg to +, short leg to -)",
          yes: "Check if your resistor value is too high (over 1kΩ). Try a smaller resistor.",
          no: "Flip the LED around so the long leg connects to positive."
        },
        {
          question: "Is the LED still not lighting?",
          yes: "The LED might be burned out. Try a new LED.",
          no: "Success! Your LED is now working."
        }
      ]
    },
    {
      id: "no-serial-connection",
      title: "No Serial Connection to Arduino",
      icon: "🔌",
      description: "Can't communicate with your Arduino via USB",
      flowchart: [
        {
          question: "Is the USB cable plugged in?",
          yes: "Check if your computer recognizes the device in Device Manager (Windows) or System Report (Mac).",
          no: "Plug in the USB cable to both the Arduino and computer."
        },
        {
          question: "Does your computer recognize the device?",
          yes: "Install the CH340 or CP2102 driver for your USB-to-serial chip.",
          no: "Try a different USB cable or USB port on your computer."
        },
        {
          question: "Did you install the correct driver?",
          yes: "Select the correct COM port in the Arduino IDE and try uploading again.",
          no: "Download and install the driver from the manufacturer's website."
        }
      ]
    },
    {
      id: "sensor-no-reading",
      title: "Sensor Not Reading Values",
      icon: "📊",
      description: "Your sensor is connected but showing no data",
      flowchart: [
        {
          question: "Is the sensor powered on? (Check for LED indicator)",
          yes: "Check your I²C connections. SDA and SCL should be connected correctly.",
          no: "Check your power connections. Sensor needs 3.3V or 5V depending on type."
        },
        {
          question: "Are SDA and SCL connected to the right pins?",
          yes: "Run the I²C scanner to find the sensor address.",
          no: "Connect SDA to A4 and SCL to A5 on Arduino Uno."
        },
        {
          question: "Did the I²C scanner find your sensor?",
          yes: "Update your code with the correct sensor address found by the scanner.",
          no: "Check for loose connections or try pull-up resistors (4.7kΩ) on SDA and SCL."
        }
      ]
    },
    {
      id: "circuit-too-hot",
      title: "Circuit Getting Too Hot",
      icon: "🔥",
      description: "Components are getting warm or hot",
      flowchart: [
        {
          question: "Is a resistor getting hot?",
          yes: "Your resistor value is too low. Use a higher resistance value.",
          no: "Check if you have a short circuit (power connected directly to ground)."
        },
        {
          question: "Do you have a short circuit?",
          yes: "Disconnect power immediately and check your wiring.",
          no: "Is your power supply voltage too high? Check the voltage rating."
        },
        {
          question: "Is the voltage correct for your components?",
          yes: "Reduce current by using a higher resistor value or lower voltage.",
          no: "Use the correct voltage for your circuit (usually 3.3V or 5V)."
        }
      ]
    },
    {
      id: "unstable-readings",
      title: "Unstable or Fluctuating Readings",
      icon: "📈",
      description: "Sensor values jumping around randomly",
      flowchart: [
        {
          question: "Are your wires loose?",
          yes: "Tighten all connections and check for corrosion.",
          no: "Check for electromagnetic interference from nearby devices."
        },
        {
          question: "Is there interference from other electronics?",
          yes: "Move your project away from WiFi routers, phones, or power supplies.",
          no: "Add a capacitor (0.1µF) across the sensor power pins to stabilize voltage."
        },
        {
          question: "Did adding a capacitor help?",
          yes: "Success! Your readings should now be stable.",
          no: "Check your code for averaging multiple readings instead of single values."
        }
      ]
    },
    {
      id: "code-upload-fails",
      title: "Code Won't Upload to Arduino",
      icon: "⚠️",
      description: "Getting compilation or upload errors",
      flowchart: [
        {
          question: "Is there a compilation error (red text)?",
          yes: "Check the error message. Usually it's a missing library or syntax error.",
          no: "Check if the correct board and COM port are selected in Arduino IDE."
        },
        {
          question: "Is the correct board selected? (Arduino Uno, Nano, etc.)",
          yes: "Is the correct COM port selected? Check Device Manager.",
          no: "Select your board type from Tools > Board menu."
        },
        {
          question: "Is the correct COM port selected?",
          yes: "Try pressing the reset button on the Arduino while uploading.",
          no: "Select the COM port from Tools > Port menu."
        }
      ]
    }
  ];

  const currentProblem = problems.find(p => p.id === selectedProblem);
  const currentFlowStep = currentProblem ? currentProblem.flowchart[currentStep] : null;

  const handleNext = () => {
    if (currentProblem && currentStep < currentProblem.flowchart.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetFlowchart = () => {
    setSelectedProblem(null);
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                🔧
              </div>
              <h1 className="text-xl font-bold text-white">Troubleshooting Guide</h1>
            </a>
          </Link>
          <div className="text-sm text-slate-400">Diagnose & Fix Problems</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {!selectedProblem ? (
          <>
            {/* Hero Section */}
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold text-white mb-4">
                Electronics <span className="text-orange-400">Troubleshooting</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Something not working? Use our interactive diagnostic flowcharts to find and fix common electronics problems step-by-step.
              </p>
            </div>

            {/* Problem Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem) => (
                <button
                  key={problem.id}
                  onClick={() => {
                    setSelectedProblem(problem.id);
                    setCurrentStep(0);
                  }}
                  className="text-left bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600 hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/20 group"
                >
                  <div className="text-4xl mb-3">{problem.icon}</div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-400">{problem.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-orange-400 text-sm font-bold">
                    Start Diagnosis <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            {/* Tips Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">💡 General Troubleshooting Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-blue-300 font-bold">✓ Check Power First</p>
                  <p className="text-slate-300 text-sm">Most problems are power-related. Always verify voltage and current.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-300 font-bold">✓ Test One Thing at a Time</p>
                  <p className="text-slate-300 text-sm">Change one component or connection, then test. This isolates the problem.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-300 font-bold">✓ Use a Multimeter</p>
                  <p className="text-slate-300 text-sm">Measure voltage and continuity to identify broken connections.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-300 font-bold">✓ Check Connections</p>
                  <p className="text-slate-300 text-sm">Loose wires are the #1 cause of electronics problems.</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Flowchart View */}
            <div className="max-w-3xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <span>{currentProblem?.icon}</span>
                    {currentProblem?.title}
                  </h2>
                  <button
                    onClick={resetFlowchart}
                    className="text-sm px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors"
                  >
                    ← Back to List
                  </button>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${((currentStep + 1) / (currentProblem?.flowchart.length || 1)) * 100}%`
                    }}
                  />
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Step {currentStep + 1} of {currentProblem?.flowchart.length}
                </p>
              </div>

              {/* Flowchart Card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 mb-8">
                {currentFlowStep && (
                  <div className="space-y-6">
                    {/* Question */}
                    <div className="bg-slate-900 rounded-lg p-6 border-l-4 border-orange-500">
                      <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">Step {currentStep + 1}</p>
                      <p className="text-2xl font-bold text-white">{currentFlowStep.question}</p>
                    </div>

                    {/* Answers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                        <p className="text-green-400 font-bold mb-2">✓ YES</p>
                        <p className="text-slate-300">{currentFlowStep.yes}</p>
                      </div>
                      <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/30">
                        <p className="text-red-400 font-bold mb-2">✗ NO</p>
                        <p className="text-slate-300">{currentFlowStep.no}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentStep === (currentProblem?.flowchart.length || 1) - 1}
                  className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Success Message */}
              {currentStep === (currentProblem?.flowchart.length || 1) - 1 && (
                <div className="mt-8 bg-green-900/20 rounded-lg p-6 border border-green-500/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-green-300 font-bold mb-2">Diagnosis Complete!</p>
                      <p className="text-slate-300">
                        Follow the recommendations above. If the problem persists, try the general troubleshooting tips or consult the Resources section for more help.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Footer CTA */}
        {!selectedProblem && (
          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">Still stuck? Check out our other resources:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources">
                <a className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
                  📚 Resources Library
                </a>
              </Link>
              <Link href="/fundamentals">
                <a className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
                  📖 Learn Fundamentals
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
