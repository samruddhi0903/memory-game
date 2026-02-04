import React from 'react';
import { getIcon } from '../assets/icons';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="mb-8 relative group cursor-pointer" onClick={onStart}>
        <div className="relative z-10 grid grid-cols-2 gap-3 transform rotate-3 transition-transform group-hover:rotate-0">
             <div className="w-16 h-16 bg-cyan-200 dark:bg-cyan-900 rounded-xl border-2 border-white dark:border-gray-700 shadow-md flex items-center justify-center overflow-hidden">
                {getIcon('blob', 'w-14 h-14')}
             </div>
             <div className="w-16 h-16 bg-pink-200 dark:bg-pink-900 rounded-xl border-2 border-white dark:border-gray-700 shadow-md flex items-center justify-center overflow-hidden">
                {getIcon('pink-jelly', 'w-14 h-14')}
             </div>
             <div className="w-16 h-16 bg-purple-200 dark:bg-purple-900 rounded-xl border-2 border-white dark:border-gray-700 shadow-md flex items-center justify-center overflow-hidden">
                {getIcon('purple-bag', 'w-14 h-14')}
             </div>
             <div className="w-16 h-16 bg-orange-200 dark:bg-orange-900 rounded-xl border-2 border-white dark:border-gray-700 shadow-md flex items-center justify-center overflow-hidden">
                {getIcon('orange-walker', 'w-14 h-14')}
             </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-sm">
        Monsters
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-8 leading-relaxed font-medium">
        Find the matching pairs of cute monsters! Flip the cards and clear the board as fast as you can.
      </p>

      <div className="space-y-4 w-full max-w-xs">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border-2 border-gray-100 dark:border-gray-700 text-left text-sm text-gray-600 dark:text-gray-400">
            <h3 className="font-bold text-gray-900 dark:text-gray-200 mb-2 uppercase text-xs tracking-wider">How to play</h3>
            <ul className="list-disc pl-4 space-y-2 marker:text-indigo-500">
                <li>Click a card to reveal a monster.</li>
                <li>Find the matching twin to collect them.</li>
                <li>Match all 8 pairs to win!</li>
            </ul>
        </div>

        <button
            onClick={onStart}
            className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-200 text-lg flex items-center justify-center gap-3 group border-b-4 border-indigo-800 hover:border-indigo-900"
        >
            Play Now
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;