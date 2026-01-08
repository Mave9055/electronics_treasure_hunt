import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Award } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  questions: QuizQuestion[];
  passingScore: number;
  points: number;
}

const quizzes: Quiz[] = [
  {
    id: "basics-voltage",
    title: "Understanding Voltage",
    description: "Learn the fundamentals of electrical voltage",
    category: "Fundamentals",
    difficulty: "beginner",
    points: 100,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What is voltage?",
        options: [
          "The flow of electricity",
          "The pressure that pushes electricity through a circuit",
          "The resistance in a wire",
          "The color of a wire"
        ],
        correctAnswer: 1,
        explanation: "Voltage is like water pressure - it's the force that pushes electricity through a circuit.",
        difficulty: "beginner"
      },
      {
        id: "q2",
        question: "What is the standard voltage in most homes?",
        options: ["3.3V", "5V", "110-120V", "12V"],
        correctAnswer: 2,
        explanation: "Most homes use 110-120V AC (alternating current) in North America.",
        difficulty: "beginner"
      },
      {
        id: "q3",
        question: "Which voltage is safer for electronics projects?",
        options: ["120V", "5V", "240V", "1000V"],
        correctAnswer: 1,
        explanation: "5V is much safer for hobby electronics projects. Always use low voltage when learning!",
        difficulty: "beginner"
      }
    ]
  },
  {
    id: "basics-current",
    title: "Understanding Current",
    description: "Master the concept of electrical current",
    category: "Fundamentals",
    difficulty: "beginner",
    points: 100,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What is current?",
        options: [
          "The voltage of a battery",
          "The flow of electricity through a circuit",
          "The resistance of a wire",
          "The color of insulation"
        ],
        correctAnswer: 1,
        explanation: "Current is the actual flow of electrons through a circuit, measured in Amps (A).",
        difficulty: "beginner"
      },
      {
        id: "q2",
        question: "How much current can safely flow through your body?",
        options: ["1 Amp", "100 milliamps", "1 milliamp", "10 Amps"],
        correctAnswer: 2,
        explanation: "Even 1 milliamp can be dangerous! Always be careful with electricity.",
        difficulty: "beginner"
      },
      {
        id: "q3",
        question: "What device measures current?",
        options: ["Voltmeter", "Ammeter", "Ohmmeter", "Thermometer"],
        correctAnswer: 1,
        explanation: "An Ammeter measures current in Amps. You can use a multimeter set to Amps mode.",
        difficulty: "beginner"
      }
    ]
  },
  {
    id: "basics-resistance",
    title: "Understanding Resistance",
    description: "Learn about electrical resistance and Ohm's Law",
    category: "Fundamentals",
    difficulty: "beginner",
    points: 100,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What is resistance?",
        options: [
          "The voltage in a circuit",
          "The opposition to current flow",
          "The speed of electricity",
          "The color of a wire"
        ],
        correctAnswer: 1,
        explanation: "Resistance opposes current flow, like friction opposes motion. It's measured in Ohms (Ω).",
        difficulty: "beginner"
      },
      {
        id: "q2",
        question: "What does a resistor do?",
        options: [
          "Stores electricity",
          "Generates electricity",
          "Limits current flow",
          "Amplifies voltage"
        ],
        correctAnswer: 2,
        explanation: "Resistors limit current flow to protect sensitive components like LEDs.",
        difficulty: "beginner"
      },
      {
        id: "q3",
        question: "What is Ohm's Law?",
        options: [
          "V = I × R (Voltage = Current × Resistance)",
          "V = I + R",
          "V = I ÷ R",
          "V = I² × R"
        ],
        correctAnswer: 0,
        explanation: "Ohm's Law: V = I × R. This fundamental formula relates voltage, current, and resistance.",
        difficulty: "intermediate"
      }
    ]
  },
  {
    id: "circuits-basics",
    title: "Circuit Basics",
    description: "Understand how circuits work",
    category: "Circuits",
    difficulty: "beginner",
    points: 100,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What is a circuit?",
        options: [
          "A path for electricity to flow",
          "A type of wire",
          "A battery",
          "A light bulb"
        ],
        correctAnswer: 0,
        explanation: "A circuit is a complete path for electricity to flow from the power source and back.",
        difficulty: "beginner"
      },
      {
        id: "q2",
        question: "What happens if a circuit is broken?",
        options: [
          "Electricity flows faster",
          "Electricity stops flowing",
          "Electricity becomes stronger",
          "Nothing changes"
        ],
        correctAnswer: 1,
        explanation: "A broken circuit (open circuit) stops electricity from flowing. This is how switches work!",
        difficulty: "beginner"
      },
      {
        id: "q3",
        question: "What is a short circuit?",
        options: [
          "A circuit with low voltage",
          "A circuit that is too long",
          "A path that bypasses resistance",
          "A circuit with few components"
        ],
        correctAnswer: 2,
        explanation: "A short circuit bypasses the normal path, allowing too much current to flow. This is dangerous!",
        difficulty: "intermediate"
      }
    ]
  },
  {
    id: "components-identification",
    title: "Component Identification",
    description: "Learn to identify common electronic components",
    category: "Components",
    difficulty: "intermediate",
    points: 150,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What does an LED do?",
        options: [
          "Stores energy",
          "Emits light when current flows through it",
          "Reduces voltage",
          "Amplifies signals"
        ],
        correctAnswer: 1,
        explanation: "LED stands for Light Emitting Diode. It lights up when current flows in the correct direction.",
        difficulty: "beginner"
      },
      {
        id: "q2",
        question: "What is a capacitor?",
        options: [
          "A device that stores electrical energy",
          "A device that generates electricity",
          "A device that measures voltage",
          "A device that limits current"
        ],
        correctAnswer: 0,
        explanation: "Capacitors store electrical energy temporarily. They're like tiny rechargeable batteries.",
        difficulty: "intermediate"
      },
      {
        id: "q3",
        question: "What does a transistor do?",
        options: [
          "Stores electricity",
          "Acts as a switch or amplifier",
          "Measures current",
          "Generates heat"
        ],
        correctAnswer: 1,
        explanation: "Transistors can act as switches (on/off) or amplifiers (make signals stronger).",
        difficulty: "intermediate"
      },
      {
        id: "q4",
        question: "What is a microcontroller?",
        options: [
          "A tiny computer that can be programmed",
          "A type of resistor",
          "A power source",
          "A measuring device"
        ],
        correctAnswer: 0,
        explanation: "Microcontrollers (like Arduino) are tiny computers that can be programmed to control circuits.",
        difficulty: "intermediate"
      }
    ]
  },
  {
    id: "uart-protocol",
    title: "UART Communication",
    description: "Master serial communication with UART",
    category: "Communication",
    difficulty: "intermediate",
    points: 150,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What does UART stand for?",
        options: [
          "Universal Asynchronous Receiver Transmitter",
          "Universal Analog Radio Transmitter",
          "Unified Automated Response Tool",
          "Universal Audio Recording Technology"
        ],
        correctAnswer: 0,
        explanation: "UART is a protocol for serial communication between devices.",
        difficulty: "intermediate"
      },
      {
        id: "q2",
        question: "What is baud rate?",
        options: [
          "The voltage of a signal",
          "The speed of data transmission",
          "The type of wire used",
          "The color of a cable"
        ],
        correctAnswer: 1,
        explanation: "Baud rate is how fast data is sent (bits per second). Common rates: 9600, 115200.",
        difficulty: "intermediate"
      },
      {
        id: "q3",
        question: "What is a USB-to-Serial adapter?",
        options: [
          "A device that converts USB to UART signals",
          "A type of battery",
          "A power supply",
          "A measuring tool"
        ],
        correctAnswer: 0,
        explanation: "USB-to-Serial adapters (like CH340, FTDI) let you connect UART devices to computers.",
        difficulty: "intermediate"
      }
    ]
  },
  {
    id: "i2c-protocol",
    title: "I²C Communication",
    description: "Understand the I²C protocol for device communication",
    category: "Communication",
    difficulty: "intermediate",
    points: 150,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What does I²C stand for?",
        options: [
          "Inter-Integrated Circuit",
          "Internal Integrated Controller",
          "Intelligent Integrated Computer",
          "Input/Integrated Converter"
        ],
        correctAnswer: 0,
        explanation: "I²C (or I2C) is a protocol that lets multiple devices communicate on just 2 wires.",
        difficulty: "intermediate"
      },
      {
        id: "q2",
        question: "How many wires does I²C use?",
        options: ["1 wire", "2 wires", "4 wires", "8 wires"],
        correctAnswer: 1,
        explanation: "I²C uses 2 wires: SDA (data) and SCL (clock). Plus ground, so technically 3 connections.",
        difficulty: "beginner"
      },
      {
        id: "q3",
        question: "What is an I²C address?",
        options: [
          "The physical location of a device",
          "A unique identifier for each device on the bus",
          "The voltage of a device",
          "The speed of communication"
        ],
        correctAnswer: 1,
        explanation: "Each I²C device has a unique address (like 0x68 or 0x3C) so the master can talk to it.",
        difficulty: "intermediate"
      }
    ]
  },
  {
    id: "power-supplies",
    title: "Power Supplies & Batteries",
    description: "Learn about different power sources for projects",
    category: "Power",
    difficulty: "beginner",
    points: 100,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What is a voltage regulator?",
        options: [
          "A device that maintains constant voltage output",
          "A device that measures voltage",
          "A device that stores energy",
          "A device that generates electricity"
        ],
        correctAnswer: 0,
        explanation: "Voltage regulators (like AMS1117) take varying input voltage and output stable voltage.",
        difficulty: "intermediate"
      },
      {
        id: "q2",
        question: "What is a 18650 battery?",
        options: [
          "A type of AA battery",
          "A rechargeable lithium-ion battery",
          "A disposable alkaline battery",
          "A solar battery"
        ],
        correctAnswer: 1,
        explanation: "18650 batteries are powerful rechargeable lithium-ion batteries found in speakers and power banks.",
        difficulty: "beginner"
      },
      {
        id: "q3",
        question: "What does a TP4056 module do?",
        options: [
          "Charges 18650 batteries safely",
          "Measures battery voltage",
          "Stores energy",
          "Generates electricity"
        ],
        correctAnswer: 0,
        explanation: "TP4056 is a charging module that safely charges 18650 batteries with protection.",
        difficulty: "intermediate"
      }
    ]
  },
  {
    id: "safety-practices",
    title: "Electronics Safety",
    description: "Essential safety practices for electronics projects",
    category: "Safety",
    difficulty: "beginner",
    points: 100,
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "What should you do before working with electronics?",
        options: [
          "Turn off and unplug the device",
          "Wear gloves",
          "Work in bright light",
          "Use a soldering iron"
        ],
        correctAnswer: 0,
        explanation: "Always turn off and unplug devices before working on them. Safety first!",
        difficulty: "beginner"
      },
      {
        id: "q2",
        question: "What is ESD?",
        options: [
          "Electrostatic Discharge - static electricity that can damage components",
          "Electronic Safety Device",
          "Emergency Stop Device",
          "Electrical Signal Detector"
        ],
        correctAnswer: 0,
        explanation: "ESD can destroy sensitive components. Use anti-static wrist straps when handling chips.",
        difficulty: "intermediate"
      },
      {
        id: "q3",
        question: "What is the safest voltage for beginners?",
        options: ["120V", "24V", "5V or less", "48V"],
        correctAnswer: 2,
        explanation: "5V or less is safest for learning. It won't cause serious harm if you accidentally touch it.",
        difficulty: "beginner"
      }
    ]
  },
  {
    id: "soldering-basics",
    title: "Soldering Fundamentals",
    description: "Learn the basics of soldering components",
    category: "Skills",
    difficulty: "intermediate",
    points: 150,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What is soldering?",
        options: [
          "Gluing components together",
          "Using melted metal to join electrical connections",
          "Wrapping wires together",
          "Using a screwdriver to connect parts"
        ],
        correctAnswer: 1,
        explanation: "Soldering uses melted solder (metal alloy) to create strong electrical connections.",
        difficulty: "beginner"
      },
      {
        id: "q2",
        question: "What temperature should a soldering iron be?",
        options: ["100°C", "250°C", "350-400°C", "500°C"],
        correctAnswer: 2,
        explanation: "Most soldering irons are set to 350-400°C. Too cold won't melt solder, too hot damages components.",
        difficulty: "intermediate"
      },
      {
        id: "q3",
        question: "What is flux?",
        options: [
          "A type of solder",
          "A chemical that helps solder flow and bond",
          "A temperature measurement",
          "A type of wire"
        ],
        correctAnswer: 1,
        explanation: "Flux helps solder flow smoothly and creates better connections. It's usually inside solder wire.",
        difficulty: "intermediate"
      }
    ]
  },
  {
    id: "arduino-programming",
    title: "Arduino Programming Basics",
    description: "Introduction to programming Arduino microcontrollers",
    category: "Programming",
    difficulty: "intermediate",
    points: 150,
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "What is Arduino?",
        options: [
          "A programming language",
          "An open-source microcontroller platform",
          "A type of resistor",
          "A soldering tool"
        ],
        correctAnswer: 1,
        explanation: "Arduino is an easy-to-use platform for programming microcontrollers.",
        difficulty: "beginner"
      },
      {
        id: "q2",
        question: "What does the setup() function do?",
        options: [
          "Runs repeatedly",
          "Runs once when the Arduino starts",
          "Measures voltage",
          "Generates electricity"
        ],
        correctAnswer: 1,
        explanation: "setup() runs once at startup. Use it to initialize pins and variables.",
        difficulty: "intermediate"
      },
      {
        id: "q3",
        question: "What does the loop() function do?",
        options: [
          "Runs once at startup",
          "Measures temperature",
          "Runs repeatedly forever",
          "Stops the program"
        ],
        correctAnswer: 2,
        explanation: "loop() runs repeatedly after setup(). This is where your main code goes.",
        difficulty: "intermediate"
      }
    ]
  }
];

export default function ExpandedQuizSystem() {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);

  const quiz = selectedQuiz ? quizzes.find(q => q.id === selectedQuiz) : null;
  const question = quiz ? quiz.questions[currentQuestion] : null;

  const handleAnswer = (index: number) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
      if (index === question?.correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (quiz && currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setCompleted(true);
      if (quiz && !completedQuizzes.includes(quiz.id)) {
        setCompletedQuizzes([...completedQuizzes, quiz.id]);
      }
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setCompleted(false);
  };

  const finalScore = quiz ? (score / quiz.questions.length) * 100 : 0;
  const passed = finalScore >= (quiz?.passingScore || 70);

  if (selectedQuiz && completed && quiz) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
        <div className="text-center">
          <div className="mb-6">
            {passed ? (
              <div className="text-6xl mb-4">🎉</div>
            ) : (
              <div className="text-6xl mb-4">📚</div>
            )}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h3>
          <p className="text-xl font-semibold text-gray-700 mb-6">
            Your Score: <span className={passed ? "text-green-600" : "text-orange-600"}>{finalScore.toFixed(0)}%</span>
          </p>

          {passed ? (
            <div className="bg-green-100 border-2 border-green-500 rounded-xl p-4 mb-6">
              <p className="text-green-800 font-semibold">✅ Congratulations! You passed!</p>
              <p className="text-green-700 text-sm mt-2">You earned {quiz.points} points and unlocked a badge!</p>
            </div>
          ) : (
            <div className="bg-orange-100 border-2 border-orange-500 rounded-xl p-4 mb-6">
              <p className="text-orange-800 font-semibold">Keep Learning!</p>
              <p className="text-orange-700 text-sm mt-2">Score {quiz.passingScore}% or higher to pass. Try again!</p>
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={resetQuiz}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Try Another Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedQuiz && quiz && !completed) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{quiz.title}</h3>
            <span className="text-sm font-semibold px-3 py-1 bg-blue-200 text-blue-800 rounded-full">
              {currentQuestion + 1} / {quiz.questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {question && (
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h4>

            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={`w-full p-4 text-left rounded-lg border-2 font-semibold transition-all ${
                    selectedAnswer === index
                      ? index === question.correctAnswer
                        ? "bg-green-100 border-green-500 text-green-900"
                        : "bg-red-100 border-red-500 text-red-900"
                      : answered && index === question.correctAnswer
                      ? "bg-green-100 border-green-500 text-green-900"
                      : "bg-white border-gray-300 text-gray-900 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                      {selectedAnswer === index && (
                        index === question.correctAnswer ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <XCircle className="w-5 h-5" />
                        )
                      )}
                      {answered && index === question.correctAnswer && selectedAnswer !== index && (
                        <CheckCircle className="w-5 h-5" />
                      )}
                    </div>
                    {option}
                  </div>
                </button>
              ))}
            </div>

            {answered && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                <p className="font-semibold text-blue-900 mb-2">💡 Explanation:</p>
                <p className="text-blue-800">{question.explanation}</p>
              </div>
            )}

            {answered && (
              <button
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
              >
                {currentQuestion === quiz.questions.length - 1 ? "See Results" : "Next Question"}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quizzes.map(q => (
          <button
            key={q.id}
            onClick={() => setSelectedQuiz(q.id)}
            className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
              completedQuizzes.includes(q.id)
                ? "bg-green-50 border-green-300 hover:border-green-500"
                : "bg-white border-gray-200 hover:border-blue-500"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-lg text-gray-900">{q.title}</h4>
                <p className="text-sm text-gray-600">{q.description}</p>
              </div>
              {completedQuizzes.includes(q.id) && (
                <Award className="w-6 h-6 text-green-600" />
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                q.difficulty === "beginner" ? "bg-green-100 text-green-800" :
                q.difficulty === "intermediate" ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              }`}>
                {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
              </span>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                {q.points} pts
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
