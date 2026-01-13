/**
 * Advanced Quiz Utilities
 * Unit tolerance, obfuscation, and educational hooks
 */

// Unit conversion mapping (electronics common units)
const UNIT_CONVERSIONS: Record<string, number> = {
  'k': 1000,
  'm': 0.001,
  'u': 0.000001,
  'n': 0.000000001,
  'p': 0.000000000001,
  'mh': 0.001,
  'uh': 0.000001,
  'nh': 0.000000001,
  'uf': 0.000001,
  'nf': 0.000000001,
  'pf': 0.000000000001,
  'mv': 0.001,
  'uv': 0.000001,
};

// Parse value with unit (e.g., "1k" -> 1000, "10uf" -> 0.00001)
export const parseValueWithUnit = (input: string): number | null => {
  const cleaned = input.toLowerCase().trim().replace(/\s+/g, '');
  
  // Try exact numeric match first
  const numMatch = parseFloat(cleaned);
  if (!isNaN(numMatch) && cleaned.match(/^\d+\.?\d*$/)) {
    return numMatch;
  }

  // Try with unit suffix
  for (const [unit, multiplier] of Object.entries(UNIT_CONVERSIONS)) {
    if (cleaned.endsWith(unit)) {
      const valueStr = cleaned.slice(0, -unit.length);
      const value = parseFloat(valueStr);
      if (!isNaN(value)) {
        return value * multiplier;
      }
    }
  }

  // Try with ohm symbol (Ω)
  if (cleaned.includes('ω') || cleaned.includes('ohm')) {
    const valueStr = cleaned.replace(/ω|ohm/gi, '').trim();
    const value = parseFloat(valueStr);
    if (!isNaN(value)) {
      return value;
    }
  }

  return null;
};

// Check answer with unit tolerance
export const checkAnswerWithTolerance = (
  userInput: string,
  correctValue: number | string,
  tolerance: number = 5 // percentage
): boolean => {
  const userValue = parseValueWithUnit(userInput);
  if (userValue === null) return false;

  const correctNum = typeof correctValue === 'string'
    ? parseValueWithUnit(correctValue)
    : correctValue;

  if (correctNum === null) return false;

  // Exact match
  if (userValue === correctNum) return true;

  // Tolerance check
  const diff = Math.abs(userValue - correctNum);
  const percentDiff = (diff / Math.abs(correctNum)) * 100;
  
  return percentDiff <= tolerance;
};

// Obfuscate answers using base64 (basic security)
export const obfuscateAnswer = (answer: string): string => {
  return btoa(answer.toLowerCase().trim());
};

export const deobfuscateAnswer = (obfuscated: string): string => {
  try {
    return atob(obfuscated);
  } catch {
    return '';
  }
};

// Check obfuscated answer
export const checkObfuscatedAnswer = (
  userInput: string,
  obfuscatedAnswer: string,
  tolerance: number = 0
): boolean => {
  const deobfuscated = deobfuscateAnswer(obfuscatedAnswer);
  
  if (tolerance > 0) {
    return checkAnswerWithTolerance(userInput, deobfuscated, tolerance);
  }

  const sanitized = userInput.toLowerCase().trim().replace(/\s+/g, ' ');
  return sanitized === deobfuscated;
};

// Educational hooks - Did you know facts
export const getDidYouKnowFact = (componentType: string): string => {
  const facts: Record<string, string> = {
    resistor: '🔌 The resistor was invented in 1841 and is one of the most fundamental components in electronics. Fun fact: The color code system was created in 1920 to help identify resistor values quickly!',
    capacitor: '⚡ Capacitors store electrical energy in an electric field. The first capacitor, called a Leyden jar, was invented in 1745 and could store enough charge to give you a shock!',
    inductor: '🌀 Inductors store energy in a magnetic field. They\'re used in everything from power supplies to radio tuners. The inductor was discovered by Joseph Henry in 1832.',
    diode: '💡 The diode was one of the first semiconductor devices, invented in 1904. It only allows current to flow in one direction—perfect for converting AC to DC!',
    transistor: '🎯 The transistor, invented in 1947, revolutionized electronics. It\'s the building block of all modern computers. A modern CPU contains billions of transistors!',
    ic_chip: '🖥️ The first integrated circuit was created in 1958. Today, a single chip can contain over 50 billion transistors. Moore\'s Law predicted this exponential growth!',
    led: '💡 LEDs (Light Emitting Diodes) were invented in 1962. They\'re incredibly efficient—an LED uses about 75% less energy than an incandescent bulb!',
    battery: '🔋 The first battery was invented by Alessandro Volta in 1800. He stacked copper and zinc discs with cardboard soaked in salt water—the Voltaic Pile!',
    'timer_555': '⏱️ The 555 timer IC, designed in 1971, is still one of the most popular chips ever made. Over 1 billion are produced every year!',
    arduino: '🤖 Arduino was created in 2005 to make microcontroller programming accessible. It\'s now used in millions of projects worldwide!',
  };

  return facts[componentType] || '📚 Keep learning! Each component has an amazing history.';
};

// Datasheet links
export const getDatasheetLink = (componentType: string): { title: string; url: string } | null => {
  const datasheets: Record<string, { title: string; url: string }> = {
    'timer_555': {
      title: 'NE555 Timer Datasheet',
      url: 'https://www.ti.com/lit/ds/symlink/ne555.pdf',
    },
    'arduino_uno': {
      title: 'Arduino UNO Datasheet',
      url: 'https://www.arduino.cc/en/uploads/Main/Arduino_Uno_Rev3-02-front.pdf',
    },
    'esp32': {
      title: 'ESP32 Datasheet',
      url: 'https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf',
    },
    'atmega328p': {
      title: 'ATmega328P Datasheet',
      url: 'https://ww1.microchip.com/downloads/en/DeviceDoc/ATmega48A-PA-88A-PA-168A-PA-328-P-DS-DS40002061B.pdf',
    },
  };

  return datasheets[componentType] || null;
};

// Smart focus management
export const focusInputOnLoad = (inputId: string, delay: number = 100): void => {
  setTimeout(() => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) {
      input.focus();
      input.select();
    }
  }, delay);
};

// Keyboard shortcuts
export const registerKeyboardShortcuts = (callbacks: Record<string, () => void>): void => {
  document.addEventListener('keydown', (e) => {
    // Alt+H for hint
    if (e.altKey && e.key === 'h') {
      e.preventDefault();
      callbacks['hint']?.();
    }
    // Alt+S for submit
    if (e.altKey && e.key === 's') {
      e.preventDefault();
      callbacks['submit']?.();
    }
    // Alt+R for reset
    if (e.altKey && e.key === 'r') {
      e.preventDefault();
      callbacks['reset']?.();
    }
  });
};

// Confetti animation
export const triggerConfetti = (): void => {
  // Simple CSS-based confetti (no external library needed)
  const confettiPieces = 50; // eslint-disable-line no-magic-numbers
  const container = document.body;

  for (let i = 0; i < confettiPieces; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa502', '#ff6348'][
      Math.floor(Math.random() * 5)
    ];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';

    container.appendChild(confetti);

    const duration = 2 + Math.random() * 1;
    const xDistance = (Math.random() - 0.5) * 400;
    const yDistance = window.innerHeight + 20;

    confetti.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${xDistance}px, ${yDistance}px) rotate(720deg)`, opacity: 0 },
      ],
      {
        duration: duration * 1000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    );

    setTimeout(() => confetti.remove(), duration * 1000);
  }
};

// Session tracking
export const trackLevelCompletion = (userId: string, levelId: string, timeSpent: number): void => {
  const completions = JSON.parse(localStorage.getItem(`completions_${userId}`) || '{}');
  completions[levelId] = {
    completedAt: new Date().toISOString(),
    timeSpent,
  };
  localStorage.setItem(`completions_${userId}`, JSON.stringify(completions));
};

export const getLevelStats = (userId: string, levelId: string): any => {
  const completions = JSON.parse(localStorage.getItem(`completions_${userId}`) || '{}');
  return completions[levelId] || null;
};
