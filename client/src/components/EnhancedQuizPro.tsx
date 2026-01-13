import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, Lightbulb, Award } from 'lucide-react';
import {
  checkAnswerWithTolerance,
  triggerConfetti,
  focusInputOnLoad,
  getDidYouKnowFact,
  getDatasheetLink,
} from '@/lib/advancedQuizUtils';

interface QuizQuestion {
  id: string;
  question: string;
  correctAnswer: string;
  tolerance?: number;
  hints?: string[];
  explanation?: string;
  componentType?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

interface EnhancedQuizProProps {
  questions: QuizQuestion[];
  onComplete?: (score: number, totalQuestions: number) => void;
  title?: string;
}

export const EnhancedQuizPro: React.FC<EnhancedQuizProProps> = ({
  questions,
  onComplete,
  title = 'Interactive Quiz',
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showDidYouKnow, setShowDidYouKnow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = userAnswers[currentQuestion.id] !== undefined;
  const isCorrect =
    isAnswered &&
    checkAnswerWithTolerance(
      userAnswers[currentQuestion.id],
      currentQuestion.correctAnswer,
      currentQuestion.tolerance || 0
    );

  // Auto-focus input on question change
  useEffect(() => {
    focusInputOnLoad(currentQuestion.id, 100);
  }, [currentQuestionIndex, currentQuestion.id]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        handleHint();
      }
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        handleSubmit();
      }
      if (e.key === 'Enter' && submitted) {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [submitted, showHint, hintIndex]);

  const handleAnswerChange = (value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleSubmit = () => {
    if (!isAnswered) return;

    setSubmitted(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      triggerConfetti();
      setShowDidYouKnow(true);
    }
  };

  const handleHint = () => {
    if (!currentQuestion.hints || currentQuestion.hints.length === 0) return;

    if (!showHint) {
      setShowHint(true);
      setHintIndex(0);
    } else if (hintIndex < currentQuestion.hints.length - 1) {
      setHintIndex((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSubmitted(false);
      setShowHint(false);
      setHintIndex(0);
      setShowDidYouKnow(false);
    } else {
      // Quiz complete
      onComplete?.(score, questions.length);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSubmitted(false);
    setShowHint(false);
    setHintIndex(0);
    setScore(0);
    setShowDidYouKnow(false);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const datasheet = currentQuestion.componentType
    ? getDatasheetLink(currentQuestion.componentType)
    : null;

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="font-semibold">Score: {score}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="flex items-start gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">
            {currentQuestion.question}
          </h3>
          {currentQuestion.difficulty && (
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${
                currentQuestion.difficulty === 'easy'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : currentQuestion.difficulty === 'medium'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}
            >
              {currentQuestion.difficulty.toUpperCase()}
            </span>
          )}
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          id={currentQuestion.id}
          type="text"
          value={userAnswers[currentQuestion.id] || ''}
          onChange={(e) => handleAnswerChange(e.target.value)}
          disabled={submitted}
          placeholder="Enter your answer (e.g., 1k, 10uf, 5V)"
          className={`w-full px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all ${
            submitted
              ? isCorrect
                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                : 'border-red-500 bg-red-50 dark:bg-red-900/20'
              : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
          }`}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !submitted) {
              handleSubmit();
            }
          }}
        />

        {/* Feedback */}
        {submitted && (
          <div className="mt-4 flex items-start gap-3">
            {isCorrect ? (
              <>
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-300">
                    Correct! 🎉
                  </p>
                  {currentQuestion.explanation && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-700 dark:text-red-300">
                    Not quite right
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    The correct answer is: <strong>{currentQuestion.correctAnswer}</strong>
                  </p>
                  {currentQuestion.explanation && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Hints */}
      {!submitted && currentQuestion.hints && currentQuestion.hints.length > 0 && (
        <div className="mb-6">
          <button
            onClick={handleHint}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors"
          >
            <Lightbulb className="w-5 h-5" />
            {showHint ? `Hint ${hintIndex + 1}/${currentQuestion.hints.length}` : 'Show Hint'}
          </button>

          {showHint && (
            <div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                💡 {currentQuestion.hints[hintIndex]}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Did You Know */}
      {submitted && isCorrect && showDidYouKnow && currentQuestion.componentType && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {getDidYouKnowFact(currentQuestion.componentType)}
          </p>
          {datasheet && (
            <a
              href={datasheet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              📄 View {datasheet.title}
            </a>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3 justify-between">
        <div className="flex gap-3">
          {!submitted ? (
            <>
              <button
                onClick={handleSubmit}
                disabled={!isAnswered}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
              >
                Submit (Alt+S)
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
              >
                Reset
              </button>
            </>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
            >
              {currentQuestionIndex === questions.length - 1
                ? 'Finish Quiz'
                : 'Next Question (Enter)'}
            </button>
          )}
        </div>

        {/* Keyboard Hints */}
        <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
          <p>Alt+H: Hint</p>
          <p>Alt+S: Submit</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedQuizPro;
