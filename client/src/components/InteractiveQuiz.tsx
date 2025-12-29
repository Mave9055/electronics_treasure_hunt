import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

/**
 * Interactive Quiz Component
 * Fun, non-threatening quizzes for adults to test knowledge
 */

const quizzes = [
  {
    id: 1,
    title: "Circuit Basics",
    difficulty: "Beginner",
    questions: [
      {
        question: "What do you need for electricity to flow?",
        options: [
          "A complete loop (circuit)",
          "Just a battery",
          "Just wires",
          "A light bulb",
        ],
        correct: 0,
        explanation:
          "Electricity needs a complete path to flow. It's like water in a pipe - it needs to go out and come back!",
      },
      {
        question: "What does a resistor do?",
        options: [
          "Stops electricity completely",
          "Slows down electricity (like a water valve)",
          "Makes electricity stronger",
          "Changes electricity color",
        ],
        correct: 1,
        explanation:
          "A resistor is like a valve that controls how much electricity flows. It protects components from too much power.",
      },
      {
        question: "Which wire carries power from the battery?",
        options: ["The red wire", "The black wire", "The green wire", "Any color works"],
        correct: 0,
        explanation:
          "By convention, red is positive (power) and black is negative (ground). This makes it easier to avoid mistakes!",
      },
    ],
  },
  {
    id: 2,
    title: "Component Identification",
    difficulty: "Beginner",
    questions: [
      {
        question: "What is an Arduino?",
        options: [
          "A type of battery",
          "A tiny computer you can program",
          "A power supply",
          "A type of wire",
        ],
        correct: 1,
        explanation:
          "Arduino is a programmable microcontroller - basically a tiny computer that runs your code and controls electronics!",
      },
      {
        question: "What does USB stand for?",
        options: [
          "Universal Serial Bus",
          "Ultra Strong Battery",
          "Unified System Board",
          "Universal Service Box",
        ],
        correct: 0,
        explanation:
          "USB is the standard connector used to transfer data and power. It's everywhere - phones, computers, and electronics!",
      },
      {
        question: "What is an LED?",
        options: [
          "A type of battery",
          "Light Emitting Diode - a light that uses very little power",
          "A power regulator",
          "A type of wire",
        ],
        correct: 1,
        explanation:
          "LEDs are super efficient lights. They use 80% less power than regular bulbs and last much longer!",
      },
    ],
  },
  {
    id: 3,
    title: "Safety & Best Practices",
    difficulty: "Beginner",
    questions: [
      {
        question: "What should you do before working with electronics?",
        options: [
          "Just start building",
          "Disconnect power and double-check connections",
          "Wear a special suit",
          "Nothing special",
        ],
        correct: 1,
        explanation:
          "Always disconnect power before making changes. This prevents short circuits and keeps you safe!",
      },
      {
        question: "What does 'short circuit' mean?",
        options: [
          "A circuit that's too short",
          "When electricity finds a shortcut and bypasses components",
          "A broken circuit",
          "A circuit with no power",
        ],
        correct: 1,
        explanation:
          "A short circuit is when electricity finds a path that skips components. It can damage devices and cause fires!",
      },
      {
        question: "Why do we use different wire colors?",
        options: [
          "It looks prettier",
          "To help identify positive, negative, and ground connections",
          "Different colors carry different amounts of power",
          "It doesn't matter",
        ],
        correct: 1,
        explanation:
          "Color coding (red=positive, black=negative, green=ground) helps prevent mistakes and makes troubleshooting easier.",
      },
    ],
  },
];

export default function InteractiveQuiz() {
  const [selectedQuiz, setSelectedQuiz] = useState<(typeof quizzes)[0] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const startQuiz = (quiz: (typeof quizzes)[0]) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setCompleted(false);
  };

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);

    if (index === selectedQuiz!.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < selectedQuiz!.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setCompleted(true);
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

  // Quiz Selection View
  if (!selectedQuiz) {
    return (
      <div className="w-full bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border-2 border-indigo-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">🧠 Test Your Knowledge</h3>
        <p className="text-gray-600 mb-8">
          Take our interactive quizzes to test what you've learned. No pressure - these are just for fun!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <button
              key={quiz.id}
              onClick={() => startQuiz(quiz)}
              className="text-left p-6 rounded-xl bg-white border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-gray-900">{quiz.title}</h4>
                <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  {quiz.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{quiz.questions.length} questions</p>
              <div className="text-indigo-600 font-bold">Start Quiz →</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Quiz In Progress View
  if (!completed) {
    const question = selectedQuiz.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedQuiz.questions.length) * 100;

    return (
      <div className="w-full bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border-2 border-indigo-200">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{selectedQuiz.title}</h3>
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              <RotateCcw className="w-4 h-4" />
              Exit
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-indigo-500 to-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Question {currentQuestion + 1} of {selectedQuiz.questions.length}
          </p>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{question.question}</h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`w-full p-4 rounded-xl text-left font-semibold transition-all ${
                  selectedAnswer === index
                    ? index === question.correct
                      ? "bg-green-100 border-2 border-green-500 text-green-900"
                      : "bg-red-100 border-2 border-red-500 text-red-900"
                    : "bg-white border-2 border-gray-300 text-gray-900 hover:border-indigo-500"
                } ${answered ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {selectedAnswer === index && (
                    <div>
                      {index === question.correct ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Explanation */}
        {answered && (
          <div className={`p-4 rounded-xl mb-8 ${selectedAnswer === question.correct ? "bg-green-100 border-l-4 border-green-500" : "bg-blue-100 border-l-4 border-blue-500"}`}>
            <p className={`font-semibold mb-2 ${selectedAnswer === question.correct ? "text-green-900" : "text-blue-900"}`}>
              {selectedAnswer === question.correct ? "✓ Correct!" : "💡 Here's the right answer:"}
            </p>
            <p className={selectedAnswer === question.correct ? "text-green-800" : "text-blue-800"}>
              {question.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {answered && (
          <button
            onClick={nextQuestion}
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
          >
            {currentQuestion < selectedQuiz.questions.length - 1 ? "Next Question" : "See Results"}
          </button>
        )}
      </div>
    );
  }

  // Quiz Completed View
  const percentage = (score / selectedQuiz.questions.length) * 100;
  let message = "";
  let emoji = "";

  if (percentage === 100) {
    message = "Perfect Score! You're an Electronics Expert!";
    emoji = "🏆";
  } else if (percentage >= 80) {
    message = "Excellent! You really know your stuff!";
    emoji = "⭐";
  } else if (percentage >= 60) {
    message = "Good Job! Keep learning and you'll master this!";
    emoji = "👍";
  } else {
    message = "Great effort! Review the material and try again!";
    emoji = "📚";
  }

  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border-2 border-indigo-200">
      <div className="text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{message}</h2>
        <div className="text-5xl font-bold text-indigo-600 mb-2">
          {score}/{selectedQuiz.questions.length}
        </div>
        <p className="text-xl text-gray-600 mb-8">{percentage.toFixed(0)}% Correct</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => startQuiz(selectedQuiz)}
            className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
          >
            Try Again
          </button>
          <button
            onClick={resetQuiz}
            className="bg-gray-300 text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-gray-400 transition-all"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    </div>
  );
}
