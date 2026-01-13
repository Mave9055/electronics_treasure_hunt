import React, { useState } from 'react';
import { Link } from 'wouter';
import { CheckCircle, XCircle, ArrowRight, Trophy } from 'lucide-react';
import { awardBadge, getBadge } from '@/lib/badgeUtils';

interface QuizQuestion {
  id: number;
  image: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const COMPONENT_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    image: '/electronics_treasure_hunt/images/arduino-nano.jpg',
    question: 'What is this component?',
    options: ['Arduino Nano', 'USB Cable', 'Resistor', 'LED'],
    correct: 0,
    explanation:
      'This is an Arduino Nano - a tiny programmable microcontroller. It\'s the "brain" that runs your code and controls electronics!',
  },
  {
    id: 2,
    image: '/electronics_treasure_hunt/images/ch340-usb-serial.jpg',
    question: 'What does this chip do?',
    options: ['Powers circuits', 'Converts USB to Serial', 'Stores data', 'Amplifies signals'],
    correct: 1,
    explanation:
      'This is a USB-to-Serial converter (CH340). It lets your computer talk to microcontrollers through serial communication. Essential for debugging!',
  },
  {
    id: 3,
    image: '/electronics_treasure_hunt/images/tp4056-18650.jpg',
    question: 'What is this module used for?',
    options: ['Charging batteries', 'Measuring voltage', 'Controlling motors', 'Storing files'],
    correct: 0,
    explanation:
      'This is a TP4056 battery charger module. It safely charges lithium-ion batteries (like 18650s). Perfect for DIY projects that need portable power!',
  },
];

export default function QuickStart() {
  const [stage, setStage] = useState<'intro' | 'quiz' | 'success'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [badgeAwarded, setBadgeAwarded] = useState(false);

  const handleStartQuiz = () => {
    setStage('quiz');
  };

  const handleSelectAnswer = (optionIndex: number) => {
    if (!answered) {
      setSelectedAnswer(optionIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setAnswered(true);

    if (selectedAnswer === COMPONENT_QUIZ[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < COMPONENT_QUIZ.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      // Quiz complete - award badge
      const badgeAwarded = awardBadge(1); // Component Scout badge
      setBadgeAwarded(badgeAwarded);
      setStage('success');
    }
  };

  const currentQ = COMPONENT_QUIZ[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correct;
  const progress = ((currentQuestion + 1) / COMPONENT_QUIZ.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
        <div className="container py-4">
          <Link href="/">
            <button className="text-blue-600 hover:text-blue-700 font-semibold border-0 cursor-pointer bg-transparent mb-2">
              ← Back to Home
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">⚡ 10-Minute Challenge</h1>
          <p className="text-gray-600 mt-1">Identify 3 components and earn your first badge</p>
        </div>
      </header>

      <main className="container py-12">
        {/* INTRO STAGE */}
        {stage === 'intro' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 border-2 border-blue-300 text-center mb-8">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                In the next 10 minutes, you'll identify 3 real electronics components. Get them right and earn your first badge: <strong>"Component Scout"</strong>
              </p>

              <div className="bg-white rounded-2xl p-6 mb-8 border-2 border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">What You'll Learn:</h3>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🔍</span>
                    <span>Recognize real components used in actual projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <span>Understand what each component does</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏆</span>
                    <span>Earn your first achievement badge</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleStartQuiz}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 border-0 cursor-pointer mx-auto text-lg"
              >
                Start Challenge
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* QUIZ STAGE */}
        {stage === 'quiz' && (
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  Question {currentQuestion + 1} of {COMPONENT_QUIZ.length}
                </span>
                <span className="text-sm font-semibold text-blue-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg mb-8">
              {/* Component Image */}
              <div className="mb-8">
                <img
                  src={currentQ.image}
                  alt="Component"
                  className="w-full max-h-64 object-cover rounded-xl border-2 border-gray-300"
                />
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{currentQ.question}</h2>

              {/* Answer Options */}
              <div className="space-y-3 mb-8">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={answered}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left font-semibold border-0 cursor-pointer ${
                      selectedAnswer === index
                        ? answered
                          ? isCorrect && index === currentQ.correct
                            ? 'bg-green-100 border-2 border-green-500'
                            : 'bg-red-100 border-2 border-red-500'
                          : 'bg-blue-100 border-2 border-blue-500'
                        : answered && index === currentQ.correct
                          ? 'bg-green-100 border-2 border-green-500'
                          : 'bg-gray-100 border-2 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {answered && index === currentQ.correct && (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      )}
                      {answered && selectedAnswer === index && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                      {!answered && selectedAnswer === index && (
                        <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex-shrink-0" />
                      )}
                      {!answered && selectedAnswer !== index && (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
                      )}
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {answered && (
                <div
                  className={`rounded-lg p-4 mb-8 ${
                    isCorrect
                      ? 'bg-green-50 border-2 border-green-300'
                      : 'bg-red-50 border-2 border-red-300'
                  }`}
                >
                  <p
                    className={`font-semibold mb-2 ${
                      isCorrect ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {isCorrect ? '✅ Correct!' : '❌ Not quite right'}
                  </p>
                  <p className="text-gray-700">{currentQ.explanation}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                {!answered ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold rounded-lg transition-all border-0 cursor-pointer"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 border-0 cursor-pointer"
                  >
                    {currentQuestion === COMPONENT_QUIZ.length - 1
                      ? 'Finish Challenge'
                      : 'Next Question'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SUCCESS STAGE */}
        {stage === 'success' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-12 border-2 border-green-300 text-center mb-8">
              <div className="text-7xl mb-6 animate-bounce">🎉</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Challenge Complete!</h2>
              <p className="text-xl text-gray-700 mb-8">
                You identified <strong>{score} out of {COMPONENT_QUIZ.length}</strong> components correctly!
              </p>

              {/* Badge Display */}
              {badgeAwarded && (
                <div className="bg-white rounded-2xl p-8 border-2 border-green-300 mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Badge Unlocked!</h3>
                  </div>
                  <div className="text-6xl mb-4">🔍</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Component Scout</h4>
                  <p className="text-gray-700 mb-4">Identify your first 3 components</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-yellow-600">+50</span>
                    <span className="text-gray-600">points</span>
                  </div>
                </div>
              )}

              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200 mb-8">
                <h3 className="font-bold text-gray-900 mb-3">What's Next?</h3>
                <p className="text-gray-700 mb-4">
                  You're ready for Phase 1! Learn how to read secret messages from electronics using UART communication.
                </p>
                <p className="text-sm text-gray-600">
                  Phase 1 takes about 2 hours and teaches you real debugging skills used by professional engineers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/phase1">
                  <button className="flex-1 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 border-0 cursor-pointer">
                    Start Phase 1
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/">
                  <button className="flex-1 px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg transition-all border-0 cursor-pointer bg-transparent">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
