import React from 'react';
import type { GameStats } from '../types';
import { formatTime } from '../utils/formatters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  stats: GameStats;
  darkMode: boolean;
  toggleDarkMode: () => void;
  onRestart: () => void;
}

const Header: React.FC<HeaderProps> = ({ stats, darkMode, toggleDarkMode, onRestart }) => {
  return (
    <header className="w-full max-w-2xl mx-auto mb-8 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-4 z-40">
      <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white font-mono">{formatTime(stats.time)}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Moves</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white font-mono">{stats.moves}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onRestart}
          className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
          aria-label="Restart Game"
          title="Restart"
        >
          <FontAwesomeIcon icon={faRotateRight} className="w-5 h-5" />
        </button>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} className="w-5 h-5" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;