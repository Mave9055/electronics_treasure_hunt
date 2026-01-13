import React, { useState, useEffect } from 'react';
import { X, Lightbulb } from 'lucide-react';
import { getDidYouKnowFact, getDatasheetLink } from '@/lib/advancedQuizUtils';

interface DidYouKnowPopupProps {
  componentType: string;
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseDuration?: number;
}

export const DidYouKnowPopup: React.FC<DidYouKnowPopupProps> = ({
  componentType,
  onClose,
  autoClose = true,
  autoCloseDuration = 8000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const fact = getDidYouKnowFact(componentType);
  const datasheet = getDatasheetLink(componentType);

  useEffect(() => {
    if (!autoClose) return;

    const timer = setTimeout(() => {
      handleClose();
    }, autoCloseDuration);

    return () => clearTimeout(timer);
  }, [autoClose, autoCloseDuration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="pointer-events-auto">
        <div
          className={`bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-2 border-blue-300 dark:border-blue-700 rounded-xl shadow-2xl p-6 max-w-md transform transition-all duration-300 ${
            isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-yellow-500 animate-pulse" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Did You Know?
            </h3>
            <button
              onClick={handleClose}
              className="ml-auto flex-shrink-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {fact}
          </p>

          {/* Datasheet Link */}
          {datasheet && (
            <div className="mb-4">
              <a
                href={datasheet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <span>📄</span>
                <span>View {datasheet.title}</span>
              </a>
            </div>
          )}

          {/* Close Button */}
          <div className="flex gap-2">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Got it!
            </button>
            {autoClose && (
              <button
                onClick={() => {
                  setAutoClose(false);
                }}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Keep Open
              </button>
            )}
          </div>

          {/* Auto-close indicator */}
          {autoClose && (
            <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
              Closes automatically in {Math.ceil(autoCloseDuration / 1000)}s
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to set auto-close state (would need to be managed by parent)
const setAutoClose = (value: boolean) => {
  // This would be handled by parent component state
};

export default DidYouKnowPopup;
