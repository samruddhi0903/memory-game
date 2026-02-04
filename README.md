# Monster Memory Game

A fun and interactive memory matching game built with React. The goal is to find all matching pairs of monsters by flipping cards.

## Features

- **Responsive Game Board**: Adapts to mobile, tablet, and desktop screens
- **Tile Matching**: Flip cards to reveal unique monster icons and find match pairs
- **Theme Support**: Fully functional Dark/Light mode toggle
- **Score Tracking**: Tracks your moves and time taken to complete the game
- **Interactive UI**: Smooth card flip animations and hover effects
- **Victory Celebration**: Celebration modal with stats upon winning

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd memory-game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Game

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to play the game.

## Gameplay Instructions

### Objective
Find all matched pairs of monster cards on the board.

### Controls
- **Mouse/Touch**: Click or tap on a card to flip it over.
- **Theme Toggle**: Click the Sun/Moon icon in the header to switch themes.
- **Restart**: Click the circular arrow icon to reset the game.

### Rules
1. Click a card to reveal the hidden monster.
2. Click a second card to try and find a match.
3. If the cards match, they stay face up.
4. If they don't match, they flip back over after a short delay.
5. The game ends when all pairs are found.

### Scoring
- **Moves**: The number of turns you've taken (flipping two cards counts as one move).
- **Time**: How long it takes you to solve the puzzle.

## Implementation Details

### Architecture
- **React**: Component-based UI with hooks for state management.
- **Tailwind CSS**: Utility-first CSS for styling, dark mode, and responsive design.
- **Vite**: Fast build tool and development server.

### Key Components
- `App.tsx`: Main application container and layout.
- `Tile.tsx`: Individual card component handling flip animations and icon rendering.
- `Header.tsx`: Displays game stats (time, moves) and controls.
- `WinModal.tsx`: Displays victory message and final stats.
- `WelcomeScreen.tsx`: Initial screen to start the game.

### Game Logic (`hooks/useGame.ts`)
- Manages the deck state (shuffling, flipping, matching).
- Handles game status (welcome, playing, won).
- Tracks moves and timer.

### Custom Hooks
- `useTheme.ts`: Manages dark/light mode state and applies theme classes.
- `useGame.ts`: Encapsulates all game mechanics and state.

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- FontAwesome Icons
- HTML5 & CSS3

## Hosted Link
- 
