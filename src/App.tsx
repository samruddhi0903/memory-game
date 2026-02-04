import React from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Tile from './components/Tile';
import Header from './components/Header';
import WinModal from './components/WinModal';
import { useGame } from './hooks/useGame';
import { useTheme } from './hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  const { gameStatus, cards, stats, isProcessing, startGame, handleCardInteraction } = useGame();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center bg-yellow-50 dark:bg-gray-900 transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white">

      {/* Background*/}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-300/30 dark:bg-teal-900/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-300/30 dark:bg-purple-900/20 blur-3xl rounded-full"></div>
        <div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-pink-300/20 dark:bg-pink-900/10 blur-2xl rounded-full"></div>
      </div>

      <main className="w-full max-w-4xl px-4 py-8 relative z-10 flex flex-col min-h-screen">

        {/* Header*/}
        {gameStatus !== 'welcome' && (
          <Header
            stats={stats}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            onRestart={startGame}
          />
        )}

        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {gameStatus === 'welcome' && (
            <>
              <div className="absolute top-4 right-4 z-50">
                <button
                  onClick={toggleDarkMode}
                  className="p-3 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
                >
                  {darkMode ? (
                    <FontAwesomeIcon icon={faSun} className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
              <WelcomeScreen onStart={startGame} />
            </>
          )}

          {gameStatus === 'playing' && (
            <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] mx-auto animate-fade-in">
              {cards.map((card) => (
                <Tile
                  key={card.id}
                  card={card}
                  onClick={handleCardInteraction}
                  disabled={isProcessing}
                />
              ))}
            </div>
          )}

          {gameStatus === 'won' && (
            <div className="w-full h-full relative">
              <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] mx-auto opacity-50 pointer-events-none">
                {cards.map((card) => (
                  <Tile
                    key={card.id}
                    card={card}
                    onClick={() => { }}
                    disabled={true}
                  />
                ))}
              </div>
              <WinModal stats={stats} onRestart={startGame} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;