/**
 * Quiz Utility Functions
 * Handles input sanitization, answer checking, and state management
 */

// Sanitize and normalize user input
export const sanitizeAnswer = (input: string): string => {
  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s.-]/g, '');
};

// Check if answer is correct with tolerance for math problems
export const checkAnswer = (
  userAnswer: string,
  correctAnswer: string | string[],
  tolerance: number = 0
): boolean => {
  const sanitized = sanitizeAnswer(userAnswer);
  const correctAnswers = Array.isArray(correctAnswer)
    ? correctAnswer.map(sanitizeAnswer)
    : [sanitizeAnswer(correctAnswer)];

  // Exact match
  if (correctAnswers.includes(sanitized)) {
    return true;
  }

  // Numeric tolerance check
  if (tolerance > 0) {
    const userNum = parseFloat(sanitized);
    if (!isNaN(userNum)) {
      for (const correct of correctAnswers) {
        const correctNum = parseFloat(correct);
        if (!isNaN(correctNum)) {
          const diff = Math.abs(userNum - correctNum);
          const percentDiff = (diff / correctNum) * 100;
          if (percentDiff <= tolerance) {
            return true;
          }
        }
      }
    }
  }

  return false;
};

// Progress tracking with localStorage
export const getProgress = (userId: string): number => {
  const progress = localStorage.getItem(`progress_${userId}`);
  return progress ? parseInt(progress, 10) : 0;
};

export const setProgress = (userId: string, level: number): void => {
  localStorage.setItem(`progress_${userId}`, level.toString());
};

export const getCompletedQuizzes = (userId: string): string[] => {
  const completed = localStorage.getItem(`completed_${userId}`);
  return completed ? JSON.parse(completed) : [];
};

export const markQuizComplete = (userId: string, quizId: string): void => {
  const completed = getCompletedQuizzes(userId);
  if (!completed.includes(quizId)) {
    completed.push(quizId);
    localStorage.setItem(`completed_${userId}`, JSON.stringify(completed));
  }
};

// Theme preference
export const getThemePreference = (): 'light' | 'dark' => {
  const theme = localStorage.getItem('theme_preference');
  if (theme === 'dark' || theme === 'light') {
    return theme;
  }
  return 'light';
};

export const setThemePreference = (theme: 'light' | 'dark'): void => {
  localStorage.setItem('theme_preference', theme);
};

// Hint system
export const getHintCount = (userId: string, quizId: string): number => {
  const hints = localStorage.getItem(`hints_${userId}_${quizId}`);
  return hints ? parseInt(hints, 10) : 0;
};

export const incrementHintCount = (userId: string, quizId: string): number => {
  const current = getHintCount(userId, quizId);
  const newCount = current + 1;
  localStorage.setItem(`hints_${userId}_${quizId}`, newCount.toString());
  return newCount;
};

// Attempt tracking
export const getAttemptCount = (userId: string, quizId: string): number => {
  const attempts = localStorage.getItem(`attempts_${userId}_${quizId}`);
  return attempts ? parseInt(attempts, 10) : 0;
};

export const incrementAttemptCount = (userId: string, quizId: string): number => {
  const current = getAttemptCount(userId, quizId);
  const newCount = current + 1;
  localStorage.setItem(`attempts_${userId}_${quizId}`, newCount.toString());
  return newCount;
};

// Certificate generation
export const generateCertificateCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 12; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

export const saveCertificate = (
  userId: string,
  category: string,
  score: number,
  date: Date
): void => {
  const certificates = localStorage.getItem(`certificates_${userId}`);
  const certs = certificates ? JSON.parse(certificates) : [];
  certs.push({
    category,
    score,
    date: date.toISOString(),
    code: generateCertificateCode(),
  });
  localStorage.setItem(`certificates_${userId}`, JSON.stringify(certs));
};

export const getCertificates = (userId: string): any[] => {
  const certificates = localStorage.getItem(`certificates_${userId}`);
  return certificates ? JSON.parse(certificates) : [];
};
