import React from 'react';
import type { GameStats } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

interface WinModalProps {
  stats: GameStats;
  onRestart: () => void;
}

const WinModal: React.FC<WinModalProps> = ({ stats, onRestart }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-all scale-100 border-4 border-white dark:border-gray-700 text-center relative overflow-hidden">
        <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full opacity-50"></div>
        <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
        <div className="relative z-10">
          <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slight border-4 border-white shadow-sm">
            <FontAwesomeIcon icon={faTrophy} className="text-4xl text-yellow-500 dark:text-yellow-400" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">You Won!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 font-medium">All monsters have been found!</p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800">
              <div className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-1">Time</div>
              <div className="text-2xl font-black text-indigo-700 dark:text-indigo-300">{stats.time}s</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-2xl border border-purple-100 dark:border-purple-800">
              <div className="text-xs font-bold text-purple-500 dark:text-purple-400 uppercase tracking-wider mb-1">Moves</div>
              <div className="text-2xl font-black text-purple-700 dark:text-purple-300">{stats.moves}</div>
            </div>
          </div>
          <button
            onClick={onRestart}
            className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] border-b-4 border-green-700 text-lg"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;