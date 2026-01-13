import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, HelpCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  sanitizeAnswer,
  checkAnswer,
  incrementAttemptCount,
  incrementHintCount,
  getAttemptCount,
  getHintCount,
} from '@/lib/quizUtils';

interface QuizQuestion {
  id: string;
  question: string;
  correctAnswer: string | string[];
  hints: string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tolerance?: number;
  category: string;
}

interface EnhancedQuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
  userId?: string;
}

export default function EnhancedQuiz({ questions, onComplete, userId = 'default' }: EnhancedQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [shake, setShake] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSubmitAnswer = () => {
    const attempts = incrementAttemptCount(userId, currentQuestion.id);
    setAttemptCount(attempts);

    const isCorrect = checkAnswer(
      userAnswer,
      currentQuestion.correctAnswer,
      currentQuestion.tolerance || 0
    );

    if (isCorrect) {
      setFeedback('correct');
      setScore(score + 1);
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setUserAnswer('');
          setFeedback(null);
          setShowHint(false);
          setHintLevel(0);
          setAttemptCount(0);
        } else {
          handleQuizComplete();
        }
      }, 2000);
    } else {
      setFeedback('incorrect');
      setShake(true);
      setTimeout(() => setShake(false), 500);

      // Show hint after 3 attempts
      if (attempts === 3 && hintLevel === 0) {
        setShowHint(true);
        setHintLevel(1);
      }
    }
  };

  const handleShowHint = () => {
    const hints = incrementHintCount(userId, currentQuestion.id);
    if (hints < currentQuestion.hints.length) {
      setHintLevel(hints);
      setShowHint(true);
    }
  };

  const handleQuizComplete = () => {
    const finalScore = ((score + 1) / questions.length) * 100;
    if (onComplete) {
      onComplete(finalScore);
    }
  };

  const handleShare = () => {
    const text = `I just completed the Electronics Treasure Hunt Quiz! 🎓 Score: ${score + 1}/${questions.length} (${((score + 1) / questions.length * 100).toFixed(0)}%)`;
    const url = window.location.href;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };

  if (currentIndex >= questions.length) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete! 🎉</h2>
          <p className="text-xl text-gray-700 mb-6">
            Final Score: <span className="font-bold text-green-600">{score}/{questions.length}</span> ({((score / questions.length) * 100).toFixed(0)}%)
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleShare} className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share Achievement
            </Button>
            <Button onClick={() => window.location.reload()} variant="outline">
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-700">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-semibold text-gray-700">
            Score: {score}/{currentIndex}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className={`bg-white rounded-lg border-2 border-gray-200 p-6 transition-all ${shake ? 'animate-shake' : ''}`}>
        <div className="flex items-start gap-3 mb-4">
          <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            {currentQuestion.difficulty.toUpperCase()}
          </div>
          <span className="text-sm text-gray-500">{currentQuestion.category}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h3>

        {/* Input Field */}
        <div className="space-y-3">
          <Input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmitAnswer()}
            placeholder="Enter your answer..."
            className="text-lg p-4"
            disabled={feedback !== null}
          />

          {/* Feedback */}
          {feedback && (
            <div className={`p-4 rounded-lg flex items-start gap-3 ${
              feedback === 'correct'
                ? 'bg-green-50 border-2 border-green-200'
                : 'bg-red-50 border-2 border-red-200'
            }`}>
              {feedback === 'correct' ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">Correct! ✓</p>
                    <p className="text-sm text-green-800 mt-1">{currentQuestion.explanation}</p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900">Try again!</p>
                    <p className="text-sm text-red-800 mt-1">Attempt {attemptCount} of 5</p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Hint System */}
          {showHint && hintLevel > 0 && hintLevel <= currentQuestion.hints.length && (
            <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-900">Hint {hintLevel}</p>
                  <p className="text-sm text-yellow-800 mt-1">{currentQuestion.hints[hintLevel - 1]}</p>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleSubmitAnswer}
              disabled={!userAnswer.trim() || feedback !== null}
              className="flex-1"
            >
              Submit Answer
            </Button>
            {attemptCount < 3 && feedback === 'incorrect' && (
              <Button onClick={handleShowHint} variant="outline">
                <HelpCircle className="w-4 h-4 mr-2" />
                Get Hint
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Difficulty Info */}
      <div className="text-xs text-gray-500 text-center">
        {currentQuestion.difficulty === 'easy' && '✨ Easy - Warm up question'}
        {currentQuestion.difficulty === 'medium' && '⚡ Medium - Getting challenging'}
        {currentQuestion.difficulty === 'hard' && '🔥 Hard - Expert level'}
      </div>
    </div>
  );
}
