import type { Card, IconType } from '../types';

export const shuffleCards = (icons: IconType[]): Card[] => {
  // Duplicate icons to create pairs
  const pairs = [...icons, ...icons];
  
  // Shuffle 
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }

  // Create card objects
  return pairs.map((icon, index) => ({
    id: index,
    icon,
    isFlipped: false,
    isMatched: false,
  }));
};