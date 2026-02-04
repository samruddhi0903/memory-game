import { useState, useEffect, useCallback } from 'react';
import type { GameStatus, Card, GameStats } from '../types';
import { ICONS } from '../constants';
import { shuffleCards } from '../utils/gameLogic';

export const useGame = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>('welcome');
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [stats, setStats] = useState<GameStats>({
    moves: 0,
    time: 0,
    bestTime: null,
  });

  // Timer useEffect
  useEffect(() => {
    let interval: number;
    if (gameStatus === 'playing') {
      interval = window.setInterval(() => {
        setStats(prev => ({ ...prev, time: prev.time + 1 }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStatus]);

  // Win Condition useEffect
  useEffect(() => {
    if (gameStatus === 'playing' && cards.length > 0) {
      const allMatched = cards.every(c => c.isMatched);
      if (allMatched) {
        setGameStatus('won');
        setStats(s => {
          const currentBest = s.bestTime;
          const newBest = currentBest === null || s.time < currentBest ? s.time : currentBest;
          return { ...s, bestTime: newBest };
        });
      }
    }
  }, [cards, gameStatus]);

  const startGame = useCallback(() => {
    setCards(shuffleCards(ICONS));
    setGameStatus('playing');
    setFlippedIndices([]);
    setStats(prev => ({ ...prev, moves: 0, time: 0 }));
    setIsProcessing(false);
  }, []);

  const handleCardInteraction = useCallback((clickedCard: Card) => {
    if (isProcessing || clickedCard.isFlipped || clickedCard.isMatched) return;

    // Ui for fliping the card
    setCards(prev => {
        const newCards = [...prev];
        newCards[clickedCard.id] = { ...newCards[clickedCard.id], isFlipped: true };
        return newCards;
    });

    setFlippedIndices(prev => {
      const newFlipped = [...prev, clickedCard.id];
      
      if (newFlipped.length === 2) {
        setIsProcessing(true);
        setStats(s => ({ ...s, moves: s.moves + 1 }));

        const [firstId, secondId] = newFlipped;
        
        // matching logic using state update
        setCards(currentCards => {
            const firstCard = currentCards[firstId];
            const secondCard = currentCards[secondId];
            
            const isMatch = firstCard.icon === secondCard.icon;
            
            if (isMatch) {
                setTimeout(() => {
                    setCards(c => c.map(card => 
                        (card.id === firstId || card.id === secondId)
                            ? { ...card, isMatched: true, isFlipped: true }
                            : card
                    ));
                    setFlippedIndices([]);
                    setIsProcessing(false);
                }, 500);
            } else {
                 setTimeout(() => {
                    setCards(c => c.map(card => 
                        (card.id === firstId || card.id === secondId)
                            ? { ...card, isFlipped: false }
                            : card
                    ));
                    setFlippedIndices([]);
                    setIsProcessing(false);
                }, 1000);
            }
            
            return currentCards;
        });
      }
      
      return newFlipped;
    });
  }, [isProcessing]);

  return {
    gameStatus,
    cards,
    stats,
    isProcessing,
    startGame,
    handleCardInteraction
  };
};