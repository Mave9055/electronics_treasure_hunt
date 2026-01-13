import React, { useState } from 'react';
import { X, Download } from 'lucide-react';
import usePWA from '@/hooks/usePWA';

export const PWABanner: React.FC = () => {
  const { canInstall, installApp, isOnline } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  if (!canInstall || dismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-bold text-sm mb-1">Install App</h3>
            <p className="text-xs opacity-90">
              Install Electronics Treasure Hunt for offline access and faster loading
            </p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="flex-shrink-0 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-2 mt-3">
          <button
            onClick={installApp}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-3 rounded transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            Install
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="flex-1 bg-blue-700 hover:bg-blue-800 font-semibold py-2 px-3 rounded transition-colors text-sm"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWABanner;
