export type IconType = 'blob' | 'horned-square' | 'orange-walker' | 'tall-one-eye' | 'purple-bag' | 'yellow-shield' | 'pink-jelly' | 'masked-square';

export interface Card {
  id: number;
  icon: IconType;
  isFlipped: boolean;
  isMatched: boolean;
}

export type GameStatus = 'welcome' | 'playing' | 'won';

export interface GameStats {
  moves: number;
  time: number; // in seconds
  bestTime: number | null;
}