import React from 'react';
import type { Card } from '../types';
import { getIcon, getCardColor } from '../assets/icons';

interface TileProps {
  card: Card;
  onClick: (card: Card) => void;
  disabled: boolean;
}

const Tile: React.FC<TileProps> = ({ card, onClick, disabled }) => {
  const handleClick = () => {
    if (!disabled && !card.isFlipped && !card.isMatched) {
      onClick(card);
    }
  };

  return (
    <div
      className={`relative w-full aspect-square cursor-pointer perspective-1000 group ${disabled ? 'cursor-default' : 'hover:scale-105'} transition-transform duration-300`}
      onClick={handleClick}
    >
      <div
        className={`w-full h-full relative transform-style-3d transition-all duration-500 rounded-xl shadow-md ${card.isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Face*/}
        <div className="absolute w-full h-full backface-hidden bg-indigo-600 dark:bg-indigo-800 rounded-xl flex items-center justify-center border-4 border-white dark:border-gray-700 shadow-sm overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2.5px)', backgroundSize: '12px 12px' }}></div>
          <div className="font-bold text-white/80 text-4xl font-mono">?</div>
        </div>

        {/* Back Face */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-xl flex items-center justify-center border-4 border-white dark:border-gray-600 shadow-xl overflow-hidden ${getCardColor(card.icon)}`}>
          <div className={`transform transition-all duration-500 ${card.isMatched ? 'scale-110 drop-shadow-md' : ''} ${card.isFlipped ? 'animate-pop' : ''}`}>
            {getIcon(card.icon, "w-32 h-32 sm:w-28 sm:h-28 drop-shadow-sm")}
          </div>
          {card.isMatched && (
            <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
              <span className="sr-only">Matched</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tile;